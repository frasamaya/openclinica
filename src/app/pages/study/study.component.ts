import { Component, OnInit } from '@angular/core';
import { RestProvider } from '../../../providers/rest/rest';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from '../../components/modal/modal.component';
@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.css']
})
export class StudyComponent implements OnInit {
	loading:boolean = false;
	data:any;
  constructor(public matDialog: MatDialog, public RestProvider: RestProvider) { }

  ngOnInit(): void {
  	this.getData()
  }
  getData(){
  	this.loading = true;
    this.RestProvider.getStudySubjects().subscribe(
      (result:any) => {
      	this.data = result;
      	this.loading = false;
    },
    (err) => {
      console.log(err)
      this.loading = false;
    });
  }
  addsubject() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.width = "600px";
    dialogConfig.height = "700px";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);
    modalDialog.afterClosed().subscribe(result => {
      this.getData()
    });
  }
}
