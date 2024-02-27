import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  // After adding service:
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService: LoggingService, private accountsService: AccountsService) {}

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);
    this.accountsService.statusUpdated.emit(status);
  }

  // Before adding service:
  // @Input() account: {name: string, status: string};
  // @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  // onSetTo(status: string) {
  //   this.statusChanged.emit({id: this.id, newStatus: status});
  //   console.log(`The ${this.account.name} server status changed, new status ${status}!`);
  // }
}
