import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder} from "@angular/forms";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-modalaudiodeadline',
  templateUrl: './modalaudiodeadline.component.html',
  styleUrls: ['./modalaudiodeadline.component.css']
})
export class ModalaudiodeadlineComponent implements OnInit {

  public myForm: any ;

  constructor( public modal: MatDialog, public bf: FormBuilder) {
    this.myForm = this.bf.group({
      fullname: ['', Validators.required],
    })
  }


  ngOnInit() {
  }
  onSubmit() {
    let data = this.myForm.value;
    console.log(data);
  }

}
