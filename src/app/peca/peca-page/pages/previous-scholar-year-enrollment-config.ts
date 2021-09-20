import { Store } from "@ngxs/store";
import {
  AddImageToSchoolActivitiesRequestData,
  RemoveImageFromSchoolActivitiesRequestData,
  CancelSchoolActivitiesRequest,
  UpdateSchoolActivitiesRequest,
  // ClearSchoolActivitiesRequestData,
} from "src/app/store/actions/peca/peca.actions";

export function previousScholarYearStudentsConfigMapper(
  previousYearStudents,
  permissions
  // store: Store
) {
  // const { activities_slider_edit, activities_slider_delete } = permissions;

  const prevStudentsFormTable = {
    component: "form-table",
    name: "prev-students-form-table",
    settings: {
      onSubmit: (values: any) => {
        console.log("Hello values");
      },
      fields: {
        description: {
          label: "La des",
          placeholder: "La des",
          value: "LA DES",
          disabled: /* yearBookData.isInApproval */ false,
        },
        button: {
          text: "Guardar cambios",
          ingAction: "Guardando...",
          hidden: /* yearBookData.isInApproval */ false,
        },
      },
    },
  };

  return {
    header: {
      title: "Matricula",
    },
    blocks: [
      {
        component: "profiles",
        settings: {
          items: [
            {
              childBlocks: [prevStudentsFormTable],
            },
          ],
        },
      },
    ],
  };
}
