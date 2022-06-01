import { Component, Input, Output } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: []
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService: LoggingService, private accountsService: AccountsService){

  }

  onSetTo(status: string) {
    this.accountsService.updateAccount(this.id, status)
    //this would create a new instance of loggingService each time
    //that is different from any other instance created elsewhere
    // this.loggingService.logStatusChange(status)

    //emit the event statusUpdated when the status is updated 
    //so that it can be read anywhere else with access to that instance of accountsSerivce
    this.accountsService.statusUpdated.emit(status)
  }
}
