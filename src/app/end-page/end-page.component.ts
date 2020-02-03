import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-end-page',
  templateUrl: './end-page.component.html',
  styleUrls: ['./end-page.component.scss']
})
export class EndPageComponent implements OnInit {

  constructor(public userData : UserDataService, public router : Router) { }

  ngOnInit() {
  }

  restart(){
    this.router.navigate(['']);
  }

}
