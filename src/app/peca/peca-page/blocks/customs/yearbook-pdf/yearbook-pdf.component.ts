import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { PresentationalBlockComponent } from '../../page-block.component'
import { pdfImgs } from './index-imgs'
import { yearbookPdfStyle } from './yearbook-pdf-maker-style'
const pdfMake = require('pdfmake/build/pdfmake.js')
const pdfFonts = require('pdfmake/build/vfs_fonts.js')
const htmlToPdfmake = require('html-to-pdfmake')
pdfMake.vfs = pdfFonts.pdfMake.vfs

@Component({
  selector: 'app-yearbook-pdf',
  templateUrl: './yearbook-pdf.component.html',
  styleUrls: ['./yearbook-pdf.component.scss'],
})
export class YearbookPdfComponent
  implements OnInit, PresentationalBlockComponent {
  @ViewChild('pdfElement', { static: false }) pdfElement: ElementRef
  type: 'presentational'
  name?: string
  component: string
  // viewMode?: string;
  settings: {}

  // PDF Mock up
  images = {}
  resourceLoaded = true
  pdfStyle = yearbookPdfStyle

  constructor() {}

  setSettings(settings: {}): void {
    this.settings = settings
    console.log('settings YearbookPDF', this.settings)

    // throw new Error('Method not implemented.');
  }

  ngOnInit() {
    // Listing and formatting to base64 image to use on htmlContext
    Object.keys(pdfImgs).forEach(async (key) => {
      this.images[key] = await pdfImgs[key]()
    })

    this.resourceLoaded =
      Object.keys(this.images).length === Object.keys(pdfImgs).length

    console.log(this.pdfStyle)

    console.log(
      'pdfStyle',
      this.trimStyle(this.pdfStyle.page.frontpage.header.value),
    )
  }

  trimStyle(style: string) {
    return style.toString().replace('\n', ' ').trim()
  }

  getImage(name: string) {
    return this.images[name] ? this.images[name] : ''
  }

  // Ref: https://pdfmake.github.io/docs/0.1/document-definition-object/
  async generatePdfFromHtml(pdfElement) {
    try {
      const documentHeader: any = [
        {
          image: this.images['amblelogo'],
          width: 50,
          absolutePosition: { x: 30, y: 10 },
        },
        {
          alignment: 'center',
          columns: [
            {
              width: '*',
              text: 'Reporte de actividades del PECA',
              color: '#2e8aaa',
              alignment: 'center',
              fontSize: 12,
              bold: true,
              margin: [0, 0, 10, 20],
            },
          ],
        },
      ]

      const finalDocument: any = {
        info: {
          // Metadata, visible en la propiedades del documento
          title: 'AmbLeMario',
          author: 'Binaural C.A',
          subject: 'AmbLeMario PDF',
          keywords: 'estudiantes, usuarios, coordinador, escuela',
        },
        pageSize: 'A4',
        pageOrientation: 'landscape',
        content: [
          // documentHeader
        ],
        defaultStyle: {
          fontSize: 12,
        },
        background: (currentPage, pageSize) => {
          if (currentPage === 1) {
            return {
              image: this.getImage('frontpage'),
              width: pageSize.width,
              height: pageSize.height,
            }
          }

          if (currentPage === 2) {
          }

          return ''
        },
        // footer: function (currentPage, pageCount) {
        //   return [
        //     {
        //       text: currentPage.toString() + ' de ' + pageCount,
        //       alignment: 'right',
        //       color: 'white',
        //       marginRight: 40,
        //     },
        //   ]
        // },
      }

      /**
       * Insert the records bo
       */
      const records: any = []

      // PDF To Html
      const html = htmlToPdfmake(pdfElement.nativeElement.outerHTML)

      records.push(html)

      finalDocument.content.push(records)

      pdfMake.createPdf(finalDocument).open()
    } catch (err) {
      console.log('err: ', err)
      throw err
    }
  }

  async printPdfFromHtml() {
    await this.generatePdfFromHtml(this.pdfElement)
  }
}
