import {
  Injectable,
  PLATFORM_ID,
  Inject,
  EventEmitter,
  Output
} from "@angular/core"; //! quitar EventEmitter y Output
import { isPlatformBrowser, Location } from "@angular/common";
import { Title, Meta } from "@angular/platform-browser";
import * as $ from "jquery";
import { PageBlockComponent } from "../peca/peca-page/blocks/page-block.component";

@Injectable({
  providedIn: "root"
})
export class GlobalService {
  vh = 0;
  vw = 0;

  user_agent: string = "";
  setcountry: string = "";
  totFrees: string = "";

  mounted_comps = [];
  show = false;

  //todo------URL VARS-----------------
  useCounP: boolean = false;
  ccode: string = "";
  //todo-------------------------------

  isBrowser;

  constructor(
    @Inject(PLATFORM_ID) private platformId,
    private titleService: Title,
    private metaService: Meta,
    private location: Location
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  emitCountryName(countryname: string, code: string) {
    this.setcountry = countryname;
    this.ccode = code;
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  setMetaTags(metatags) {
    metatags.map(metatag => {
      const attributeSelector = metatag.name
        ? `name="${metatag.name}"`
        : `property="${metatag.property}"`;
      this.metaService.removeTag(attributeSelector);
      this.metaService.addTag(metatag, false);
    });
  }

  setTags(tags) {
    this.metaService.addTags(tags);
  }

  getTitle() {
    return this.titleService.getTitle();
  }
  mngTags(tags) {
    for (let i = 0; i < tags.length; i++) {
      if (this.metaService.getTag(`name='${tags[i].name}'`)) {
        this.metaService.updateTag(tags[i]);
      } else {
        this.metaService.addTag(tags[i]);
      }
    }
  }

  setHeight(id) {
    if (this.isBrowser) {
      this.vh = window.innerHeight;
      this.vw = window.innerWidth;
      if (document.getElementById(id)) {
        document
          .getElementById(id)
          .setAttribute("style", `min-height:${this.vh}px`);
      }
    }
  }

  initSizes() {
    this.vh = 0;
    this.vw = 0;
  }

  whenResize(id) {
    if (this.isBrowser) {
      let vh_ = window.innerHeight;
      let vw_ = window.innerWidth;
      if (vw_ != this.vw && vh_ != this.vh) {
        this.setHeight(id);
      }
    }
  }

  //? SMOOTHSCROLLING-----
  scrollToTop() {
    if (this.isBrowser) {
      $("body,html").animate(
        {
          scrollTop: 0
        },
        100
      );
    }
  }

  isIpadChrome() {
    if (this.isBrowser) {
      return navigator.userAgent.toLowerCase().includes("ipad") &&
        navigator.userAgent.toLowerCase().includes("crios")
        ? true
        : false;
    } else {
      return false;
    }
  }

  //? METHOD THAT SHOWS LOADING BAR IF COMPONENT HAS NOT BEEN MOUNTED IN THE APP
  lodingBar(comp) {
    let bool = this.mounted_comps.indexOf(comp) == -1 ? true : false;
    if (this.isBrowser) {
      if (bool) {
        this.mounted_comps.push(comp);
        if ($("ngx-loading-bar").css("display") == "none" && this.show) {
          $("ngx-loading-bar").show();
        }
      } else {
        if ($("ngx-loading-bar").css("display") != "none") {
          $("ngx-loading-bar").hide();
        }
      }
    }
  }

  // METHOD TO PUT HTTP:// TO A LINK IF THIS DOES NOT CONTAIN IT
  addHTTP(link: string) {
    if (link) {
      if (
        !link.includes("http://") &&
        !link.includes("https://") &&
        !link.includes("take-bonus")
      ) {
        return "https://" + link;
      }
      return link;
    }
  }

  getCurrentYear() {
    return new Date().getFullYear();
  }
  getCurrentMonth() {
    return this.parseMonth(new Date().getMonth());
  }

  parseMonth(m: number) {
    let mp = m + 1;
    return mp === 1
      ? "January"
      : mp === 2
      ? "February"
      : mp === 3
      ? "March"
      : mp === 4
      ? "April"
      : mp === 5
      ? "May"
      : mp === 6
      ? "June"
      : mp === 7
      ? "July"
      : mp === 8
      ? "August"
      : mp === 9
      ? "September"
      : mp === 10
      ? "October"
      : mp === 11
      ? "November"
      : "December";
  }

  geoMngr() {
    let url = this.location
      .path()
      .slice(1)
      .split("/");
    let url_len = url.length === 1 ? 1 : 3;
    if (url_len > 1) {
      this.useCounP = true;
      this.ccode = url[1];
    } else {
      this.useCounP = false;
      this.ccode = "all";
    }
  }

  setUserAgent() {
    if (this.isBrowser) {
      this.user_agent = navigator.userAgent;
    }
  }

  setMetaValues(vals) {
    this.totFrees = vals.frees;
  }

  getDateFormat(dateSrc: Date, substractYears: number = 0) {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let correctMonth = numbers.includes(dateSrc.getMonth() + 1)
      ? `0${dateSrc.getMonth() + 1}`
      : (dateSrc.getMonth() + 1).toString();
    let correctDate = numbers.includes(dateSrc.getDate())
      ? `0${dateSrc.getDate()}`
      : dateSrc.getDate().toString();

    return `${dateSrc.getFullYear()-substractYears}-${correctMonth}-${correctDate}`;
  }

  validateDate(e, cond, bool = false, notE: boolean = false,years: number = 0) {
    let value = !notE ? e.target.value : e;
    let today = this.getDateFormat(new Date(),years);

    if (value != "") {
      if (
        (cond == "lower" && value > today) ||
        (cond == "greater" && value <= today)
      ) {
        if (!notE) e.target.classList.add("date-not-valid");
        if (bool) return true;
      } else {
        if (!notE) e.target.classList.remove("date-not-valid");
        if (bool) return false;
      }
    }
  }

  dateStringToISOString(value: any): string {
    if (typeof value !== "string" || value === "") {
      return "";
    }
    const newDate = new Date(value);
    return newDate.toISOString();
  }

  //? THIS CODE IS MEANT TO BE PASTED ON PECA SERVICE -----------------------
  @Output() updateTableDataEmitter: EventEmitter<any> = new EventEmitter();
  @Output() updateButtonDataEmitter: EventEmitter<any> = new EventEmitter();
  @Output() updateGenActButtonDataEmitter: EventEmitter<any> = new EventEmitter();
  @Output() showImageContainerEmitter: EventEmitter<any> = new EventEmitter();
  @Output() hideModalEmitter: EventEmitter<any> = new EventEmitter();
  @Output() showModalEmitter: EventEmitter<any> = new EventEmitter();
  @Output() resetEditedEmitter: EventEmitter<any> = new EventEmitter();
  @Output() setReadonlyEmitter: EventEmitter<any> = new EventEmitter();
  @Output() blockIntancesTableRefresherEmitter: EventEmitter<any> = new EventEmitter();
  @Output() actionsSleeperEmitter: EventEmitter<any> = new EventEmitter();
  @Output() sendFormDataToBtnEmitter: EventEmitter<any> = new EventEmitter();
  @Output() blockIntancesEmitter: EventEmitter<{
    blocks: Map<string, PageBlockComponent>;
    fromModal: boolean;
  }> = new EventEmitter();
  //Send image data from formblock to profile component
  @Output() passImageEmitter: EventEmitter<any> = new EventEmitter();

  formWithImage(image: string) {
    this.passImageEmitter.emit(image);
  }

  tableDataUpdater(obj) {
    this.updateTableDataEmitter.emit(obj);
  }
  sendFormDataToBtn(code) {
    this.sendFormDataToBtnEmitter.emit(code);
  }
  buttonDataUpdater(obj) {
    this.updateButtonDataEmitter.emit(obj);
  }
  updateGenActButtonDataUpdater({isDate, gaId, date, checklist, upload}:any) {
    this.updateGenActButtonDataEmitter.emit({
      isDate,
      gaId,
      date,
      checklist,
      upload
    });    
  }
  actionsSleeperUpdater(sleepSend: boolean, activity_uneditable: boolean) {
    this.actionsSleeperEmitter.emit({
      sleepSend,
      activity_uneditable
    });
  }
  ImageContainerShower(code: string) {
    this.showImageContainerEmitter.emit(code);
  }
  ModalHider(code: string) {
    this.hideModalEmitter.emit(code);
  }
  ModalShower(obj) {
    this.showModalEmitter.emit(obj);
  }
  resetEdited(buttonCode: string) {
    this.resetEditedEmitter.emit(buttonCode);
  }
  setAsReadOnly(buttonCode: string, setReadOnly: boolean, isBtnCode: boolean = true) {
    this.setReadonlyEmitter.emit({
      buttonCode,
      setReadOnly,
      isBtnCode
    });
  }

  createdBlockInstances(
    blocks: Map<string, PageBlockComponent>,
    isFromModal: boolean = false
  ) {
    this.blockIntancesEmitter.emit({
      blocks: blocks,
      fromModal: isFromModal
    });
  }

  emitStudentsTableRefresh(tableName: string, id_string: string) {
    this.blockIntancesTableRefresherEmitter.emit({
      tableName, 
      id_string
    });
  }
  //? -----------------------------------------------------------------------
}
