import { Router } from '@angular/router'
import {
  Component,
  OnInit,
  AfterViewInit,
  HostListener,
  OnDestroy,
} from '@angular/core'

@Component({
  selector: 'app-yearbook-pdf-template',
  templateUrl: './yearbook-pdf-template.component.html',
  styleUrls: ['./yearbook-pdf-template.component.scss'],
})
export class YearbookPdfTemplateComponent
  implements OnInit, AfterViewInit, OnDestroy {
  constructor(private router: Router) {}

  // isComponentLoaded = false

  ngOnInit(): void {}

  @HostListener('unloaded')
  ngOnDestroy() {
    // this.isComponentLoaded = false
    console.log('Items destroyed')
  }

  ngAfterViewInit() {
    // addEventListener('beforeprint', (event) => {
    //   console.log('beforeprint')
    // })
    addEventListener('afterprint', (event) => {
      this.router.navigate(['/peca/anuario-page'])
      // this.ngOnDestroy()
    })

    // this.isComponentLoaded = true

    // if (this.isComponentLoaded) {
    //   window.print()
    // }

    // window.print()
  }

  print() {
    window.print()
  }
}
