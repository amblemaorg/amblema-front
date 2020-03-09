import { Injectable, PLATFORM_ID, Inject, Output, EventEmitter } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { Select } from '@ngxs/store';
import { CoordinatorModule, Module } from '../../models/e-learning/learning-modules.model';
import { CoordinatorState } from '../../store/states/e-learning/coordinator-user.state';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ModulesService {
  @Output() updateCoorMod:EventEmitter<any> = new EventEmitter();
  isBrowser;
  baseUrl = environment.baseUrl;  

  approved_modules:CoordinatorModule[] = [];
  all_modules:Module[] = [];

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId) { 
    this.isBrowser = isPlatformBrowser(platformId);
  }

  emitValsUpdate(){
    this.updateCoorMod.emit(null);
  }

  getMod (id): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'learningmodules/' + id)
  }

  getMods (): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'learningmodules')
  }
  /* getMods (): Observable<any> {
    return of(MODULES)
  } */

  getCoordinator(id): Observable<any> {
    return this.http.get<any>(this.baseUrl + `users/${id}?userType=2`)
  }

  answerModule(module_id, dataJson): Observable<any> {
    return this.http.post<any>(this.baseUrl + `answerlearningmodule/${module_id}`, dataJson)
  }
  
  // USING STATES
  checkApprove(id){    
    let isApproved = this.approved_modules.find(m => { return m.moduleId == id });
    return isApproved
  }
  getSelectedModule(id){
    let gotResult = this.all_modules.find(m => { return m.id == id });
    return gotResult
  }
  getNextModule(id){
    let inx = this.all_modules.map(function(e) { return e.id; }).indexOf(id);
    let gotResult = this.all_modules[inx+1];
    return gotResult
  }
  // to disable/enable see/play buttons in modules list view
  isPrevModuleDone(id){
    let inx = this.all_modules.map(function(e) { return e.id; }).indexOf(id);
    let gotResult = this.all_modules[inx-1];
    if (gotResult) {
      let prevMod = this.checkApprove(gotResult.id);
      return prevMod ? (prevMod.status=="2" ? false:true) : true;
    } 
    else return false;
  }
}





export const MODULES = {
  records: [
  {
  id: "5e62a1083d84c94795757635",
  name: "some name",
  title: "Conociendo AmbLeMa6",
  description: "Conociendo AmbLeMa te ayudara a comprender como funciona el programa",
  secondaryTitle: "Conociendo AmbLeMa bla bla",
  secondaryDescription: "Conociendo AmbLeMa te ayudara a comprender como funciona el programa bla bla",
  objectives: [
  "first one",
  "second one",
  "lastOne"
  ],
  slider: [
  {
  url: "https://image.freepik.com/vector-gratis/ninos-felices-estudiando-junto-su-maestra_97632-817.jpg",
  description: "some image description",
  type: "1"
  },
  {
  url: "https://www.youtube.com/watch?v=pETHUHsriPE",
  description: "some video description",
  type: "2"
  }
  ],
  images: [
  {
  image: "https://st.depositphotos.com/1594308/2420/i/450/depositphotos_24205623-stock-photo-diligent-pupils.jpg",
  description: "some description"
  }
  ],
  duration: "0100",
  quizzes: [
  {
  id: "5e62a1083d84c94795757634",
  question: "de que color es el caballo blanco?",
  optionA: "Blanco",
  optionB: "Amarillo",
  optionC: "Verde",
  optionD: "Azul",
  correctOption: "optionA",
  createdAt: "2020-03-06T19:14:16.812000",
  updatedAt: "2020-03-06T19:14:16.816000"
  },
  {
  id: "5e62a1083d84c94795757635",
  question: "pero si le ponen la cancion...",
  optionA: "la baila",
  optionB: "le da la depresion",
  optionC: "la apaga",
  optionD: "le sube volumen",
  correctOption: "optionB",
  createdAt: "2020-03-06T19:14:16.812000",
  updatedAt: "2020-03-06T19:14:16.816000"
  },
  {
  id: "5e62a1083d84c94795757636",
  question: "2 mas 2 ?",
  optionA: "2",
  optionB: "0",
  optionC: "4",
  optionD: "-4",
  correctOption: "optionC",
  createdAt: "2020-03-06T19:14:16.812000",
  updatedAt: "2020-03-06T19:14:16.816000"
  }
  ],
  createdAt: "2020-03-06T19:14:16.813000",
  updatedAt: "2020-03-06T19:14:16.816000"
  },
  {
    id: "8e62a1083d84c94795757635",
    name: "some name",
    title: "Conociendo AmbLeMa6",
    description: "Conociendo AmbLeMa te ayudara a comprender como funciona el programa",
    secondaryTitle: "Conociendo AmbLeMa bla bla",
    secondaryDescription: "Conociendo AmbLeMa te ayudara a comprender como funciona el programa bla bla",
    objectives: [
    "first one",
    "second one",
    "lastOne"
    ],
    slider: [
    {
    url: "https://image.freepik.com/vector-gratis/ninos-felices-estudiando-junto-su-maestra_97632-817.jpg",
    description: "some image description",
    type: "1"
    },
    {
    url: "https://www.youtube.com/watch?v=pETHUHsriPE",
    description: "some video description",
    type: "2"
    }
    ],
    images: [
    {
    image: "https://st.depositphotos.com/1594308/2420/i/450/depositphotos_24205623-stock-photo-diligent-pupils.jpg",
    description: "some description"
    }
    ],
    duration: "0100",
    quizzes: [
    {
    id: "5e62a1083d84c94795757634",
    question: "de que color es el caballo blanco?",
    optionA: "Blanco",
    optionB: "Amarillo",
    optionC: "Verde",
    optionD: "Azul",
    correctOption: "optionA",
    createdAt: "2020-03-06T19:14:16.812000",
    updatedAt: "2020-03-06T19:14:16.816000"
    },
    {
    id: "5e62a1083d84c94795757635",
    question: "pero si le ponen la cancion...",
    optionA: "la baila",
    optionB: "le da la depresion",
    optionC: "la apaga",
    optionD: "le sube volumen",
    correctOption: "optionB",
    createdAt: "2020-03-06T19:14:16.812000",
    updatedAt: "2020-03-06T19:14:16.816000"
    },
    {
    id: "5e62a1083d84c94795757636",
    question: "2 mas 2 ?",
    optionA: "2",
    optionB: "0",
    optionC: "4",
    optionD: "-4",
    correctOption: "optionC",
    createdAt: "2020-03-06T19:14:16.812000",
    updatedAt: "2020-03-06T19:14:16.816000"
    }
    ],
    createdAt: "2020-03-06T19:14:16.813000",
    updatedAt: "2020-03-06T19:14:16.816000"
    }
  ]
  }