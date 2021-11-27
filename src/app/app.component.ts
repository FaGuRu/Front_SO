import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ServicesService } from './services/services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pass = false;
  toogle = new FormControl('', []);
  constructor(private services: ServicesService) {
    this.services.getRealTime().subscribe(msg=>{
      this.pass = msg[0]
      if(this.toogle.value != msg[0]){
        this.toogle.setValue(msg[0])
      }
    })
 }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  title = 'Automatic';
  turnOn(){
    this.toogle.valueChanges.subscribe(newToogleValue=> {
      if(newToogleValue){
        console.log("encendido")
       //  this.bandera = newToogleValue
        this.services.sendMessage(1)
      }
   });

}

  turnOff(){
    this.toogle.valueChanges.subscribe(newToogleValue=> {
      if(newToogleValue){
        console.log("encendido")
       //  this.bandera = newToogleValue
        this.services.sendMessage(1)
      }
      else{
       // this.bandera = newToogleValue
       this.services.sendMessage(0)
      }
      
   });

}
  }

