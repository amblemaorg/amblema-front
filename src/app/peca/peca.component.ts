import { Component, OnInit, OnDestroy } from '@angular/core';
import { PECA_MENU_DEFAULT_CONFIG, PECA_LAPSE_OPTIONS_CONFIG } from './peca-menu';
import { NbIconLibraries, NbSidebarService, NbMenuItem } from '@nebular/theme';
import { Store, Select } from '@ngxs/store';
import { FetchPecaContent } from '../store/actions/peca/peca.actions';
import { PecaState } from '../store/states/peca/peca.state';
import { Observable } from 'rxjs';
import { first } from 'rxjs/internal/operators/first';
import { take } from 'rxjs/internal/operators';
import cloneDeep from 'lodash/cloneDeep';
import { UpdateStates, UpdateMunicipalities } from '../store/actions/steps/residence-info.actions';

@Component({
  selector: 'app-peca',
  templateUrl: './peca.component.html',
  styleUrls: ['./peca.component.scss'],
})
export class PecaComponent implements OnInit {
  menu = cloneDeep(PECA_MENU_DEFAULT_CONFIG);
  lapseOptionsConfig = PECA_LAPSE_OPTIONS_CONFIG;
  image_profile = '../../assets/images/profile-oscar.jpg';

  @Select(PecaState.getActivePeca) activePeca$: Observable<any>;
  @Select(PecaState.getActivePecaContent) activePecaContent$: Observable<any>;

  constructor(
    private store: Store,
    private iconLibraries: NbIconLibraries,
    private sidebarService: NbSidebarService
  ) {
    this.iconLibraries.registerFontPack('amblemaicons', {
      iconClassPrefix: 'icon',
    });
    this.iconLibraries.setDefaultPack('amblemaicons');
  }

  ngOnInit() {
    let activePecaId = null;
    const activePecaSubscription = this.activePeca$.pipe(first()).subscribe(
      ({ activePeca }) => {
        //console.log(activePeca);
        activePecaId = activePeca.id;
        activePecaId
          ? this.store.dispatch([new FetchPecaContent(activePecaId)])
          : console.error('No pudo obtenerse el PecaId activo');
      },
      (error) => console.error(error),
      () => {
        activePecaSubscription.unsubscribe();
      }
    );

    const activePecaContentSubscription = this.activePecaContent$
      .pipe(first() /*take(2)*/)
      .subscribe(
        ({ activePecaContent }) => {
          //console.log(activePecaContent);
          this.createMenuOptions(activePecaContent);
        },
        (error) => console.error(error),
        () => {
          activePecaContentSubscription.unsubscribe();
        }
      );

      this.getResidenceInfo();
  }

  createMenuOptions(pecaContent) {
    for (let i of [1, 2, 3]) {
      const lapse = pecaContent[`lapse${i}`];
      const lapseOptions = this.menu[i - 1].children;

      Object.entries(lapse).map(({ 0: key, 1: value }) => {
        if (key !== 'activities' && value) {
          const lapseOption = this.lapseOptionsConfig[key];
          lapseOptions.push({ ...lapseOption, link: `lapso/${i}/${lapseOption.link}` });
        }
      });

      lapse.activities.map((activity) => {
        const { activity: lapseActivity } = this.lapseOptionsConfig;

        lapseOptions.push({
          ...lapseActivity,
          title: activity.name,
          link: `lapso/${i}/${lapseActivity.link}`,
        });
      });

      this.menu[i - 1].children = lapseOptions;
    }
  }

  toggle() {
    this.sidebarService.toggle(true, 'menu-sidebar');
  }

  getResidenceInfo() {
    this.store.dispatch(new UpdateStates);
    this.store.dispatch(new UpdateMunicipalities);
  }
}
