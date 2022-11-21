import { Component, OnInit } from '@angular/core';
import { ITvshow } from './interfaces/ITvshow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})



export class AppComponent implements OnInit {

  title = 'FE-challenge';
  allShows :ITvshow[] | undefined;

  constructor(
   
  ){}

   ngOnInit(): void {
   }

}

