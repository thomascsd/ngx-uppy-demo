import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() buttonText = 'Write Diary';
  @Input() buttonVisible = false;
  @Input() signInButtonVisible = true;
  @Output() clicked = new EventEmitter<any>();
  @Output() logedIn = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  onclick(evt: Event) {
    evt.preventDefault();
    this.clicked.emit();
  }

  onLogedIn(evt: Event) {
    evt.preventDefault();
    this.logedIn.emit();
  }
}
