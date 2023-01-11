
import { Component, OnInit } from '@angular/core';
import { WomenService } from './women.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {
   public details:any
  constructor(private service: WomenService) { }

  ngOnInit(): void {
    // this.service.getMen().subscribe(data => this.details =data)
  }
    
  }


