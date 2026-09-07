import { Component, OnInit, ViewChild, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { EmbedVideoService } from 'ngx-embed-video';
import { OwlCarousel } from 'ngx-owl-carousel';
import { faArrowLeft, faTimes, faCheck, faPlay, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { ModulesService } from '../../../../../services/steps/modules.service';
import { GlobalService } from '../../../../../services/global.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Module, Image, ImaVideo, AnswerModule } from '../../../../../models/steps/learning-modules.model';
import { UserState } from '../../../../../store/states/e-learning/user.state';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { StepsState } from '../../../../../store/states/steps/project.state';

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
  @Select(StepsState.selected_proj_id) selectd_proj_id$: Observable<string>;
  @Select(StepsState.all_needed) stepsInfo$: Observable<any>;

  current_coor_id:string = '';

  moduleInfo: Module;
  module_id = "";
  moduleNum:number;
  nextModuleId = null;

  isTesting = false;
  testingModule:Module;

  forAdminSetFalse:boolean = true;

  //? quizz area ------------------------------------------------
  moduleCoins = 4;
  completedModule = false;
  optionsLetters = ['optionA','optionB','optionC','optionD']
  //? -----------------------------------------------------------

  faArrowLeft = faArrowLeft;
  faTimes = faTimes;
  faCheck = faCheck;
  faPlay = faPlay;
  faExclamationTriangle = faExclamationTriangle;

  shown = 0;

  imgvid:ImaVideo[] = [];
  current:Image = {image:'',description:''};  
  img_strip:Image[] = [];

  carouselOps = {items: 1, dots: false, mouseDrag: false, touchDrag: false, animateOut: 'fadeOut', lazyLoad: true};
  carouselOpsImgs = {items: 4, dots: false, mouseDrag: false, touchDrag: false, lazyLoad: true};
  stackOps:any;

  videosCache: { [url: string]: SafeHtml } = {};

  // PREGUNTAS DEL QUIZZ
  questions:any;

  selectedQuestions = [];
  incorrectOnes = [];
  showFillAll = 0; //todo: 0: Must answer all questions, 1: incorrect answers, 2: server error

  isBrowser;
  isPortrait = true;
  isLandscapeCurrent = false;
  isValidating:boolean;
  projectId = '';
  user_type = '';
  user_id = '';

  constructor(
    private moduleService: ModulesService,
    private globals: GlobalService,
    @Inject(DOCUMENT) private document: Document,
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer,
    private embedService: EmbedVideoService
  ) { 
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

    this.moduleNum = this.moduleService.all_modules.map(function(e) { return e.id; }).indexOf(this.module_id) + 1;
    this.checkApprove(this.module_id);

    this.selectd_proj_id$.subscribe(res => {
      if (res) this.projectId = res;
    });

    this.coorId$.subscribe(id_ => {
      if (id_) {
        this.user_id = id_;
        if (!this.current_coor_id) this.current_coor_id = id_;
      }
    });

    this.stepsInfo$.subscribe(steps_ => {
      if (steps_ && steps_.coordinator_id) {
        this.current_coor_id = steps_.coordinator_id;
      }
    });

    this.userType$.subscribe(res => {
      if (res) this.user_type = res;
    });
    
    if (this.isBrowser) {
      setTimeout(() => {
        const completedMsgEl = this.document.getElementById('completed-message');
        if (completedMsgEl) {
          completedMsgEl.setAttribute('style','display:none; opacity:1');
        }
      }, 1000);
    }
  }

  getVideo(url: string, index?: number): SafeHtml {
    if (!url) return null;
    if (this.videosCache[url]) {
      return this.videosCache[url];
    }
    const safeHtml = this.getEmbedVideo(url);
    if (safeHtml) {
      this.videosCache[url] = safeHtml;
    }
    return safeHtml;
  }

  getEmbedVideo(url: string): SafeHtml {
    if (!url) return null;
    let cleanUrl = url.trim();
    if (!cleanUrl.startsWith("http://") && !cleanUrl.startsWith("https://")) {
      cleanUrl = "https://" + cleanUrl;
    }
    const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/;
    const match = cleanUrl.match(regExp);
    if (match && match[1]) {
      const videoId = match[1];
      const embedUrl = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1`;
      const iframeHtml = `<iframe src="${embedUrl}" width="100%" height="100%" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
      return this.sanitizer.bypassSecurityTrustHtml(iframeHtml);
    }
    try {
      return this.embedService.embed(cleanUrl);
    } catch (e) {
      return null;
    }
  }

  getVideoThumbnail(url: string): string {
    if (!url) return '';
    let cleanUrl = url.trim();
    const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/;
    const match = cleanUrl.match(regExp);
    if (match && match[1]) {
      return `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`;
    }
    return '';
  }

  pauseAllVideos() {
    try {
      if (this.document) {
        const iframes = this.document.querySelectorAll('.video-container iframe');
        if (iframes && iframes.length > 0) {
          iframes.forEach((iframe: any) => {
            if (iframe && iframe.contentWindow) {
              iframe.contentWindow.postMessage(
                JSON.stringify({ event: 'command', func: 'pauseVideo', args: [] }),
                '*'
              );
            }
          });
        }
      }
    } catch (e) {
      console.warn('Error pausing videos:', e);
    }
  }

  prevSlide() {
    if (!this.imgvid || this.imgvid.length === 0) return;
    const newIndex = this.shown > 0 ? this.shown - 1 : this.imgvid.length - 1;
    this.goToImg(newIndex);
  }

  nextSlide() {
    if (!this.imgvid || this.imgvid.length === 0) return;
    const newIndex = this.shown < this.imgvid.length - 1 ? this.shown + 1 : 0;
    this.goToImg(newIndex);
  }

  goToImg(i: number) {
    this.pauseAllVideos();
    if (this.owlEl) {
      this.owlEl.to([i]);
    }
    this.shown = i;
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
    let success = true; // there are no unselected questions
    let wrong = false; // there are no wrong answers
    this.incorrectOnes = this.moduleInfo.quizzes.map(() => 'option0'); // re-initializing incorrect answers array
    let wrongOnes = this.incorrectOnes.slice(); // temporary incorrect array

    for (let i = 0; i < this.selectedQuestions.length; i++) {    
      coorAnswers.answers.push({quizId:this.moduleInfo.quizzes[i].id, option:this.selectedQuestions[i]}); // adding coordinator answer structure
      if (this.selectedQuestions[i]=='option0') {
        success = false; // there is at least an unanswered question
        this.showFillAll = 0;
        this.isValidating = false;
        if (this.warningBtn && this.warningBtn.nativeElement) {
          this.warningBtn.nativeElement.click(); //opening warning modal
        }
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
            if (this.warningBtn && this.warningBtn.nativeElement) {
              this.warningBtn.nativeElement.click(); // opening warning modal
            }
          } 
        } else {
          this.completedModule = true;
          this.incorrectOnes = this.moduleInfo.quizzes.map(() => 'option0');
          this.moduleService.emitValsUpdate({type:2,usu:coorAnswers.coordinator,usut:2,project:this.projectId}); //! THIS IS TEMPORARY
          if (el) {
            el.click(); // opening success modal
          }
        }        
      },(error)=>{
        this.isValidating = false;
        this.showFillAll = 2;
        if (this.warningBtn && this.warningBtn.nativeElement) {
          this.warningBtn.nativeElement.click();
        }
      });      
    }
  }

  selectAnswer(i, option) {
    if (this.forAdminSetFalse && !this.completedModule) {
      this.selectedQuestions[i] = option;
      if (this.incorrectOnes[i] !== 'option0') {
        this.incorrectOnes[i] = 'option0';
      }
    }
  }    

  @HostListener('window:resize', ['$event'])
  onResize(event) {    
    let w = event.target.innerWidth;
    let h = event.target.innerHeight;
    let lC = (w > h)? true:false;        

    if (this.isLandscapeCurrent != lC) {
      this.initOps();
      if (this.stackEl) {
        this.stackEl.reInit();
      }
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
    
    const stripLen = this.img_strip ? this.img_strip.length : 0;
    this.stackOps = {
      items: 1,
      dots: false,
      loop: (stripLen < 2)? false:true,
      nav: true,
      responsive : {
          640 : {
            items : this.isPortrait? 1:4,
            nav: this.isPortrait? true:false,
            loop: this.isPortrait? ( (stripLen < 2)? false:true ):true
          },
          992 : {
            items : this.isPortrait? 1:6,
            nav: this.isPortrait? true:false,
            loop: this.isPortrait? ( (stripLen < 2)? false:true ):true
          }
      }
    };
  }

  // estimate converser
  getEstimate(timing:string) {
    if (!timing) return '0 min';
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
      if (this.warningBtn && this.warningBtn.nativeElement) {
        this.warningBtn.nativeElement.click();
      }
     }); 
    }    
  }

  fillModuleInfo(mod) {
    this.moduleInfo = mod;
    this.imgvid = this.moduleInfo.slider || [];
    this.img_strip = this.moduleInfo.images || [];
    if (this.img_strip && this.img_strip.length > 0) {
      this.current = {image:this.img_strip[0].image,description:this.img_strip[0].description};
    }
    this.selectedQuestions = this.moduleInfo.quizzes ? this.moduleInfo.quizzes.map(() => 'option0') : [];
    this.incorrectOnes = this.selectedQuestions.slice();      
    this.initOps();
    if (this.forAdminSetFalse) {
      let thereIsModu = this.moduleService.checkApprove(this.module_id);
      this.completedModule = thereIsModu ? (thereIsModu.status=="3"? true:false) : false;
      this.moduleCoins = this.isTesting? 3 : (thereIsModu ? (thereIsModu.score? thereIsModu.score:4) : 4); 
      if (this.completedModule && this.moduleInfo.quizzes) {
        this.selectedQuestions = this.moduleInfo.quizzes.map(q => q.correctOption);
      }
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
    this.router.navigate(["previous-steps/modules"]);
  }

}