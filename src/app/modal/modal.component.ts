import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {AgreementComponent} from "../agreement/agreement.component";
import { FormGroup, Validators, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
public myForm: any ;

  constructor( public modal: MatDialog, public bf: FormBuilder) {
    this.myForm = this.bf.group({
      fullname: ['', Validators.required],
    })
  }
  ngOnInit() {
  }
  onSubmit() {
  }

}
