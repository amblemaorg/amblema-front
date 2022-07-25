import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-yearbook-pdf-template',
  templateUrl: './yearbook-pdf-template.component.html',
  styleUrls: ['./yearbook-pdf-template.component.scss'],
})
export class YearbookPdfTemplateComponent implements OnInit {
  constructor() {}

  showBtnDownload = true

  ngOnInit(): void {
    window.print()

    addEventListener('beforeprint', (event) => {
      console.log('beforeprint')
    })

    addEventListener('afterprint', (event) => {})
  }

  print() {
    window.print()
  }
}
