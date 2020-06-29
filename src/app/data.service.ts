import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // fetching of data from the json
  data = 'https://api.covid19india.org/v3/min/data.min.json';
  constructor(private http: HttpClient) { }

  getData(url): Observable<any> {
    return this.http.get<any>(url);
  }

  // function to fetch the json data
  getIndiaData() {
    return this.getData(this.data);
  }
}
