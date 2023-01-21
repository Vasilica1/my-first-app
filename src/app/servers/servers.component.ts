import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent {
  allowNewServer: boolean = true;
  serverCreationStatus: string = "No server was created";
  serverName: string = '';
  username: string = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = false;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = "Server was created, his name is " + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onChangeUsername() {
    this.username = '';
  }
}
