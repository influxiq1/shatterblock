import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {ModalComponent} from "../modal/modal.component";

@Component({
  selector: 'app-agreement',
  templateUrl: './agreement.component.html',
  styleUrls: ['./agreement.component.css']
})
export class AgreementComponent implements OnInit {

  constructor(public modal: MatDialog) { }
  openDialog(){
    const dialogRef = this.modal.open(ModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
  }



}

