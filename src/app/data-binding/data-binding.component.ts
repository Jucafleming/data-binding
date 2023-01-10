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
  valorAtual:string = ''
  valorSalvo: string = ''
  isMouseOver: Boolean = false
  nome:string = 'abc'

  pessoa: any={
    nome: 'def',
    idade:  20,

  }

  nomeDoCurso: string = 'angular'
  
  getValor(){
    return 5;
  }
  getCurtir(){
    return false;
  }
  botaoCLicado(){
    alert('botao clicado')
  }
  onKeyUp(evento: KeyboardEvent){
   this.valorAtual = (<HTMLInputElement>evento.target).value;


  }
  salvarValor(valor:any){
    this.valorSalvo = valor;
  }
  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver
  }
  onMudouValor(evento: any){
    console.log(evento.novoValor)
  }
}
