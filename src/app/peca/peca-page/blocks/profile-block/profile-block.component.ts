import {
  Component,
  OnInit,
  AfterViewInit,
  ViewContainerRef,
  QueryList,
  ViewChildren
} from "@angular/core";
import {
  PageBlockComponent,
  StructuralBlockComponent,
  StructuralItem
} from "../page-block.component";
import { PageBlockFactory } from "../page-block-factory";
import { GlobalService } from "src/app/services/global.service";
import { Select } from "@ngxs/store";
import { Observable, Subscription } from "rxjs";
import { PecaState } from "src/app/store/states/peca/peca.state";
import { ClassGetter } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "peca-profile-block",
  templateUrl: "./profile-block.component.html",
  styleUrls: ["./profile-block.component.scss"]
})
export class ProfileBlockComponent
  implements StructuralBlockComponent, OnInit, AfterViewInit {
  @ViewChildren("profileContainer", { read: ViewContainerRef })
  profileContainer: QueryList<ViewContainerRef>;
  factory: PageBlockFactory;

  type: "structural";
  component: string;
  settings: {
    items: StructuralItem[];
  };

  userCanCreate: boolean = true;
  userCanEdit: boolean = true;
  userCanDelete: boolean = true;
  userCanView: boolean = true;

  url = "";
  name = "";

  @Select(PecaState.getUser) userInfo$: Observable<any>;
  userSubscription: Subscription;

  uploadImageCaller(imgBtnContainer) {
    imgBtnContainer.querySelectorAll('input[type="file"]')[0].click();
  }
  readUrl(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event: any) => {
        this.url = event.target.result;
        //To send data to profile component
        this.globals.formWithImage(this.url);
      };
      console.log("evebt", (event.target.filess = [0]));
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  constructor(private globals: GlobalService) {
    this.type = "structural";
    this.component = "profiles";
  }

  ngOnInit(): void {
    this.userSubscription = this.userInfo$.subscribe(res => {
      this.url = res.image;
      this.name = res.name;
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.instantiateChildBlocks();
    });
  }

  public setSettings(settings: any) {
    this.settings = settings.settings;
    this.factory = settings.factory ? settings.factory : {};
  }

  public instantiateChildBlocks() {
    let blockInstances = new Map<string, PageBlockComponent>();
    this.settings.items.map((item, i) => {
      const container = this.profileContainer.toArray()[i];
      item.childBlocks.map((block, j) => {
        let settings = block.settings;
        if (block.component == "modal")
          settings = { settings: block.settings, factory: this.factory };
        if (block.component == "tabs")
          settings = { settings: block.settings, factory: this.factory };
        if (block.component == "accordion")
          settings = { settings: block.settings, factory: this.factory };
        const pageBlockComponentFactory = this.factory.createPageBlockFactory(
          block.component
        );
        const pageBlockComponent = container.createComponent(
          pageBlockComponentFactory
        );
        pageBlockComponent.instance.setSettings(settings);
        blockInstances.set(
          block.name || `profile${i}block${j}`,
          pageBlockComponent.instance
        );
      });
    });
    this.globals.createdBlockInstances(blockInstances);
  }
  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
