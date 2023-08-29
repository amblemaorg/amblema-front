import { Component, OnInit, OnDestroy, ViewChild, Inject } from '@angular/core'
import {
  PECA_MENU_DEFAULT_CONFIG,
  PECA_LAPSE_OPTIONS_CONFIG,
} from './peca-menu'
import {
  NbIconLibraries,
  NbSidebarService,
  NbMenuItem,
  NbMenuService,
} from '@nebular/theme'
import { Store, Select } from '@ngxs/store'
import { FetchPecaContent } from '../store/actions/peca/peca.actions'
import { PecaState } from '../store/states/peca/peca.state'
import { Observable, Subscription } from 'rxjs'
import cloneDeep from 'lodash/cloneDeep'
import { ActivatedRoute, Router, Event, NavigationEnd } from '@angular/router'
import { DOCUMENT } from '@angular/common'
import {
  genericActivityPermissionsI,
  genericActivityPermissions,
  teacherTestimonialPermissionsI,
  teacherTestimonialPermissions,
  yearbookPermissionsI,
  yearbookPermissions,
  environmentalProjectPermissionsI,
  environmentalProjectPermissions,
  monitoringActivityPermissionsI,
  monitoringActivityPermissions,
  sliderActivitiesPermissions,
  sliderActivitiesPermissionsI,
  olympicsPermissionsI,
  olympicsPermissions,
  amblecoinsPermissions,
  annualPreparationPermissions,
  annualConventionPermissions,
  lapsePlanningPermissions,
  initialWorkshopPermissions,
  specialActivityPermissions,
  schoolPermissions,
  teacherPermissions,
  sectionPermissions,
  studentPermissions,
  diagnosticsPermissions,
  schedulePermissions,
  schoolPermissionsI,
  teacherPermissionsI,
  sectionPermissionsI,
  studentPermissionsI,
  diagnosticsPermissionsI,
  amblecoinsPermissionsI,
  annualPreparationPermissionsI,
  annualConventionPermissionsI,
  lapsePlanningPermissionsI,
  initialWorkshopPermissionsI,
  specialActivityPermissionsI,
  schedulePermissionsI,
} from './peca-page/blocks/peca-permissology'
import { UpdateStates } from '../store/actions/steps/residence-info.actions'

@Component({
  selector: 'app-peca',
  templateUrl: './peca.component.html',
  styleUrls: ['./peca.component.scss'],
})
export class PecaComponent implements OnInit, OnDestroy {
  @ViewChild('noPecaModalLauncher', { static: true })
  noPecaModalLauncherBtn: any

  menu = cloneDeep(PECA_MENU_DEFAULT_CONFIG)
  lapseOptionsConfig = PECA_LAPSE_OPTIONS_CONFIG
  image_profile = '../../assets/images/profile-oscar.jpg'

  @Select(PecaState.getUser) userInfo$: Observable<any>
  @Select(PecaState.getUserPermissions) permissions$: Observable<any>

  menu_permissions: schoolPermissionsI &
    teacherPermissionsI &
    sectionPermissionsI &
    studentPermissionsI &
    diagnosticsPermissionsI &
    amblecoinsPermissionsI &
    olympicsPermissionsI &
    annualPreparationPermissionsI &
    annualConventionPermissionsI &
    lapsePlanningPermissionsI &
    initialWorkshopPermissionsI &
    specialActivityPermissionsI &
    genericActivityPermissionsI &
    monitoringActivityPermissionsI &
    environmentalProjectPermissionsI &
    schedulePermissionsI &
    teacherTestimonialPermissionsI &
    sliderActivitiesPermissionsI &
    yearbookPermissionsI
  private subscription: Subscription = new Subscription()

  showWelcome: boolean = false

  activePecaSubscription: Subscription
  activePecaContentSubscription: Subscription
  globalsSubscription: Subscription
  userSubscription: Subscription
  imageUser = ''
  nameUser = ''
  userType = ''
  constructor(
    private store: Store,
    private iconLibraries: NbIconLibraries,
    private sidebarService: NbSidebarService,
    private route: ActivatedRoute,
    private menuService: NbMenuService,
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
  ) {
    this.iconLibraries.registerFontPack('amblemaicons', {
      iconClassPrefix: 'icon',
    })
    this.iconLibraries.setDefaultPack('amblemaicons')

    this.subscription.add(
      this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationEnd) {
          setTimeout(() => {
            const path_initial = event.url.replace('/peca', '').substring(1)
            const path_def = path_initial.includes(';')
              ? path_initial.split(';').shift()
              : path_initial
            const pathDefDecoded = decodeURI(path_def)

            if (
              pathDefDecoded.length === 0 ||
              pathDefDecoded === 'perfil-usuario'
            ) {
              if (pathDefDecoded.length === 0) this.showWelcome = true
              else this.showWelcome = false
              this.deselectAllExceptOf(null, this.menu)
            } else {
              this.showWelcome = false
              this.deselectAllExceptOf(pathDefDecoded, this.menu, true)
            }
          })
        }
      }),
    )
  }

  async ngOnInit() {
    this.store.dispatch([new UpdateStates()])
    let activePecaId = null

    const activePeca = this.store.selectSnapshot((state) => {
      return state?.peca?.selectedProject?.pecas?.reduce(
        (prevPeca, peca) =>
          peca?.schoolYear?.id === state?.peca?.user?.activeSchoolYear?.id
            ? peca
            : prevPeca,
        {},
      )
    })

    if (activePeca) {
      activePecaId = activePeca.id

      const comes_from_steps =
        (this.route.snapshot.params &&
          this.route.snapshot.params.comesFromPreviousSteps) ||
        (this.route.snapshot.children &&
          this.route.snapshot.children.length > 0 &&
          this.route.snapshot.children[this.route.snapshot.children.length - 1]
            .params &&
          this.route.snapshot.children[this.route.snapshot.children.length - 1]
            .params.comesFromPreviousSteps)

      if (activePecaId)
        await this.store
          .dispatch([new FetchPecaContent(activePecaId)])
          .toPromise()
      else {
        console.error('No pudo obtenerse el PecaId activo')
        if (!comes_from_steps) this.noPecaModalLauncherBtn.nativeElement.click()
      }
    }

    const { activePecaContent, selectedProject } = this.store.selectSnapshot(
      (state) => {
        return {
          activePecaContent: state?.peca?.content,
          selectedProject: state?.peca?.selectedProject,
        }
      },
    )

    try {
      if (activePecaContent && selectedProject) {
        this.managePermissions()
        this.createMenuOptions(activePecaContent, selectedProject)
      }
    } catch (error) {
      console.error('Menú no pudo crearse')
      console.error(error)
    }

    this.userSubscription = this.userInfo$.subscribe((res) => {
      this.imageUser = res.image
      this.nameUser = res.name
      this.userType = res.userType
    })

    this.subscription.add(
      this.menuService.onItemClick().subscribe((menu_item) => {
        if (menu_item['item']['link'] && menu_item['item']['link'].length > 0)
          this.showWelcome = false

        this.subscription.add(
          this.menuService.getSelectedItem().subscribe((previous) => {
            if (
              previous['item'] &&
              previous['item']['link'] !== menu_item['item']['link']
            )
              previous['item']['selected'] = false
            else this.deselectAllExceptOf(menu_item['item']['link'], this.menu)
          }),
        )

        if (this.document.documentElement.clientWidth < 1200) {
          if (this.document.documentElement.clientWidth >= 576)
            this.menuService.collapseAll()

          if (
            (this.document.documentElement.clientWidth >= 576 &&
              menu_item['item']['parent']) ||
            this.document.documentElement.clientWidth < 576
          )
            this.toggle()
        }
      }),
    )
  }

  /**
   * TODO: set selected false on all menu items, except of given
   *
   * @param link item to be ignored from false menu item setting
   * @param arr menu or child menu array
   * @param fromMenuCreator indicates if set as selected link passed
   * @param forRemoval array indicating menu items to be removed
   */
  deselectAllExceptOf(
    link,
    arr,
    fromMenuCreator: boolean = false,
    forRemoval: string[] = [],
  ) {
    arr.map((menuItem) => {
      if (menuItem['children'])
        this.deselectAllExceptOf(
          link,
          menuItem['children'],
          fromMenuCreator,
          forRemoval,
        )
      else if (menuItem['link'] !== link || !link) menuItem['selected'] = false
      else if (fromMenuCreator && menuItem['link'] === link) {
        menuItem['selected'] = true
      }

      if (forRemoval.some((m_i_) => m_i_ === menuItem['data']))
        menuItem['hidden'] = true
    })
  }

  managePermissions() {
    this.subscription.add(
      this.permissions$.subscribe((permissions) => {
        const permissions_ = [
          ...schoolPermissions.actions,
          ...teacherPermissions.actions,
          ...sectionPermissions.actions,
          ...studentPermissions.actions,
          ...diagnosticsPermissions.actions,
          ...amblecoinsPermissions.actions,
          ...olympicsPermissions.actions,
          ...annualPreparationPermissions.actions,
          ...annualConventionPermissions.actions,
          ...lapsePlanningPermissions.actions,
          ...initialWorkshopPermissions.actions,
          ...specialActivityPermissions.actions,
          ...genericActivityPermissions.actions,
          ...monitoringActivityPermissions.actions,
          ...environmentalProjectPermissions.actions,
          ...schedulePermissions.actions,
          ...teacherTestimonialPermissions.actions,
          ...sliderActivitiesPermissions.actions,
          ...yearbookPermissions.actions,
        ].reduce((permssionsObj, viewPermission) => {
          if (permissions)
            permssionsObj[viewPermission] = permissions.some(
              (p) => p === viewPermission,
            )
          return permssionsObj
        }, {})

        this.setPermissions(permissions_)
      }),
    )
  }
  setPermissions(
    permissions:
      | (schoolPermissionsI &
          teacherPermissionsI &
          sectionPermissionsI &
          studentPermissionsI &
          diagnosticsPermissionsI &
          amblecoinsPermissionsI &
          olympicsPermissionsI &
          annualPreparationPermissionsI &
          annualConventionPermissionsI &
          lapsePlanningPermissionsI &
          initialWorkshopPermissionsI &
          specialActivityPermissionsI &
          genericActivityPermissionsI &
          monitoringActivityPermissionsI &
          environmentalProjectPermissionsI &
          schedulePermissionsI &
          teacherTestimonialPermissionsI &
          sliderActivitiesPermissionsI &
          yearbookPermissionsI)
      | any,
  ) {
    this.menu_permissions = permissions
  }

  createMenuOptions(pecaContent, selectedProject) {
    const path_arr =
      this.route.snapshot.url.length > 0
        ? this.route.snapshot.url
        : this.route.snapshot.children &&
          this.route.snapshot.children.length > 0 &&
          this.route.snapshot.children[0].url.length > 0
        ? this.route.snapshot.children[0].url
        : []

    const link =
      path_arr.length > 0
        ? path_arr.reduce((link_, u_s_) => {
            link_ = link_.length > 0 ? `${link_}/${u_s_['path']}` : u_s_['path']
            return link_
          }, '')
        : ''

    if (link.length > 0) this.showWelcome = false

    if (pecaContent.steps) {
      const title = 'Ir a los pasos'
      const menu_item_obj = {
        title: title,
        icon: 'list-numbered',
        link: '/previous-steps',
      }
      // todo: commented lines in this block are for creating 'go to steps' button when there is 'sign out' button present.
      //if (this.menu[this.menu.length - 2].title === title)
      if (this.menu[this.menu.length - 1].title === title)
        //this.menu.splice(-2, 1, menu_item_obj);
        this.menu.splice(-1, 1, menu_item_obj)
      //this.menu.splice(-1, 0, menu_item_obj);
      else this.menu.push(menu_item_obj)
    }

    for (let i of [1, 2, 3]) {
      /*if (this.menu[i - 1].children.length > 0){
        this.menu[i - 1].children.splice(i === 1 ? 2 : 1);
        console.log("s ", i)
        console.log(this.menu[i - 1]);
      }*/
      const lapse = pecaContent[`lapse${i}`]
      const lapseOptions = this.menu[i - 1].children.reduce(
        (options, option) => {
          if (
            i > 1 ||
            (option?.link &&
              (option.link != 'matricula-escolar-anterior' ||
                (option.link == 'matricula-escolar-anterior' &&
                  pecaContent.id ===
                    selectedProject.pecas[selectedProject.pecas.length - 1]
                      .id)))
          )
            options.push(option)
          return options
        },
        [],
      )

      Object.keys(this.lapseOptionsConfig).map((lapsOpt) => {
        if (lapsOpt !== 'activities' && lapse[lapsOpt]) {
          const lapseOption = this.lapseOptionsConfig[lapsOpt]
          
          lapseOptions.push({
            ...lapseOption,
            link: `lapso/${i}/${lapseOption.link}`,
            parent: this.menu[i - 1],
            order: lapse[lapsOpt].order ? lapse[lapsOpt].order : lapseOption.order
          })
        }
      })

      lapse.activities.map((activity) => {
        const { activities: lapseActivity } = this.lapseOptionsConfig

        lapseOptions.push({
          ...lapseActivity,
          title: activity.name,
          link: `lapso/${i}/${lapseActivity.link}/${activity.devName}`,
          parent: this.menu[i - 1],
          order: activity.order ? activity.order : lapseActivity.order
        })
      })
      lapseOptions.sort((a, b) => a.order - b.order); 
      this.menu[i - 1].children = lapseOptions
    }

    const menu_items_to_hide = Object.keys(this.menu_permissions).reduce(
      (removable_items, permission) => {
        if (permission.includes('_view') && !this.menu_permissions[permission])
          removable_items.push(permission)
        return removable_items
      },
      [],
    )

    this.deselectAllExceptOf(link, this.menu, true, menu_items_to_hide)
  }

  ngOnDestroy() {
    //this.activePecaSubscription.unsubscribe();
    //this.activePecaContentSubscription.unsubscribe();
    if (this.userSubscription) {
      this.userSubscription.unsubscribe()
    }
    this.subscription.unsubscribe()
  }

  toggle() {
    this.sidebarService.toggle(true, 'menu-sidebar')
  }

  getUserOneOrTwoLines(name) {
    if (!name) {
      return '<span></span>'
    }

    const name_obj = [name].reduce((nameObj, name) => {
      name.split(' ').map((nameI, i, name_arr) => {
        const half = parseInt(`${name_arr.length / 2}`)
        if (i < half || half === 0)
          nameObj['first'] = nameObj['first']
            ? `${nameObj['first']} ${nameI}`
            : nameI
        else
          nameObj['second'] = nameObj['second']
            ? `${nameObj['second']} ${nameI}`
            : nameI
      })

      return nameObj
    }, {})

    return name_obj.second
      ? `<span>${name_obj.first}</span><span>${name_obj.second}</span>`
      : `<span>${name_obj.first}</span>`
  }
}
