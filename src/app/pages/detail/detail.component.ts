import { Component, inject, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShowsDataService } from 'src/app/shows-data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class DetailComponent implements OnInit {
  id!: any;
  shows: any;
  theShow : any;

  
  numSequence(n: number): Array<number> {
    return Array(n);
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private myDataService: ShowsDataService,
  ){}


  ngOnInit(): any {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.theShow = {};
    
    this.myDataService.getData().subscribe((d => {
      this.shows = d;
      this.shows.forEach((el: any) => {
        if(el.show.id === parseInt(this.id)) {
          this.theShow = { 
            id: el.show.id,
            title: el.show.name,
            image: el.show.image.medium,
            score: (el.score*10).toFixed(4), //little formatting to score value
            uri: "tvshows/show/"+el.show.id,
            officialSite: el.show.officialSite,
            description: el.show.summary.toString().replace( /(<([^>]+)>)/ig, ''),
            genres: el.show.genres,
            rating: el.show.rating.average
          }

          return this.theShow;
        }
      }); 
    }))
  }
}
