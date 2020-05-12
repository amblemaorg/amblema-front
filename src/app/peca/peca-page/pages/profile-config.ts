import { formCoordinador } from '../blocks/form-block/all-forms'
import { formPadrino } from '../blocks/form-block/all-forms'
import { formEscuela } from '../blocks/form-block/all-forms'

const formSet = {
    component: 'form',
    settings: {
        formsContent: formCoordinador,
        buttons: ['guardar,editar,cancelar'],
    }
}

export const PROFILE_CONFIG = {
    header: {
        title: "Perfil de Usuario"
    },
    blocks: [
        {
            component: 'profiles',
            settings: {
                items: [
                    {
                        image: "../../assets/images/profile-oscar.jpg",
                        title: "Carlos Camacaro",
                        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis possimus culpa voluptatum eveniet hic voluptas! ",
                        childBlocks: [
                            { ...formSet }
                        ]
                    }
                ]
            }
        }
    ]
}
