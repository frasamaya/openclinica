import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDatepicker, MatDatepickerToggle } from '@angular/material/datepicker';
import { RestProvider } from '../../../providers/rest/rest';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
	loading:boolean = false;
	data:any = {subjectId:null,personId:null, enrollmentDate: null,sex:"m",dateOfBirth:null,studyEvent:null,startDate:null };
  constructor(public dialogRef: MatDialogRef<ModalComponent>, public RestProvider: RestProvider) { }

  ngOnInit(): void {
  }
  createStudy(data){
  	this.loading = true;
    this.RestProvider.createStudy(this.data).subscribe(
      (result:any) => {
        console.log(result)
        this.loading = false;
        this.dialogRef.close();
    },
    (err) => {
      console.log(err)
      // this.error = err.error.message
      this.loading = false;
    });
  }
  close(){
  	this.dialogRef.close();
  }
}
