import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

interface modernSliderDetails {
  value: number;
  floor: number;
  ceil: number;
  showSelectionBar: boolean;

}


@Component({
  selector: 'app-rangeslider',
  templateUrl: './rangeslider.component.html',
  styleUrls: ['./rangeslider.component.scss']
})
export class RangesliderComponent implements OnInit {

  // Negative Range
  negativeValue: number = -500;
  negativeHighValue: number = 500;
  negativeOptions: Options = {floor: -1000,
  ceil:1000 
  }

  // Range with Minimum and Maximum Numbers

  minValue: number = 100;
  maxValue: number = 400;
  options: Options = {
    floor: 0,
    ceil: 500,
    translate: (value: number): string => {
      return '$' + value;
    },
    combineLabels: (minValue: string, maxValue: string): string => {
      return 'from ' + minValue + ' up to ' + maxValue;
    }
  };

  // Range with single Value
  modernsliders: modernSliderDetails[] = [
    {
      value: 10,
      floor: 10,
      ceil: 100,
      showSelectionBar: true
       
    },
    {
      value: 550,
      floor: 100,
      ceil: 1000,
      showSelectionBar: true
    }
     
  ];

  modernSliderOptions(slider: modernSliderDetails): Options {
    return {
      floor: slider.floor,
      ceil: slider.ceil,
      showSelectionBar: slider.showSelectionBar
    };
  }

  // slides with custom style

  CustomMinValue: number = 10;
  CustomMaxValue: number = 90;
  CustomOptions: Options = {
    floor: 0,
    ceil: 100,
    step: 10,
    showTicks: true
  };

  // slides with ticks
  value: number = 5;
  tickOptions: Options = {
    floor: 0,
    ceil: 10,
    showTicks: true
  };

  //slider with ticks and values
  sliderValue: number = 5;
  sliderOptions: Options = {
    floor: 0,
    ceil: 10,
    step: 1,
    showTicks: true,
    showTicksValues: true
  };

  //slider with ticks at Intermediate values
  intermediateValue: number = 55;
  IntermediateOptions: Options = {
    floor: 0,
    ceil: 100,
    showTicks: true,
    tickStep: 10
  };

  //slider with ticks values and legends
  legendValue: number = 5;
  legendOptions: Options = {
    floor: 0,
    ceil: 10,
    showTicks: true,
    getLegend: (value: number): string => {
      return '<b>T</b>' + value;
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
