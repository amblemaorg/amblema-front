import { Component, OnInit, OnDestroy } from '@angular/core';
import { PageBlockComponent, PresentationalBlockComponent } from '../page-block.component';
import { GlobalService } from '../../../../services/global.service';

@Component({
  selector: 'buttons-set-block',
  templateUrl: './texts-buttons-set-block.component.html',
  styleUrls: ['./texts-buttons-set-block.component.scss']
})
export class TextsButtonsSetBlockComponent implements PresentationalBlockComponent, OnInit, OnDestroy {
  type: 'presentational';
  component: string;
  settings: {   
    modalCode?: string; // for views with modal inside
    dataFromRow?: any; // table's row data
    isFromCustomTableActions?: boolean; // indicates if button is going to take action based on custom table actions
    tableCode?: string; // to know which table to update 
    buttonType?: string; // to specify what action to take on the button
    receivesFromTableOrForm?: string; // to know if make action receiving data fronm a table, form or both
    buttonCode?: string; // to check if this instance can make actions receiving data from table, form or both
    dateOrtext: {
      text: string;
      date: string;
      fields: string[];
    };
    selectStatus:{
      text:string;
      placeholder: string;
      lista:{
        id: string;
        name: string;
      }[];
    };
    status: string;
    // texts: {
      title: {
        aligning: string; // 'center' for center aligning, 'left' otherwise
        text: string;
      };
      subtitles: {
        title: string; // subtitle
        text: string; // paragraph
      }[];
    // }[];    
    action: { // 1 guardar, 2 adjuntar fotos, 3 enviar, 4 solicitar aprobacion, 5 ver estadisticas, 6 agregar
        type: number;
        name: string; // text in the button
    }[];
    upload: any;
    download: any;
    btnGeneral: any;
  };

  glbls:any;

  // data from form, table or both.
  dataTorF = {
    table: null,
    form: null,
  };

  constructor(private globals: GlobalService,) {
    this.type = 'presentational';
    this.component = 'buttons';
    this.glbls = globals;
  }

  currentSelected = null;

  ngOnInit() { 
    this.globals.updateButtonDataEmitter.subscribe(data => {
      if (this.settings.buttonCode && this.settings.buttonCode==data.code) {
        if (data.whichData=="table") this.dataTorF.table = data.table;
        if (data.whichData=="form") this.dataTorF.form = data.form;

        console.log(this.dataTorF);
      }
    });
  }
  ngOnDestroy() {
    this.dataTorF = {
      table: null,
      form: null,
    }
  }

  setSettings(settings: any) {
    this.settings = { ...settings };
  }
  focusDatePicker(e) {
    e.focus();
  }

  disableThis(type: number) {
    if (this.settings.receivesFromTableOrForm && (type == 1 || type == 3 || type == 4) ) {
      if (
        (this.settings.receivesFromTableOrForm=="table" && !this.dataTorF.table) ||
        (this.settings.receivesFromTableOrForm=="form" && !this.dataTorF.form)   ||
        (this.settings.receivesFromTableOrForm=="both" && (/* !this.dataTorF.table ||  */!this.dataTorF.form) )
      ) return true;
    }
    return false
  }

  addToTable() {
    let obj = {
      code: this.settings.tableCode,
      data: {},
      resetData: false,
      action: 'add',
    }; 

    switch (this.settings.buttonType) {
      case 'agregarDocentePreinscripcion':
        obj.data = {
          name: this.settings.selectStatus['lista'].find(d=>{return d.id===this.currentSelected}).name,
          lastName: 'Melendez',
          phone: '15487985',
          email: 'josmel@yahoo.com'
        };
        break;
      case 'agregarResultadoEstudiante':
        obj.data = {
          name: this.settings.selectStatus['lista'].find(d=>{return d.id===this.currentSelected}).name,
          lastName: 'Valbuena',
          gradeAndSection: '5to grado B',
          state: 'Lara',
          result: 'Aprobado',          
        };
        break;
    
      default:
        break;
    }

    this.globals.tableDataUpdater(obj);
  }

  takeAction(type: number, e) {
    switch (type) {
      case 1:
        if (this.settings.isFromCustomTableActions && this.settings.modalCode) {
          this.globals.tableDataUpdater(this.settings.dataFromRow);
          this.globals.ModalHider(this.settings.modalCode); 
        }          
        break;
      case 2:
        if (this.settings.isFromCustomTableActions && this.settings.modalCode) 
          this.globals.ModalHider(this.settings.modalCode);
        else {
          this.globals.ImageContainerShower(this.settings.buttonCode);
          e.target.classList.add('d-none');
        }
        break;
    
      default:
        break;
    }
  }

}
