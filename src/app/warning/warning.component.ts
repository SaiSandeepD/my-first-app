import {Component} from "@angular/core";

@Component({
  selector: 'app-warning',
  templateUrl: "./warning.component.html",
  styles:[`
  h4{
    padding: 20px;
    color: darkred;
  }
  `]
})
export class WarningComponent{
  warning = ""
  flag = true
  constructor() {
    setInterval(()=>{
      this.flag = !this.flag
      if(this.flag){
        this.warning="*WARNING*"
      }
      else{
        this.warning=" "
      }
      },500)
  }
}
