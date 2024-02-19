import { Component, Input, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable, ReplaySubject} from 'rxjs';

export interface Element {
  prenda: string;
  valoracion: number;
  resultado: number;
  origen: string;
  destino: string;
}

const ELEMENT_DATA: Element[] = [
  {valoracion: 1, prenda: 'Zapatos', resultado: 38, origen: 'Americano', destino: 'Europeo'},
  {valoracion: 2, prenda: 'Zapatos', resultado: 39, origen: 'Americano', destino: 'Europeo'},
  {valoracion: 3, prenda: 'Zapatos', resultado: 40, origen: 'Americano', destino: 'Europeo'},
];


@Component({
  selector: 'app-cuerpo-favoritos',
  templateUrl: './cuerpo-favoritos.component.html',
  styleUrls: ['./cuerpo-favoritos.component.css']
})

export class CuerpoFavoritosComponent implements OnInit{
  ngOnInit(): void {
    
  }
  @Input()
  f_origen!: string;
  @Input()
  f_destino!: string;
  @Input()
  res!: number;
  displayedColumns: string[] = ['valoracion', 'prenda', 'resultado', 'origen', 'destino', 'accion'];
  dataToDisplay = [...ELEMENT_DATA];
  mostrar=false;
  mostrar2=false;
  favoritos=false;
  dataSource = new ExampleDataSource(this.dataToDisplay);

  mostrar_valoraciones(){
    this.mostrar=true;
  }
  addData(num:number) {
    this.favoritos=true;
    this.dataToDisplay = [...this.dataToDisplay, {valoracion: num, prenda: 'Zapatos', resultado: this.res, origen: this.f_origen, destino: this.f_destino}];
    this.dataSource.setData(this.dataToDisplay);
  }

  editData(){
    this.dataToDisplay = this.dataToDisplay.slice(0, -1);
    this.dataSource.setData(this.dataToDisplay);
    this.mostrar2=true;
  }
  removeData() {
    this.dataToDisplay = this.dataToDisplay.slice(0, -1);
    this.dataSource.setData(this.dataToDisplay);
  }
}

class ExampleDataSource extends DataSource<Element> {
  private _dataStream = new ReplaySubject<Element[]>();

  constructor(initialData: Element[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<Element[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: Element[]) {
    this._dataStream.next(data);
  }
}