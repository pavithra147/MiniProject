import { Component, OnInit } from '@angular/core';
import { MenService } from './men.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {
public details : any;
  constructor(private service: MenService) { }

  ngOnInit(): void {
    this.service.getMen().subscribe(data => this.details =data)
  }

}
