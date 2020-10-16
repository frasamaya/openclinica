import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  baseUrl:string = "http://localhost:3000/";
  headers = new HttpHeaders({ 'Authorization': localStorage.getItem('token') });
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }
  getBaseUrl(){
    return this.baseUrl;
  }

  getStudySubjects() {
    this.headers = new HttpHeaders({ 'Authorization': localStorage.getItem('token') });
    return this.http.get( this.baseUrl + 'liststudysubjects',{ headers: this.headers });
  }
  
  login(data) {
    console.log(JSON.stringify(data))
    var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.baseUrl + 'login', JSON.stringify(data),{ headers: headers });
  }
  createStudy(data) {
    console.log(JSON.stringify(data))
    var headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token') });
    return this.http.post(this.baseUrl + 'createsubject', JSON.stringify(data),{ headers: headers });
  }
}
