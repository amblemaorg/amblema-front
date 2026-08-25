import {
  diagnosticsPermissions,
  diagnosticsPermissionsI,
} from "./../blocks/peca-permissology";
import {
  Component,
  AfterViewInit,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
  OnDestroy,
  HostListener,
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
import { HttpFetcherService } from "src/app/services/peca/http-fetcher.service";
import { PDFReport } from "src/app/services/peca/pdf-report.service";
import { ToastrService } from "ngx-toastr";

declare var $: any;

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
  schoolId = "";
  schoolYearId = "";
  response: any;
  readingData: any;
  mathData: any;
  environmentData: any;
  environmentEvaluators: any[] = [];
  isInstanciated: boolean;
  loadedData: boolean;
  allStudents: any;
  UrlLapse = "";

  constructor(
    factoryResolver: ComponentFactoryResolver,
    private globals: GlobalService,
    private router: Router,
    private fetcher: HttpFetcherService,
    private pdfReportService: PDFReport,
    private toastrService: ToastrService
  ) {
    super(factoryResolver);
    globals.blockIntancesEmitter.subscribe((data) => {
      data.blocks.forEach((block, name) =>
        this.blockInstances.set(name, block)
      );
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
    this.setupWindowFunctions();
    if (!this.infoDataSubscription || this.infoDataSubscription.closed) {
      this.getInfo();
    }
  }

  setupWindowFunctions() {
    (window as any).copyEnvLink = (link: string) => {
      if (!link) return;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(link).then(
          () => this.toastrService.success("Enlace copiado al portapapeles", "Éxito"),
          () => this.fallbackCopyText(link)
        );
      } else {
        this.fallbackCopyText(link);
      }
    };

    (window as any).viewEnvChart = (id: string) => {
      const evaluator = this.environmentEvaluators.find((ev) => ev.id === id);
      if (evaluator) {
        if (evaluator.hasEvaluated && evaluator.results) {
          const getIndicatorVal = (item: any) => {
            if (!item) return 0;
            if (item.average !== undefined) return item.average;
            if (item.value !== undefined) return item.value;
            return 0;
          };
          const items = [
            getIndicatorVal(res.cleanlinessAndCareOfSpaces),
            getIndicatorVal(res.wasteManagement),
            getIndicatorVal(res.biodiversityConservation),
            getIndicatorVal(res.waterUse),
            getIndicatorVal(res.communityRelations),
          ];

          this.globals.ModalShower({ code: "dataModalEstadisticasAmbiente" });

          setTimeout(() => {
            this.setBlockData("estadisticaAmbienteEvaluador", {
              items: items,
              title: `Resultados - ${evaluator.name}`
            });
          }, 100);
        } else {
          this.toastrService.info("El evaluador aún no ha registrado sus resultados.", "Atención");
        }
      }
    };
  }

  @HostListener("document:click", ["$event"])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;

    // Copy Link Button
    const copyBtn = target.closest(".btn-copy-link");
    if (copyBtn) {
      event.preventDefault();
      event.stopPropagation();

      const link = copyBtn.getAttribute("data-link");

      // Also select input text for user visual feedback if present
      const container = copyBtn.parentElement;
      if (container) {
        const inputEl = container.querySelector("input.env-link-input") as HTMLInputElement;
        if (inputEl) {
          inputEl.focus();
          inputEl.select();
        }
      }

      if (link) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(link).then(
            () => this.toastrService.success("Enlace copiado al portapapeles", "Éxito"),
            () => this.fallbackCopyText(link)
          );
        } else {
          this.fallbackCopyText(link);
        }
      }
      return;
    }

    // View Environmental Chart Button
    const chartBtn = target.closest(".btn-view-env-chart");
    if (chartBtn) {
      event.preventDefault();
      event.stopPropagation();

      const id = chartBtn.getAttribute("data-id");
      const evaluator = this.environmentEvaluators.find((ev) => ev.id === id);
      if (evaluator && evaluator.results) {
        const getIndicatorVal = (item: any) => {
          if (!item) return 0;
          if (item.average !== undefined) return item.average;
          if (item.value !== undefined) return item.value;
          return 0;
        };
        const items = [
          getIndicatorVal(res.cleanlinessAndCareOfSpaces),
          getIndicatorVal(res.wasteManagement),
          getIndicatorVal(res.biodiversityConservation),
          getIndicatorVal(res.waterUse),
          getIndicatorVal(res.communityRelations),
        ];

        this.setBlockData("estadisticaAmbienteEvaluador", {
          items: items,
          title: `Resultados - ${evaluator.name}`
        });

        if (typeof $ !== "undefined") {
          $("#dataModalEstadisticasAmbiente-modal").modal("show");
        }
      }
    }
  }

  fallbackCopyText(text: string) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.opacity = "0";
    textArea.style.pointerEvents = "none";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      const successful = document.execCommand("copy");
      if (successful) {
        this.toastrService.success("Enlace copiado al portapapeles", "Éxito");
      } else {
        this.toastrService.error("No se pudo copiar el enlace", "Error");
      }
    } catch (err) {
      this.toastrService.error("No se pudo copiar el enlace", "Error");
    }
    document.body.removeChild(textArea);
  }

  downloadDiagnosticsReport() {
    this.pdfBtnDisabled = true;
    this.pdfBtnLoading = true;

    const path = `statistics/diagnosticsreport/${this.schoolYearId}/${this.schoolId}?diagnostics=math,reading,logic&lapso=${this.UrlLapse}`;

    this.fetcher.get(path).subscribe(
      (response: any) => {
        if (response && response.sections && response.sections.length) {
          this.pdfReportService.onGenerate(response);
        } else {
          this.toastrService.info("Información", "No se encontraron registros");
        }
        this.pdfBtnDisabled = false;
        this.pdfBtnLoading = false;
      },
      (err: any) => {
        if (err.status === 404) {
          this.toastrService.info("Información", "No se encontraron registros");
        } else {
          this.toastrService.error("Error", "No se pudo generar el reporte");
        }
        this.pdfBtnDisabled = false;
        this.pdfBtnLoading = false;
      }
    );
  }

  getInfo() {
    if (this.infoDataSubscription) {
      this.infoDataSubscription.unsubscribe();
    }
    this.infoDataSubscription = this.infoData$.subscribe(
      (data) => {
        if (data.activePecaContent) {
          this.idPeca = data.activePecaContent.id;
          this.schoolId = data.activePecaContent.project.school.id;
          this.schoolYearId = data.user.activeSchoolYear.id;
          this.response = data.activePecaContent.school;

          // fetchEnvironmentEvaluators is handled in updateMethods() below

          let auxStudents = [];
          for (let i = 0; i < this.response.sections.length; i++) {
            this.grade = this.response.sections[i].grade;
            this.section = {
              name: this.response.sections[i].name,
              idSection: this.response.sections[i].id,
            };
            const studentsWithGradeAndSection =
              this.grade === "0"
                ? []
                : this.response.sections[i].students.map((student) => {
                    const student_ = {
                      ...student,
                      grade: this.grade,
                      section: this.section,
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

  isFetchingEvaluators: boolean = false;

  fetchEnvironmentEvaluators() {
    if (!this.idPeca || !this.UrlLapse || this.isFetchingEvaluators) return;
    this.isFetchingEvaluators = true;
    this.fetcher.get(`pecaprojects/environmental-diagnostics/evaluators/${this.idPeca}/${this.UrlLapse}`).subscribe(
      (res: any) => {
        this.isFetchingEvaluators = false;
        if (res && res.evaluators) {
          this.environmentEvaluators = res.evaluators;
          this.environmentData = {
            data: this.environmentEvaluators,
            isEditable: false,
          };
          this.setBlockData("environmentTable", this.environmentData);
        }
      },
      (err) => {
        this.isFetchingEvaluators = false;
        console.error("Error fetching evaluators", err);
      }
    );
  }

  updateMethods(updateData: boolean = true) {
    this.updateDataToBlocks(updateData);
    this.updateDynamicFetchers();
    this.fetchEnvironmentEvaluators();
  }

  updateDataToBlocks(updateData: boolean) {
    if (updateData) {
      this.setBlockData("readingTable", this.readingData);
      this.setBlockData("mathTable", this.mathData);
      if (this.environmentData) {
        this.setBlockData("environmentTable", this.environmentData);
      }
    }
  }

  updateDynamicFetchers() {
    // Update register evaluator form
    this.createAndSetBlockFetcherUrls("environmentEvaluatorForm", {
      post: () => `pecaprojects/environmental-diagnostics/evaluators/${this.idPeca}/${this.UrlLapse}`,
    });

    // Update reading modal
    this.createAndSetBlockFetcherUrls(
      "readingModalForm",
      {
        post: (sectionId, studentId) =>
          `pecaprojects/diagnostics/reading/${this.UrlLapse}/${this.idPeca}/${sectionId}/${studentId}`,
      },
      "settings.data.sectionId",
      "settings.data.id"
    );

    // Update math modal
    this.createAndSetBlockFetcherUrls(
      "mathModalForm",
      {
        post: (sectionId, studentId) =>
          `pecaprojects/diagnostics/math/${this.UrlLapse}/${this.idPeca}/${this.UrlLapse}/${sectionId}/${studentId}`,
      },
      "settings.data.sectionId",
      "settings.data.id"
    );

    // Delete reading modal
    this.createAndSetBlockFetcherUrls(
      "readingDeleteModal",
      {
        delete: (sectionId, studentId) =>
          `pecaprojects/diagnostics/reading/${this.UrlLapse}/${this.idPeca}/${sectionId}/${studentId}`,
      },
      "settings.dataFromRow.data.newData.sectionId",
      "settings.dataFromRow.data.newData.id"
    );

    // Delete math modal
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

  setReadingTableData(
    readingTableData,
    number,
    _mapper?: Function,
    permissions?: diagnosticsPermissionsI
  ) {
    if (_mapper) {
      this.readingData = {
        data: _mapper(readingTableData, number),
        isEditable: true,
        classes: {
          hideEdit: !permissions.diagnostics_peca_edit || false,
          hideDelete: !permissions.diagnostics_peca_delete || false,
        },
        lapse: number,
      };
    } else {
      this.readingData = readingTableData;
    }
  }

  setMathTableData(
    mathTableData,
    number,
    _mapper?: Function,
    permissions?: diagnosticsPermissionsI
  ) {
    if (_mapper) {
      this.mathData = {
        data: _mapper(mathTableData, number),
        isEditable: true,
        classes: {
          hideEdit: !permissions.diagnostics_peca_edit || false,
          hideDelete: !permissions.diagnostics_peca_delete || false,
        },
        lapse: number,
      };
    } else {
      this.mathData = mathTableData;
    }
  }

  managePermissions(permissionsArray) {
    return diagnosticsPermissions.actions.reduce(
      (permissionsObj, permission) => {
        if (permissionsArray)
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
    if (this.infoDataSubscription) this.infoDataSubscription.unsubscribe();
    if (this.routerSubscription) this.routerSubscription.unsubscribe();
  }
}
