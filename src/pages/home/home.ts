import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // Declaramos las varibles del DataBinding
    num:number;
    intentos: number =3;
    mayorMenor: string= '...';
  //Variable del numero secreto que vamos a calcular
    numSecret: number = this.numAleatorio(0,100);
  constructor(public navCtrl: NavController) {

  }

  compruebaNumero(){

    if(this.num && this.intentos>0){
      this.intentos = this.intentos -1;
      if (this.numSecret < this.num){
        this.mayorMenor ='Menor';
        
      }else if( this.numSecret > this.num){
        this.mayorMenor ='Mayor';
        
      }else{
        this.mayorMenor ='Igual';
        this.intentos = this.intentos+1;
      }
    }
  }
   numAleatorio(a,b){
     return Math.round(Math.random()*(b-a)+parseInt(a));
  }
  reinicia(){
    //reiniciamos las variables
    this.num = null;
    this.mayorMenor ='...';
    this.numSecret = this.numAleatorio(0,100);
    this.intentos = 3;
  }

}
