import { Component, OnInit, ViewChild, HostListener, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { OwlCarousel } from 'ngx-owl-carousel';
import { faArrowLeft, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ModulesService } from '../../../../../services/steps/modules.service';
import { GlobalService } from '../../../../../services/global.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Module, Image, ImaVideo, AnswerModule } from '../../../../../models/steps/learning-modules.model';
import { UserState } from '../../../../../store/states/e-learning/user.state';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-module-detail',
  templateUrl: './module-detail.component.html',
  styleUrls: ['./module-detail.component.scss']
})
export class ModuleDetailComponent implements OnInit {
  @ViewChild('owlElement', {static: false}) owlEl:OwlCarousel;
  @ViewChild('stackElement', {static: false}) stackEl:OwlCarousel;
  @ViewChild('warningOpener', {static: false}) warningBtn:any;

  @Select(UserState.user_id) coorId$: Observable<string>;
  @Select(UserState.user_type) userType$: Observable<string>;
  current_coor_id:string = '';

  moduleInfo: Module;
  module_id = "";
  moduleNum:number;
  nextModuleId = null;

  isTesting = false;
  testingModule:Module;

  forAdminSetFalse:boolean = false;

  //? quizz area ------------------------------------------------
  moduleCoins = 4;
  completedModule = false;
  optionsLetters = ['optionA','optionB','optionC','optionD']
  //? -----------------------------------------------------------

  faArrowLeft = faArrowLeft;
  faTimes = faTimes;

  shown = 0;

  imgvid:ImaVideo[];
  current:Image = {image:'',description:''};  
  img_strip:Image[];

  carouselOps = {items: 1, dots: false, mouseDrag: false, touchDrag: false, animateOut: 'fadeOut', video:true, lazyLoad: true};
  carouselOpsImgs = {items: 4, dots: false, mouseDrag: false, touchDrag: false, video:true, lazyLoad: true};
  stackOps:any;

  // PREGUNTAS DEL QUIZZ
  questions:any;

  selectedQuestions = [];
  incorrectOnes = [];
  showFillAll = 0; //todo: 0: Must answer all questions, 1: all correct, 2: error happened

  isBrowser;
  isPortrait = true;
  isLandscapeCurrent = false;
  isValidating:boolean;
  projectId = '';
  user_type = '';
  user_id = '';

  constructor(private moduleService: ModulesService, private globals: GlobalService, @Inject(DOCUMENT) private document: Document,
              private route: ActivatedRoute, private router: Router) { 
    this.isBrowser = globals.isBrowser;    
    this.moduleInfo = {
      id: "",
      name: "",
      title: "",
      description: "",
      secondaryTitle: "",
      secondaryDescription: "",
      objectives: [],
      slider: [],
      images: [],
      duration: "",
      quizzes: [],
      createdAt: "",
      updatedAt: "",
    };
  }
  
  ngOnInit() {
    this.module_id = this.route.snapshot.params.id;

    if (this.route.snapshot.params && this.route.snapshot.params.idUser) {
      this.projectId = this.route.snapshot.params.idProject;
      this.user_type = this.route.snapshot.params.userType;
      this.user_id = this.route.snapshot.params.idUser;
    }
    else if (this.route.snapshot.children.length>0) {
      if (this.route.snapshot.children[this.route.snapshot.children.length-1].params && 
          this.route.snapshot.children[this.route.snapshot.children.length-1].params.idUser) {
            this.projectId = this.route.snapshot.children[this.route.snapshot.children.length-1].params.idProject;  
            this.user_type = this.route.snapshot.children[this.route.snapshot.children.length-1].params.userType;
            this.user_id = this.route.snapshot.children[this.route.snapshot.children.length-1].params.idUser;
      }
    }

    this.moduleNum = this.moduleService.all_modules.map(function(e) { return e.id; }).indexOf(this.module_id) + 1;
    this.checkApprove(this.module_id);

    this.coorId$.subscribe(id_ => {
      this.current_coor_id = id_;
    })

    this.userType$.subscribe(res => {
      this.forAdminSetFalse = (res=="0" || res=="1") ? false : true;
    });
    
    this.document.getElementById('completed-message').setAttribute('style','display:block; opacity:0');
    setTimeout(()=>{
      this.document.getElementById('completed-message').setAttribute('style','display:none; opacity:1');
    },1000);    
  }

  goToImg(i) {
    this.owlEl.to([i]);
    this.document.querySelectorAll('.images .owl-carousel .owl-stage .owl-item').item(this.shown).setAttribute('style','display:block');
    this.document.querySelectorAll('.images .owl-carousel .owl-stage .owl-item').item(i).setAttribute('style','display:none');
    this.shown = i;    
    // to stop playing video
    this.owlEl.reInit();
  }

  letterSequence(i) {
    return i==0? 'A': i==1? 'B': i==2? 'C':'D'
  }

  getOption(j,q) {
    switch (j) {
      case 0:
        return q.optionA;
      case 1:
        return q.optionB;
      case 2:
        return q.optionC;
      default:
        return q.optionD;
    }
  }

  //? Function called when validate button is pressed
  showModal(el) {
    this.isValidating = true;
    let thereIsNext = this.moduleService.getNextModule(this.module_id);
    this.nextModuleId = thereIsNext ? thereIsNext.id : null;

    let coorAnswers: AnswerModule = {
      coordinator: this.current_coor_id,
      answers: []
    };
    let success = true; // there are not unselected questions
    let wrong = false; // there are not wrong answers
    this.incorrectOnes = this.moduleInfo.quizzes.map(i => {return 'option0'}); // re-initializing incorrect answers array
    let wrongOnes = this.incorrectOnes.slice(); // temporary incorrect array

    for (let i = 0; i < this.selectedQuestions.length; i++) {    
      coorAnswers.answers.push({quizId:this.moduleInfo.quizzes[i].id, option:this.selectedQuestions[i]}); // adding coordinator answer structure
      if (this.selectedQuestions[i]=='option0') {
        success = false; // there is at least an unanswered question
        this.showFillAll = 0;
        this.isValidating = false;
        this.warningBtn.nativeElement.click(); //opening warning modal
        break;
      }
      else {
        if ( this.selectedQuestions[i]!=this.moduleInfo.quizzes[i].correctOption ) {
          wrong = true; // there is at least a wrong answer
          wrongOnes[i] = this.selectedQuestions[i]; // setting wrong answer in the temporary array 
        }
      }      
    }
    
    if(success) { // when all questions are answered
      this.moduleService.answerModule(this.module_id,coorAnswers).subscribe(res=> {
        this.isValidating = false;
        if (!res.approved) {
          if (wrong) { // if some of them are wrong
            this.incorrectOnes = wrongOnes; // setting the incorrect answers
            if (this.moduleCoins>1) { // decreasing AmbleCoins
              this.moduleCoins--;
            }
            this.showFillAll = 1;
            this.moduleService.emitValsUpdate({type:1,usu:coorAnswers.coordinator,usut:2,project:this.projectId}); //! THIS IS TEMPORARY
            this.warningBtn.nativeElement.click(); // opening warning modal
          } 
        } else {
          if (!wrong) {
            this.completedModule = true;
            this.moduleService.emitValsUpdate({type:2,usu:coorAnswers.coordinator,usut:2,project:this.projectId}); //! THIS IS TEMPORARY
            el.click(); // opening success modal
          }
        }        
      },(error)=>{
        this.isValidating = false;
        this.showFillAll = 2;
        this.warningBtn.nativeElement.click();
      });      
    }
  }

  selectAnswer(i,j) {
    if (this.forAdminSetFalse) this.selectedQuestions[i] = j;    
  }    

  @HostListener('window:resize', ['$event'])
  onResize(event) {    
    let w= event.target.innerWidth;
    let h = event.target.innerHeight;
    let lC = (w > h)? true:false;        

    if (this.isLandscapeCurrent != lC) {
      this.initOps();
      this.stackEl.reInit();
    }
  }

  initOps() {
    if (this.isBrowser) {
      if (window.innerWidth > window.innerHeight) {
        this.isPortrait = false;
        this.isLandscapeCurrent = true;
      } else {
        this.isPortrait = true;
        this.isLandscapeCurrent = false;
      }
    } 
    
    this.stackOps = {items: 1, dots: false, loop: (this.img_strip.length < 2)? false:true, nav: true,
      responsive : {
          640 : {
            items : this.isPortrait? 1:4,
            nav: this.isPortrait? true:false,
            loop: this.isPortrait? ( (this.img_strip.length < 2)? false:true ):true
          },
          992 : {
            items : this.isPortrait? 1:6,
            nav: this.isPortrait? true:false,
            loop: this.isPortrait? ( (this.img_strip.length < 2)? false:true ):true
          }
      }
    };
  }

  // estimate converser
  getEstimate(timing:string) {
    let time_type = timing.charAt(0)=='0' && timing.charAt(1)=='0' ? 'min': timing.charAt(2)=='0' && timing.charAt(2)=='0' ? 'hr' : 'hrmin';
    switch (time_type) {
      case 'min':
        return ( timing.charAt(2)=='0'?timing.charAt(3):(timing.charAt(2)+timing.charAt(3)) ) + ' min';
      case 'hr':
        return ( timing.charAt(0)=='0'?timing.charAt(1):(timing.charAt(0)+timing.charAt(1)) ) + ' h';
      default:
        return ( timing.charAt(0)=='0'?timing.charAt(1):(timing.charAt(0)+timing.charAt(1)) ) + ' h ' + ( timing.charAt(2)=='0'?timing.charAt(3):(timing.charAt(2)+timing.charAt(3)) ) + ' min';
    }
  }

  checkApprove(id){
    let currentMod:Module;
    if (!this.isTesting) {
      if (this.forAdminSetFalse) {
        let thereIsMod = this.moduleService.checkApprove(id);
        this.completedModule = thereIsMod ? (thereIsMod.status=="3"? true:false) : false;
      }      
      currentMod = this.moduleService.getSelectedModule(id);
    } else {
      currentMod = this.testingModule;
    }
    
    if (currentMod) this.fillModuleInfo(currentMod);
    else {
     this.moduleService.getMod(this.module_id).subscribe(res=>{
      this.fillModuleInfo(res);
     },(error)=>{
      this.showFillAll = 2;
      this.warningBtn.nativeElement.click();
     }); 
    }    
  }
  fillModuleInfo(mod) {
    this.moduleInfo = mod;
    this.imgvid = this.moduleInfo.slider;
    this.img_strip = this.moduleInfo.images;
    this.current = {image:this.img_strip[0].image,description:this.img_strip[0].description};
    this.selectedQuestions = this.moduleInfo.quizzes.map(i => {return 'option0'});
    this.incorrectOnes = this.selectedQuestions.slice();      
    this.initOps();
    if (this.forAdminSetFalse) {
      let thereIsModu = this.moduleService.checkApprove(this.module_id);
      this.moduleCoins = this.isTesting? 3 : (thereIsModu ? (thereIsModu.score? thereIsModu.score:4) : 4); 
    }    
  }

  fillImage(img) {   
    this.current = {image:img.image,description:img.description};
  }

  refreshComp(){     
    this.router.navigateByUrl('/previous-steps/modules', { skipLocationChange: false }).then(() => {
      let nvpth = '/previous-steps/module-detail/'+this.nextModuleId;
      this.router.navigate([nvpth]);
    });
  }

  goToMods() {
    this.router.navigate([
      "previous-steps/modules",
      { idProject: this.projectId, userType: this.user_type, idUser: this.user_id }
    ]);
  }

}