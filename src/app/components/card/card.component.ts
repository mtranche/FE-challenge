import { Component, Input } from '@angular/core';
import { Tvshow } from 'src/app/interfaces/Tvshow';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() show!: Tvshow;

}
