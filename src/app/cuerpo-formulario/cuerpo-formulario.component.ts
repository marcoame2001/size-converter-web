import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuerpo-formulario',
  templateUrl: './cuerpo-formulario.component.html',
  styleUrls: ['./cuerpo-formulario.component.css']
})

export class CuerpoFormularioComponent implements OnInit {
  valor1=0;
  f_origen="";
  f_destino="";
  m_origen="";
  m_destino="";
  tipo="";
  resultado=0;
  mostrar=false;
  mostrar_marca=false;
  constructor() { }

  ngOnInit(): void {
  }
  convertir() {
    this.mostrar=true;
    if (this.f_origen === this.f_destino){
      this.resultado = this.valor1;
      console.log("El origen es el mismo")
    }
    else if (this.f_origen === "Europeo"){
      console.log("El origen es europa")
      if (this.f_destino === "Americano") {
        this.resultado = this.valor1 - 31.5;
      }
      if (this.f_destino === "Italiano") {
        this.resultado = this.valor1 - 1;
      }
      if (this.f_destino === "Británico") {
        this.resultado = this.valor1 - 34.5;
      }
    }
    else if (this.f_origen === "Americano"){
      console.log("El origen es europa")
      if (this.f_destino === "Europeo") {
        this.resultado = this.valor1 + 31.5;
      }
      if (this.f_destino === "Italiano") {
        this.resultado = this.valor1 + 32.5;
      }
      if (this.f_destino === "Británico") {
        this.resultado = this.valor1 - 2;
      }
    }
    else if (this.f_origen === "Italiano"){
      console.log("El origen es europa")
      if (this.f_destino === "Europeo") {
        this.resultado = this.valor1 + 1;
      }
      if (this.f_destino === "Americano") {
        this.resultado = this.valor1 - 31;
      }
      if (this.f_destino === "Británico") {
        this.resultado = this.valor1 - 32.5;
      }
    }
    else if (this.f_origen === "Británico"){
      console.log("El origen es europa")
      if (this.f_destino === "Europeo") {
        this.resultado = this.valor1 + 33.5;
      }
      if (this.f_destino === "Italiano") {
        this.resultado = this.valor1 + 32.5;
      }
      if (this.f_destino === "Americano") {
        this.resultado = this.valor1 + 2;
      }
    }
    if (this.m_origen || this.m_destino){
      this.mostrar_marca=true;
    }
  }
}