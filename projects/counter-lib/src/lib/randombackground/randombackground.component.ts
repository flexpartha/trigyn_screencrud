import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'lib-randombackground',
  templateUrl: './randombackground.component.html',
  styleUrls: ['./randombackground.component.css']
})
export class RandombackgroundComponent implements OnInit {

  possibleColors = [
    'darksalmon',
    'hotpink',
    'lightskyblue',
    'goldenrod',
    'peachpuff',
    'mediumspringgreen',
    'cornflowerblue',
    'blanchedalmond',
    'lightslategrey'
  ];

  color!: any;

  @ViewChild('bgDiv', { static: false }) BgDiv!: ElementRef;

  constructor(private render:Renderer2){}

  ngOnInit(): void {
    
  }

  changBackColor(){
    //const colorPick = Math.floor(Math.random() * 12);
    const colorPick = Math.floor(Math.random()*16777215).toString(16);
    this.color = '#' + colorPick;
    console.log(this.color);
    this.render.setStyle(this.BgDiv.nativeElement,'background-color', this.color);
  }
}
