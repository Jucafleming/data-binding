import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  url: string = 'https://www.youtube.com';

  urlImagen : string = 'http://lorempixel.com.br/200/200'
  
  cursoAngular: Boolean = true;
  
  
  getValor(){
    return 5;
  }
  getCurtir(){
    return false;
  }

}
