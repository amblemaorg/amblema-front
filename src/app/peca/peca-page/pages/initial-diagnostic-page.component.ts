import {
  Component,
  AfterViewInit,
  Injector,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild
} from "@angular/core";
import { PecaPageComponent } from "../peca-page.component";
import { INITIAL_DIAGNOSTIC_CONFIG as config } from "./initial-diagnostic-config";
import { Subscription, Observable } from "rxjs";
import { PecaState } from "src/app/store/states/peca/peca.state";
import { Select } from "@ngxs/store";

@Component({
  selector: "peca-initial-diagnostic",
  templateUrl: "../peca-page.component.html"
})
export class InitialDiagnosticPageComponent extends PecaPageComponent
  implements AfterViewInit {
  @ViewChild("blocksContainer", { read: ViewContainerRef, static: false })
  container: ViewContainerRef;
  userDataSubscription: Subscription;
  @Select(PecaState.getActivePecaContent) userData$: Observable<any>;
  students = [];
  section = "";
  grade = "";
  response: any;
  constructor(factoryResolver: ComponentFactoryResolver) {
    super(factoryResolver);
    this.instantiateComponent(config);
  }
  ngOnInit() {
    this.getUser();
  }
  getUser() {
    this.userDataSubscription = this.userData$.subscribe(
      data => {
        this.response = data.activePecaContent.school.sections;
        for (let i = 0; i < this.response.length; i++) {
          this.grade = this.response[i].grade;
          this.section = this.response[i].name;
          this.students = this.response[i].students;
        }
        this.students.forEach(student => {
          student.grade = this.grade;
          student.section = this.section;
          console.log(student);
        });
      },

      error => console.error(error)
    );
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.instantiateBlocks(this.container);
    });
  }
}
