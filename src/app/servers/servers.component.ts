import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent {
  allowNewServer: boolean = true;
  serverName: string = '';
  buttonClicked: boolean = false;
  servers = ['TestServer1', 'TestServer 2'];
  displaySecretPass: boolean = true;
  increment: number = 0;
  numbers: number[] = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = false;
    }, 2000);
  }

  onCreateServer() {
    this.buttonClicked = true;
    this.servers.push(this.serverName);
  }

  onDisplay() {
    this.displaySecretPass = !this.displaySecretPass;
    this.increment = this.increment + 1;
    this.numbers.push(this.increment);
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
