import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  @Input() offset = 0
  @Input() limit = 0
  @Input() withSubtitle = false
  @Input() images:
    | string[]
    | {
        img: string
        title?: string
      }[] = []

  @Input() containerClasses = ''
  @Input() itemStyle = ''

  constructor() {}

  ngOnInit(): void {}

  getImagesLimited() {
    if (this.limit > 0) {
      return this.images.slice(this.offset, this.limit)
    }
    return this.images
  }
}
