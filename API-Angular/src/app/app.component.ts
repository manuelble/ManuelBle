import { Component } from '@angular/core';
import { JsonService } from './json.service';
import { data } from './classes/data';
import { datainfo } from './classes/datainfo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  public title: string;

  constructor(public _JsonService: JsonService){ 
  }

public lstdata_results: data[];
public lstdata_info: datainfo[];

  ngOnInit(){
    this.title = "Risck and morty api"
    this._JsonService.getJsonAPI().subscribe(resultado =>
        {
          this.lstdata_info = resultado['info'];
          this.lstdata_results = resultado['results'];

          /*Resultado de lsos datos a informativo'*/
          var Jnext = this.lstdata_info;
          console.log(Jnext);   
        });
  }
}
