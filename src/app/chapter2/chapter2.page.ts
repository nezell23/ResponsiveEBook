import { Component, OnInit } from '@angular/core';
import { Chapter } from '../models/chapter';

@Component({
  selector: 'app-chapter2',
  templateUrl: './chapter2.page.html',
  styleUrls: ['./chapter2.page.scss'],
})
export class Chapter2Page implements OnInit {

  public chapter2: Chapter =  
  {
    chapterNumber: 2,
    chapterName: "The Middle",
    pageNumber: 3
  }

  constructor() { }

  ngOnInit() {
  }

}
