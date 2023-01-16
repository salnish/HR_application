import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private _adminUrl ="http://localhost:5000/api/admin"

  constructor(private http:HttpClient) { }
  
  addEmployee(data:any){
    return this.http.post<any>(`${this._adminUrl}/addEmployee`,data)
  }
}
