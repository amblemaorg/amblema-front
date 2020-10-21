export function annualConventionConfigMapper(pecaContent, lapseNumber, permissions) {
  const pecaId = pecaContent.id;
  const lapseName = `lapse${lapseNumber}`;
  const { checklist } = pecaContent[lapseName].annualConvention;
  const { annual_convention_peca_edit } = permissions;

  const checklistComponent = {
    component: 'checkList',
    name: "AnnualConventionCheckLists",
    settings: {
      fetcherMethod: "post",
      fetcherUrls: {
        post: `pecaprojects/annualconvention/${pecaId}`
      },
      flag: true,
      infoContainer: [
        {
          datosNivel: [
            {
              title: 'Convención Anual',
              isFromAnnualConvention: true,
              checkList: checklist,
            }
          ],
          button: {
            hidden: !annual_convention_peca_edit,
            name: 'Guardar'
          },
        }
      ]
    }
  }

  return {
    header: {
        title: "Convención Anual"
    },
    blocks: [
      {
        component: 'profiles',
        settings: {
          items: [
            {
              childBlocks: [checklistComponent]
            },
          ]
        }
      }
    ]
  }
}
