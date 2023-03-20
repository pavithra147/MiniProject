import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CartService } from './cart.service';
import { CommonService } from './common.service';
import { Overlay} from '@angular/cdk/overlay'


describe('CommonService', () => {
  let service: CommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[CartService,HttpClient,HttpHandler,MatSnackBar,Overlay]
    });
    service = TestBed.inject(CommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
