import { Component, OnInit } from '@angular/core';
import { Chapter } from '../models/chapter';

@Component({
  selector: 'app-chapter3',
  templateUrl: './chapter3.page.html',
  styleUrls: ['./chapter3.page.scss'],
})
export class Chapter3Page implements OnInit {

  public chapter3: Chapter =  
  {
    chapterNumber: 3,
    chapterName: "The End",
    pageNumber: 4
  }

  constructor() { }

  ngOnInit() {
  }

}
