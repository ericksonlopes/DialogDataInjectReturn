import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-update',
  templateUrl: './dialog-update.component.html',
  styleUrls: ['./dialog-update.component.css']
})
export class DialogUpdateComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogUpdateComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  dados: any;

  public dadosInput?: number;

  ngOnInit(): void {

    this.dados = this.data;
  }

  onNoClick(): void {
    console.log(this.dadosInput)
    this.dialogRef.close();
  }

}
