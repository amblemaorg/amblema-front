import { Injectable, Inject, Output, EventEmitter } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import {
  PdfMakeWrapper,
  Img,
  Rect,
  Canvas,
  Polyline,
  Txt,
  Toc,
  TocItem,
  Stack,
  Columns,
  Table,
} from "pdfmake-wrapper";
// import pdfFonts from "pdfmake/build/vfs_fonts";
import pdfFonts from "../../peca/peca-page/pdf-fonts/custom-fonts";

@Injectable({
  providedIn: "root",
})
export class PdfYearbookService {
  private fontsInstantiated: boolean;

  private colors = {
    blue: "#00809A",
    green: "#81B03E",
    white: "#FFF",
    darkGreen: "#337550",
    rowGray: "#EBEFF5",
  };

  private graphics = {
    lapse1: {
      diagnosticReading: null,
      diagnosticMath: null,
      diagnosticLogic: null,
    },
    lapse2: {
      diagnosticReading: null,
      diagnosticMath: null,
      diagnosticLogic: null,
    },
    lapse3: {
      diagnosticReading: null,
      diagnosticMath: null,
      diagnosticLogic: null,
    },
  };

  @Output() callGraphicBase64ImgEmitter: EventEmitter<any> = new EventEmitter();

  constructor(@Inject(DOCUMENT) private document: Document) {}

  public setGraphics(lapse: string, graphic: string, img: string) {
    this.graphics[lapse][graphic] = img;
  }

  private clearGraphics() {
    Object.keys(this.graphics).map((lapse) => {
      Object.keys(this.graphics[lapse]).map((diagnostic) => {
        this.graphics[lapse][diagnostic] = null;
      });
    });
  }

  private instantiatePdfFonts() {
    if (!this.fontsInstantiated) {
      // PdfMakeWrapper.setFonts(pdfFonts); // with default pdf font
      PdfMakeWrapper.setFonts(pdfFonts, {
        // with custom fonts -----
        montserrat: {
          normal: "Montserrat-Regular.ttf",
          bold: "Montserrat-ExtraBold.ttf",
          italics: "Montserrat-Regular.ttf",
          bolditalics: "Montserrat-Medium.ttf",
        },
      });
      PdfMakeWrapper.useFont("montserrat"); // ----------------------

      this.fontsInstantiated = true;
    }
  }

  async generateYearbookPdf(pdf_data: any): Promise<boolean> {
    this.callGraphicBase64ImgEmitter.emit();

    const images_ = {
      lapse1: {},
      lapse2: {},
      lapse3: {},
    };

    if (pdf_data["lapses"]) {
      const lapsesImgs = pdf_data.lapses.map(async (lapse, i, arrL) => {
        const theActImgs =
          lapse["activities"] && lapse["activities"].length
            ? lapse.activities.map(async (activity, j, arrA) => {
                const images_act = await this.getActivityImages(
                  activity.images || []
                );
                images_[`lapse${i + 1}`][`${j}`] = images_act.length
                  ? images_act
                  : [];
              })
            : [];
        if (lapse["activities"] && lapse["activities"].length)
          await Promise.all(theActImgs);
      });
      await Promise.all(lapsesImgs);
    }

    const generateThisPdf = async () => {
      clearInterval(interval);
      this.instantiatePdfFonts(); // instantianting pdf font family
      const pdf = new PdfMakeWrapper(); // pdf document definition instance
      const pdfPageSizes = {
        width: 792,
        height: 612,
      };

      const pdfData = pdf_data ? pdf_data : {};

      //* pdf metadata----------------------------------------
      pdf.info({
        title: "AmbLeMario",
        author: "AmbLeMa",
        subject: "Anuario",
      });

      //* pdf page configurations-----------------------------
      pdf.pageSize("LETTER");
      pdf.pageOrientation("landscape");

      pdf.pageMargins([70, 60, 70, 70]);

      //* local images to get transformed into base64 format---------------------------------------------
      const open_book = await this.getBase64FromImg(
        "../../../assets/images/pdf/open-book.png"
      );
      const amble_logo = await this.getBase64FromImg(
        "../../../assets/images/pdf/amblelogo.png"
      );
      const symbols = await this.getBase64FromImg(
        "../../../assets/images/pdf/simbolos-azules.png"
      );

      //* pdf images library---------------------------------------------------------------------
      if (pdfData["sponsorLogo"])
        pdf.images({
          openBook: open_book ? await new Img(open_book).build() : null,
          ambleLogo: amble_logo ? await new Img(amble_logo).build() : null,
          sponsorLogo: pdfData["sponsorLogo"]
            ? await new Img(pdfData.sponsorLogo).build()
            : null,
          blueSymbols: symbols ? await new Img(symbols).build() : null,
        });
      else
        pdf.images({
          openBook: open_book ? await new Img(open_book).build() : null,
          ambleLogo: amble_logo ? await new Img(amble_logo).build() : null,
          blueSymbols: symbols ? await new Img(symbols).build() : null,
        });

      //? pdf background, when cover page the background is blue------------------------
      pdf.background((currentPage, pageSize) => {
        pdfPageSizes.width = pageSize.width;
        pdfPageSizes.height = pageSize.height;

        if (currentPage === 1)
          return new Canvas([
            new Rect(0, [pdfPageSizes.width, pdfPageSizes.height]).color(
              this.colors.blue
            ).end,
          ]).end;
        else if (currentPage > 2)
          return new Txt(this.getPageNumberFormated(`${currentPage}`))
            .bold()
            .absolutePosition(20, pdfPageSizes.height - 46)
            .color(this.colors.darkGreen).end;

        return null;
      });
      //? ---------------

      //* loading images for pdf footer use-------------------------------------------------------------------------------------------------------------------
      const cover_footer = open_book
        ? await new Img("openBook", true)
            .width(pdfPageSizes.width + 180)
            .margin([-80, -223, 0, 0])
            .build()
        : null;
      const footer_amble_logo = amble_logo
        ? await new Img("ambleLogo", true)
            .fit([42, 42])
            .relativePosition(pdfPageSizes.width - 60, -3)
            .build()
        : null;
      const footer_sponsor_logo = pdfData["sponsorLogo"]
        ? await new Img("sponsorLogo", true)
            .fit([65, 30])
            .relativePosition(-80, 7)
            .alignment("right")
            .build()
        : null;
      //* FOOTER . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
      /* pdf footer, when cover page opened book appears
       */
      pdf.footer((currentPage, pageSize) => {
        if (currentPage === 1) return cover_footer;
        else
          return new Stack([
            footer_amble_logo,
            footer_sponsor_logo,
            new Canvas([
              new Rect(0, [pdfPageSizes.width, 24]).color(this.colors.green)
                .end,
            ]).relativePosition(0, 46).end,
          ]).end;
      });

      //* COVER PAGE . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
      pdf.add(
        new Stack([
          pdfData["schoolYear"]
            ? new Txt(pdfData.schoolYear).fontSize(21).margin([0, 0, 0, 5]).end
            : null,
          pdfData["sponsorName"] ? pdfData.sponsorName.toUpperCase() : null,
        ])
          .alignment("center")
          .relativePosition(0, -20)
          .style("coverHeader")
          .bold().end
      );

      [
        ...(amble_logo ? ["amble_logo"] : []),
        ...(pdfData["sponsorLogo"] ? ["sponsor_logo"] : []),
      ].forEach((logo) => {
        pdf.add(
          new Canvas([
            new Polyline([
              { x: 0, y: 0 },
              { x: 0, y: 90 },
              { x: 41, y: 115 },
              { x: 45, y: 116 },
              { x: 49, y: 115 },
              { x: 90, y: 90 },
              { x: 90, y: 0 },
            ])
              .closePath()
              .color(this.colors.white).end,
          ]).absolutePosition(
            logo === "amble_logo" ? 45 : pdfPageSizes.width - 135,
            0
          ).end
        );
      });

      if (amble_logo)
        pdf.add(
          await new Img("ambleLogo", true)
            .fit([72, 72])
            .absolutePosition(54, 15)
            .build()
        );
      if (pdfData["sponsorLogo"])
        pdf.add(
          await new Img("sponsorLogo", true)
            .fit([72, 72])
            .absolutePosition(pdfPageSizes.width - 126, 15)
            .build()
        );

      pdf.add(
        new Stack([
          new Txt("AmbLeMario").bold().fontSize(62).end,
          pdfData["schoolName"]
            ? new Txt(pdfData.schoolName).bold().fontSize(16).end
            : null,
          pdfData["schoolName"]
            ? new Canvas([
                new Rect(0, [(185 * pdfData.schoolName.length) / 21, 1]).color(
                  this.colors.green
                ).end,
              ]).end
            : null,
          pdfData["schoolCity"]
            ? new Txt(pdfData.schoolCity).bold().margin([0, 4]).end
            : null,
        ])
          .alignment("center")
          .margin([0, 135, 0, 0])
          .color(this.colors.white).end
      );

      //* INDEX ----------------------------------------------------------------------------
      pdf.add(
        new Toc(
          new Txt("Indice")
            .style("highlight")
            .margin([0, 0, 0, 15])
            .pageBreak("before").end
        ).numberStyle({ bold: true, italics: true }).end
      );

      //? PDF CONTENT VARIABLES -----------------------------------------------
      const menu_item_margin = { left: 16, bottom: 6 };
      const column_gap = 70;
      const column_style = "text";
      const img_left_top_width = { width: 288, height: 132 };
      const img_left_top = { x: 432, y: 33 };
      const u_name_margin = 30;
      const increment_top = 30;
      const increment_bottom = 20;
      const increment_bottom2 = -22;

      //* PDF CONTENT blocks ------------------------------------------------------------------------------------------------------------
      // HISTORICAL REVIEW ...................................................
      if (pdfData["historicalReviewText"]) {
        pdf.add(
          new TocItem(
            new Txt(pdfData.historicalReviewName)
              .style("highlight")
              .margin([
                0,
                pdfData["historicalReviewImg"] ? increment_top : 0,
                0,
                u_name_margin +
                  (pdfData["historicalReviewImg"]
                    ? increment_bottom + 20
                    : -20),
              ])
              .pageBreak("before").end
          )
            .tocStyle({ bold: true, italics: true, fontSize: 13 })
            .tocMargin([0, 0, 0, menu_item_margin.bottom]).end
        );
        if (pdfData["historicalReviewImg"])
          pdf.add(
            await new Img(pdfData.historicalReviewImg)
              .fit([img_left_top_width.width, img_left_top_width.height])
              .absolutePosition(img_left_top.x, img_left_top.y)
              .build()
          );

        if (pdfData["historicalReviewText"])
          pdf.add(
            new Columns(this.getColums(pdfData.historicalReviewText, pdf))
              .columnGap(column_gap)
              .style(column_style).end
          );
      }

      // SPONSOR ..............................................................
      if (pdfData["sponsorName"] && pdfData["sponsorText"]) {
        pdf.add(
          new Stack([
            new TocItem(
              new Txt("Padrino")
                .color(this.colors.blue)
                .style("subHeading")
                .italics().end
            )
              .tocStyle({ bold: true, italics: true, fontSize: 13 })
              .tocMargin([0, 0, 0, menu_item_margin.bottom]).end,
            new Columns(
              pdfData["sponsorLogo"]
                ? [
                    new Txt(pdfData.sponsorName).style([
                      "highlight",
                      "userName",
                    ]).end,
                    null,
                  ]
                : [
                    new Txt(pdfData.sponsorName).style([
                      "highlight",
                      "userName",
                    ]).end,
                  ]
            ).end,
          ])
            .margin([
              0,
              pdfData["sponsorLogo"] ? increment_top : 0,
              0,
              u_name_margin +
                (pdfData["sponsorLogo"] ? increment_bottom : increment_bottom2),
            ])
            .pageBreak("before").end
        );

        if (pdfData["sponsorLogo"])
          pdf.add(
            await new Img("sponsorLogo", true)
              .fit([img_left_top_width.width, img_left_top_width.height])
              .absolutePosition(img_left_top.x, img_left_top.y)
              .build()
          );

        if (pdfData["sponsorText"])
          pdf.add(
            new Columns(this.getColums(pdfData.sponsorText, pdf))
              .columnGap(column_gap)
              .style(column_style).end
          );
      }

      // COORDINATOR REVIEW ...................................................
      if (pdfData["coordinatorName"] && pdfData["coordinatorText"]) {
        pdf.add(
          new Stack([
            new TocItem(
              new Txt("Coordinador")
                .color(this.colors.blue)
                .style("subHeading")
                .italics().end
            )
              .tocStyle({ bold: true, italics: true, fontSize: 13 })
              .tocMargin([0, 0, 0, menu_item_margin.bottom]).end,
            new Columns(
              pdfData["coordinatorImg"]
                ? [
                    new Txt(pdfData.coordinatorName).style([
                      "highlight",
                      "userName",
                    ]).end,
                    null,
                  ]
                : [
                    new Txt(pdfData.coordinatorName).style([
                      "highlight",
                      "userName",
                    ]).end,
                  ]
            ).end,
          ])
            .margin([
              0,
              pdfData["coordinatorImg"] ? increment_top : 0,
              0,
              u_name_margin +
                (pdfData["coordinatorImg"]
                  ? increment_bottom
                  : increment_bottom2),
            ])
            .pageBreak("before").end
        );

        if (pdfData["coordinatorImg"])
          pdf.add(
            await new Img(pdfData.coordinatorImg)
              .fit([img_left_top_width.width, img_left_top_width.height])
              .absolutePosition(img_left_top.x, img_left_top.y)
              .build()
          );

        if (pdfData["coordinatorText"])
          pdf.add(
            new Columns(this.getColums(pdfData.coordinatorText, pdf))
              .columnGap(column_gap)
              .style(column_style).end
          );
      }

      //? SCHOOL REVIEW ...............................................................................................................................................
      if (pdfData["schoolName"] && pdfData["schoolText"]) {
        pdf.add(
          new Stack([
            new TocItem(
              new Txt("Escuela")
                .color(this.colors.blue)
                .style("subHeading")
                .italics().end
            )
              .tocStyle({ bold: true, italics: true, fontSize: 13 })
              .tocMargin([0, 0, 0, menu_item_margin.bottom]).end,
            new Columns(
              pdfData["schoolImg"]
                ? [
                    new Txt(pdfData.schoolName).style(["highlight", "userName"])
                      .end,
                    null,
                  ]
                : [
                    new Txt(pdfData.schoolName).style(["highlight", "userName"])
                      .end,
                  ]
            ).end,
          ])
            .margin([
              0,
              pdfData["schoolImg"] ? increment_top : 0,
              0,
              u_name_margin +
                (pdfData["schoolImg"] ? increment_bottom : increment_bottom2),
            ])
            .pageBreak("before").end
        );

        if (pdfData["schoolImg"])
          pdf.add(
            await new Img(pdfData.schoolImg)
              .fit([img_left_top_width.width, img_left_top_width.height])
              .absolutePosition(img_left_top.x, img_left_top.y)
              .build()
          );

        if (pdfData["schoolText"])
          pdf.add(
            new Columns(this.getColums(pdfData.schoolText, pdf))
              .columnGap(column_gap)
              .style(column_style).end
          );
      }

      //--- SECTIONS -----------------------------------------------------------------
      const symbolsCoverImg = symbols
        ? await new Img("blueSymbols", true)
            .width(pdfPageSizes.width)
            .absolutePosition(0, 0)
            .build()
        : null;

      if (pdfData["schoolSections"]) {
        pdf.add(
          new TocItem(new Txt("Grados y secciones").fontSize(0).opacity(0).end)
            .tocStyle({ bold: true, italics: true, fontSize: 13 })
            .tocMargin([0, 0, 0, menu_item_margin.bottom]).end
        );

        const sortedSections = pdfData.schoolSections.sort((curr, next) => {
          const currentSection = curr.sectionName[
            curr.sectionName.length - 1
          ].toLowerCase();
          const nextSection = next.sectionName[
            next.sectionName.length - 1
          ].toLowerCase();
          const currentGrade = curr.sectionGrade.toLowerCase();
          const nextGrade = next.sectionGrade.toLowerCase();
          if (
            currentGrade < nextGrade ||
            (currentGrade == nextGrade && currentSection < nextSection)
          )
            return -1;
          if (
            currentGrade > nextGrade ||
            (currentGrade == nextGrade && currentSection > nextSection)
          )
            return 1;
          return 0;
        });

        const sortedSectionsImgs = Array(sortedSections.length).fill(null);

        const sectionsPromises = sortedSections.map(
          async (section_, theInx_) => {
            if (section_["sectionName"] && section_["sectionStudents"]) {
              const section_img = section_["sectionImg"]
                ? await new Img(section_.sectionImg)
                    .fit([pdfPageSizes.width - 140, 190])
                    .absolutePosition(70, 60)
                    .alignment("center")
                    .build()
                : null;
              sortedSectionsImgs[theInx_] = section_img;
            } else sortedSectionsImgs[theInx_] = null;
          }
        );

        await Promise.all(sectionsPromises);

        sortedSections.map((section, theSectionInx) => {
          if (section["sectionName"] && section["sectionStudents"]) {
            pdf.add(
              new TocItem(
                new Txt(section.sectionName)
                  .style("highlight")
                  .margin([0, section["sectionImg"] ? 205 : 190, 0, 15])
                  .pageBreak("before").end
              )
                .tocStyle({ bold: true, italics: true })
                .tocMargin([
                  menu_item_margin.left,
                  0,
                  0,
                  menu_item_margin.bottom,
                ]).end
            );

            if (symbolsCoverImg) pdf.add(symbolsCoverImg);
            if (sortedSectionsImgs[theSectionInx])
              pdf.add(sortedSectionsImgs[theSectionInx]);

            pdf.add(
              new Columns(this.getStudents(section.sectionStudents))
                .color(this.colors.blue)
                .bold()
                .italics().end
            );
          }
        });
      }

      //? END SCHOOL REVIEW ...........................................................................................................................................

      // LAPSES' GRAPHICS IMAGES ------------------------------------------------------------------------
      const theGraphs = Object.keys(this.graphics).map(async (lapse) => {
        const graphsImgs = Object.keys(this.graphics[lapse]).map(
          async (diagnostic) => {
            if (this.graphics[lapse][diagnostic]) {
              const graphimg = await new Img(this.graphics[lapse][diagnostic])
                .fit([pdfPageSizes.width - 140, 321])
                .alignment("center")
                .build();
              this.graphics[lapse][diagnostic] = graphimg;
            }
          }
        );
        await Promise.all(graphsImgs);
      });
      await Promise.all(theGraphs);

      if (pdfData.breakForLapses)
        pdf.add(
          new Txt("page-breaker").fontSize(0).opacity(0).pageBreak("after").end
        );

      //! LAPSES ----------------------------------------------------------------------------------------------------------------------------------------
      if (pdfData["lapses"]) {
        pdfData.lapses.map((lapse, indx, lapseArr) => {
          const lapse_skills = [
            ...(lapse["diagnosticReading"] ? [lapse["diagnosticReading"]] : []),
            ...(lapse["diagnosticMath"] ? [lapse["diagnosticMath"]] : []),
            ...(lapse["diagnosticLogic"] ? [lapse["diagnosticLogic"]] : []),
          ];

          const hasSum = Object.keys(images_[`lapse${indx + 1}`]).length;
          if (lapse_skills.length || (lapse["activities"] && hasSum))
            pdf.add(
              new TocItem(new Txt(lapse.lapseName).fontSize(0).opacity(0).end)
                .tocStyle({ bold: true, italics: true, fontSize: 13 })
                .tocMargin([0, 0, 0, menu_item_margin.bottom]).end
            );

          lapse_skills.map((skill, index, arr) => {
            if (skill) {
              pdf.add(
                new TocItem(
                  new Txt(skill.diagnosticText).fontSize(0).opacity(0).end
                )
                  .tocStyle({ bold: true, italics: true })
                  .tocMargin([
                    menu_item_margin.left,
                    0,
                    0,
                    menu_item_margin.bottom,
                  ]).end
              );

              const skillName =
                index === 0
                  ? "diagnosticReading"
                  : index === 1
                  ? "diagnosticMath"
                  : "diagnosticLogic";

              if (skill["diagnosticTable"]) {
                pdf.add(
                  new Stack([
                    new Txt(lapse.lapseName).style(["highlight", "heading"])
                      .end,
                  ])
                    .color(this.colors.blue)
                    .margin([0, 0, 0, 35]).end
                );

                pdf.add(
                  new Txt(skill.diagnosticText)
                    .style("highlight")
                    .margin([0, 20]).end
                );

                pdf.add(
                  new TocItem(
                    new Txt("Tabla de diagnóstico").fontSize(0).opacity(0).end
                  ).tocMargin([
                    menu_item_margin.left * 2,
                    0,
                    0,
                    menu_item_margin.bottom,
                  ]).end
                );

                pdf.add(
                  new Table(this.getTableRows(skill.diagnosticTable))
                    .widths([75, 75, "*", "auto"])
                    .layout({
                      fillColor: (rowIndex) =>
                        rowIndex !== 0 && rowIndex % 2 === 0
                          ? this.colors.rowGray
                          : null,
                      paddingLeft: (rowIndex) => (rowIndex === 0 ? 25 : 15),
                      paddingTop: (rowIndex) => (rowIndex === 0 ? 10 : 7),
                      paddingRight: () => 15,
                      paddingBottom: (rowIndex) => (rowIndex === 0 ? 10 : 7),
                      hLineColor: (rowIndex, node) =>
                        rowIndex === 0 ||
                        rowIndex === 1 ||
                        rowIndex === node.table.body.length
                          ? this.colors.blue
                          : null,
                      vLineColor: () => this.colors.blue,
                      hLineWidth: (rowIndex, node) =>
                        rowIndex > 1 && rowIndex !== node.table.body.length
                          ? 0
                          : 1,
                    }).end
                );

                if (
                  skill["diagnosticAnalysis"] ||
                  this.graphics[`lapse${indx + 1}`][skillName] ||
                  (lapse["activities"] && hasSum)
                )
                  pdf.add(
                    new Txt("page-breaker")
                      .fontSize(0)
                      .opacity(0)
                      .pageBreak("after").end
                  );
              }

              // GRAPHICS
              if (this.graphics[`lapse${indx + 1}`][skillName]) {
                pdf.add(
                  new Stack([
                    new Txt(lapse.lapseName).style(["highlight", "heading"])
                      .end,
                  ])
                    .color(this.colors.blue)
                    .margin([0, 0, 0, 35]).end
                );

                pdf.add(
                  new TocItem(
                    new Txt(skill.diagnosticGraphicText)
                      .style("highlight")
                      .margin([0, 0]).end
                  ).tocMargin([
                    menu_item_margin.left * 2,
                    0,
                    0,
                    menu_item_margin.bottom,
                  ]).end
                );

                pdf.add(this.graphics[`lapse${indx + 1}`][skillName]);

                if (
                  skill["diagnosticAnalysis"] ||
                  (lapse["activities"] && hasSum)
                )
                  pdf.add(
                    new Txt("page-breaker")
                      .fontSize(0)
                      .opacity(0)
                      .pageBreak("after").end
                  );
              }

              // ANALYSIS
              if (skill["diagnosticAnalysis"]) {
                if (
                  !skill["diagnosticTable"] &&
                  !this.graphics[`lapse${indx + 1}`][skillName]
                ) {
                  pdf.add(
                    new Txt(lapse.lapseName)
                      .style("highlight")
                      .alignment("center")
                      .color(this.colors.blue)
                      .margin([0, 0, 0, 10]).end
                  );
                }

                pdf.add(
                  new Stack([
                    new Txt(skill.diagnosticText).style([
                      "highlight",
                      "heading",
                    ]).end,
                    new Canvas([
                      new Rect(0, [195, 1]).color(this.colors.blue).end,
                    ])
                      .alignment("center")
                      .relativePosition(0, 3).end,
                    new TocItem(
                      new Txt("Análisis y resultados")
                        .style(["heading", "subHeading"])
                        .relativePosition(0, 8).end
                    ).tocMargin([
                      menu_item_margin.left * 2,
                      0,
                      0,
                      menu_item_margin.bottom,
                    ]).end,
                  ])
                    .color(this.colors.blue)
                    .margin([
                      0,
                      0,
                      0,
                      index === arr.length - 1
                        ? 35
                        : !skill["diagnosticTable"] &&
                          !this.graphics[`lapse${indx + 1}`][skillName]
                        ? 35
                        : 53,
                    ]).end
                );

                pdf.add(
                  new Columns(this.getColums(skill.diagnosticAnalysis, pdf))
                    .columnGap(column_gap)
                    .style(column_style).end
                );

                if (lapse["activities"] && hasSum)
                  pdf.add(
                    new Txt("page-breaker")
                      .fontSize(0)
                      .opacity(0)
                      .pageBreak("after").end
                  );
              }
            }
          });

          //* ACTIVITIES ________________________________________________________________________________________
          if (lapse["activities"] && hasSum) {
            pdf.add(
              new TocItem(new Txt("Actividades").fontSize(0).opacity(0).end)
                .tocStyle({ bold: true, italics: true })
                .tocMargin([
                  menu_item_margin.left,
                  0,
                  0,
                  menu_item_margin.bottom,
                ]).end
            );

            const imagesToShow = lapse.activities.reduce(
              (activities_, activity_, actInx_) => {
                const thisActImgs =
                  hasSum && images_[`lapse${indx + 1}`][actInx_].length
                    ? images_[`lapse${indx + 1}`][actInx_]
                    : null;

                if (
                  activity_["name"] &&
                  ((activity_["images"] && thisActImgs) ||
                    activity_["description"])
                )
                  activities_.push({ ...activity_, thisActImgs });
                return activities_;
              },
              []
            );

            imagesToShow.forEach((activity, actInx, actArray) => {
              pdf.add(
                new Stack([
                  new Txt(lapse.lapseName).style(["highlight", "heading"]).end,
                  new Canvas([
                    new Rect(0, [195, 1]).color(this.colors.blue).end,
                  ])
                    .alignment("center")
                    .relativePosition(0, 3).end,
                  new Txt("Actividades")
                    .style(["heading", "subHeading"])
                    .relativePosition(0, 8).end,
                ])
                  .color(this.colors.blue)
                  .margin([0, 0, 0, 35]).end
              );

              pdf.add(
                new TocItem(
                  new Txt(activity.name)
                    .style("highlight")
                    .margin([0, 20, 0, 15]).end
                ).tocMargin([
                  menu_item_margin.left * 2,
                  0,
                  0,
                  menu_item_margin.bottom,
                ]).end
              );

              if (activity["description"])
                pdf.add(
                  new Columns(this.getColums(activity.description, pdf))
                    .columnGap(column_gap)
                    .style(column_style).end
                );

              if (
                activity["images"] &&
                activity["thisActImgs"] &&
                activity["thisActImgs"].length
              ) {
                if (activity["description"])
                  pdf.add(
                    new Txt("page-breaker")
                      .fontSize(0)
                      .opacity(0)
                      .pageBreak("after").end
                  );

                const tableRows = activity["thisActImgs"].length;

                pdf.add(
                  new Table(activity["thisActImgs"]).widths(["*", "*"]).layout({
                    paddingRight: (r) => (r === 0 ? 25 : 0),
                    paddingLeft: (r) => (r > 0 ? 25 : 0),
                    hLineWidth: () => 0,
                    vLineWidth: () => 0,
                    paddingTop: (r, n) =>
                      r === n.table.body.length - 1 && tableRows % 2 === 1 && r
                        ? 30
                        : 0,
                    paddingBottom: (r, n) =>
                      r === n.table.body.length - 1 ? 0 : 30,
                  }).end
                );
              }

              if (actInx !== actArray.length - 1)
                pdf.add(
                  new Txt("page-breaker")
                    .fontSize(0)
                    .opacity(0)
                    .pageBreak("after").end
                );
            });
          }

          if (indx !== lapseArr.length - 1)
            pdf.add(
              new Txt("page-breaker").fontSize(0).opacity(0).pageBreak("after")
                .end
            );
        });
      }
      //! END LAPSES ------------------------------------------------------------------------------------------------
      //* endOf PDF CONTENT blocks ---------------------------------------------------------------------------------------

      pdf.styles({
        coverHeader: {
          fontSize: 16,
          color: this.colors.white,
        },
        headerSchoolName: {
          fontSize: 16,
          decoration: "underline",
          decorationColor: this.colors.green,
        },
        highlight: {
          fontSize: 18,
          color: this.colors.blue,
          bold: true,
        },
        userName: {
          fontSize: 22,
        },
        heading: {
          fontSize: 25,
          alignment: "center",
        },
        subHeading: {
          fontSize: 13,
          bold: true,
        },
        text: {
          alignment: "justify",
          bold: true,
          italics: true,
        },
      });

      // PDF saving methods --
      // pdf.create().open();
      const window = pdf.create();
      // window.open();
      return new Promise<any>((resolve, reject) => {
        window.download("AmbLeMario", () => {
          this.clearGraphics();
          resolve(false);
        });
      });
      // pdf.create().download('AmbLeMario');
    };

    let interval = null;

    try {
      return generateThisPdf();
    } catch (error) {
      interval = setInterval(() => {
        try {
          return generateThisPdf();
        } catch (error) {
          //* --
          return new Promise<any>((resolve, reject) => {
            this.clearGraphics();
            reject(false);
          });
        }
      }, 2000);
    }
  }

  /**
   * transform an image file into base 64 format
   *
   * @param imgSrc source of the image to be transformed into base 64 format
   */
  private async getBase64FromImg(imgSrc): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      let dataURL = null;
      try {
        let canvas = this.document.createElement("canvas");
        const img = this.document.createElement("img");
        const ctx = canvas.getContext("2d");

        img.src = imgSrc;

        img.onload = () => {
          canvas.height = img.height;
          canvas.width = img.width;
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

          dataURL = canvas.toDataURL("image/png");
          canvas = null;
          resolve(dataURL);
        };
      } catch (e) {
        console.error("error while processing base64 conversion", e);
        resolve(dataURL);
      }
    });
  }

  private async getActivityImages(images: string[]): Promise<any[][]> {
    const body: any[][] = [];
    const theImgs = [];
    const blankImgs = [];
    const images_for_loop: any[] =
      images.length % 2 === 0 ? images : [...images, { img: images[0] }];
    const imagesPr = images_for_loop.map(async (img_url) => {
      try {
        const image_rendered = await new Img(
          typeof img_url === "string" ? img_url : img_url.img
        )
          .fit([275, 200])
          .opacity(typeof img_url === "string" ? 1 : 0)
          .alignment("center")
          .build();
        if (typeof img_url === "string") theImgs.push(image_rendered);
        else blankImgs.push(image_rendered);
      } catch (e) {
        console.error("could not get image", e);
      }
    });

    if (images_for_loop.length) await Promise.all(imagesPr);

    theImgs.forEach((img) => {
      if (body.length && body[body.length - 1].length === 1)
        body[body.length - 1].push(img);
      else body.push([img]);
    });

    blankImgs.forEach((bI) => {
      if (body.length && body[body.length - 1].length === 1)
        body[body.length - 1].push(bI);
    });

    return body.length ? body : [];
  }

  private getPageNumberFormated(number: string): string {
    return number.length > 1 ? number : `0${number}`;
  }

  private getParagraph(text_: string, pdf: any): any[] {
    let printed = false;

    return text_ && text_.length > 0
      ? text_
          .split(/\n\r+|\r\n+|\r+|\n+|\\r+|\\n+/)
          .reduce((finalText, line) => {
            if (line.length > 0 && printed)
              finalText.push(pdf.ln(), new Txt(line.trim()).end);
            if (line.length > 0 && !printed) {
              printed = true;
              finalText.push(new Txt(line.trim()).end);
            }
            return finalText;
          }, [])
      : null;
  }

  private getColums(text_: string, pdf: any): any[] {
    return [new Stack(this.getParagraph(text_, pdf)).end];
  }

  private getStudents(students: string[]): any[] {
    let count = 1;
    const cols = students.reduce(
      (cols, student, i, arr) => {
        const student_name = new Txt(student).margin([0, 0, 0, 10]).end;
        if (count === 1) {
          cols.one.push(student_name);
          count++;
        } else {
          cols.two.push(student_name);
          count = 1;
        }
        // if (arr.length <= 27) {
        //   if (count === 1) {
        //     cols.one.push(student_name);
        //     count++;
        //   } else if (count === 2) {
        //     cols.two.push(student_name);
        //     count++;
        //   } else {
        //     cols.three.push(student_name);
        //     count = 1;
        //   }
        // } else {
        //   if (count === 1) {
        //     cols.one.push(student_name);
        //     count++;
        //   } else if (count === 2) {
        //     cols.two.push(student_name);
        //     count++;
        //   } else if (count === 3) {
        //     cols.three.push(student_name);
        //     count++;
        //   } else {
        //     cols.four.push(student_name);
        //     count = 1;
        //   }
        // }
        return cols;
      },
      { one: [], two: [] /* , three: [], four: [] */ }
    );

    const cols_ = [
      new Stack(cols.one).end,
      new Stack(cols.two).end /* , new Stack(cols.three).end */,
    ];
    // if (students.length > 27) cols_.push(new Stack(cols.four).end);

    return cols_;
  }

  private getTableRows(body: string[][]): any[][] {
    const body_ = body.reduce((body_: any[], row) => {
      const row_ = row.map((col) => {
        return new Txt(col)
          .fontSize(10)
          .bold()
          .italics()
          .color(this.colors.blue).end;
      });

      body_.push(row_);

      return body_;
    }, []);

    return body_;
  }
}
// TO USE CUSTOM FONT, do the following:
// - npm install pdfmake-font-generator --save-dev
// - pdfmakefg /path/of/your/custom/fonts /path/of/the/output/file.js , i.e:
//      - pdfmakefg ./my-fonts ./pdf/fonts/custom-fonts.js
// - import pdfFonts from "./pdf/fonts/custom-fonts"; // The path of your custom fonts
// -----------------------------------------------------------------------------------
// PdfMakeWrapper.setFonts(pdfFonts, {
//   montserrat: {
//     normal: 'Montserrat-Regular.ttf',
//     bold: 'Montserrat-ExtraBold.ttf',
//     italics: 'Montserrat-Regular.ttf',
//     bolditalics: 'Montserrat-Medium.ttf'
//   }
// });
// PdfMakeWrapper.useFont('montserrat');
