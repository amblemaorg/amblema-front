import { Component, OnInit, OnDestroy } from "@angular/core";
import { PECA_MENU_DEFAULT_CONFIG, PECA_LAPSE_OPTIONS_CONFIG } from "./peca-menu";
import { NbIconLibraries, NbSidebarService, NbMenuItem } from "@nebular/theme";
import { Store, Select } from "@ngxs/store";
import { GetPecaContent } from "../store/actions/peca/peca.actions";
import { PecaState } from "../store/states/peca/peca.state";
import { Observable } from "rxjs";

@Component({
  selector: "app-peca",
  templateUrl: "./peca.component.html",
  styleUrls: ["./peca.component.scss"],
})
export class PecaComponent implements OnInit {
  menu = PECA_MENU_DEFAULT_CONFIG;
  lapseOptionsConfig = PECA_LAPSE_OPTIONS_CONFIG;
  image_profile = "../../assets/images/profile-oscar.jpg";

  @Select(PecaState.getActivePeca) activePeca$: Observable<any>;
  @Select(PecaState.getActivePecaContent) activePecaContent$: Observable<any>;

  constructor(
    private store: Store,
    private iconLibraries: NbIconLibraries,
    private sidebarService: NbSidebarService
  ) {
    this.iconLibraries.registerFontPack("amblemaicons", {
      iconClassPrefix: "icon",
    });
    this.iconLibraries.setDefaultPack("amblemaicons");
  }

  ngOnInit() {
    let activePecaId = null;
    const activePecaSubscription = this.activePeca$.subscribe(
      ({ activePeca }) => {
        activePecaId = activePeca.id;
      },
      (error) => console.error(error),
      () => {
        activePecaId ? this.store.dispatch([new GetPecaContent(activePecaId)]) : null;
        activePecaSubscription.unsubscribe();
      }
    );

    const activePecaContentSubscription = this.activePecaContent$.subscribe(
      ({ activePecaContent }) => {
        this.createMenuOptions(activePecaContent);
      },
      (error) => console.error(error),
      () => {
        activePecaContentSubscription.unsubscribe();
      }
    );
  }

  createMenuOptions(pecaContent) {
    for (let i of [1, 2, 3]) {
      const lapse = pecaContent[`lapse${i}`];
      const lapseOptions = this.menu[i - 1].children;

      Object.entries(lapse).map(({ 0: key, 1: value }) => {
        if (key !== "activities" && value) {
          lapseOptions.push(this.lapseOptionsConfig[key]);
        }
      });

      lapse.activities.map((activity) => {
        lapseOptions.push({ ...this.lapseOptionsConfig.activity, title: activity.name });
      });

      this.menu[i - 1].children = lapseOptions;
    }
  }

  toggle() {
    this.sidebarService.toggle(true, "menu-sidebar");
  }
}
