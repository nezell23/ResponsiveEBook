import { Component, OnInit } from '@angular/core';
import { Chapter } from '../models/chapter';

@Component({
  selector: 'app-chapter1',
  templateUrl: './chapter1.page.html',
  styleUrls: ['./chapter1.page.scss'],
})
export class Chapter1Page implements OnInit {

  public chapter1: Chapter =  
  {
    chapterNumber: 1,
    chapterName: "The Beginning",
    pageNumber: 2
  }

  constructor() { }

  ngOnInit() {
  }

}
