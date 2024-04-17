import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-servers-list',
  templateUrl: './servers-list.component.html',
  styleUrl: './servers-list.component.css'
})
export class ServersListComponent implements OnInit {

  constructor(private serversService: ServersService) {}


  ngOnInit(): void {
    //  this.servers = this.serversService.getServers()
  }

  @Input("srv")
  public servers : {id: number, name: string, status: string} [] = [];


  @Output()
  public listCompleted = new EventEmitter();

  completed() {
    this.listCompleted.emit()
  }

  getColor(status: string) {
    return status === 'Online'? 'green': 'red';
  }

}
