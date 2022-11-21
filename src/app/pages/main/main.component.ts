import { Component } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { ITvshow } from 'src/app/interfaces/ITvshow';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent {
  
  tvshows: ITvshow[] | undefined;

  constructor(
    public http: HttpClient) {
      this.fetchData();
    }

    async fetchData() {
      const url = environment.apiUrl;
      const data = this.http.get<any>(url).subscribe((res) => {
      const sixfirsts = res.slice(0,6);
    // console.table(sixfirsts);

        this.tvshows = sixfirsts.map( (r: any) => {
            let uri :string = "tvshows/show/"+r.show.id;
            return {
              id: r.show.id,
              title: r.show.name,
              image: r.show.image.medium,
              score: (r.score*10).toFixed(4), //little formatting to score value
              uri:   uri,
              officialSite: r.show.officialSite,
              description: r.show.summary,
              genres: r.show.genres,
              rating: r.show.rating.average
            }
        })
    });
  }
}
