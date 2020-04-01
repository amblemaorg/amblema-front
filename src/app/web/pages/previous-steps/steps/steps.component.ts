import { Component, OnInit } from '@angular/core';
import { StepsService } from 'src/app/services/steps/steps.service';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {
  generalSteps = [
    // {
    //   name: 'Encontrar una escuela',
    //   text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //   status: 'En espera',
    //   video: null,
    //   file: null,
    //   upload: false,
    //   send: false,
    //   isForm: false,
    //   goMods: false,
    //   checks: [],
    //   save: false,
    // },
    // {
    //   name: 'Encontrar un padrino',
    //   text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //   status: 'En espera',
    //   video: null,
    //   file: null,
    //   upload: false,
    //   send: false,
    //   isForm: false,
    //   goMods: false,
    //   checks: [],
    //   save: false,
    // },
    // {
    //   name: 'Encontrar un coordinador',
    //   text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //   status: 'En espera',
    //   video: null,
    //   file: null,
    //   upload: false,
    //   send: false,
    //   isForm: false,
    //   goMods: false,
    //   checks: [],
    //   save: false,
    // },
    // {
    //   name: 'Planificacion del taller inicial',
    //   text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //   status: 'En espera',
    //   video: {
    //     url: 'https://youtu.be/FldLWuBibuw',
    //     name: 'Google',
    //   },
    //   file: null,
    //   upload: false,
    //   send: false,
    //   isForm: false,
    //   goMods: false,
    //   checks: [],
    //   save: false,
    // },
    // {
    //   name: 'Confirmacion de AmbLeMa',
    //   text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //   status: 'En espera',
    //   video: null,
    //   file: null,
    //   upload: false,
    //   send: false,
    //   isForm: false,
    //   goMods: false,
    //   checks: [],
    //   save: false,
    // },
  ];
  sponsorSteps = [
    // {
    //   name: 'Presentacion a la escuela',
    //   text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //   status: 'En espera',
    //   video: null,
    //   file: null,
    //   upload: false,
    //   send: false,
    //   isForm: false,
    //   goMods: false,
    //   checks: [],
    //   save: false,
    // },
    // {
    //   name: 'Conoce el metodo AmbLeMa',
    //   text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //   status: 'En espera',
    //   video: null,
    //   file: {
    //     url: 'http://www.africau.edu/images/default/sample.pdf',
    //     name: 'Agreement name',
    //   },
    //   upload: false,
    //   send: false,
    //   isForm: false,
    //   goMods: false,
    //   checks: [],
    //   save: false,
    // },
    // {
    //   name: 'Llenar planilla de escuela',
    //   status: 'En espera',
    //   isForm: true,
    //   type: 4,
    //   goMods: false,
    //   checks: [],
    //   save: false,
    // },
    // {
    //   name: 'Llenar planilla de coordinador',
    //   status: 'En espera',
    //   isForm: true,
    //   type: 2,
    //   goMods: false,
    //   checks: [],
    //   save: false,
    // },
    // {
    //   name: 'Convenio Padrino - Escuela',
    //   text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //   status: 'En espera',
    //   video: null,
    //   file: {
    //     url: 'http://www.africau.edu/images/default/sample.pdf',
    //     name: 'Agreement name',
    //   },
    //   upload: true,
    //   send: false,
    //   isForm: false,
    //   goMods: false,
    //   checks: [],
    //   save: false,
    // },
    // {
    //   name: 'Convenio Escuela - Fundacion',
    //   text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //   status: 'En espera',
    //   video: null,
    //   file: {
    //     url: 'http://www.africau.edu/images/default/sample.pdf',
    //     name: 'Agreement name',
    //   },
    //   upload: true,
    //   send: false,
    //   isForm: false,
    //   goMods: false,
    //   checks: [],
    //   save: false,
    // },
  ];
  coordinatorSteps = [
    // {
    //   name: 'Llenar planilla de escuela',
    //   status: 'En espera',
    //   isForm: true,
    //   type: 4,
    //   goMods: false,
    //   checks: [],
    //   save: false,
    // },
    // {
    //   name: 'Llenar planilla de padrino',
    //   status: 'En espera',
    //   isForm: true,
    //   type: 3,
    //   goMods: false,
    //   checks: [],
    //   save: false,
    // },
    // {
    //   name: 'Enviar curriculum vitae',
    //   text: null,
    //   status: 'En espera',
    //   video: null,
    //   file: null,
    //   upload: true,
    //   send: true,
    //   isForm: false,
    //   goMods: false,
    //   checks: [],
    //   save: false,
    // },
    // {
    //   name: 'Completar los modulos de formacion',
    //   text: null,
    //   status: 'En espera',
    //   video: null,
    //   file: null,
    //   upload: false,
    //   send: false,
    //   isForm: false,
    //   goMods: true,
    //   checks: [],
    //   save: false,
    // },
    // {
    //   name: 'Pasos del taller inicial',
    //   text: null,
    //   status: 'En espera',
    //   video: null,
    //   file: null,
    //   upload: false,
    //   send: false,
    //   isForm: false,
    //   goMods: false,
    //   checks: [
    //     {text: 'Lorem ipsum dolor', checked: true}, {text: 'Lorem ipsum dolor', checked: false},
    //     {text: 'Lorem ipsum dolor', checked: false}, {text: 'Lorem ipsum dolor', checked: false},
    //     {text: 'Lorem ipsum dolor', checked: false}, {text: 'Lorem ipsum dolor', checked: false},
    //     {text: 'Lorem ipsum dolor', checked: false}, {text: 'Lorem ipsum dolor', checked: false},
    //   ],
    //   save: true,
    // },
  ];
  schoolSteps = [
    // {
    //   name: 'Presentacion al padrino',
    //   text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //   status: 'En espera',
    //   video: null,
    //   file: null,
    //   upload: true,
    //   send: false,
    //   isForm: false,
    //   goMods: false,
    //   checks: [],
    //   save: false,
    // },
    // {
    //   name: 'Llenar planilla de padrino',
    //   status: 'En espera',
    //   isForm: true,
    //   type: 3,
    //   goMods: false,
    //   checks: [],
    //   save: false,
    // },
    // {
    //   name: 'Llenar planilla de coordinador',
    //   status: 'En espera',
    //   isForm: true,
    //   type: 2,
    //   goMods: false,
    //   checks: [],
    //   save: false,
    // },
    // {
    //   name: 'Convenio Padrino - Escuela',
    //   text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //   status: 'En espera',
    //   video: null,
    //   file: {
    //     url: 'http://www.africau.edu/images/default/sample.pdf',
    //     name: 'Agreement name',
    //   },
    //   upload: true,
    //   send: false,
    //   isForm: false,
    //   goMods: false,
    //   checks: [],
    //   save: false,
    // },
    // {
    //   name: 'Convenio Escuela - Fundacion',
    //   text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //   status: 'En espera',
    //   video: null,
    //   file: {
    //     url: 'http://www.africau.edu/images/default/sample.pdf',
    //     name: 'Agreement name',
    //   },
    //   upload: true,
    //   send: false,
    //   isForm: false,
    //   goMods: false,
    //   checks: [],
    //   save: false,
    // },
  ];

  constructor(private stepsService: StepsService) { }

  ngOnInit() {
    this.stepsService.getSteps().subscribe(res => {
      console.log(res);
      res.records.forEach(record => {
        record["statux"] = "En espera";
        record["isForm"] = (record.devName.toLowerCase().includes("fill") && record.devName.toLowerCase().includes("form"))? true:false;
        if (record.isForm) {
          if (record.devName=="sponsorFillCoordinatorForm" || record.devName=="schoolFillCoordinatorForm") record["type"] = 2;
          else if (record.devName=="coordinatorFillSponsorForm" || record.devName=="schoolFillSponsorForm") record["type"] = 3;
          else record["type"] = 4;
        }
        record["send"] = record.devName=="coordinatorSendCurriculum" ? true:false;
        record["goMods"] = record.devName=="corrdinatorCompleteTrainingModules" ? true:false;
        switch (record.tag) {          
          case "2":
            this.coordinatorSteps.push(record);
            break;
          case "3":
            this.sponsorSteps.push(record);
            break;
          case "4":
            this.schoolSteps.push(record);
            break;
          default:
            this.generalSteps.push(record);
            break;
        }        
        // name: 'Presentacion a la escuela',
        // text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        // video: null,
        // file: null,
        // upload: false,
        // save: false,

        // id: "5e823707c12147f1a66563e2"
        // name: "Encontrar Escuela"
        // devName: "findSchool"
        // tag: "1"
        // hasText: true
        // hasDate: false
        // hasFile: false
        // hasVideo: false
        // hasChecklist: false
        // hasUpload: false
        // text: "Asigna una escuela al proyecto"
        // file: null
        // video: null
        // checklist: []
        // approvalType: "1"
        // schoolYear: {
        //   id: "5e823371e01964539e0e5f68"
        //   name: "Año Escolar 2020 - 2021"
        // }
        // status: "1"
        // isStandard: true
        // createdAt: "2020-03-30T18:14:31.505000"
        // updatedAt: "2020-03-30T1
      });
    });
  }

}
