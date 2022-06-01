import { Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

//this makes this service injectable, meaning you can inject dependencies into it. 
@Injectable()
export class AccountsService {

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  //this makes logging Service accessible to the methods of the service
  constructor(private loggingService: LoggingService){}


  addAccount(name: string, status: string){
    this.accounts.push({name: name, status: status})
    //this calls the method
    this.loggingService.logStatusChange(status)
  }

  updateAccount(id: number, status: string){
    this.accounts[id].status = status
    //this calls the method
    this.loggingService.logStatusChange(status)
  }

}