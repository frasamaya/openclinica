import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RestProvider } from '../../../providers/rest/rest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
	loading:boolean = false;
	login:any = {username:null,password:null}
	error:any;
  constructor(private router: Router, public RestProvider: RestProvider) {}

  ngOnInit() {
  }
  ngOnDestroy() {
  }
  public loginform(form){
  	console.log(form);
    this.loading = true;
    this.RestProvider.login(this.login).subscribe(
      (result:any) => {
        console.log(result)
        localStorage.setItem('token',result.token);
        this.router.navigate(['/study'])
    },
    (err) => {
      console.log(err)
      this.error = err.error.message
      this.loading = false;
    });
  }
}
