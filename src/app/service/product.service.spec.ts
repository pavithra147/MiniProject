/* tslint:disable:no-unused-variable */

import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed,  inject } from '@angular/core/testing';
import { productService } from './product.service';


describe('Service: Product', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [productService , HttpClient , HttpHandler]
    });
  });

  it('should ...', inject([productService], (service: productService) => {
    expect(service).toBeTruthy();
  }));
});
