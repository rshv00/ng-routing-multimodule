import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Data} from './data';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data: Observable<Data[]>;

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<Observable<Data[]>>('assets/data.json')
      .subscribe(data => this.data = data);
  }

  getData(): Observable<Data[]> {
    return this.data;
  }
}
