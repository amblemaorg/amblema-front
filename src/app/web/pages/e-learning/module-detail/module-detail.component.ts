import { Component, OnInit, ViewChild, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { OwlCarousel } from 'ngx-owl-carousel';
import { faArrowLeft, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ModulesService } from '../../../../services/e-learning/modules.service';
import { GlobalService } from '../../../../services/global.service';
import { ActivatedRoute } from '@angular/router';
import { Module, Image, ImaVideo, AnswerModule } from '../../../../models/e-learning/learning-modules.model';

@Component({
  selector: 'app-module-detail',
  templateUrl: './module-detail.component.html',
  styleUrls: ['./module-detail.component.scss']
})
export class ModuleDetailComponent implements OnInit {
  @ViewChild('owlElement', {static: false}) owlEl:OwlCarousel;
  @ViewChild('stackElement', {static: false}) stackEl:OwlCarousel;

  moduleInfo: Module;
  module_id = "";

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
  showFillAll = true;

  isBrowser;
  isPortrait = true;
  isLandscapeCurrent = false;

  constructor(private moduleService: ModulesService, private globals: GlobalService, @Inject(DOCUMENT) private document: Document,
              private route: ActivatedRoute) { 
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
      updatedAt: ""
    };
  }

  ngOnInit() {
    this.module_id = this.route.snapshot.params.id;
    this.checkApprove(this.module_id);
    this.moduleService.getMod(this.module_id).subscribe(res=>{
      this.moduleInfo = res;
      this.imgvid = this.moduleInfo.slider;
      this.img_strip = this.moduleInfo.images;
      this.current = {image:this.img_strip[0].image,description:this.img_strip[0].description};
      this.selectedQuestions = this.moduleInfo.quizzes.map(i => {return 'option0'});
      this.incorrectOnes = this.selectedQuestions.slice();      
      this.initOps();
      this.moduleCoins = this.moduleService.checkApprove(this.module_id).score;
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
  showModal(el,wm) {
    let coorAnswers: AnswerModule = {
      coordinator: '5e60009d945835d1a73bb2f9',
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
        this.showFillAll = true;
        wm.click(); //opening warning modal
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
        if (!res.approved) {
          if (wrong) { // if some of them are wrong
            this.incorrectOnes = wrongOnes; // setting the incorrect answers
            if (this.moduleCoins>1) { // decreasing AmbleCoins
              this.moduleCoins--;
            }
            this.showFillAll = false;
            wm.click(); // opening warning modal
          } 
        } else {
          if (!wrong) {
            this.completedModule = true;
            el.click(); // opening success modal
          }
        }        
      });      
    }
  }

  selectAnswer(i,j) {
    this.selectedQuestions[i] = j;
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
    
    this.stackOps = {items: 1, dots: false, loop: true, nav: true,
      responsive : {
          640 : {
            items : this.isPortrait? 1:4,
            nav: this.isPortrait? true:false
          },
          992 : {
            items : this.isPortrait? 1:6,
            nav: this.isPortrait? true:false
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
        return ( timing.charAt(0)=='0'?timing.charAt(1):(timing.charAt(0)+timing.charAt(1)) ) + ' hr';
      default:
        return ( timing.charAt(0)=='0'?timing.charAt(1):(timing.charAt(0)+timing.charAt(1)) ) + ' hr ' + ( timing.charAt(2)=='0'?timing.charAt(3):(timing.charAt(2)+timing.charAt(3)) ) + ' min';
    }
  }

  checkApprove(id){
    this.completedModule = this.moduleService.checkApprove(id).status=="2"? true:false;
  }

  fillImage(img) {   
    this.current = {image:img.image,description:img.description};
  }

}