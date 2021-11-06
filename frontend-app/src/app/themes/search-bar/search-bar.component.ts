import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { AppConstant } from 'src/app/_constant/app-constant';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

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
