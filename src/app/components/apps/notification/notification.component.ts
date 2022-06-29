import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  private notifier: NotifierService;

  constructor( notifierService: NotifierService ) {
		this.notifier = notifierService;
	}

  ngOnInit(): void {
  }

  showNotificationCenter( type: string, message: string ): void {
		this.notifier.notify( type, message );
	}
  callBackNotification( type: string, message: string ): void {
		this.notifier.notify( type, message );
	}

  OnPrimary(){
    this.notifier.notify("primary","Welcome to VALEX");
  }
  OnSuccess(){
    this.notifier.notify("success","Success: Well done Details Submitted Successfully.");
  }
  OnError(){
    this.notifier.notify("error","Oops! An Error Occurred");
  }
  OnWarning(){
    this.notifier.notify( "warning", "Warning: Something Went Wrong");
  }
  OnInfo(){
    this.notifier.notify( "info", "Info: Some info here.");
  }
  OnOpacity(){
    this.notifier.notify("opacity","Opacity is cool!")
  }


  // Success(){
  //   this.notifier.notify
  // }

}
