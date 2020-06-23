import { formCoordinador } from "../blocks/form-block/all-forms";
import { formPadrino } from "../blocks/form-block/all-forms";
import { formEscuela } from "../blocks/form-block/all-forms";

const formSetCoordinador = {
  component: "form",
  name: "userCordinatorForm",
  settings: {
    formsContent: formCoordinador,
    buttons: ["guardar,editar,cancelar"],
    data: {}
  }
};
const formSetEscuela = {
  component: "form",
  name: "userSchoolForm",
  settings: {
    formsContent: formEscuela,
    buttons: ["guardar,editar,cancelar"],
    data: {}
  }
};
const formSetPadrino = {
  component: "form",
  name: "userSponsorForm",
  settings: {
    formsContent: formPadrino,
    buttons: ["guardar,editar,cancelar"],
    data: {}
  }
};

export const PROFILE_CONFIG_PADRINO = {
  header: {
    title: "Perfil de Usuario"
  },
  blocks: [
    {
      component: "profiles",
      settings: {
        items: [
          {
            image: "../../assets/images/profile-oscar.jpg",
            title: "Carlos Camacaro",
            childBlocks: [{ ...formSetPadrino }]
          }
        ]
      }
    }
  ]
};
export const PROFILE_CONFIG_ESCUELA = {
  header: {
    title: "Perfil de Usuario"
  },
  blocks: [
    {
      component: "profiles",
      settings: {
        items: [
          {
            image: "../../assets/images/profile-oscar.jpg",
            title: "Carlos Camacaro",
            childBlocks: [{ ...formSetEscuela }]
          }
        ]
      }
    }
  ]
};
export const PROFILE_CONFIG_COORDINADOR = {
  header: {
    title: "Perfil de Usuario"
  },
  blocks: [
    {
      component: "profiles",
      settings: {
        items: [
          {
            image: "../../assets/images/profile-oscar.jpg",
            title: "Carlos Camacaro",
            childBlocks: [{ ...formSetCoordinador }]
          }
        ]
      }
    }
  ]
};
