import { Inject, Input, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  HEADER_CONTENT = "Do You Want to ?"
  OPTION_YES: string = 'yes';
  OPTION_NO: string = 'no'
  constructor(@Inject(MAT_DIALOG_DATA) public data:{header:string}) { 
    this.HEADER_CONTENT = data.header
  }

  ngOnInit(): void {
  }
  option(option: string) {
    if (option === this.OPTION_YES) {
      return true;
    }
    return false;
  }
}
