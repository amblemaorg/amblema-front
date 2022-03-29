/**
 * @description Set the settings to print each status and comments
 * @author Christopher Dallar
 * @date 24/02/2022
 * @export
 * @class RejectionCommentsCustomBlockModel
 */
export class RejectionCommentsCustomBlockModel {
  config: RejectionCommentsCBlockModelConfig;
  comment: string;
  statusCode: number; // 0 Oculta el estatus -> no existe registro, 1 pendiente, 2 aprobado, 3 rechazado, 4 cancelado
  lastApprovalHistory;
  custom: Custom = { statusText: "Estatus", buttonText: "Ver más" };

  constructor(
    public approvalHistory: any[],
    public isInApproval: boolean,
    custom?: Custom
  ) {
    this.lastApprovalHistory =
      this.approvalHistory[this.approvalHistory.length - 1];

    this.setComments();
    this.setStatusCode();

    // console.log("RejectionCommentsCustomBlockModel", approvalHistory);
    // console.log("this.getSettings()", this.getSettings());
  }

  private setComments() {
    if (this.lastApprovalHistory) {
      this.comment = this.lastApprovalHistory.comments;
    }
  }

  private setStatusCode() {
    this.statusCode = 1;

    if (this.isInApproval) {
      return this.statusCode;
    }

    if (this.approvalHistory.length === 0) {
      return (this.statusCode = 0);
    }

    const status = this.lastApprovalHistory.status;

    // this.statusCode = status == "2" || "3" ? +status : 0;\
    this.statusCode = typeof status === "string" ? parseInt(status) : status;
  }

  private isThereComments() {
    return this.comment && this.statusCode == 3;
  }

  /**
   * @description Return the config that print the status and comments of approvals
   * @author Christopher Dallar
   * @date 24/02/2022
   * @return {RejectionCommentsCBlockModelConfig}
   * @memberof RejectionCommentsCustomBlockModel
   */
  getSettings(): RejectionCommentsCBlockModelConfig {
    return (this.config = {
      component: "textsbuttons",
      settings: {
        status: {
          text: this.custom.statusText,
          subText: this.statusCode,
          comments: this.comment,
        },
        action: this.isThereComments()
          ? [
              {
                type: 9,
                name: this.custom.buttonText,
              },
            ]
          : [],
      },
    });
  }
}

interface RejectionCommentsCBlockModelConfig {
  component: string;
  settings: Settings;
}

interface Settings {
  dateOrtext?: DateOrtext;
  status: Status;
  action: any[];
}

interface Status {
  text: string;
  subText: number;
  comments: string;
}

interface DateOrtext {}

interface Custom {
  statusText: string;
  buttonText: string;
}
