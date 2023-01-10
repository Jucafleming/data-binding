import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-propriety.component.html',
  styleUrls: ['./output-propriety.component.css']
})
export class OutputProprietyComponent {
  @Input() valor: number =0

  incrementa(){
    this.valor ++
    this.mudouValor.emit({novoValor: this.valor})
  }
  decrementa(){
    this.valor--
    this.mudouValor.emit({novoValor: this.valor})
  }

 @Output() mudouValor = new EventEmitter()
}
