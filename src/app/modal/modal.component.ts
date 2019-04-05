import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {AgreementComponent} from "../agreement/agreement.component";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor( public modal: MatDialog) { }

  openDialog() {
    const dialogRef = this.modal.open(AgreementComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }




  ngOnInit() {
  }

}
