import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',  // Select by HTML element
  // selector: '[app-servers]',  // Select by Div element
  //selector: '.app-servers', // Select by class
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
 })
export class ServersComponent implements OnInit {

  serverId = ''
  serverStatus: string = 'offline'
  allowNewServer = false;
  serverName = '';
  serverCreated = false;
  serversListCompleted = ''

  servStatus = ''

  @ViewChild('serverIdInput')
  serverIdInput: ElementRef;

  public servers : {id: number, name: string, status: string}[] = [];

  ngOnInit(): void {
      this.servers = this.serversService.getServers()
  }

  constructor(private serversService : ServersService) {
    setTimeout(()=> {this.allowNewServer=true}, 2000)
  }

  onCreateServer() {
    this.serverCreated = true
    this.serverStatus = 'Server is added!'

    this.serversService.getServers().push({
      id: Number(this.serverIdInput.nativeElement.value),
      name: this.serverName,
      status: this.servStatus
    })

  }

  OnUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value
  }

  updateInfo() {
    this.serversListCompleted = ' All servers listed successfully! ';
  }

}
