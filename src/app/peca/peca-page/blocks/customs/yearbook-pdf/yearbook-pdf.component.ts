import { Component, OnInit } from '@angular/core';
import { PresentationalBlockComponent } from '../../page-block.component';

@Component({
  selector: 'app-yearbook-pdf',
  templateUrl: './yearbook-pdf.component.html',
  styleUrls: ['./yearbook-pdf.component.scss']
})
export class YearbookPdfComponent
implements OnInit, PresentationalBlockComponent
{
  type: 'presentational';
  name?: string;
  component: string;
  // viewMode?: string;
  settings: any;

  constructor() { }


  setSettings(settings: any): void {
    throw new Error('Method not implemented.');
  }
  setData?(data: any): void {
    throw new Error('Method not implemented.');
  }
  setFetcherUrls?(urls: object): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}
