import {
  Component,
  AfterViewInit,
  Injector,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
} from "@angular/core";
import { PecaPageComponent } from "../peca-page.component";
import {
  TEACHER_TESTIMONY_CONFIG as config,
  teacherTestimoniesConfigMapper,
} from "./teacher-testimony-config";
import { Observable, Subscription } from "rxjs";
import { Select } from "@ngxs/store";
import { PecaState } from "../../../store/states/peca/peca.state";
import { GlobalService } from "src/app/services/global.service";
import { Router } from "@angular/router";
import { HttpFetcherService } from "src/app/services/peca/http-fetcher.service";
import { isNullOrUndefined } from "util";
import { teacherTestimonyMapper } from "../mappers/teacher-testimony-mappers";
import { gradesAndSectionsDataToSectionsFormMapper } from "../mappers/teachers-in-sections-form-mappers";
import { distinctUntilChanged } from "rxjs/internal/operators/distinctUntilChanged";

@Component({
  selector: "peca-teacher-testimony",
  templateUrl: "../peca-page.component.html",
})
export class TeacherTestimonyPageComponent extends PecaPageComponent implements AfterViewInit {
  @ViewChild("blocksContainer", { read: ViewContainerRef, static: false })
  container: ViewContainerRef;

  //Selectores
  @Select(PecaState.getActivePecaContent) infoData$: Observable<any>;

  //subscripciones
  infoDataSubscription: Subscription;

  //testimonio
  testimonyTeacherData: any;

  //prueba
  pruebaSelectDocentes: any;

  isInstanciated: boolean;
  isInstantiating: boolean;
  loadedData: boolean;

  schoolId: any;
  userId: any;

  constructor(
    factoryResolver: ComponentFactoryResolver,
    router: Router,
    globals: GlobalService,
    private httpFetcherService: HttpFetcherService
  ) {
    super(factoryResolver);

    globals.blockIntancesEmitter.subscribe((data) => {
      data.blocks.forEach((block, name) => this.blockInstances.set(name, block));
      //if (this.loadedData) this.updateMethods();
    });
  }

  ngOnInit() {
    this.getInfo();
  }

  getInfo() {
    this.infoDataSubscription = this.infoData$
      .pipe(
        distinctUntilChanged(
          (prev, curr) =>
            JSON.stringify(prev.activePecaContent.school.teachersTestimonials) ===
            JSON.stringify(curr.activePecaContent.school.teachersTestimonials)
        )
      )
      .subscribe(
        (data) => {
          if (!this.isInstantiating) {
            if (data.activePecaContent) {
              this.schoolId = data.activePecaContent.project.school.id;
              this.userId = data.user.id;
              if (!isNullOrUndefined(data)) {
                console.log(data, "data testimonio");
              }
              const config = teacherTestimoniesConfigMapper(
                data.activePecaContent,
                data.user.id,
                null
              );
              this.instantiateComponent(config);
              this.doInstantiateBlocks();
              //this.setTestimonyTeacherDataMapper(
              //  data.activePecaContent.school.teachersTestimonials.testimonials,
              //  teacherTestimonyMapper
              //);
              //
              //this.setPruebaSelectDocentes(
              //  data.activePecaContent.school,
              //  gradesAndSectionsDataToSectionsFormMapper
              //);
              //
              //this.loadedData = true;
              //if (this.isInstanciated) this.updateMethods();
            }
          }
        },
        (er) => {
          console.log(er);
        }
      );
  }

  updateMethods(updateData: boolean = true) {
    this.updateDataToBlocks(updateData);
    this.updateDynamicFetchers();
  }

  updateDataToBlocks(updateData: boolean) {
    if (updateData) {
      this.setBlockData("testimonyTable", this.testimonyTeacherData);
      //PRUEBA
      this.setBlockData("pruebaDocentes", this.pruebaSelectDocentes);
    }
  }

  updateDynamicFetchers() {
    this.setBlockFetcherUrls("sendTestimoniesRequest", {
      post: `schools/teacherstestimonials/${this.schoolId}?userId=${this.userId}`,
    });
  }

  setTestimonyTeacherDataMapper(dataTestimony, _mapper?: Function) {
    if (_mapper) {
      console.log(dataTestimony, "asdasdasdasdasdasd");
      this.testimonyTeacherData = {
        data: _mapper(dataTestimony),
        isEditable: true,
      };
      console.log("este es el mapper de testimonio", this.testimonyTeacherData);
    } else {
      this.testimonyTeacherData = dataTestimony;
      //console.log("este NO es el mapper de amblemoneda", this.pruebaData);
    }
  }

  setPruebaSelectDocentes(dataDocentes, _mapper?: Function) {
    if (_mapper) {
      const mapper = _mapper(dataDocentes);
      this.pruebaSelectDocentes = {
        setContent: true,
        contentToSet: ["imageGroup"],
        data: {
          imageGroup: {
            imageDocente: mapper.teachers,
          },
        },
      };
    } else {
      this.pruebaSelectDocentes = dataDocentes.teachers;
    }
  }

  ngAfterViewInit(): void {
    // setTimeout(() => {
    //   this.instantiateBlocks(this.container);
    //   this.isInstanciated = true;
    // });
  }

  doInstantiateBlocks() {
    this.isInstantiating = true;
    this.isInstanciated = false;
    setTimeout(() => {
      this.instantiateBlocks(this.container, true);
      this.isInstantiating = false;
      this.isInstanciated = true;
    });
  }

  ngOnDestroy() {
    this.isInstanciated = false;
    this.loadedData = false;
    this.infoDataSubscription.unsubscribe();
  }
}
