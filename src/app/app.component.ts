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

 }
  ngOnInit(): void {
    console.log("Hola")
  }

  title = 'Automatic';
  turnOn(){
    console.log("entro")
    this.services.sendMessage(1)

}

  turnOff(){
    console.log("entro")
    this.services.sendMessage(0)

}
turnOnS(){
  console.log("entro")
  this.services.sendMessageS(1)

}

turnOffS(){
  console.log("entro")
  this.services.sendMessageS(0)

}

  }

