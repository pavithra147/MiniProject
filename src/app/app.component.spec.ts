
import { Component } from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/home/home.component';

describe('AppComponent', () => {
  let component:AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        HomeComponent
      ], 
      providers:[
        {
          provide: Router
        }
      ]
    }).compileComponents();
    
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
 
// it('should create',()=>{
//   expect(component).toBeTruthy();
// })


});
