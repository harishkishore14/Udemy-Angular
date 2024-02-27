import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  
  // After using service:
  accounts: {name: string, status: string}[] = [];

  constructor(private accountsService: AccountsService) {}

  ngOnInit(): void {
    this.accounts = this.accountsService.accounts;
  }

  // Before using service:
  // accounts = [
  //   {
  //     name: 'Master Account',
  //     status: 'active'
  //   },
  //   {
  //     name: 'Test Account',
  //     status: 'inactive'
  //   },
  //   {
  //     name: 'Hidden Account',
  //     status: 'unknown'
  //   }
  // ];

  // onAccountAdded(newAccount: {name: string, status: string}) {
  //   this.accounts.push(newAccount);
  //   console.log(`${newAccount.name} account created`);
  // }

  // onStatusChanged(updateInfo: {id: number, newStatus: string}) {
  //   this.accounts[updateInfo.id].status = updateInfo.newStatus;
  //   console.log(`Server with id - ${updateInfo.id} status changed to ${updateInfo.newStatus}`);
  // }
}
