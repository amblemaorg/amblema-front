import { diagnosticsPermissions, diagnosticsPermissionsI } from './../blocks/peca-permissology';
import {
  Component,
  AfterViewInit,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
  OnDestroy,
} from "@angular/core";
import { Router, Event, NavigationEnd } from "@angular/router";
import { PecaPageComponent } from "../peca-page.component";
import { INITIAL_DIAGNOSTIC_CONFIG as config } from "./initial-diagnostic-config";
import { Subscription, Observable } from "rxjs";
import { PecaState } from "src/app/store/states/peca/peca.state";
import { Select } from "@ngxs/store";
import { isNullOrUndefined } from "util";
import { GlobalService } from "src/app/services/global.service";
import {
  diagnosticDataToReadingFormMapper,
  diagnosticDataToMathFormMapper,
} from "../mappers/diagnostic-mapper";
@Component({
  selector: "peca-initial-diagnostic",
  templateUrl: "../peca-page.component.html",
})
export class InitialDiagnosticPageComponent
  extends PecaPageComponent
  implements AfterViewInit, OnDestroy {
  @ViewChild("blocksContainer", { read: ViewContainerRef, static: false })
  container: ViewContainerRef;
  infoDataSubscription: Subscription;
  routerSubscription: Subscription;
  @Select(PecaState.getActivePecaContent) infoData$: Observable<any>;
  students = [];
  section = {};
  grade = "";
  idPeca = "";
  response: any;
  readingData: any;
  mathData: any;
  isInstanciated: boolean;
  loadedData: boolean;
  allStudents: any;
  UrlLapse = "";
  constructor(
    factoryResolver: ComponentFactoryResolver,
    globals: GlobalService,
    private router: Router
  ) {
    super(factoryResolver);
    globals.blockIntancesEmitter.subscribe((data) => {
      data.blocks.forEach((block, name) => this.blockInstances.set(name, block));
      if (this.loadedData) this.updateMethods(data.fromModal ? false : true);
    });

    this.instantiateComponent(config);

    //To know if the url change
    this.routerSubscription = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.UrlLapse = event.url;
        this.UrlLapse = this.router.url.substr(12, 1);
        this.getInfo();
      }
    });
  }

  ngOnInit() {
    this.UrlLapse = this.router.url.substr(12, 1);
    this.getInfo();
  }

  getInfo() {
    this.infoDataSubscription = this.infoData$.subscribe(
      (data) => {
        if (data.activePecaContent) {
          this.idPeca = data.activePecaContent.id;
          this.response = data.activePecaContent.school;
          let auxStudents = [];
          for (let i = 0; i < this.response.sections.length; i++) {
            this.grade = this.response.sections[i].grade;
            this.section = {
              name: this.response.sections[i].name,
              idSection: this.response.sections[i].id,
            };
            const studentsWithGradeAndSection = this.grade === "0" ? [] :
              this.response.sections[i].students.map((student) => {
                const student_ = {
                  ...student,
                  grade: this.grade,
                  section: this.section
                };
                return student_;
              });
            auxStudents = auxStudents.concat(studentsWithGradeAndSection);
          }
          this.students = auxStudents;
          if (!isNullOrUndefined(data)) {
            let { permissions } = data.user;
            permissions = this.managePermissions(permissions);
            this.setReadingTableData(
              this.students,
              this.UrlLapse,
              diagnosticDataToReadingFormMapper,
              permissions
            );
            this.setMathTableData(
              this.students,
              this.UrlLapse,
              diagnosticDataToMathFormMapper,
              permissions
            );
            this.loadedData = true;
            if (this.isInstanciated) this.updateMethods();
          }
        }
      },

      (error) => console.error(error)
    );
  }

  updateMethods(updateData: boolean = true) {
    this.updateDataToBlocks(updateData);
    this.updateDynamicFetchers();
  }

  updateDataToBlocks(updateData: boolean) {
    if (updateData) {
      this.setBlockData("readingTable", this.readingData);
      this.setBlockData("mathTable", this.mathData);
    }
  }

  updateDynamicFetchers() {
    //Update reading modal
    this.createAndSetBlockFetcherUrls(
      "readingModalForm",
      {
        post: (sectionId, studentId) =>
          `pecaprojects/diagnostics/reading/${this.UrlLapse}/${this.idPeca}/${sectionId}/${studentId}`,
      },
      "settings.data.sectionId",
      "settings.data.id"
    );

    //Update math modal
    this.createAndSetBlockFetcherUrls(
      "mathModalForm",
      {
        post: (sectionId, studentId) =>
          `pecaprojects/diagnostics/math/${this.UrlLapse}/${this.idPeca}/${sectionId}/${studentId}`,
      },
      "settings.data.sectionId",
      "settings.data.id"
    );
    //Delete reading modal
    this.createAndSetBlockFetcherUrls(
      "readingDeleteModal",
      {
        delete: (sectionId, studentId) =>
          `pecaprojects/diagnostics/reading/${this.UrlLapse}/${this.idPeca}/${sectionId}/${studentId}`,
      },
      "settings.dataFromRow.data.newData.sectionId",
      "settings.dataFromRow.data.newData.id"
    );

    //Delete math modal
    this.createAndSetBlockFetcherUrls(
      "mathDeleteModal",
      {
        delete: (sectionId, studentId) =>
          `pecaprojects/diagnostics/math/${this.UrlLapse}/${this.idPeca}/${sectionId}/${studentId}`,
      },
      "settings.dataFromRow.data.newData.sectionId",
      "settings.dataFromRow.data.newData.id"
    );
  }

  setReadingTableData(readingTableData, number, _mapper?: Function, permissions?: diagnosticsPermissionsI) {
    if (_mapper) {
      this.readingData = {
        data: _mapper(readingTableData, number),
        isEditable: true,
        classes: {
          hideEdit: !permissions.diagnostics_peca_edit || false,
          hideDelete: !permissions.diagnostics_peca_delete || false,
        }
      };
      //console.log("este es el mapper de lectura", this.readingData.data);
    } else {
      this.readingData = readingTableData;
    }
  }

  setMathTableData(mathTableData, number, _mapper?: Function, permissions?: diagnosticsPermissionsI) {
    if (_mapper) {
      this.mathData = {
        data: _mapper(mathTableData, number),
        isEditable: true,
        classes: {
          hideEdit: !permissions.diagnostics_peca_edit || false,
          hideDelete: !permissions.diagnostics_peca_delete || false,
        }
      };
    } else {
      this.mathData = mathTableData;
    }
  }

  managePermissions(permissionsArray) {
    return diagnosticsPermissions.actions.reduce(
      (permissionsObj, permission) => {
        permissionsObj[permission] = permissionsArray.includes(permission);
        return permissionsObj;
      },
      {}
    );
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.instantiateBlocks(this.container);
      this.isInstanciated = true;
    });
  }

  ngOnDestroy() {
    this.isInstanciated = false;
    this.loadedData = false;
    this.infoDataSubscription.unsubscribe();
    this.routerSubscription.unsubscribe();
  }
}
