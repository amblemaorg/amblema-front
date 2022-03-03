import {
  Component,
  OnInit,
  Inject,
  OnDestroy,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { PresentationalBlockComponent } from "../page-block.component";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { isNullOrUndefined } from "util";
import { MESSAGES } from "../../../../web/shared/forms/validation-messages";
import { ToastrService } from "ngx-toastr";
import { GlobalService } from "../../../../services/global.service";
import { MunicipalityInfo } from "../../../../models/steps/previous-steps.model";
import { structureData } from "./data-structure";
import { HttpFetcherService } from "../../../../services/peca/http-fetcher.service";
import { Subscription, Observable } from "rxjs";
import { adaptBody } from "./fetcher-body-adapter";
import { Select, Store } from "@ngxs/store";
import { ResidenceInfoState } from "../../../../store/states/steps/residence-info.state";
import {
  FetchPecaContent,
  SetUser,
} from "../../../../store/actions/peca/peca.actions";
import { PecaState } from "../../../../store/states/peca/peca.state";
import { NgDatepickerComponent, DatepickerOptions } from "ng2-datepicker";
import { StepsService } from "../../../../services/steps/steps.service";
import XLSX from "xlsx";
import { saveAs } from "file-saver";
import { HttpClient } from "@angular/common/http";
import {
  FormBlock,
  FormBlockAbstract,
  FormBlockFieldOption,
  FormBlockOptions,
} from "./form-model/form-block.class";

@Component({
  selector: "form-block",
  templateUrl: "./form-block.component.html",
  styleUrls: ["./form-block.component.scss"],
})
export class FormBlockComponent
  implements PresentationalBlockComponent, OnInit, OnDestroy
{
  showImportModal: boolean;
  showExportModal: boolean;
  showUploadBtn: boolean;
  showExportBtn: boolean;
  sectionsToExport: any[];
  studentsToImport: any[];
  studentsToExport: any[];
  studentsCount: number;
  isLoading: boolean;
  studentsData: any;
  importingData: boolean;
  activeSection: number;
  gradesArr: any[];

  type: "presentational";
  component: string;
  settings: {
    extraData?: any;
    formId?: string | number;
    specialValidateSaveButton?: boolean;
    formsContent: any;
    buttons: string[];
    hiddenButton?: boolean;
    images: any[];
    tableCode?: string; // to know which table to update
    formType?: string; // to specify what action to take on the submit button
    buttonCode?: string; // to know if sending info to textsandbuttons component and specify which instance to manage
    isOneRow?: boolean;
    hideImgContainer?: boolean; // if view has image adder container set this to true
    modalCode?: string; // for views with modal inside
    data?: any; // data to fill all inputs
    dataFromRow?: any; // table's row data
    isFromCustomTableActions?: boolean; // indicates if button is going to take action based on custom table actions
    alwaysValidations?: boolean; // when imageGroup has extra fields (i.e. imageCargo) set this to true
    fetcherUrls: {
      // get: string;
      post: string;
      put: string;
      patch: string;
      // delete: string;
    };
    fetcherMethod?: "get" | "post" | "put" | "patch" | "delete";
    isEditable?: boolean; //It is for views that have data that can be edited
    notGenerateId?: boolean; // It is for forms that do not need to be assigned an id
    notResetForm?: boolean; //It is for events that do not require the component to be reset
    makesNoRequest?: boolean; // if true, this form makes no request to api
    methodUrlPlus?: string; // if fetcher method url cannot be set in the initial component use this prop, to complete it
    tableRefreshName?: string; // to refresh table in the initial setter component
    onSubmit?: Function | null;
    onAddImage?: Function | null;
    onBlur?: (event) => void;
  };

  userCanCreate: boolean = true;
  userCanEdit: boolean = true;
  userCanDelete: boolean = true;
  userCanView: boolean = true;

  pecaId: string;
  @Select(PecaState.getPecaId) pecaId$: Observable<string>;
  // @Select(ResidenceInfoState.get_states) states$: Observable<any>;
  // @Select(ResidenceInfoState.get_municipalities) municipalities$: Observable<any>;

  private subscription: Subscription = new Subscription();

  componentForm: FormGroup;
  fields: string[];
  doubleFields = {};
  sendingForm: boolean;
  glbls: any;
  stps: any;
  showDatePicker: boolean = true;
  max_len: number;

  id_: string;
  wrongDateDisabler = {};

  municipalities: MunicipalityInfo[] = [];
  showSelectTeacher: boolean = true;
  showSelectState: boolean = true;
  statesLoaded: boolean = false;
  munsLoaded: boolean = false;
  isContentRefreshing: boolean = false;
  isEditing: boolean = false;
  isInApproval: boolean; // sets to true when a request has been sent and requires approval
  isEdited: boolean; // if form has been edited
  sendNull: boolean = true; // to avoid send form data null when uploading images
  someImgAdded: boolean; // to avoid send form null when images are saved in table
  imageUrl: string; //to can upload the image in profile component
  @ViewChild("inputDate", { static: false }) inputDate: NgDatepickerComponent;
  datePickerOptions: DatepickerOptions = {
    minYear: 1950,
    maxYear: 2050,
    displayFormat: "DD/MM/YYYY",
    barTitleFormat: "MMMM YYYY",
    dayNamesFormat: "dd",
    firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
    minDate: new Date(Date.now()),
    maxDate: new Date(Date.now()),
    barTitleIfEmpty: "Haga click para seleccionar una fecha",
    placeholder: "Seleccione una fecha",
    addClass: "form-control date-picker-custom", // Optional, value to pass on to [ngClass] on the input field
    addStyle: {}, // Optional, value to pass to [ngStyle] on the input field
    fieldId: "inputDate", // ID to assign to the input field. Defaults to datepicker-<counter>
    useEmptyBarTitle: false, // Defaults to true. If set to false then barTitleIfEmpty will be disregarded and a date will always be shown
  };
  // currentGrade: string; // for grades selector only
  sectionsArr: any[] = [];

  isBeingUsedDateContr: boolean = false;
  // fetchingResidenceInfo: boolean = false;
  canTableSendFormData: boolean = true;

  formInitialVals: object = {};

  // FORMS
  formsList = {
    // Magic string to avoid errors and easily change formId of forms
    addDocente: "add-docente",
  };
  currentForm: FormBlock;

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private globals: GlobalService,
    private fetcher: HttpFetcherService,
    private stepsService: StepsService,
    private http: HttpClient,

    @Inject(DomSanitizer) private readonly sanitizer: DomSanitizer
  ) {
    this.type = "presentational";
    this.component = "form";
    this.glbls = globals;
    this.stps = stepsService;
    this.showImportModal = false;
    this.showUploadBtn = false;
    this.showExportBtn = false;
    this.studentsData = [];
    this.gradesArr = [];
    this.studentsCount = 0;
    this.activeSection = 0;
    localStorage.setItem("stud_data", JSON.stringify([]));
  }

  openModal() {
    this.showImportModal = true;
    const newOptions = [
      ...this.settings.formsContent[this.fields[0]].options,
      {
        id: "7",
        name: "Varios grados",
      },
    ];
    this.settings.formsContent[this.fields[0]].options = [];
  }

  closeModal() {
    this.showImportModal = false;
  }

  openExportModal() {
    const optionsActual: any[] =
      this.settings.formsContent[this.fields[0]].options;
    const existOption = optionsActual.find((option) => option.id === "all");
    if (existOption) {
      this.showExportModal = true;
      return;
    }
    const newOptions = [
      ...optionsActual,
      {
        id: "all",
        name: "Varios grados",
      },
    ];

    this.settings.formsContent[this.fields[0]].options = newOptions;
    this.showExportModal = true;
  }

  closeExportModal() {
    this.sectionsToExport = [];
    const newOptions = this.settings.formsContent[
      this.fields[0]
    ].options.filter((option) => option.id !== "all");
    this.settings.formsContent[this.fields[0]].options = newOptions;

    this.showExportModal = false;
    this.componentForm.reset();
  }

  handleFileInput(files: FileList) {
    const reader = new FileReader();
    reader.readAsArrayBuffer(files[0]);
    reader.onload = () => {
      const data = new Uint8Array(reader.result as ArrayBuffer);
      const workbook = XLSX.read(data, { type: "array" });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const studentsData = XLSX.utils.sheet_to_json(sheet, { defval: "" });

      const elements = [];

      studentsData.forEach((student) => {
        elements.push(
          student["Nombre"],
          student["Apellido"],
          student["Tipo de documento"],
          student["Documento de identidad"],
          student["Fecha de nacimiento"],
          student["Género"],
          student["Grado"],
          student["Sección"]
        );
      });
      const el_cleaned = elements;
      const num_cols = 8;

      const matrix = el_cleaned.reduce(
        (rows, key, index) =>
          (index % num_cols == 0
            ? rows.push([key])
            : rows[rows.length - 1].push(key)) && rows,
        []
      );

      const students: Array<Object> = matrix.map((registry, index) => {
        const fecha_de_nacimiento = this.parseDate(registry[4]);

        return {
          nombre: registry[0] || "",
          apellido: registry[1] || "",
          tipo_de_documento: registry[2] || "",
          documento_de_identidad: registry[3]?.toString() || "",
          fecha_de_nacimiento: fecha_de_nacimiento || "",
          genero: registry[5] || "",
          grado: registry[6]?.toString() || "",
          seccion: registry[7] || "",
        };
      });
      this.showUploadBtn = true;

      this.studentsToImport = students;
    };
  }

  parseDate(date) {
    if (typeof date === "number") {
      const dateString = this.SerialDateToJSDate(date, -4);
      const dateOutput = new Date(dateString)
        .toLocaleDateString("es-VE")
        .split("/")
        .join("-");
      return dateOutput;
    } else {
      return date;
    }
  }

  // serialDate is whole number of days since Dec 30, 1899
  // offsetUTC is -(24 - your timezone offset)
  SerialDateToJSDate(serialDate, offsetUTC) {
    return new Date(Date.UTC(0, 0, serialDate, offsetUTC));
  }

  async importStudents() {
    this.importingData = true;
    const resourcePath = `section/load/${this.pecaId}`;
    const body = {
      action: "import",
      students: this.studentsToImport,
      section: this.sectionsArr[this.activeSection].id,
    };
    // console.log("BODY to import: ", body);
    try {
      const result = await this.fetcher.post(resourcePath, body).toPromise();
      if (result.status_code === 201) {
        this.showImportModal = false;
        this.toastr.success(result.message, "", {
          positionClass: "toast-bottom-right",
        });
        this.importingData = false;
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    } catch (err) {
      console.log("error: ", err);
      throw err;
    } finally {
    }
  }

  makeExcel() {
    this.studentsData = JSON.parse(localStorage.getItem("stud_data"));
    const workbook = XLSX.utils.book_new();
    workbook.Props = {
      Title: `Data de estudiantes - ${this.sectionsArr[0].name}`,
      Subject: "Data",
      Author: "Amblema",
      CreatedDate: new Date(Date.now()),
    };

    workbook.SheetNames.push("Data de estudiantes");
    const columns_header = [
      "Nombre",
      "Apellido",
      "Tipo de documento",
      "Documento de identidad",
      "Fecha de nacimiento",
      "Género",
      "Grado",
      "Sección",
    ];
    let matrix = [];
    let row_aux = [];
    let genero = "";
    let fecha = "";

    const currentSectionName = this.sectionsArr.filter((section) => {
      const randomStudent = this.studentsData[0];
      if (section.id === randomStudent.section) {
        return section;
      }
    })[0].name;

    for (
      let count = 1, i = 0;
      count <= this.studentsData.length;
      count++, i++
    ) {
      genero = parseInt(this.studentsData[i]?.gender) === 1 ? "F" : "M";
      fecha = new Date(this.studentsData[i]?.age)
        .toLocaleDateString("es-VE")
        .split("/")
        .join("-");
      const data = [
        this.studentsData[i]?.name || "",
        this.studentsData[i]?.lastName || "",
        "V" || "", // TODO: check this
        this.studentsData[i]?.documentGroup?.prependInput || "",
        fecha,
        genero,
        this.studentsData[i]?.grades || "",
        currentSectionName || "",
      ];
      row_aux.push(data);
    }
    matrix.push(columns_header);
    row_aux.forEach((student) => matrix.push(student));

    const columns = XLSX.utils.aoa_to_sheet(matrix);
    workbook.Sheets["Data de estudiantes"] = columns;

    /* Exportar workbook como binario para descarga */
    const workbookBinary = XLSX.write(workbook, {
      type: "binary",
      bookType: "xls",
    });
    return workbookBinary;
  }

  exportStudents() {
    let grado = this.parseGrade(this.sectionsArr[this.activeSection]?.grade);
    const workbookBin = this.makeExcel();
    const octetStream = this.binary2octet(workbookBin);
    saveAs(
      new Blob([octetStream], { type: "application/octet-stream" }),
      `Data de estudiantes - ${grado}, seccion ${
        this.sectionsArr[this.activeSection].name
      }.xls`
    );
  }

  private binary2octet(binary): ArrayBuffer {
    const buffer = new ArrayBuffer(binary.length);
    const view = new Uint8Array(buffer);
    for (let i = 0; i < binary.length; i++) {
      view[i] = binary.charCodeAt(i) & 0xff; // transformacion a octeto
    }
    return buffer;
  }

  ngOnInit() {
    this.subscription.add(
      this.pecaId$.subscribe((peca_id) => {
        this.pecaId = peca_id;
      })
    );

    this.initForm();

    this.subscription.add(
      this.stepsService.residenceInfoEmitter.subscribe((bool) => {
        if (
          bool &&
          this.settings.formsContent["addressMunicipality"] &&
          this.settings.formsContent["addressState"]
        ) {
          this.showSelectState = false;
          this.settings.formsContent["addressMunicipality"].options =
            this.stepsService.getResidenceMuns();
          this.settings.formsContent["addressState"].options =
            this.stepsService.getResidenceStates();

          this.studentsCount = 0;
          setTimeout(() => {
            this.showSelectState = true;
            this.updateMuns(
              true,
              this.componentForm.value["addressMunicipality"]
            );
            this.munsLoaded = true;
            this.statesLoaded = true;
          });
        }
      })
    );

    this.subscription.add(
      this.componentForm.statusChanges.subscribe((val) => {
        const comparer = this.initialVsFinalFormDataComparer();
        const isEqual = comparer[0] || comparer[1];

        if (
          !this.someImgAdded &&
          (val === "INVALID" ||
            isEqual ||
            this.isDateNotOk() ||
            !this.isDirty())
        ) {
          if (this.settings.buttonCode && this.isDirty()) this.isEdited = true;
          if (this.sendNull) this.btnUpdater(null);
        } else {
          this.btnUpdater(isEqual ? null : this.componentForm.value, !isEqual);
        }
      })
    );

    if (
      this.settings.formsContent["section"] &&
      this.settings.formsContent["section"].emmitSectionChange
    )
      this.subscription.add(
        this.componentForm.get("section").statusChanges.subscribe((val) => {
          if (val === "VALID") {
            this.globals.emitStudentsTableRefresh(
              this.settings.tableRefreshName,
              this.componentForm.get("section").value
            );
            this.setActiveSection(this.componentForm.get("section").value);
          } else
            this.globals.emitStudentsTableRefresh(
              this.settings.tableRefreshName,
              null
            );
        })
      );

    if (this.specialDateContr().makeListen) {
      const key_ = this.specialDateContr().key;

      this.subscription.add(
        this.componentForm.get(key_).statusChanges.subscribe((val) => {
          if (!this.isBeingUsedDateContr) this.setDateFunc(key_);
        })
      );

      this.subscription.add(
        this.componentForm
          .get(`${this.settings.formsContent[key_]["specialDateForm"]}Day`)
          .statusChanges.subscribe((val) => {
            if (!this.isBeingUsedDateContr) this.setDateFunc(key_, "day");
          })
      );

      this.subscription.add(
        this.componentForm
          .get(`${this.settings.formsContent[key_]["specialDateForm"]}Month`)
          .statusChanges.subscribe((val) => {
            if (!this.isBeingUsedDateContr) this.setDateFunc(key_, "month");
          })
      );

      this.subscription.add(
        this.componentForm
          .get(`${this.settings.formsContent[key_]["specialDateForm"]}Year`)
          .statusChanges.subscribe((val) => {
            if (!this.isBeingUsedDateContr) this.setDateFunc(key_, "year");
          })
      );
    }

    this.subscription.add(
      this.globals.passImageEmitter.subscribe((image) => {
        this.imageUrl = image;
      })
    );
    this.subscription.add(
      this.globals.showImageContainerEmitter.subscribe((code) => {
        if (this.settings.buttonCode && this.settings.buttonCode == code)
          this.settings.hideImgContainer = false;
      })
    );

    // if (!this.stepsService.getIsCallingM()/* !this.fetchingResidenceInfo */ && this.settings.formsContent["addressMunicipality"] && !this.munsLoaded)
    //   this.callMuns();
    if (this.settings.formsContent["addressMunicipality"] && !this.munsLoaded)
      this.stepsService.callMuns();

    this.subscription.add(
      this.globals.sendFormDataToBtnEmitter.subscribe((arr) => {
        if (
          this.settings.buttonCode &&
          this.settings.buttonCode == arr[0] &&
          this.canTableSendFormData
        )
          this.btnUpdater(arr[1] ? this.componentForm.value : null);

        const comparer = this.initialVsFinalFormDataComparer();
        if (comparer[1])
          this.btnUpdater(arr[1] ? this.componentForm.value : null);
      })
    );

    this.subscription.add(
      this.globals.resetEditedEmitter.subscribe((btnCode) => {
        if (this.settings.buttonCode && this.settings.buttonCode == btnCode) {
          this.isEdited = false;
          this.isInApproval = true;
        }
      })
    );

    this.subscription.add(
      this.globals.setReadonlyEmitter.subscribe((data) => {
        if (data.isBtnCode) {
          if (
            this.settings.buttonCode &&
            this.settings.buttonCode == data.buttonCode
          )
            this.isInApproval = data.setReadOnly;
        } else {
          if (
            this.settings.tableCode &&
            this.settings.tableCode == data.buttonCode
          )
            this.isInApproval = data.setReadOnly;
        }
      })
    );

    this.setId();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.isEdited = null;
    this.isInApproval = null;
    this.isEditing = false;
    this.sendNull = true;
    this.someImgAdded = null;
    this.imageUrl = null;
    this.canTableSendFormData = true;
    this.max_len = null;
    this.isBeingUsedDateContr = false;
    // this.fetchingResidenceInfo = false;
  }

  specialDateContr(): { makeListen: boolean; key: string } {
    let k_ = "";
    const mL = ["date", "age", "dateLog"].some((key) => {
      if (
        this.settings.formsContent[key] &&
        this.settings.formsContent[key]["specialDateForm"]
      ) {
        k_ = key;
        return true;
      }
      return false;
    });

    return {
      makeListen: mL,
      key: k_,
    };
  }

  addZero(dN, isYear = false) {
    const dNlen = `${dN}`.length;
    if (isYear && dNlen < 4) {
      const yearStrArr = `${dN}`.split("").reverse();
      const second =
        yearStrArr.length == 3 ? yearStrArr[yearStrArr.length - 1] : "0";
      const third = yearStrArr.length > 1 ? yearStrArr[1] : "0";
      const fourth = yearStrArr[0];
      return "0" + second + third + fourth;
    }
    return dNlen > 1 ? `${dN}` : `0${dN}`;
  }

  getDates(key_) {
    return {
      day: this.componentForm.controls[
        `${this.settings.formsContent[key_]["specialDateForm"]}Day`
      ].value,
      month:
        this.componentForm.controls[
          `${this.settings.formsContent[key_]["specialDateForm"]}Month`
        ].value,
      year: this.componentForm.controls[
        `${this.settings.formsContent[key_]["specialDateForm"]}Year`
      ].value,
    };
  }

  isValidDay(day, month, year) {
    const now = new Date();
    const d = new Date(
      `${this.addZero(year, true)}-${this.addZero(month)}-${this.addZero(day)}`
    );
    const validDate = d instanceof Date && !isNaN(d.getTime());
    const dateChecker =
      validDate &&
      new Date(
        `${d.toISOString().split("T")[0]}T${
          now.toISOString().split("T").reverse()[0]
        }`
      );

    return dateChecker && dateChecker.getMonth() + 1 === month;
  }

  /**
   * @param type string --> calendar, day, month, year
   * @param key_ string --> the form control key
   */
  setDateFunc(key_, type = "calendar") {
    this.isBeingUsedDateContr = true;

    const theDate =
      type === "calendar" && this.componentForm.controls[key_].value
        ? new Date(this.componentForm.controls[key_].value)
        : new Date();
    const { day, month, year } = {
      day: theDate.getDate(),
      month: theDate.getMonth() + 1,
      year: theDate.getFullYear(),
    };

    const { day: theDay, month: theMonth, year: theYear } = this.getDates(key_);

    if (type !== "day" && day && (type === "calendar" || !theDay))
      this.componentForm
        .get(`${this.settings.formsContent[key_]["specialDateForm"]}Day`)
        .setValue(day);

    if (type !== "month" && month && (type === "calendar" || !theMonth))
      this.componentForm
        .get(`${this.settings.formsContent[key_]["specialDateForm"]}Month`)
        .setValue(month);

    if (type !== "year" && year && (type === "calendar" || !theYear))
      this.componentForm
        .get(`${this.settings.formsContent[key_]["specialDateForm"]}Year`)
        .setValue(year);

    if (type !== "calendar") {
      const { day: tDay, month: tMonth, year: tYear } = this.getDates(key_);

      let isValid = this.isValidDay(tDay, tMonth, tYear);

      const theWholeDate: string = `${this.addZero(tYear, true)}-${this.addZero(
        isValid
          ? tMonth
          : tMonth < 12
          ? type === "month"
            ? tMonth
            : tMonth + 1
          : type === "month"
          ? tMonth
          : 1
      )}-${this.addZero(isValid ? tDay : 1)}`;

      this.componentForm.get(key_).setValue(theWholeDate);

      if (!isValid) {
        if (tMonth && tDay)
          this.componentForm
            .get(`${this.settings.formsContent[key_]["specialDateForm"]}Day`)
            .setValue(1);
        if (tDay && tMonth)
          this.componentForm
            .get(`${this.settings.formsContent[key_]["specialDateForm"]}Month`)
            .setValue(
              tMonth < 12
                ? type === "month"
                  ? tMonth
                  : tMonth + 1
                : type === "month"
                ? tMonth
                : 1
            );
      }
    }

    this.isBeingUsedDateContr = false;
  }

  dateOnBlur(e, datePart: string) {
    if (
      !e ||
      (e &&
        (!e.target ||
          (e.target && !e.target.value) ||
          (e.target && e.target.value && !e.target.value.length)))
    ) {
      this.isBeingUsedDateContr = true;

      const key_ = this.specialDateContr().key;

      const { day: fDay, month: fMonth, year: fYear } = this.getDates(key_);

      let isValid = this.isValidDay(fDay, fMonth, fYear);
      if (!isValid) {
        if (datePart === "day")
          this.componentForm
            .get(`${this.settings.formsContent[key_]["specialDateForm"]}Day`)
            .setValue(1);
        if (datePart === "month")
          this.componentForm
            .get(`${this.settings.formsContent[key_]["specialDateForm"]}Month`)
            .setValue(1);
      }

      if (datePart === "year") {
        const now = new Date();
        this.componentForm
          .get(`${this.settings.formsContent[key_]["specialDateForm"]}Year`)
          .setValue(now.getFullYear());
      }

      const { day: lDay, month: lMonth, year: lYear } = this.getDates(key_);

      isValid = this.isValidDay(lDay, lMonth, lYear);

      if (isValid) {
        const theWholeDate: string = `${this.addZero(
          lYear,
          true
        )}-${this.addZero(lMonth)}-${this.addZero(lDay)}`;
        this.componentForm.get(key_).setValue(theWholeDate);
      }

      this.isBeingUsedDateContr = false;
    }
  }

  // callStates() {
  //   if (
  //     this.settings.formsContent["addressState"] && !this.statesLoaded && this.componentForm &&
  //     this.componentForm.value["addressMunicipality"] && this.componentForm.value["addressMunicipality"].length
  //   ) {
  //     const upStates = (states_all, isFetched) => {
  //       this.showSelectState = false;
  //       if (isFetched) this.stepsService.setResidenceStates([...states_all]);
  //       this.settings.formsContent["addressState"].options = states_all;
  //       setTimeout(() => {
  //         // this.fetchingResidenceInfo = false;
  //         this.stepsService.setIsCallingM(false);
  //         this.showSelectState = true;
  //         this.updateMuns(true, this.componentForm.value["addressMunicipality"]);
  //         this.statesLoaded = true;
  //       });
  //     };

  //     const states_ = this.stepsService.getResidenceStates();
  //     if (states_ && states_.length) upStates(states_,false);
  //     else
  //       this.subscription.add(
  //         /* this.states$ */this.stepsService.getStates().subscribe(({ records: states }) => {
  //           upStates(states,true);
  //         }, error => {
  //           // this.fetchingResidenceInfo = false;
  //           this.stepsService.setIsCallingM(false);
  //         })
  //       );
  //   }
  // }

  callTheMuns(makeCall = true) {
    if (makeCall) {
      this.stepsService.callMuns(true);
    }
  }

  // callMuns(makeCall = true) {
  //   if (makeCall) {
  //     // this.fetchingResidenceInfo = true;
  //     this.stepsService.setIsCallingM(true);

  //     const upMuns = (muns_, isFetched) => {
  //       if (isFetched) this.stepsService.setResidenceMuns([...muns_]);
  //       setTimeout(() => {
  //         this.settings.formsContent["addressMunicipality"].options = muns_;
  //         this.munsLoaded = true;
  //         this.callStates();
  //       });
  //     };

  //     const muns = this.stepsService.getResidenceMuns();
  //     if (muns && muns.length) upMuns(muns,false);
  //     else
  //       this.subscription.add(
  //         /* this.municipalities$ */this.stepsService.getMunicipalities().subscribe(({ records: municipalities }) => {
  //           upMuns(municipalities,true);
  //         }, error => {
  //           // this.fetchingResidenceInfo = false;
  //           this.stepsService.setIsCallingM(false);
  //         })
  //       );
  //   }
  // }

  btnUpdater(val, isEdited = false) {
    if (this.settings.buttonCode && isEdited) this.canTableSendFormData = false;

    this.globals.buttonDataUpdater({
      code: this.settings.buttonCode,
      whichData: "form",
      wasEdited: val ? true : false,
      form: val,
      formEdited: !this.canTableSendFormData ? true : false,
    });
  }

  /**
   * @returns [has form initial values boolean] and [is initial and final form object equal boolean]
   */
  private initialVsFinalFormDataComparer(): boolean[] {
    if (
      this.settings &&
      this.settings.formsContent &&
      this.settings.buttonCode &&
      this.componentForm &&
      this.componentForm.value &&
      Object.keys(this.componentForm.value).some(
        (cf_k) => this.settings.formsContent[cf_k]
      ) &&
      !this.formInitialVals[this.settings.buttonCode]
    )
      this.formInitialVals[this.settings.buttonCode] = {
        ...this.componentForm.value,
      };

    const isEqual =
      this.settings &&
      this.settings.buttonCode &&
      this.settings.buttonCode === "schoolDataConfigRegistroEscuela" &&
      this.formInitialVals[this.settings.buttonCode] &&
      this.componentForm &&
      this.componentForm.value
        ? Object.keys(this.formInitialVals[this.settings.buttonCode]).every(
            (iv_k) =>
              !this.componentForm.value[iv_k] ||
              typeof this.componentForm.value[iv_k] === "object"
                ? true
                : this.componentForm.value[iv_k] &&
                  this.componentForm.value[iv_k] ===
                    this.formInitialVals[this.settings.buttonCode][iv_k]
          )
        : false;

    const fi_v =
      this.settings && this.settings.buttonCode
        ? !this.formInitialVals[this.settings.buttonCode]
        : false;

    return [fi_v, isEqual];
  }

  formInModalBtnConditioner() {
    if (this.settings.isFromCustomTableActions) {
      if (this.settings.dataFromRow && this.settings.dataFromRow.showBtn)
        return true;
      else return false;
    } else return true;
  }

  isDirty(): boolean {
    const keys = Object.keys(this.componentForm.value);
    return keys.some((key) => {
      return key === "imageGroup"
        ? false
        : this.componentForm.controls[key].dirty;
    });
    // return this.componentForm.dirty
  }

  isReadOnly(): boolean {
    return (this.settings.isEditable && !this.isEditing) || this.isInApproval;
  }

  setSettings(settings: any) {
    settings.formsContent = this.addDatePickerConfigToFormsContent(
      settings.formsContent
    );
    this.settings = { ...settings };
    this.componentForm = this.buildFormGroup(settings.formsContent);
    this.loadGroupedInfo(settings);
    if (this.settings.data) this.setAllFields(this.settings.data);
  }

  addDatePickerConfigToFormsContent(formsContent: object) {
    return Object.keys(formsContent).reduce((prevObj, field) => {
      const fieldConfig = formsContent[field];
      if (fieldConfig.type === "date") {
        const pickerOptions = { ...this.datePickerOptions };
        if (fieldConfig.lower) {
          delete pickerOptions.minDate;
        } else {
          delete pickerOptions.maxDate;
        }
        return {
          ...prevObj,
          [field]: {
            ...fieldConfig,
            pickerOptions,
          },
        };
      }
      return {
        ...prevObj,
        [field]: fieldConfig,
      };
    }, {});
  }

  setData(data: any) {
    if (data.setContent) {
      data.contentToSet.map((attr) => {
        this.isContentRefreshing = true;
        //this.settings.formsContent[attr].options = data.data[attr];
        let isTeacherSelector = false;

        if (
          attr == "imageGroup" &&
          this.settings.formsContent["imageGroup"].fields["imageDocente"]
        ) {
          this.settings.formsContent["imageGroup"].fields[
            "imageDocente"
          ].options = data.data[attr].imageDocente;
        } else this.settings.formsContent[attr].options = data.data[attr];

        if (
          attr == "section" &&
          this.settings.formsContent["section"] &&
          this.settings.formsContent["section"].emmitSectionChange &&
          this.componentForm.controls["section"].value
        )
          this.componentForm.patchValue({ section: "" });

        if (
          attr == "grades" &&
          this.settings.formsContent["grades"] &&
          this.settings.formsContent["grades"].isGrades &&
          (this.componentForm.controls["grades"].value == "" ||
            !this.componentForm.dirty) &&
          this.settings.formsContent[attr].options.length > 0
        ) {
          this.componentForm.patchValue({
            // grades: this.settings.formsContent["grades"].options[0].id,
            grades: "", //! NEW
          });
          setTimeout(() => {
            this.setSchoolSections(true);
          });
        }

        setTimeout(() => {
          this.isContentRefreshing = false;
        });
      });
    }

    if (!this.isEdited) {
      if (!data.setContent) {
        this.settings.data = data;
        this.setAllFields(this.settings.data);
      }

      if (this.isDirty()) this.btnUpdater(this.componentForm.value);
    }

    this.settings.hiddenButton = data["hiddenButton"];
  }

  setFetcherUrls({ post, put, patch }) {
    this.settings.fetcherUrls = {
      post,
      put,
      patch,
    };
  }

  // for assigning unique id to this component instance -------------
  private setId() {
    if (!this.id_) this.id_ = Math.random().toString(36).substring(2);
  }

  getId(field) {
    return field + "-" + this.id_;
  }
  // ----------------------------------------------------------------

  private loadGroupedInfo(settings) {
    if (settings.formsContent["imageGroup"])
      this.componentForm.addControl(
        "imageGroup",
        this.buildGroupControl("imageGroup")
      );
    if (settings.formsContent["documentGroup"])
      this.componentForm.addControl(
        "documentGroup",
        this.buildGroupControl("documentGroup")
      );
  }

  private buildFormGroup(formContent: any): FormGroup {
    const formControls = this.getFormGroupControls(formContent);
    return this.fb.group(formControls);
  }

  private buildGroupControl(item_grouped): FormGroup {
    // for building formgroup for add image container
    const formControls = this.getFormControlProperty(item_grouped);
    return this.fb.group(formControls);
  }

  private getFormGroupControls(formContent): object {
    this.fields = Object.keys(formContent); // fields array to be looped for printing fields or titles

    let formContentNoTitles = [];
    this.fields.map((f) => {
      if (
        formContent[f].type != "title" &&
        formContent[f].type != "image" &&
        formContent[f].type != "prepend"
      ) {
        if (formContent[f].type === "double") {
          let fieldsArr = Object.keys(formContent[f].fields);
          formContentNoTitles.push(
            ...fieldsArr.map((field) => {
              return {
                field: field,
                parent: f,
              };
            })
          );
          this.doubleFields[f] = fieldsArr;
        } else {
          if (formContent[f].type === "date") this.wrongDateDisabler[f] = false;
          formContentNoTitles.push({
            field: f,
            parent: null, // means that this field is not a doubleFields field
          });
        }
      }
    });

    const formControls = this.reduceFormControls(
      formContentNoTitles,
      formContent,
      true
    );

    return formControls;
  }

  // RETURNS A FORMCONTROL OBJECT TO BE USED IN FORMGROUP
  private reduceFormControls(
    formContentFields,
    formContent,
    isMainContent = false
  ): Object {
    let formReduced = formContentFields.reduce(
      (formControlsObj, formControlName) => {
        return {
          ...formControlsObj,
          ...this.getFormControlProperty(
            isMainContent ? formControlName.field : formControlName,
            isMainContent
              ? formControlName.parent
                ? formContent[formControlName.parent].fields[
                    formControlName.field
                  ]
                : formContent[formControlName.field]
              : formContent[formControlName]
          ),
        };
      },
      {} // This is the initial formControlsObj
    );

    return formReduced;
  }

  private getFormControlProperty(
    name: string,
    params: { value: any; validations: object } = {
      value: null,
      validations: null,
    }
  ): object {
    let defaultValue =
      name === "imageSelected" || name === "imageSrc" ? null : "";
    // adding form control to Image or Document Group, when the form has images or Identification document to be added
    if (name === "imageGroup" || name === "documentGroup") {
      let itemGroupContent = Object.keys(
        this.settings.formsContent[name].fields
      );
      if (name === "imageGroup")
        itemGroupContent.push(...["imageSelected", "imageSrc"]);
      let formControls = this.reduceFormControls(
        itemGroupContent,
        this.settings.formsContent[name].fields
      );

      return formControls;
    } else {
      const isSpecialDate = params && params["specialDateForm"];
      let formControlStruct = {};
      if (!isNullOrUndefined(params.value)) defaultValue = params.value;
      if (
        isNullOrUndefined(params.validations) ||
        (Object.keys(params.validations).length === 1 &&
          !params.validations["required"])
      )
        formControlStruct = { [name]: [defaultValue] };
      else
        formControlStruct = {
          [name]: [defaultValue, this.getValidators(params.validations)],
        };

      return {
        ...formControlStruct,
        ...(isSpecialDate
          ? {
              [isSpecialDate + "Day"]: [null],
              [isSpecialDate + "Month"]: [null],
              [isSpecialDate + "Year"]: [null],
              [isSpecialDate + "InactiveInput"]: [null],
            }
          : {}),
      };
    }
  }

  private getValidators(validations: object): Validators {
    const fieldValidators = Object.keys(validations).map((validator) => {
      if (validator === "required") return Validators[validator];
      if (validator === "maxLength") {
        this.max_len = validations[validator][0];
        return Validators[validator](validations[validator][0]);
      } else return Validators[validator](validations[validator]);
    });

    return fieldValidators;
  }

  trackByFn(index: number): number {
    return index;
  }

  hasErrors(
    field: string,
    specialCase: boolean = false,
    field2: string = null,
    fromImg: boolean = false
  ): string | null {
    const errors: any = !specialCase
      ? this.componentForm.get(field).errors
      : !field2
      ? this.componentForm.controls[field].get("prependInput").errors
      : !fromImg
      ? this.componentForm.get(field2).errors
      : this.componentForm.controls["imageGroup"].get(field2).errors;
    if (errors) {
      return errors.required
        ? MESSAGES.REQUIRED_MESSAGE
        : errors.pattern || errors.minlength || errors.maxlength
        ? !specialCase
          ? this.settings.formsContent[field].messages.pattern
          : !field2
          ? errors.maxlength
            ? this.settings.formsContent[field].fields["prependInput"].messages
                .maxLength
            : this.settings.formsContent[field].fields["prependInput"].messages
                .pattern
          : !fromImg
          ? this.settings.formsContent[field].fields[field2].messages.pattern
          : this.settings.formsContent["imageGroup"].fields[field2].messages
              .pattern
        : null;
    }

    return null;
  }

  prevDef(e) {
    //PREVENTING SUBMITTING FORM WHEN ENTER KEY PRESSED IN TETAREA OR ONY BUTTON INSIDE FORM
    if (
      e.target.tagName.toLowerCase() !== "textarea" &&
      e.target.tagName.toLowerCase() !== "button"
    ) {
      e.preventDefault();
    }
  }

  // submitting forms
  onSubmitForm(cf: FormGroup) {
    //cf: component form
    const showErrorPassword =
      this.settings.formType === "actualizarPadrino" ||
      this.settings.formType === "actualizarEscuela" ||
      this.settings.formType === "actualizarCoordinador"
        ? cf.value.newPassword.length || cf.value.confirmPassword.length
          ? cf.value.newPassword === cf.value.confirmPassword
            ? false
            : true
          : false
        : false;

    this.sendingForm = true;
    let manageData = structureData(
      this.settings.formType,
      this.settings.formsContent,
      cf
    );

    if (this.settings.formType === "preparingWorkshopForm") {
      let date = cf.get("date").value;
      if (date instanceof Date) {
        manageData.data["workshopDate"] = this.globals.dateToISOString(date);
      } else if (typeof date === "string") {
        date = date.split("T")[0].replace(/-/g, "/");
        manageData.data["workshopDate"] = this.globals.dateToISOString(
          new Date(date)
        );
      }
    }

    if (this.settings.formType === "buscarEstudiante") {
      let date = cf.get("age").value;
      if (date instanceof Date) {
        manageData.data["age"] = this.globals.dateToISOString(date);
      } else if (typeof date === "string") {
        date = date.split("T")[0].replace(/-/g, "/");
        manageData.data["age"] = this.globals.dateToISOString(new Date(date));
      }
    }

    if (this.settings.formType === "actualizarCoordinador") {
      let date = cf.get("date").value;
      if (date instanceof Date) {
        manageData.data["birthdate"] = this.globals.dateToISOString(date);
      } else if (typeof date === "string") {
        date = date.split("T")[0].replace(/-/g, "/");
        manageData.data["birthdate"] = this.globals.dateToISOString(
          new Date(date)
        );
      }
      if (this.imageUrl) manageData.data["image"] = this.imageUrl;
    }

    if (this.settings.formType === "actualizarPadrino") {
      if (this.imageUrl) manageData.data["image"] = this.imageUrl;
    }

    if (this.settings.formType === "actualizarEscuela") {
      if (this.imageUrl) manageData.data["image"] = this.imageUrl;
    }

    const assignId = () => Math.random().toString(36).substring(2);
    if (this.settings.isFromCustomTableActions) {
      if (this.settings.data) {
        this.settings.dataFromRow.data.newData = {
          ...this.settings.dataFromRow.data.newData,
          ...manageData.data,
        };
        this.settings.dataFromRow.data.newData["id"] =
          this.settings.dataFromRow.data.oldData["id"];
      } else {
        // is for adding in modal view
        this.settings.dataFromRow["data"] = manageData.data;
        this.settings.dataFromRow["data"]["id"] = `auto-${assignId()}`;
      }
    } else {
      if (!this.settings.notGenerateId)
        manageData.data["id"] = `auto-${assignId()}`;
    }

    let obj = {
      code: this.settings.tableCode,
      data: this.settings.isFromCustomTableActions
        ? this.settings.dataFromRow.data
        : manageData.data,
      dataArr: [],
      resetData: false,
      action: this.settings.isFromCustomTableActions
        ? this.settings.data
          ? "edit"
          : "add"
        : "set",
    };

    const commonTasks = () => {
      this.sendingForm = false;

      if (manageData.isThereTable) this.globals.tableDataUpdater(obj);

      if (this.settings.modalCode)
        this.globals.ModalHider(this.settings.modalCode);

      // initializers
      if (!this.settings.notResetForm) {
        cf.reset();
        if (this.settings.formsContent["documentGroup"])
          cf.controls["documentGroup"].get("prependSelect").setValue("1");
        this.municipalities = [];
        Object.keys(this.wrongDateDisabler).map((f) => {
          this.wrongDateDisabler[f] = false;
        });
        this.showDatePicker = false;
        setTimeout(() => {
          this.showDatePicker = true;
        });
      }
      //

      this.isEditing = false;
    };

    if (this.settings.makesNoRequest) commonTasks();
    else {
      if (this.settings.onSubmit instanceof Function) {
        const body = this.settings.isFromCustomTableActions
          ? obj.data.newData
          : obj.data;
        this.settings.onSubmit(body);
        return (this.sendingForm = false);
      }

      // console.log("this.settings.methodUrlPlus: ", this.settings.methodUrlPlus);
      const method = this.settings.fetcherMethod || "post";
      const resourcePath = this.settings.methodUrlPlus
        ? `${this.settings.fetcherUrls[method]}/${
            manageData.data[this.settings.methodUrlPlus]
          }`
        : this.settings.fetcherUrls[method];

      if (this.settings.tableCode)
        this.globals.setAsReadOnly(this.settings.tableCode, true, false);
      const body = adaptBody(
        this.settings.formType,
        this.settings.isFromCustomTableActions ? obj.data.newData : obj.data
      );

      if (showErrorPassword) {
        this.sendingForm = false;
        this.toastr.error("La confirmación de la contraseña no coincide", "", {
          positionClass: "toast-bottom-right",
        });
      } else
        this.fetcher[method](resourcePath, body).subscribe(
          (response) => {
            commonTasks();
            if (this.settings.tableCode)
              this.globals.setAsReadOnly(this.settings.tableCode, false, false);

            this.toastr.success("Suministrado con éxito", "", {
              positionClass: "toast-bottom-right",
            });

            if (this.pecaId)
              this.store.dispatch([new FetchPecaContent(this.pecaId)]);

            if (
              this.settings.formType === "actualizarCoordinador" ||
              this.settings.formType === "actualizarEscuela" ||
              this.settings.formType === "actualizarPadrino"
            ) {
              //Do the consult to the endpoint which bring me the data of specific user
              this.fetcher
                .get(
                  `users/${this.settings.data["id"]}?userType=${this.settings.data["userType"]}`
                )
                .subscribe(
                  (respuesta) => {
                    // within the answer I send the content to the SetUser::
                    this.store.dispatch([new SetUser(respuesta)]);
                  },
                  (error) => {
                    console.log(error);
                  }
                );
            }
          },
          (error) => {
            const {
              error: { message },
            } = error;

            const error_msg =
              error.error && error.error instanceof ProgressEvent
                ? "Puede que tenga problemas con su conexión a internet, verifique e intente nuevamente"
                : message &&
                  typeof message === "string" &&
                  message.toLowerCase() === "invalid image format"
                ? "Ocurrió un problema al procesar la(s) imágen(es)"
                : "Ha ocurrido un problema con el servidor, por favor intente de nuevo más tarde";

            this.sendingForm = false;
            if (this.settings.tableCode)
              this.globals.setAsReadOnly(this.settings.tableCode, false, false);

            this.toastr.error(
              // errorType!="regular"
              error.error && error.error["name"] && error.error["name"][0]
                ? error.error["name"][0].msg
                : error.error && error.error["email"] && error.error["email"][0]
                ? error.error["email"][0].msg
                : error.error &&
                  error.error["cardId"] &&
                  error.error["cardId"][0]
                ? error.error["cardId"][0].msg
                : error.error && error.error["msg"]
                ? error.error["msg"]
                : error_msg,
              "",
              { positionClass: "toast-bottom-right" }
            );
            console.error(error);
          }
        );
    }
  }

  // filling municipalities according to selected state
  private fillMunicipalities(state_id = "default", munId = "") {
    if (
      state_id == "default" ||
      !this.settings.formsContent["addressMunicipality"]
    )
      this.municipalities = [];
    else {
      setTimeout(() => {
        this.municipalities = this.settings.formsContent[
          "addressMunicipality"
        ].options.filter((m) => {
          return m.state.id == state_id;
        });
      });
    }

    this.componentForm.patchValue({ addressMunicipality: munId });
  }
  // UPDATES MUNICIPALITIES ACCORDING TO SELECTED STATE
  updateMuns(bool: boolean = true, munId: string = "") {
    if (bool) {
      let currStateId = "default";
      currStateId =
        this.componentForm.controls["addressState"].value &&
        this.componentForm.controls["addressState"].value.length > 0
          ? this.componentForm.controls["addressState"].value
          : "default";

      this.fillMunicipalities(currStateId, munId);
    }
  }

  requiredOtherCompany(e: any) {
    if (e) {
      if (e.id == "0") {
        this.componentForm.setControl(
          "companyOtherType",
          this.fb.control(
            this.componentForm.get("companyOtherType").value,
            Validators.required
          )
        );
      } else {
        this.componentForm.setControl(
          "companyOtherType",
          this.fb.control(this.componentForm.get("companyOtherType").value)
        );
      }
    }
  }

  maxLenChanger(e: any, validts: any, field: string, subField: string) {
    if (e && validts && validts.maxLength) {
      //
      const updateCF = (pos) => {
        this.max_len = validts.maxLength[pos];
        const prependInputValidators = Object.keys(validts).map((validator) => {
          if (validator === "required") return Validators[validator];
          if (validator === "maxLength")
            return Validators[validator](validts[validator][pos]);
          else return Validators[validator](validts[validator]);
        });

        this.componentForm.controls[field].get(subField).clearValidators();
        this.componentForm.controls[field]
          .get(subField)
          .setValidators(prependInputValidators);
        this.componentForm.controls[field]
          .get(subField)
          .updateValueAndValidity();
      };
      //
      if (e.id == "1") updateCF(0);
      else updateCF(1);
    }
  }

  focusDatePicker(e) {
    e.focus();
  }

  disableBtn() {
    let disMathTableFormEdit = null;
    let shouldDis = false;

    if (this.settings.specialValidateSaveButton) {
      disMathTableFormEdit =
        this.componentForm.controls["resultMul"].value ||
        this.componentForm.controls["resultLog"].value;
      if (
        !disMathTableFormEdit ||
        (typeof disMathTableFormEdit === "string" &&
          !disMathTableFormEdit.length)
      )
        shouldDis = true;
    }

    return (
      shouldDis ||
      !this.componentForm.valid ||
      this.sendingForm ||
      this.isDateNotOk()
    );
  }

  getStudentsCount() {
    const count = JSON.parse(localStorage.getItem("stud_data")).length;
    return count <= 0;
  }

  disableBtnWithDate() {
    return !this.componentForm.valid || this.sendingForm || this.isDateNotOk();
  }

  // CHECKS IF THE CURRENT FORMcONTENT ITEM IS FOR PRINTING A FIELD (TRUE), FALSE --> IMAGE_GROUP || TITLE
  isField(field) {
    return (
      this.settings.formsContent[field].type != "title" &&
      this.settings.formsContent[field].type != "image"
    );
  }

  // wrong date save button enabler/disabler
  checkDateOk(e, mode, f, notE: boolean = false) {
    const value = !notE ? e.target.value === "" : e === "";
    const years = this.settings.formsContent[f].validationPerYears ? 3 : 0;

    if (e instanceof Date) {
      e = e.toISOString().split("T")[0];
    }
    const isNotValidDate = this.globals.validateDate(
      e,
      mode,
      true,
      notE,
      years
    );
    if (isNotValidDate || value) this.wrongDateDisabler[f] = false;
    else this.wrongDateDisabler[f] = true;
    return isNotValidDate;
  }

  isDateNotOk() {
    // for button specifically
    let bool = false;
    Object.keys(this.wrongDateDisabler).map((f) => {
      if (!this.wrongDateDisabler[f]) bool = true;
    });
    if (bool) return true;
    else return false;
  }
  // ---------------------------------------

  //? FOR IMAGE MANAGING ----------------------------------------------------------------
  // activate click function of the input type file button which calls for the image
  uploadImageCaller(imgBtnContainer) {
    imgBtnContainer.querySelectorAll('input[type="file"]')[0].click();
  }
  // adds the image file and image source to the imageGroup form control
  fileManager(e) {
    let reader = new FileReader();
    reader.readAsDataURL(<File>e.target.files[0]);
    reader.onload = (_event) => {
      this.sendNull = false;
      this.componentForm.get("imageGroup").patchValue({
        imageSelected: <File>e.target.files[0],
        imageSrc: reader.result,
      });
      setTimeout(() => {
        this.sendNull = true;
        e.target.value = null;
      });
    };
  }
  // to disable add image button when conditions apply
  disableAddImgBtn() {
    return (
      (this.componentForm.controls["imageGroup"].get("imageDocente") &&
        (this.componentForm.controls["imageGroup"].get("imageDocente").value ===
          "" ||
          !this.componentForm.controls["imageGroup"].get("imageDocente")
            .value)) ||
      (this.componentForm.controls["imageGroup"].get("imageCargo") &&
        this.componentForm.controls["imageGroup"].get("imageCargo").value ===
          "") ||
      (this.componentForm.controls["imageGroup"].get("imageDescription") &&
        this.componentForm.controls["imageGroup"].get("imageDescription")
          .value === "") ||
      (this.componentForm.controls["imageGroup"].get("imageStatus") &&
        (this.componentForm.controls["imageGroup"].get("imageStatus").value ===
          "" ||
          !this.componentForm.controls["imageGroup"].get("imageStatus")
            .value)) ||
      (this.componentForm.controls["imageGroup"].get("imageSelected") &&
        !this.componentForm.controls["imageGroup"].get("imageSelected").value)
    );
  }
  // shows image when some uploaded
  showImage(option: number) {
    switch (option) {
      case 1:
        return (
          this.componentForm.controls["imageGroup"].get("imageSelected")
            .value ||
          this.componentForm.controls["imageGroup"].get("imageSrc").value
        );
      case 2:
        return this.sanitizer.bypassSecurityTrustResourceUrl(
          this.componentForm.controls["imageGroup"].get("imageSrc").value
        );
      default:
        return this.componentForm.controls["imageGroup"].value["imageSelected"]
          ? this.componentForm.controls["imageGroup"].get("imageSelected").value
              .name
          : "image";
    }
  }
  // when X image remover is clicked
  removeSelectedImg() {
    this.componentForm.controls["imageGroup"].get("imageSelected").reset();
    this.componentForm.controls["imageGroup"].get("imageSrc").reset();
  }

  imageObjWithAvailableFields() {
    const imgGrp = this.componentForm.controls["imageGroup"];

    let obj = {};

    if (imgGrp.get("imageDescription"))
      obj["description"] = imgGrp.get("imageDescription").value;
    if (imgGrp.get("imageStatus")) {
      obj["state"] = imgGrp.get("imageStatus").value;
      obj["status"] = "En espera";
    }

    return obj;
  }
  // method which sends image to the images table
  addImage(addImg: boolean = true) {
    const imgGrp = this.componentForm.controls["imageGroup"];

    if (this.settings.onAddImage instanceof Function) {
      const image = {
        id: `auto-${Math.random().toString(36).substring(2)}`,
        // image: imgGrp.get("imageSelected").value.name,
        // image: imgGrp.get("imageSrc").value,
        source: imgGrp.get("imageSrc").value,
        imageSelected: imgGrp.get("imageSelected").value,
        ...this.imageObjWithAvailableFields(),
      };
      this.settings.onAddImage(image);
    }

    if (!addImg) this.showSelectTeacher = false;

    let imageObj = {
      code: this.settings.tableCode,
      data: addImg
        ? {
            id: `auto-${Math.random().toString(36).substring(2)}`,
            // image: imgGrp.get("imageSelected").value.name,
            image: imgGrp.get("imageSrc").value,
            source: imgGrp.get("imageSrc").value,
            imageSelected: imgGrp.get("imageSelected").value,
            ...this.imageObjWithAvailableFields(),
          }
        : {
            id: this.settings.formsContent["imageGroup"].fields[
              "imageDocente"
            ].options
              .find((d) => {
                return d.id === imgGrp.get("imageDocente").value;
              })
              .id.toString(),
            name: this.settings.formsContent["imageGroup"].fields[
              "imageDocente"
            ].options.find((d) => {
              return d.id === imgGrp.get("imageDocente").value;
            }).name,
            lastName: this.settings.formsContent["imageGroup"].fields[
              "imageDocente"
            ].options.find((d) => {
              return d.id === imgGrp.get("imageDocente").value;
            }).lastName,
            cargo: imgGrp.get("imageCargo").value,
            description: imgGrp.get("imageDescription").value,
            // addressState: this.settings.formsContent["imageGroup"].fields[
            //   "imageDocente"
            // ].options.find(d => {
            //   return d.id === imgGrp.get("imageDocente").value;
            // }).addressState,
            // status: imgGrp.get("imageStatus").value,
            source: imgGrp.get("imageSrc").value,
            imageSelected: imgGrp.get("imageSelected").value,
          },
      action: "add",
    };

    this.globals.tableDataUpdater(imageObj);
    if (addImg) {
      // this.sendNull = false;
      this.someImgAdded = true;
      this.componentForm.get("imageGroup").reset();
      if (
        this.componentForm.value["imageGroup"] &&
        this.componentForm.controls["imageGroup"].value["imageDescription"]
      )
        this.componentForm
          .get("imageGroup")
          .get("imageDescription")
          .setValue("");
      // setTimeout(() => {
      //   this.sendNull = true;
      // });
    } else {
      const inx = this.settings.formsContent["imageGroup"].fields[
        "imageDocente"
      ].options.findIndex((d) => {
        return d.id === imgGrp.get("imageDocente").value;
      });
      if (inx != -1)
        this.settings.formsContent["imageGroup"].fields[
          "imageDocente"
        ].options.splice(inx, 1);
      this.componentForm.reset();
      setTimeout(() => {
        this.showSelectTeacher = true;
      });
    }
  }
  //? -----------------------------------------------------------------------------------

  // setting inputs data
  setAllFields(data) {
    const dataKeys = Object.keys(data);

    if (data.isInApproval) this.isInApproval = data.isInApproval;
    else this.isInApproval = false;

    dataKeys.map((key) => {
      if (
        (key == "imageGroup" && this.settings.formsContent["imageGroup"]) ||
        (key == "documentGroup" && this.settings.formsContent["documentGroup"])
      )
        this.componentForm.get(key).setValue({ ...data[key] });
      else if (this.settings.formsContent[key]) {
        if (key == "addressMunicipality") this.updateMuns(true, data[key]);
        else if (this.settings.formsContent[key].type === "date") {
          // if 'Z' comes in the date format it gets removed
          if (data[key]) {
            const isSpecialDate =
              this.settings.formsContent &&
              this.settings.formsContent[key] &&
              this.settings.formsContent[key]["specialDateForm"];
            const dateKey = this.globals.getDateFormat(
              new Date(data[key].replace("Z", ""))
            );
            const dNow = new Date();
            const theDate = new Date(
              `${dateKey}T${dNow.toISOString().split("T")[1]}`
            );

            this.componentForm.patchValue({
              [key]: dateKey,
              ...(isSpecialDate
                ? {
                    [isSpecialDate + "Day"]: theDate.getDate(),
                    [isSpecialDate + "Month"]: theDate.getMonth() + 1,
                    [isSpecialDate + "Year"]: theDate.getFullYear(),
                    [isSpecialDate + "InactiveInput"]: `${this.addZero(
                      theDate.getDate()
                    )}-${this.addZero(
                      theDate.getMonth() + 1
                    )}-${theDate.getFullYear()}`,
                  }
                : {}),
            });
            this.checkDateOk(
              dateKey,
              this.settings.formsContent[key]["lower"] ? "lower" : "greater",
              key,
              true
            );
          }
        } else if (this.settings.formsContent[key].type === "double") {
          this.componentForm.patchValue({ ...data[key] });
        } else this.componentForm.patchValue({ [key]: data[key] });
      }
    });
    // this.componentForm.setValue(data);
  }

  //? turning imageGroup fields into array
  imageFieldsArr(fields) {
    return Object.keys(fields);
  }
  enableSaveAndCancelButtons() {
    this.isEditing = true;
  }
  disableSaveAndCancelButtons() {
    this.isEditing = false;
  }

  // filling sections according to selected grade
  private async fillSections(grade = null) {
    if (grade === "all") {
      // ignorar filtro para exportar todos los usuarios
      // await this.exportAll();
      this.handleVariosGrados();
      this.sectionsArr = [];
      console.log("docenteFormBLock", this.fields);
      this.componentForm.patchValue({ section: "" });
      return;
    }
    if (!grade) {
      this.sectionsArr = [];
      this.componentForm.patchValue({ section: "" });
    } else {
      this.gradesArr = [];
      this.sectionsArr = this.settings.formsContent["section"].options.filter(
        (s) => {
          console.log("docenteFormBLock", this.fields);
          return s.grade == grade;
        }
      );
      // console.log("sections array: ", this.settings.formsContent["section"]);
      this.componentForm.patchValue({
        section: this.sectionsArr[0].id,
      });
    }
    this.studentsData = JSON.parse(localStorage.getItem("stud_data"));
    this.studentsCount = this.studentsData.length;
  }
  // managing sections depending on grades
  setSchoolSections(e) {
    if (e) {
      let currGrade = null;
      currGrade =
        this.componentForm.controls["grades"].value &&
        this.componentForm.controls["grades"].value.length > 0
          ? this.componentForm.controls["grades"].value
          : null;
      this.fillSections(currGrade);
    } else this.fillSections();
  }

  setActiveSection(sectionId) {
    let index = 0;
    this.sectionsArr.forEach((section, idx) => {
      if (section.id === sectionId) {
        index = idx;
      }
    });
    this.activeSection = index;
    return;
  }

  // managing sections depending on grades
  setSchoolSectionsModal(e) {
    this.sectionsToExport = [];
    if (e) {
      let currGrade = null;
      // console.log("docenteFormBLock", this.fields);
      currGrade =
        this.componentForm.controls["grades"].value &&
        this.componentForm.controls["grades"].value.length > 0
          ? this.componentForm.controls["grades"].value
          : null;
      this.fillSections(currGrade);
      const markedCheckbox = document.querySelectorAll(
        'input[type="checkbox"]'
      );
      markedCheckbox.forEach((checkbox: HTMLInputElement) => {
        checkbox.checked = false;
        checkbox.disabled = false;
      });
      this.showExportBtn = false;
    } else {
      this.fillSections();
      this.sectionsToExport.forEach((sectionId) => {
        const sectionCheckbox = document.getElementById(
          sectionId
        ) as HTMLInputElement;
        sectionCheckbox.checked = false;
      });
    }
  }

  selectSection(section, toExport) {
    this.gradesArr = [];
    // Habilitar descarga de todas las secciones
    if (section === "all" && toExport) {
      // console.log("docenteFormBLock", this.fields);
      const markedCheckbox = document.querySelectorAll(
        'input[type="checkbox"]'
      );
      markedCheckbox.forEach((checkbox: HTMLInputElement) => {
        if (checkbox.id !== "allSections") {
          checkbox.checked = true;
          checkbox.disabled = true;
        }
      });
      this.sectionsToExport = this.sectionsArr.map((section) => section.id);
      // Deshabilitar descarga de todas las secciones
    } else if (section === "all" && !toExport) {
      const markedCheckbox = document.querySelectorAll(
        'input[type="checkbox"]'
      );
      markedCheckbox.forEach((checkbox: HTMLInputElement) => {
        checkbox.checked = false;
        checkbox.disabled = false;
      });
      this.sectionsToExport = [];
    } else {
      // Descarga de secciones individuales
      const sectionIndex = this.sectionsToExport.indexOf(section);
      const alreadyExist = sectionIndex > -1;
      // Pop section at index
      if (alreadyExist && !toExport) {
        this.sectionsToExport.splice(sectionIndex, 1);
      }
      // Push section
      if (!alreadyExist && toExport) {
        this.sectionsToExport.push(section);
      }
      if (!this.sectionsToExport.length) {
        this.showExportBtn = false;
      }
    }

    if (!this.sectionsToExport.length) {
      this.showExportBtn = false;
    } else {
      this.showExportBtn = true;
    }
  }

  makeExcelExport(studentsData) {
    const workbook = XLSX.utils.book_new();
    workbook.Props = {
      Title: `Data de estudiantes - ${
        this.sectionsArr[this.activeSection]?.name
      }`,
      Subject: "Data",
      Author: "Amblema",
      CreatedDate: new Date(Date.now()),
    };
    workbook.SheetNames.push("Data de estudiantes");
    const columns_header = [
      "Nombre",
      "Apellido",
      "Tipo de documento",
      "Documento de identidad",
      "Fecha de nacimiento",
      "Género",
      "Grado",
      "Sección",
    ];
    let matrix = [];
    let row_aux = [];
    let genero = "";
    let fecha = "";
    for (let count = 1, i = 0; count <= studentsData.length; count++, i++) {
      genero = parseInt(studentsData[i]?.gender) === 1 ? "F" : "M";
      fecha = new Date(studentsData[i]?.birthdate)
        .toLocaleDateString("es-VE")
        .split("/")
        .join("-");

      const cardType = parseInt(studentsData[i]?.cardType);
      const data = [
        studentsData[i]?.firstName || "",
        studentsData[i]?.lastName || "",
        cardType === 2 ? "E" : "V", // TODO: check this
        studentsData[i]?.cardId || "",
        fecha,
        genero,
        studentsData[i]?.grades || "",
        studentsData[i].section || "",
      ];
      row_aux.push(data);
    }
    matrix.push(columns_header);
    row_aux.forEach((student) => matrix.push(student));

    const columns = XLSX.utils.aoa_to_sheet(matrix);
    workbook.Sheets["Data de estudiantes"] = columns;

    /* Exportar workbook como binario para descarga */
    const workbookBinary = XLSX.write(workbook, {
      type: "binary",
      bookType: "xls",
    });
    return workbookBinary;
  }

  parseGrade(grades) {
    let grado;
    switch (grades) {
      case "0":
        grado = "Preescolar";
        break;
      case "1":
        grado = "1er grado";
        break;
      case "2":
        grado = "2do grado";
        break;
      case "3":
        grado = "3er grado";
        break;
      case "4":
        grado = "4to grado";
        break;
      case "5":
        grado = "5to grado";
        break;
      case "6":
        grado = "6to grado";
        break;
      default:
        grado = "";
    }
    return grado;
  }

  async exportSections() {
    const resourcePath = `section/load/${this.pecaId}`;
    const sections = this.sectionsToExport;
    const body = {
      action: "export",
      sections,
    };
    try {
      const result = await this.fetcher.post(resourcePath, body).toPromise();
      const students = [];
      if (result.status_code === 201) {
        this.toastr.success(result.message, "", {
          positionClass: "toast-bottom-right",
        });
        result.sections.forEach((section) => {
          section.students.forEach((student) => {
            students.push({
              ...student,
              grades: section.grade,
              section: section.name,
            });
          });
        });
      }
      const workbookBin = this.makeExcelExport(students);
      const octetStream = this.binary2octet(workbookBin);
      saveAs(
        new Blob([octetStream], { type: "application/octet-stream" }),
        `Data de estudiantes - ${this.parseGrade(
          this.componentForm.controls["grades"].value
        )}.xls`
      );
      if (!this.gradesArr) {
        this.sectionsToExport.forEach((sectionId) => {
          const sectionCheckbox = document.getElementById(
            sectionId
          ) as HTMLInputElement;
          sectionCheckbox.checked = false;
        });
      }

      const markedCheckbox = document.querySelectorAll(
        'input[type="checkbox"]'
      );

      markedCheckbox.forEach((checkbox: HTMLInputElement) => {
        checkbox.checked = false;
        checkbox.disabled = false;
      });
      this.showExportBtn = false;
      this.sectionsToExport = [];
    } catch (err) {
      console.log("error: ", err);
      throw err;
    }
  }

  async exportAll() {
    const resourcePath = `section/load/${this.pecaId}`;
    const allSections = this.settings.formsContent["section"].options;
    const sectionsIds = allSections.map((section) => section.id);
    let sectionsMapped = {};

    allSections.forEach((section) => {
      sectionsMapped = { ...sectionsMapped, [`${section.id}`]: section.grade };
    });
    const body = {
      action: "export",
      sections: sectionsIds,
    };
    try {
      const result = await this.fetcher.post(resourcePath, body).toPromise();
      const students = [];
      if (result.status_code === 201) {
        this.toastr.success(result.message, "", {
          positionClass: "toast-bottom-right",
        });
        result.sections.forEach((section) => {
          section.students.forEach((student) => {
            students.push({
              ...student,
              grades: sectionsMapped[`${section.id}`],
              section: section.name,
            });
          });
        });

        const workbookBin = this.makeExcelExport(students);
        const octetStream = this.binary2octet(workbookBin);
        saveAs(
          new Blob([octetStream], { type: "application/octet-stream" }),
          `Data de estudiantes - TODOS.xls`
        );

        this.showExportBtn = false;
        this.showExportModal = false;
        this.componentForm.reset();
      }
    } catch (err) {
      console.log("error: ", err);
      throw err;
    }
  }

  handleVariosGrados() {
    const allGrades = this.settings.formsContent["section"].options.map(
      (section) => section.grade
    );
    console.log("grades: ", allGrades);
    const grades = [];
    allGrades.forEach((grade) => {
      if (grades.includes(grade)) {
        return;
      } else {
        grades.push(grade);
      }
    });
    const gradesData = grades.map((grade) => {
      return {
        id: grade,
        name: this.parseGrade(grade),
      };
    });
    // console.log("GRADES: ", gradesData);
    this.gradesArr = gradesData;
  }

  getGrades() {
    return this.settings.formsContent["grades"].options;
  }

  async selectGrades(grade, toExport) {
    // Habilitar descarga de todas las secciones
    if (grade === "all" && toExport) {
      const markedCheckbox = document.querySelectorAll(
        'input[type="checkbox"]'
      );
      markedCheckbox.forEach((checkbox: HTMLInputElement) => {
        if (checkbox.id !== "allGrades") {
          checkbox.checked = true;
          checkbox.disabled = true;
        }
      });
      if ((this.sectionsToExport = this.settings.formsContent["section"])) {
        this.sectionsToExport = this.settings.formsContent[
          "section"
        ].options.map((section) => {
          return section.id;
        });
      }

      // Deshabilitar descarga de todas las secciones
    } else if (grade === "all" && !toExport) {
      const markedCheckbox = document.querySelectorAll(
        'input[type="checkbox"]'
      );
      // console.log("checkbox: ", markedCheckbox);
      markedCheckbox.forEach((checkbox: HTMLInputElement) => {
        checkbox.checked = false;
        checkbox.disabled = false;
      });
      this.sectionsToExport = [];
    } else {
      // Descarga de secciones individuales
      const sectionsFounded = this.settings.formsContent[
        "section"
      ].options.filter((section) => section.grade === grade);
      sectionsFounded.forEach((section) => {
        const sectionIndex = this.sectionsToExport.indexOf(section.id);
        const alreadyExist = sectionIndex > -1;
        // Pop section at index
        if (alreadyExist && !toExport) {
          this.sectionsToExport.splice(sectionIndex, 1);
        }
        // Push section
        if (!alreadyExist && toExport) {
          this.sectionsToExport.push(section.id);
        }
        if (!this.sectionsToExport.length) {
          this.showExportBtn = false;
        }
      });
    }
    // console.log("sections to export: ", this.sectionsToExport);
    if (!this.sectionsToExport.length) {
      this.showExportBtn = false;
    } else {
      this.showExportBtn = true;
    }
  }

  async selectGradesChangesLots(toMarkAll = false) {
    const checkboxes = this.getCheckboxes();

    console.log("selectGradesChangesLots", checkboxes);
    const isEveryChecked = this.isCheckboxChecked(false);

    console.log("Every", this.isCheckboxChecked(false));
    // console.log("this.isCheckboxChecked()", this.isCheckboxChecked());

    if (toMarkAll) {
      checkboxes.forEach((checkbox: HTMLInputElement) => {
        checkbox.checked = !isEveryChecked;
      });
    }
  }

  private getCheckboxes() {
    return document.querySelectorAll('.list-checkbox input[type="checkbox"]');
  }

  isCheckboxChecked(lookSome = true) {
    const markedCheckboxes = document.querySelectorAll(
      '.list-checkbox input[type="checkbox"]'
    );

    const checkboxStates = [];

    markedCheckboxes.forEach((checkbox: HTMLInputElement) => {
      checkboxStates.push(checkbox.checked);
    });

    // console.log("checkboxStates", checkboxStates);
    if (!lookSome) {
      return checkboxStates.every((checkboxState) => {
        return checkboxState === true;
      });
    }

    return checkboxStates.some((checkboxState) => {
      return checkboxState;
    });
  }

  addStudentsToOlimpicMath() {
    const checkboxes = this.getCheckboxes();
    const checkboxesChecked = [];

    checkboxes.forEach((checkbox: HTMLInputElement) => {
      if (checkbox.checked) {
        checkboxesChecked.push(checkbox);
      }
    });
  }

  /**
   * @description Register of forms (Forms Class) and get just initialized forms class to set settings
   * @author Christopher Dallar
   * @date 23/02/2022
   * @memberof FormBlockComponent
   */
  initForm() {
    const { formId, formsContent } = this.settings; // settings from file view config.ts like school-data-config.ts

    // Forms List waiting for init just adding to the array
    const forms = [
      new docenteFormBLock(
        "add-docente", // Set unique string to identify the form
        {
          formId, // Pass current formId that instanced form-block component
          defaultData: formsContent, // The pre-settings
        },
        { fetcher: this.fetcher } // Dependencies
      ),
    ];

    // Get the form (Form Class) which was initialized
    this.currentForm = forms.find((form) => {
      return form.isInit;
    });

    // If there is an Form (Form Class) initialized
    if (this.currentForm) {
      this.settings.formsContent = this.currentForm.getFields(); // Get the fields for set to global form settings
    }
  }
}

/**
 * @description This class represent an Form to be render, extending from FormBLock.
 * The main idea is manage (settings, request to fill options or anything) each form
 * grouping code by classes to get a clean order
 * @author Christopher Dallar
 * @date 23/02/2022
 * @class docenteFormBLock
 * @extends {FormBlock}
 * @implements {FormBlockAbstract}
 */
class docenteFormBLock extends FormBlock implements FormBlockAbstract {
  constructor(
    id: string | number,
    options: FormBlockOptions,
    dep?: { fetcher: HttpFetcherService }
  ) {
    super(id, options, dep);
  }

  // Always you have to set a init method, it recibe all method to manage (settings, request to fill options or anything) the form
  init() {
    this.fields = this.defaultData; // set Fields

    this.body();
    // console.log("docenteFormBLock", this.fields);
  }

  // setting and fill options for the fields
  async body() {
    let specialTyOp: FormBlockFieldOption[] = [];
    let specialtiesApi = await this.dep["fetcher"].get("specialty").toPromise(); // get option from api

    // Adapt request to options field object structure {id: string, name: string}
    specialTyOp = specialtiesApi.records.map((specialtyApi) => {
      const { id, name } = specialtyApi;
      return { id, name };
    });

    this.fillSelect("specialty", specialTyOp); // Set array options to the field "specialty"
  }
}
