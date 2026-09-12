import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ComponentFactoryResolver,
  ViewContainerRef,
  Output,
  EventEmitter,
  ChangeDetectorRef,
} from '@angular/core';
import { ChartComponent, ChartsSwitcherOptions } from './chart-components';
import { ChartComponentFactory } from './chart-component-factory';

declare var $: any;

@Component({
  selector: 'charts-switcher',
  templateUrl: './charts-switcher.component.html',
  styleUrls: ['./charts-switcher.component.scss'],
})
export class ChartsSwitcherComponent implements OnInit {
  @Input() options: ChartsSwitcherOptions;
  @Input() flatMode = false;
  @Input() currentOlympics: any;
  @Output() switch: EventEmitter<number> = new EventEmitter<number>();
  @ViewChild('chartHost', { read: ViewContainerRef, static: false })
  chartHostRef: ViewContainerRef;
  direction: string;
  buttonsDescription: string;
  charts: ChartComponent[];
  chartFactory: ChartComponentFactory;
  activeChartIndex: number = 0;
  selectedEnvIndex: number = 0;
  showEnvModal: boolean = false;

  envIndicatorsList = [
    { number: 1, key: 'cleanlinessAndCareOfSpaces', title: 'LIMPIEZA Y CUIDADO DE LOS ESPACIOS', color: '#f26735', iconClass: 'fa-paint-brush' },
    { number: 2, key: 'wasteManagement', title: 'GESTIÓN Y APROVECHAMIENTO DE LOS RESIDUOS', color: '#39b54a', iconClass: 'fa-recycle' },
    { number: 3, key: 'biodiversityConservation', title: 'CONSERVACIÓN DE LA BIODIVERSIDAD', color: '#6a3695', iconClass: 'fa-leaf' },
    { number: 4, key: 'waterUse', title: 'APROVECHAMIENTO DEL AGUA', color: '#3c4a9f', iconClass: 'fa-tint' },
    { number: 5, key: 'communityRelations', title: 'RELACIÓN CON LA COMUNIDAD', color: '#0d9644', iconClass: 'fa-handshake-o' }
  ];

  envScaleLegendList = [
    { range: '31 – 35 pts', level: 'Excelente', bgColor: '#25aae1', textColor: '#ffffff' },
    { range: '21 – 30 pts', level: 'Satisfactorio', bgColor: '#39b54a', textColor: '#ffffff' },
    { range: '11 – 20 pts', level: 'En Desarrollo', bgColor: '#fcb041', textColor: '#ffffff' },
    { range: '5 – 10 pts', level: 'Inicial', bgColor: '#ed1c24', textColor: '#ffffff' }
  ];

  constructor(private resolver: ComponentFactoryResolver, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.chartFactory = new ChartComponentFactory(this.resolver);
    this.charts = this.options.charts.filter((chart) => {
      return chart.data && chart.data.length > 0;
    });
    this.buttonsDescription = this.options.buttonsDescription;
    this.direction = this.options.direction || 'row';

    if (typeof window !== 'undefined') {
      (window as any).onEnvBarClick = (item: any) => {
        this.openEnvModalForItem(item);
      };
    }

    setTimeout(() => {
      this.loadChartComponent();
    });
  }

  openEnvModalForItem(item: any): void {
    if (!item) return;
    const activeChart = this.charts ? this.charts[this.activeChartIndex] : null;
    if (!activeChart || activeChart.id !== 'environmentIndex' || !activeChart.data) {
      return;
    }

    const idx = activeChart.data.findIndex(
      (d: any) => d.serie === item.serie && d.label === item.label
    );
    if (idx >= 0) {
      this.selectedEnvIndex = idx;
    }

    this.showEnvModal = true;
    if (typeof document !== 'undefined') {
      const modalEl = document.getElementById('iaaBreakdownModal');
      if (modalEl && modalEl.parentElement !== document.body) {
        document.body.appendChild(modalEl);
      }
    }
    this.cdr.detectChanges();
    if (typeof $ !== 'undefined') {
      try {
        $('#iaaBreakdownModal').modal({ backdrop: true, show: true });
        $('#iaaBreakdownModal').modal('show');
      } catch (e) {}
    }
  }

  closeEnvModal(): void {
    this.showEnvModal = false;
    this.cdr.detectChanges();
    if (typeof $ !== 'undefined') {
      try {
        $('#iaaBreakdownModal').modal('hide');
      } catch (e) {}
    }
  }

  onModalBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('iaa-modal-wrapper')) {
      this.closeEnvModal();
    }
  }

  ngOnDestroy(): void {
    if (typeof document !== 'undefined') {
      const modalEl = document.getElementById('iaaBreakdownModal');
      if (modalEl && modalEl.parentElement === document.body) {
        document.body.removeChild(modalEl);
      }
    }
  }

  loadChartComponent() {
    if (this.charts.length > 0) {
      const activeChart = this.charts[this.activeChartIndex];

      if (this.chartHostRef) {
        this.chartHostRef.clear();
        if (activeChart.id !== 'mathOlympics' && activeChart.id !== 'readingOlympics') {
          this.chartFactory.createChartComponent(this.chartHostRef, activeChart);
        }
      }
    }
  }

  switchChart(index: number) {
    this.activeChartIndex = index;
    this.selectedEnvIndex = 0;
    this.loadChartComponent();
    this.switch.emit(this.activeChartIndex);
  }

  selectEnvLapse(index: number): void {
    this.selectedEnvIndex = index;
  }

  get activeEnvItem(): any {
    if (this.charts && this.charts[this.activeChartIndex] && this.charts[this.activeChartIndex].id === 'environmentIndex') {
      const data = this.charts[this.activeChartIndex].data;
      if (data && data.length > 0) {
        return data[this.selectedEnvIndex] || data[0];
      }
    }
    return null;
  }

  getEnvIndicatorValue(key: string): number {
    const item = this.activeEnvItem;
    if (item && item.indicators && item.indicators[key] !== undefined) {
      const val = Number(item.indicators[key]) || 0;
      return Math.floor(val);
    }
    return 0;
  }

  getEnvTotalScore(): number {
    const item = this.activeEnvItem;
    if (item && item.value !== undefined) {
      return Number(item.value) || 0;
    }
    return 0;
  }

  getEnvInterpretation(score: number): { level: string; badgeClass: string; bgColor: string; textColor: string } {
    if (score >= 31) {
      return { level: 'Excelente', badgeClass: 'badge-excellent', bgColor: '#25aae1', textColor: '#ffffff' };
    } else if (score >= 21) {
      return { level: 'Satisfactorio', badgeClass: 'badge-satisfactory', bgColor: '#39b54a', textColor: '#ffffff' };
    } else if (score >= 11) {
      return { level: 'En Desarrollo', badgeClass: 'badge-developing', bgColor: '#fcb041', textColor: '#ffffff' };
    } else {
      return { level: 'Inicial', badgeClass: 'badge-initial', bgColor: '#ed1c24', textColor: '#ffffff' };
    }
  }
}
