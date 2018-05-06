import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit {

  levels: any;
  selectedLevel: number;
  constructor() { }

  ngOnInit() {
    this.levels = [{
      index: 0,
      value: 'facile'
    }, {
      index: 1,
      value: 'moyen'
    }, {
      index: 2,
      value: 'difficile'
    }];
  }

  displayGame(event) {
    this.selectedLevel = event.target.selectedIndex;
  }

}
