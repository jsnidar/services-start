import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: []
})
export class NewAccountComponent implements OnInit {

  constructor(private loggingService : LoggingService, private accountsService: AccountsService){
    

    //subscribe to statsUpdated to listen to what it emits
    this.accountsService.statusUpdated.subscribe(
      (status: string) => alert("New Status: " + status)
    )
  }

  ngOnInit(){

  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus)
    //this would create a new instance of loggingService each time
    //that is different from any other instance created elsewhere
    // this.loggingService.logStatusChange(accountStatus)
  }
}
