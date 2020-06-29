import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data;
  constructor(private dataService: DataService) { }

  ngOnInit(){
    // injecting function using service
    this.dataService.getIndiaData().subscribe(data => {
      this.data = data;
      console.log(this.data);
    });

  }

}
