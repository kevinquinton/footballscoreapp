import { Component, OnInit, Input } from '@angular/core';
import { Match } from 'src/app/shared/model/match';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent implements OnInit {

  @Input()
  matches: Match[];

  constructor() { }

  ngOnInit() {
  }

}
