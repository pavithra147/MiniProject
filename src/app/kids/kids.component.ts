import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KidsService } from './kids.service';


@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit {
  public collection: any
  public kids:any
  constructor(private kidsService: KidsService,private activatedRoute: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.kidsService.getKids().subscribe(data=>this.collection=data);
    
  }
 
  kidDetails(){
    this.router.navigate(['/kidsDetails']);
  }
}
