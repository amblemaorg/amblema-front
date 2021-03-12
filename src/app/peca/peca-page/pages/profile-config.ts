import { formCoordinador, passwordConfs, formPadrino, formEscuela } from "../blocks/form-block/all-forms";

const formSetCoordinador = {
  component: "form",
  name: "userCordinatorForm",
  settings: {
    formsContent: {...formCoordinador, ...passwordConfs},
    buttons: ["guardar", "editar", "cancelar"],
    data: {},
    formType: "actualizarCoordinador",
    fetcherMethod: "put",
    isEditable: true,
    notGenerateId: true,
    notResetForm: true
  }
};
const formSetEscuela = {
  component: "form",
  name: "userSchoolForm",
  settings: {
    formsContent: {...formEscuela, ...passwordConfs},
    buttons: ["guardar", "editar", "cancelar"],
    data: {},
    formType: "actualizarEscuela",
    fetcherMethod: "put",
    isEditable: true,
    notGenerateId: true,
    notResetForm: true
  }
};
const formSetPadrino = {
  component: "form",
  name: "userSponsorForm",
  settings: {
    formsContent: {...formPadrino, ...passwordConfs},
    buttons: ["guardar", "editar", "cancelar"],
    data: {},
    formType: "actualizarPadrino",
    fetcherMethod: "put",
    isEditable: true,
    notGenerateId: true,
    notResetForm: true
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
