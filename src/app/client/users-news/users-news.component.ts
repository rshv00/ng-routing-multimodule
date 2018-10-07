import {Component, OnInit} from '@angular/core';
import {DataService} from '../../data-access/data.service';

@Component({
  selector: 'app-users-administration',
  templateUrl: './users-news.component.html',
  styleUrls: ['./users-news.component.css']
})
export class UsersNewsComponent implements OnInit {

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getData();
  }

}
