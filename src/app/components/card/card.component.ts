import { Component, Input } from '@angular/core';
import { ITvshow } from 'src/app/interfaces/ITvshow';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() show!: ITvshow;

  constructor(    
    private route: ActivatedRoute,
  ){}

}
