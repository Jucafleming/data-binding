import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-proprietie.component.html',
  styleUrls: ['./input-proprietie.component.css']
})
export class InputProprietieComponent {
  @Input('nome') nomeCurso:string = ''

}
