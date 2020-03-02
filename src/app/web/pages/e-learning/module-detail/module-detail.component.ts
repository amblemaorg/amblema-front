import { Component, OnInit, ViewChild, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { OwlCarousel } from 'ngx-owl-carousel';
import { faArrowLeft, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ModulesService } from '../../../../services/e-learning/modules.service';
import { GlobalService } from '../../../../services/global.service';

@Component({
  selector: 'app-module-detail',
  templateUrl: './module-detail.component.html',
  styleUrls: ['./module-detail.component.scss']
})
export class ModuleDetailComponent implements OnInit {
  @ViewChild('owlElement', {static: false}) owlEl:OwlCarousel;
  @ViewChild('stackElement', {static: false}) stackEl:OwlCarousel;

  faArrowLeft = faArrowLeft;
  faTimes = faTimes;

  shown = 0;

  imgs = [
    {info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', img: 'https://images.theconversation.com/files/69621/original/image-20150121-29731-vsw2b1.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip'},
    {info: 'Rorem ipsum dolor sit amet, consectetur adipiscing elit', img: 'https://www.livehappy.com/sites/default/files/styles/article_featured/public/main/articles/Happy-Schools-main-2.jpg?itok=kr6_ASwb'},
    // {info: 'Morem ipsum dolor sit amet, consectetur adipiscing elit', img: 'https://www.irishtimes.com/polopoly_fs/1.3581905.1533031796!/image/image.jpg_gen/derivatives/box_620_330/image.jpg'},
    // {info: 'Sorem ipsum dolor sit amet, consectetur adipiscing elit', img: 'https://www.cdc.gov/features/vfcprogram/vfcprogram_456px.jpg'},
  ];
  imgvid = this.imgs.concat([
    {info: 'Gorem ipsum dolor sit amet', img: 'https://www.youtube.com/watch?v=2i4CbCINjWA'},
    {info: 'Dorem ipsum dolor sit amet', img: 'https://youtu.be/okpg-lVWLbE'},
  ]);

  img_strip = this.imgs.concat(this.imgs.concat(this.imgs));

  carouselOps = {items: 1, dots: false, mouseDrag: false, touchDrag: false, animateOut: 'fadeOut', video:true, lazyLoad: true};
  carouselOpsImgs = {items: 4, dots: false, mouseDrag: false, touchDrag: false, video:true, lazyLoad: true};
  stackOps:any;

  // PREGUNTAS DEL QUIZZ
  questions = [
    { desc: 'Lorem ipsum', options: ['Respuesta','Respuesta','Respuesta','Respuesta',], },
    { desc: 'Lorem ipsum', options: ['Respuesta','Respuesta','Respuesta','Respuesta',], },
    { desc: 'Lorem ipsum', options: ['Respuesta','Respuesta','Respuesta','Respuesta',], },
    { desc: 'Lorem ipsum', options: ['Respuesta','Respuesta','Respuesta','Respuesta',], },
  ];

  selectedQuestions = [];

  isBrowser;
  isPortrait = true;
  isLandscapeCurrent = false;

  constructor(private moduleService: ModulesService, private globals: GlobalService, @Inject(DOCUMENT) private document: Document) { 
    this.isBrowser = globals.isBrowser;
  }

  ngOnInit() {
    this.selectedQuestions = this.questions.map(i => {return -1});

    this.initOps();
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

  showModal(el) {
    el.click();    
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

}