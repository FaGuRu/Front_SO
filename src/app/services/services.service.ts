import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor( private db: AngularFireDatabase ) { 

  }
  sendMessage(message: number){
    this.db.list("Casa/Dispositivos/").set("Luz",message)
  }

  sendMessageS(message: number){
    this.db.list("Casa/Dispositivos/").set("Sonido",message)
  }

  getRealTime(): Observable<any> {

    return this.db.list("Casa/dispositivos").valueChanges();
  }

}
