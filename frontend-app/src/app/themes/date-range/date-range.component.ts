import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.css']
})
export class DateRangeComponent implements OnInit {

  @Input() placeholder: string = ''
  @Output() inputString = new EventEmitter<string>();
  @Input() option: string = ''
  searchInputString: string = ''
  constructor() { }
  searchBy: string = ''
  ngOnInit(): void {

  }

  sendSearchStringToParent() {
    this.inputString.emit(this.searchInputString)
  }

}
