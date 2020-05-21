import { Component } from "@angular/core";

export declare interface ChartsSwitcherOptions {
  direction: string;
  theme: string;
  buttonsDescription: string;
  charts: ChartComponent[];
}

export abstract class ChartComponent {
  title: string = "";
  description: string = "";
  type: string = "";
  data: ChartData[] = [];

  props: ChartProps = {
    colors: ["#FFF"],
    stroke: "smooth",
  };

  markers: {
    show: false;
    color: "#FFF";
  };

  xaxis: XAxis = {
    show: true,
    ticks: false,
    labels: true,
    color: "#FFF",
  };

  yaxis: YAxis = {
    show: true,
    ticks: false,
    labels: false,
    color: "#FFF",
    edgeSpace: 5,
  };

  grid: Grid = {
    show: false,
    color: "#FFF",
  };

  abstract configChart(): void;

  abstract configMarkers(): void;

  abstract configXAxis(): void;

  abstract configYAxis(): void;

  abstract configGrid(): void;
}

interface ChartData {
  value: number | string;
  label: number | string;
}

interface ChartProps {
  colors: string[];
  stroke: string;
}

interface Markers {
  show: boolean;
  color: string;
}

interface XAxis {
  show: boolean;
  ticks: boolean;
  labels: boolean;
  color: string;
  title?: string;
}

interface YAxis {
  show: boolean;
  ticks: boolean;
  labels: boolean;
  color: string;
  title?: string;
  edgeSpace: number;
}

interface Grid {
  show: boolean;
  color: string;
}

// Subclases
export abstract class LineChartComponent extends ChartComponent {
  asymptotes: Asymptote[] = [];
  abstract configAsymptotes(): void;

  calculateNumericAxisRange(axis: string = "y", space: number = 5): { min: number; max: number } {
    const asymtotes = this.asymptotes.filter((asymtote) => asymtote.axis == axis);
    const axisValues = [...this.data, ...asymtotes].map((element) => <number>element.value);
    const minAndMax = this.findMinMaxInArray(axisValues);
    return { min: minAndMax[0] - space, max: minAndMax[1] + space };
  }

  findMinMaxInArray(numericArray: number[]): number[] {
    let max = undefined;
    let min = undefined;
    numericArray.map((number) => {
      if (typeof max === "undefined" && typeof min === "undefined") {
        max = min = number;
      } else {
        max = number > max ? number : max;
        min = number < min ? number : min;
      }
    });
    return [min, max];
  }
}

interface Asymptote {
  axis: "x" | "y";
  value: number | string;
  color: string;
  title?: string;
}

export abstract class BarChartComponent extends ChartComponent {
  data: BarChartData[] = [];
  asymptotes: Asymptote[] = [];
  abstract configAsymptotes(): void;

  calculateNumericAxisRange(axis: string = "y", space: number = 5): { min: number; max: number } {
    const asymtotes = this.asymptotes.filter((asymtote) => asymtote.axis == axis);
    const axisValues = [...this.data, ...asymtotes].map((element) => <number>element.value);
    const minAndMax = this.findMinMaxInArray(axisValues);
    return { min: minAndMax[0] - space, max: minAndMax[1] + space };
  }

  findMinMaxInArray(numericArray: number[]): number[] {
    let max = undefined;
    let min = undefined;
    numericArray.map((number) => {
      if (typeof max === "undefined" && typeof min === "undefined") {
        max = min = number;
      } else {
        max = number > max ? number : max;
        min = number < min ? number : min;
      }
    });
    return [min, max];
  }
}

interface BarChartData {
  value: number | string;
  label: number | string;
  serie?: number | string;
}

export abstract class PieChartComponent extends ChartComponent {}
