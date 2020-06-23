import { Component, OnInit, OnDestroy } from '@angular/core';
import { PECA_MENU_DEFAULT_CONFIG, PECA_LAPSE_OPTIONS_CONFIG } from './peca-menu';
import { NbIconLibraries, NbSidebarService, NbMenuItem } from '@nebular/theme';
import { Store, Select } from '@ngxs/store';
import { FetchPecaContent } from '../store/actions/peca/peca.actions';
import { PecaState } from '../store/states/peca/peca.state';
import { Observable, Subscription } from 'rxjs';
import { first } from 'rxjs/internal/operators/first';
import { take } from 'rxjs/internal/operators/take';
import cloneDeep from 'lodash/cloneDeep';
import { UpdateStates, UpdateMunicipalities } from '../store/actions/steps/residence-info.actions';

@Component({
  selector: 'app-peca',
  templateUrl: './peca.component.html',
  styleUrls: ['./peca.component.scss'],
})
export class PecaComponent implements OnInit, OnDestroy {
  menu = cloneDeep(PECA_MENU_DEFAULT_CONFIG);
  lapseOptionsConfig = PECA_LAPSE_OPTIONS_CONFIG;
  image_profile = '../../assets/images/profile-oscar.jpg';

  @Select(PecaState.getActivePeca) activePeca$: Observable<any>;
  @Select(PecaState.getActivePecaContent) activePecaContent$: Observable<any>;
  activePecaSubscription: Subscription;
  activePecaContentSubscription: Subscription;

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
    this.activePecaSubscription = this.activePeca$.pipe(first()).subscribe(
      ({ activePeca }) => {
        //console.log(activePeca);
        activePecaId = activePeca.id;
        activePecaId
          ? this.store.dispatch([new FetchPecaContent(activePecaId)])
          : console.error('No pudo obtenerse el PecaId activo');
      },
      (error) => console.error(error)
    );

    this.activePecaContentSubscription = this.activePecaContent$.pipe(take(2)).subscribe(
      ({ activePecaContent }) => {
        // console.log(activePecaContent);
        try {
          if (activePecaContent) {
            this.createMenuOptions(activePecaContent);
          }
        } catch (error) {
          // console.error('Menú no pudo crearse');
        }
      },
      (error) => console.error(error)
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

  ngOnDestroy() {
    this.activePecaSubscription.unsubscribe();
    this.activePecaContentSubscription.unsubscribe();
  }

  toggle() {
    this.sidebarService.toggle(true, 'menu-sidebar');
  }

  getResidenceInfo() {
    this.store.dispatch(new UpdateStates);
    this.store.dispatch(new UpdateMunicipalities);
  }
}
