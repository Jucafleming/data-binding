import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-propriety.component.html',
  styleUrls: ['./output-propriety.component.css']
})
export class OutputProprietyComponent {
  @Input() valor: number =0

  @ViewChild('campoInput')
  campoValorInput!: ElementRef;


  incrementa(){
    this.campoValorInput.nativeElement.value++
    this.mudouValor.emit({novoValor: this.valor})
  }
  decrementa(){
    this.campoValorInput.nativeElement.value--
    this.mudouValor.emit({novoValor: this.valor})
  }

 @Output() mudouValor = new EventEmitter()
}
