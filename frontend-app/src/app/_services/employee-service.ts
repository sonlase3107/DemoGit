import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AppConstant } from "../_constant/app-constant";
import { BaseResponse } from "../_models/base-response";
import { Employee } from "../_models/employee";
import { EmployeeDTO } from "../_models/employee-dto";
import { BaseService } from "./base-service";

@Injectable()
export class EmployeeService {
    constructor(private baseService: BaseService) { }
    public getAll(): Observable<BaseResponse<EmployeeDTO>> {
        return this.baseService.get<BaseResponse<EmployeeDTO>>(`${AppConstant.ApiUrl}/api/Employee`)
    }
    public CreateEmployee(param: Employee): Observable<BaseResponse<EmployeeDTO>> {
        return this.baseService.post<BaseResponse<EmployeeDTO>>(`${AppConstant.ApiUrl}/api/Employee`, param)
    }
    public removeEmployee(param: number): Observable<BaseResponse<EmployeeDTO>> {
        return this.baseService.delete<BaseResponse<EmployeeDTO>>(`${AppConstant.ApiUrl}/api/Employee?emid=${param}`)
    }
    public updateEmployee(param: Employee): Observable<BaseResponse<EmployeeDTO>> {
        return this.baseService.put<BaseResponse<EmployeeDTO>>(`${AppConstant.ApiUrl}/api/Employee`, param)
    }
    public getEmployeeById(id: number): Observable<BaseResponse<EmployeeDTO>> {
        return this.baseService.get<BaseResponse<EmployeeDTO>>(`${AppConstant.ApiUrl}/api/Employee/GetEmployeeByID?employeeID=${id}`)
    }
    public getEmployeeByName(employeeName: string): Observable<BaseResponse<EmployeeDTO>> {
        return this.baseService.get<BaseResponse<EmployeeDTO>>(`${AppConstant.ApiUrl}/api/Employee/GetEmployeeByName?employeeName=${employeeName}`)
    }
}