import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  nombre: string
  urlImagen: string
  changing_message: string
  counter: number

  constructor() {
    this.nombre = 'Gibran'
    this.urlImagen = 'https://areajugones.sport.es/wp-content/uploads/2021/11/shingeki-no-kyojin-temporada-final-1080x609.jpg'
    this.changing_message = 'Soy un mensaje de alerta '
    this.counter = 0
  }

  ngOnInit(): void {
  }

  getApellidos(){
    return 'Francisco Ojeda'
  }

  eventHandler(){
    this.setCounter()
    this.setChangingMessage()
  }

  setChangingMessage(){
    this.changing_message = 'Este botón ha sido activado '+this.counter+'  veces'
  }

  setCounter(){
    this.counter+=1
  }

}
