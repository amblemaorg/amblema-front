import {
  Component,
  OnInit,
  AfterViewInit,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
  OnDestroy,
} from "@angular/core";
import { PecaPageComponent } from "../peca-page.component";
import { GENERIC_ACTIVITY_CONFIG as config } from "./generic-activity-config";
import { Router, Event, NavigationEnd } from "@angular/router";
import { Select } from "@ngxs/store";
import { PecaState } from "../../../store/states/peca/peca.state";
import { Observable, Subscription } from "rxjs";
import cloneDeep from "lodash/cloneDeep";
import { GenericActivity } from "../../../models/peca/generic-activity.model";
import { GlobalService } from "../../../services/global.service";
import { genericActivityMapper } from "../mappers/generic-activity-mappers";
import {
  genericActivityPermissions,
  genericActivityPermissionsI,
} from "../blocks/peca-permissology";

@Component({
  selector: "peca-generic-activity",
  templateUrl: "../peca-page.component.html",
})
export class GenericActivityPageComponent
  extends PecaPageComponent
  implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("blocksContainer", { read: ViewContainerRef, static: false })
  container: ViewContainerRef;

  @Select(PecaState.getPecaLapsesData) pecaLapseData$: Observable<any>;
  // @Select(PecaState.isPecaContentRequesting) isPecaContentRequesting$: Observable<boolean>;
  @Select(PecaState.getUserResume) userData$: Observable<any>;
  @Select(PecaState.getUserPermissions) genericActivitiesPemissions$: Observable<any>;

  private subscription: Subscription = new Subscription();
  isInstanciated: boolean;
  loadedData: boolean;
  user_type: string = "0";
  user_id: string;
  peca_id: string;
  lapse_n: string;
  activity_cancel_id: string;

  // generic activity content variables
  g_a_id: string;
  // g_a_dev_name: string;
  g_a_view_permissions: genericActivityPermissionsI;
  g_a_text: any;
  g_a_date: any;
  g_a_download: any;
  g_a_video: any;
  g_a_addMT: any;
  g_a_checklist: any;
  g_a_upload: any;
  g_a_action_btn: any;
  g_a_activity_uneditable: boolean;
  g_a_status_selector: any;
  g_a_action_btn_validators: any;
  g_a_user_can_edit: boolean;
  g_a_status: any;

  constructor(
    factoryResolver: ComponentFactoryResolver,
    private router: Router,
    private globals: GlobalService
  ) {
    super(factoryResolver);

    globals.blockIntancesEmitter.subscribe((data) => {
      data.blocks.forEach((block, name) => this.blockInstances.set(name, block));

      if (this.loadedData) this.updateMethods();
    });

    this.instantiateComponent(config);

    this.subscription.add(
      this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationEnd) {
          const lapse_number = event.url.substring(1).split("/")[2];
          const activity_devname = event.url.substring(1).split("/").pop();
          this.setActivity(lapse_number, activity_devname);
        }
      })
    );
  }

  ngOnInit() {
    this.subscription.add(
      this.userData$.subscribe((user) => {
        this.user_id = user.id;
        this.user_type = user.type;
      })
    );

    this.setActivity(
      this.router.url.substring(1).split("/")[2],
      this.router.url.substring(1).split("/").pop()
    );
  }

  setActivity(lapseId, activityDevName) {
    this.subscription.add(
      this.pecaLapseData$.subscribe(
        (data) => {
          if (data && data.lapses && data.lapses.pecaId) this.peca_id = data.lapses.pecaId;
          if (data && data.lapses && data.lapses[`lapse${lapseId}`]) {
            const actDevNameDecoded = decodeURI(activityDevName);
            const activity: GenericActivity = data.lapses[`lapse${lapseId}`].activities.find(
              (activity) => activity.devName === actDevNameDecoded
            );

            if (activity) {
              this.changeComponentHeader(activity.name);
              this.lapse_n = lapseId;

              this.managePermissions();
              this.setGenericActivityData(activity);

              this.loadedData = true;
              if (this.isInstanciated) {
                setTimeout(() => {
                  this.updateMethods();
                });
              }
            }
          }
        },
        (error) => console.error(error)
      )
    );
  }

  managePermissions() {
    this.subscription.add(
      this.genericActivitiesPemissions$.subscribe((permissions) => {
        const permissions_ = genericActivityPermissions.actions.reduce(
          (permssionsObj, viewPermission) => {
            if (permissions) permssionsObj[viewPermission] = permissions.some((p) => p === viewPermission);
            return permssionsObj;
          },
          {}
        );

        this.setPermissions(permissions_);
      })
    );
  }
  setPermissions(permissions: genericActivityPermissionsI | any) {
    this.g_a_view_permissions = permissions;
  }

  updateMethods() {
    this.updateDataToBlocks();
    this.updateStaticFetchers();
  }

  updateDataToBlocks() {
    const genericActivity = {
      isGenericActivity: true,
      genericActivityId: this.g_a_id,
      activityUneditable: this.g_a_activity_uneditable,
      userCanEdit: this.g_a_user_can_edit,
    };

    let genericActivityObj = { ...genericActivity };

    if (this.g_a_text) genericActivityObj = { ...genericActivityObj, ...this.g_a_text };
    if (this.g_a_date) genericActivityObj = { ...genericActivityObj, ...this.g_a_date };
    if (this.g_a_download) genericActivityObj = { ...genericActivityObj, ...this.g_a_download };
    if (this.g_a_video) genericActivityObj = { ...genericActivityObj, ...this.g_a_video };
    if (this.g_a_addMT) genericActivityObj = { ...genericActivityObj, ...this.g_a_addMT };
    if (this.g_a_upload) genericActivityObj = { ...genericActivityObj, ...this.g_a_upload };
    if (this.g_a_status_selector)
      genericActivityObj = {
        ...genericActivityObj,
        ...this.g_a_status_selector,
        ...this.g_a_action_btn_validators,
      };

    this.setBlockData("genericActivityStatus", this.g_a_status);
    this.setBlockData("genericActivityFields", genericActivityObj);
    this.setBlockData("genericActivityChecklist", { ...genericActivity, ...this.g_a_checklist });
    this.setBlockData("genericActivityActionButton", {
      ...genericActivity,
      ...this.g_a_action_btn,
      ...this.g_a_action_btn_validators,
    });
  }

  setGenericActivityData(data: GenericActivity) {
    // "approvalType": "str (1=solo aproeba el admin, 2=al rellenar, 3=genera solicitud de aprobacion, 4=aprobacion interna, 5=sin aprobacion)",
    // "status": ("1", "2", "3"), ("pending", "in_approval", "approved")
    this.g_a_id = data.id;
    this.g_a_activity_uneditable = data.status === "1" || data.approvalType === "5" ? false : true;
    this.g_a_user_can_edit = this.g_a_view_permissions.activity_peca_edit;

    const genActMapped = genericActivityMapper(data, /* this.user_id,  */ this.user_type);

    this.activity_cancel_id = genActMapped.activity_cancel_id;

    this.g_a_status = {
      status: {
        text: "Estatus",
        subText: genActMapped.g_a_status,
      },
    };

    this.g_a_status_selector = genActMapped.g_a_status_selector;
    this.g_a_text = genActMapped.g_a_text;
    this.g_a_date = genActMapped.g_a_date;
    this.g_a_download = genActMapped.g_a_download;
    this.g_a_video = genActMapped.g_a_video;
    this.g_a_addMT = genActMapped.g_a_addMT;
    this.g_a_upload = genActMapped.g_a_upload;

    // CHECKLIST
    this.g_a_checklist = genActMapped.g_a_checklist;
    // Action buttons
    this.g_a_action_btn = genActMapped.g_a_action_btn;
    this.g_a_action_btn_validators = genActMapped.g_a_action_btn_validators;
  }

  updateStaticFetchers() {
    // genericActivityActionButton
    this.setBlockFetcherUrls("genericActivityActionButton", {
      put: `pecaprojects/activities/${this.peca_id}/${this.lapse_n}/${this.g_a_id}?userId=${this.user_id}`,
      cancel: this.activity_cancel_id ? `requestscontentapproval/${this.activity_cancel_id}` : null,
    });

    // genericActivityFields
    this.setBlockFetcherUrls("genericActivityFields", {
      put: `pecaprojects/activities/${this.peca_id}/${this.lapse_n}/${this.g_a_id}?userId=${this.user_id}`,
    });
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
    this.subscription.unsubscribe();
  }
}
