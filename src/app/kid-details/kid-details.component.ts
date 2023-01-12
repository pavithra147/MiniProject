import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KidsService } from '../kids/kids.service';

@Component({
  selector: 'app-kid-details',
  templateUrl: './kid-details.component.html',
  styleUrls: ['./kid-details.component.css']
})
export class KidDetailsComponent implements OnInit {
  public kids:any
  constructor(private kidsService:KidsService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.kidsService.getKids().subscribe(data=>this.kids=data)
  }

 

     

}
