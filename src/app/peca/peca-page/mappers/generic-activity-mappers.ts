import { parseDate } from "../functions/parse-date";
import { GenericActivity } from "../../../models/peca/generic-activity.model";

export function genericActivityMapper(data: GenericActivity, user_type) {
  const at = "2"; // approval type, at '2' means Only Checklist is in the view
  const activity_to_use =
    data.approvalHistory.length > 0 &&
    data.status === "2" &&
    data.approvalHistory[data.approvalHistory.length - 1].status === "1"
      ? data.approvalHistory[data.approvalHistory.length - 1]
      : null;

  // 1 pendiente, 2 aprobado, 3 rechazado, 4 cancelado
  const g_a_status =
    data.status === "2"
      ? 1
      : data.approvalHistory.length > 0
      ? data.approvalHistory[data.approvalHistory.length - 1].status === "2" ||
        data.approvalHistory[data.approvalHistory.length - 1].status === "3"
        ? +data.approvalHistory[data.approvalHistory.length - 1].status
        : 0
      : 0;

  const { date, file, text, uploadedFile, video, checklist } =
    data.approvalHistory.length > 0 &&
    data.status === "2" &&
    data.approvalHistory[data.approvalHistory.length - 1].status === "1"
      ? {
          date: activity_to_use.detail.date
            ? activity_to_use.detail.date
            : data.date,
          file: activity_to_use.detail.file
            ? activity_to_use.detail.file
            : data.file,
          text: activity_to_use.detail.text
            ? activity_to_use.detail.text
            : data.text,
          uploadedFile: activity_to_use.detail.uploadedFile
            ? activity_to_use.detail.uploadedFile
            : data.uploadedFile,
          video: activity_to_use.detail.video
            ? activity_to_use.detail.video
            : data.video,
          checklist: activity_to_use.detail.checklist
            ? activity_to_use.detail.checklist
            : data.checklist,
        }
      : {
          date: data.date,
          file: data.file,
          text: data.text,
          uploadedFile: data.uploadedFile,
          video: data.video,
          checklist: data.checklist,
        };

  const g_a_status_selector =
    data.approvalType === "4" ||
    (data.approvalType === "1" && user_type && +user_type < 2)
      ? {
          btnApprovalType: +data.approvalType,
          statusSelectorData: {
            genActSelectStatus: true,
            status: data.status !== "1" ? "2" : "1",
          },
        }
      : null;

  const g_a_text = data.hasText
    ? {
        subtitles: [{ text: text }],
      }
    : null;

  const g_a_date =
    data.hasDate && data.approvalType !== at
      ? {
          dateOrtext: {
            text: "Fecha de la actividad:",
            ...[date ? true : false].reduce((dateOtherData, isThereDate) => {
              dateOtherData["fields"] = [
                {
                  placeholder: "Fecha de la actividad",
                  fullwidth: false,
                  specialDateForm: "dateForGenericActivity",
                  dateForGenericActivityDay: null,
                  dateForGenericActivityMonth: null,
                  dateForGenericActivityYear: null,
                  dateForGenericActivityInactiveInput: null,
                  theWholeDate: isThereDate ? date : null,
                  type: "date",
                  // value: isThereDate ? parseDate( new Date( date.split("+").shift() ), true ) : null,
                  value: isThereDate ? date.split("T")[0] : null,
                  validations: {
                    required: true,
                  },
                },
              ];

              return dateOtherData;
            }, {}),
          },
        }
      : null;

  const g_a_download = data.hasFile
    ? {
        download: file
          ? {
              url: file.url,
              name: file.name,
            }
          : null,
      }
    : null;

  const g_a_video = data.hasVideo
    ? {
        video: video
          ? {
              url: video.url,
              name: video.name,
            }
          : null,
      }
    : null;

  const g_a_addMT =
    data.hasText && (data.hasDate || data.hasFile)
      ? {
          addMT: {
            ...Object.keys(data).reduce((items, checker) => {
              if (checker.includes("has")) {
                const name = checker === "hasText" ? "subtitles" : null;
                if (name) items[name] = true;
              }
              return items;
            }, {}),
          },
        }
      : null;

  const g_a_upload =
    data.hasUpload && data.approvalType !== at
      ? {
          upload: uploadedFile
            ? {
                uploadEmpty: false,
                url: uploadedFile.url,
                name: uploadedFile.name,
              }
            : { uploadEmpty: true },
        }
      : null;

  // CHECKLIST
  const all_checked = checklist.every((ch) => ch.checked);
  const g_a_checklist = [data.hasChecklist].reduce(
    (checklistObj, hasChecklist) => {
      if (hasChecklist) {
        checklistObj = {
          ...checklistObj,
          title: all_checked
            ? "Has completado los siguientes items:"
            : "Completa los siguientes ítems:",
          approvedAct:
            data.status === "3" && data.approvalType !== "5" ? true : false,
          checklist: checklist,
          percent: data.percent,
        };
      }
      return checklistObj;
    },
    {}
  );

  const g_a_action_btn = {
    isGenericActivityBtnReceptor: true,
    btnApprovalType: +data.approvalType,
    action:
      (+data.status < 3 || +data.approvalType === 5) &&
      (data.hasDate || data.hasUpload || data.hasChecklist)
        ? +data.approvalType === 1 && user_type && +user_type > 1
          ? null
          : [data.approvalType].reduce((btns, approvalType) => {
              btns.push({
                extraData: { isDuplicated: false },
                type:
                  data.status === "1" || approvalType === "5"
                    ? approvalType === "3"
                      ? 7
                      : 8
                    : 9,
                name:
                  data.status === "1" || approvalType === "5"
                    ? "Guardar"
                    : "Cancelar solicitud",
              });
              return btns;
            }, [])
        : null,
  };

  const g_a_action_btn_validators = {
    genActSavingTypes:
      data.hasDate || data.hasUpload || data.hasChecklist
        ? {
            hasDate: data.hasDate,
            hasUpload: data.hasUpload,
            hasChecklist: data.hasChecklist,
          }
        : null,
  };

  return {
    g_a_status,
    activity_cancel_id: activity_to_use ? activity_to_use.id : null,
    g_a_status_selector,
    g_a_text,
    g_a_date,
    g_a_download,
    g_a_video,
    g_a_addMT,
    g_a_upload,
    g_a_checklist,
    g_a_action_btn,
    g_a_action_btn_validators,
  };
}
