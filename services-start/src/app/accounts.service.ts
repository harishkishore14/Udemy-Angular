import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})

export class AccountsService {

  constructor(private loggingService: LoggingService) { }

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Test Account',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  statusUpdated = new EventEmitter<string>();
  
  addAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status});
    this.loggingService.logStatusChange(status);        //Injecting a service into a service
  }

  updateStatus(id: number, status: string){
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);        //Injecting a service into a service

  }

}
