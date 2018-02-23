import { Component } from '@angular/core';
import 'rxjs/add/operator/map'
import { Http } from '@angular/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	api: string;
	myData: Array<any>;

	constructor(private http:Http){
		this.api = 'https://api.mercadolibre.com/sites/MCO/search?q=carro';
		this.http.get(this.api).map(response => response.json()).subscribe(res => this.myData = res);

	}
}
	