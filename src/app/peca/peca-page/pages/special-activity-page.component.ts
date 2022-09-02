import {
  Component,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
  OnDestroy,
} from '@angular/core'
import { PecaPageComponent } from '../peca-page.component'
import { specialActivityConfigMapper } from './special-activity-config'
import { Router, NavigationEnd, Event } from '@angular/router'
import { Observable, Subscription } from 'rxjs'
import { Select, Store } from '@ngxs/store'
import { PecaState } from '../../../store/states/peca/peca.state'
import { isNullOrUndefined } from 'util'
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged'
import { specialActivityPermissions } from '../blocks/peca-permissology'

@Component({
  selector: 'peca-special-activity',
  templateUrl: '../peca-page.component.html',
})
export class SpecialActivityPageComponent extends PecaPageComponent
  implements OnDestroy {
  @ViewChild('blocksContainer', { read: ViewContainerRef, static: false })
  container: ViewContainerRef

  //Selectores
  @Select(PecaState.getActivePecaContent) infoData$: Observable<any>

  //subscripciones
  infoDataSubscription: Subscription
  routerSubscription: Subscription
  UrlLapse = ''
  peca_id: string
  isInstantiating: boolean

  constructor(
    factoryResolver: ComponentFactoryResolver,
    private router: Router,
    private store: Store,
  ) {
    super(factoryResolver)
    this.routerSubscription = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.UrlLapse = event.url
        this.UrlLapse = this.router.url.substr(12, 1)
        this.ngOnInit()
      }
    })
  }

  ngOnInit() {
    this.getInfo()
  }

  getInfo() {
    this.infoDataSubscription = this.infoData$
      .pipe(
        distinctUntilChanged(
          (prev, curr) =>
            JSON.stringify(
              prev.activePecaContent[`lapse${this.UrlLapse}`].specialActivity,
            ) ===
            JSON.stringify(
              curr.activePecaContent[`lapse${this.UrlLapse}`].specialActivity,
            ),
        ),
      )
      .subscribe((data) => {
        if (!this.isInstantiating) {
          if (data.activePecaContent) {
            this.peca_id = data.activePecaContent.id
            const userId = data.user.id
            const lapseName = `lapse${this.UrlLapse}`
            const { specialActivity } = data.activePecaContent[lapseName]

            // if (!isNullOrUndefined(data)) {
            // }
            let { permissions } = data.user
            permissions = this.managePermissions(permissions)

            const config = specialActivityConfigMapper(
              specialActivity,
              this.UrlLapse,
              this.peca_id,
              userId,
              permissions,
              this.store,
            )
            this.instantiateComponent(config)
            this.doInstantiateBlocks()
          }
        }
      })
  }

  managePermissions(permissionsArray) {
    return specialActivityPermissions.actions.reduce(
      (permissionsObj, permission) => {
        if (permissionsArray)
          permissionsObj[permission] = permissionsArray.includes(permission)
        return permissionsObj
      },
      {},
    )
  }

  doInstantiateBlocks() {
    this.isInstantiating = true
    setTimeout(() => {
      this.instantiateBlocks(this.container, true)
      this.isInstantiating = false
    })
  }

  ngOnDestroy() {
    this.infoDataSubscription.unsubscribe()
    this.routerSubscription.unsubscribe()
  }
}
