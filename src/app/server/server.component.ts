import {Component} from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent{
  serverId = Math.random()
  serverStatus = "inactive"
  constructor(){
    this.getServerStatus()
  }

  getServerInfo(){
    return "Server ID : "+this.serverId+" is "+ this.serverStatus
  }

  getServerStatus(){
    setTimeout(() => {this.serverStatus= "starting."},1000)
    setTimeout(() => {this.serverStatus= "starting.."},1500)
    setTimeout(() => {this.serverStatus= "starting..."},2000)
    setTimeout(() => {this.serverStatus= "starting...."},2500)
    setTimeout(() => {this.serverStatus= "active"},3000)
  }

}
