import {Component, OnInit} from '@angular/core';
import {DataService} from '../../data-access/data.service';
import {Observable} from 'rxjs';
import {Data} from '../../data-access/data';

@Component({
  selector: 'app-client-main-window',
  templateUrl: './user-main-window.component.html',
  styleUrls: ['./user-main-window.component.css']
})
export class UserMainWindowComponent implements OnInit {
  data: Observable<Data[]>;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.data = this.dataService.getData();
  }

}
