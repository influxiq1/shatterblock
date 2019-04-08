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

/*  openDialog() {
    console.log('-------------------');
    const dialogRef = this.modal.open(AgreementComponent);

    dialogRef.afterClosed().subscribe(result => {
    //  console.log(`Dialog result: ${result}`);
      console.log(`Dialog result:hie`);

    });
  }*/




  ngOnInit() {
  }
  onSubmit() {
   let data = this.myForm.value;
   console.log(data);
  }

}
