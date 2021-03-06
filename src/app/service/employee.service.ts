import { Employee } from './../model/employee.model';
import { environment } from './../../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QueryParam } from '../_base/query.param';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable()
export class EmployeeService {
  private userSubject: BehaviorSubject<Employee>;
  public employee: Observable<Employee>;


  constructor(protected http:HttpClient) {
    
   }

  listEmployees(qp?: QueryParam) {
    qp = qp || new QueryParam();
    return this.http.get<Employee[]>(`${environment.apiURL}/employees`, {
        params: qp.toURLSearchParams()
    });
}

  deleteEmployee(id:any){
    return this.http.delete(`${environment.apiURL}/employees/${id}`);
  }
  retrieveEmployee(id:any){
    return this.http.get<Employee>(`${environment.apiURL}/employees/${id}`);
  }
  updateEmployee(model: Employee){
    return this.http.put(`${environment.apiURL}/employees/${model.id}`, model);
  }
  createEmployee(model: Employee){
    return this.http.post(`${environment.apiURL}/employees` ,model);
  }
  
}
