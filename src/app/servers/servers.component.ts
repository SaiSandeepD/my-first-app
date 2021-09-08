import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverName = "NgServer-A"
  serverStatus = "inactive"
  allowNewServer = false
  serverInfo = " "
  servers = []

  constructor() {
    setTimeout(() => {this.allowNewServer= true},3000)
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    setTimeout(() => {this.serverInfo= "server is being created."},1000)
    setTimeout(() => {this.serverInfo= "server is being created.."},1500)
    setTimeout(() => {this.serverInfo= "server is being created..."},2000)
    setTimeout(() => {this.serverInfo= "server is being created...."},2500)
    setTimeout(() => {this.serverInfo = "Server is Created"}, 3000)
    setTimeout(() => {this.serverInfo = ""}, 6000)
    this.servers.push(this.serverName)
  }

  onUpdateServer(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
