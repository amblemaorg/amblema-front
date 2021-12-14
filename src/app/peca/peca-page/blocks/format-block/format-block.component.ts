import {
  Component,
  OnInit,
  AfterViewInit,
  ViewContainerRef,
  QueryList,
  ViewChildren,
} from "@angular/core";
import {
  PageBlockComponent,
  StructuralBlockComponent,
  StructuralItem,
} from "../page-block.component";
import { PageBlockFactory } from "../page-block-factory";
import { GlobalService } from "src/app/services/global.service";
import { Select } from "@ngxs/store";
import { Observable, Subscription } from "rxjs";
import { PecaState } from "src/app/store/states/peca/peca.state";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { ClassGetter } from "@angular/compiler/src/output/output_ast";
import { saveAs } from "file-saver";
import XLSX from "xlsx";

@Component({
  selector: "peca-format-block",
  templateUrl: "./format-block.component.html",
  styleUrls: ["./format-block.component.scss"],
})
export class FormatDownloadBlock
  implements StructuralBlockComponent, OnInit, AfterViewInit
{
  @ViewChildren("formatContainer", { read: ViewContainerRef })
  formatContainer: QueryList<ViewContainerRef>;
  factory: PageBlockFactory;

  type: "structural";
  component: string;
  settings: {
    items: StructuralItem[];
  };

  constructor(private globals: GlobalService) {
    this.type = "structural";
    this.component = "form-blockS";
  }

  private makeFormatExcel(): any {
    const workbook = XLSX.utils.book_new();
    workbook.Props = {
      Title: "Formato para registro de estudiantes",
      Subject: "Formato",
      Author: "Amblema",
      CreatedDate: new Date(Date.now()),
    };

    workbook.SheetNames.push("Formato estudiantes");
    const columns_data = [
      [
        "Nombre",
        "Apellido",
        "Tipo de documento",
        "Documento de identidad",
        "Fecha de nacimiento",
        "Género",
        "Grado",
        "Sección",
      ],
    ];
    const columns = XLSX.utils.aoa_to_sheet(columns_data);
    workbook.Sheets["Formato estudiantes"] = columns;
    /* Exportar workbook como binario para descarga */
    const workbookBinary = XLSX.write(workbook, {
      type: "binary",
      bookType: "xls",
    });
    return workbookBinary;
  }
  downloadFormatExcel(): void {
    const workbookBin = this.makeFormatExcel();
    const octetStream = this.binary2octet(workbookBin);
    saveAs(
      new Blob([octetStream], { type: "application/octet-stream" }),
      "formato_estudiantes.xls"
    );
  }

  private binary2octet(binary): ArrayBuffer {
    const buffer = new ArrayBuffer(binary.length);
    const view = new Uint8Array(buffer);
    for (let i = 0; i < binary.length; i++) {
      view[i] = binary.charCodeAt(i) & 0xff; // transformacion a octeto
    }
    return buffer;
  }

  ngOnInit(): void {}

  setSettings(): void {}

  ngAfterViewInit(): void {}
}
