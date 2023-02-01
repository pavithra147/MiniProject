import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnChanges, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { CartService } from 'src/app/product/cart/cart.service';
import { CommonService } from 'src/app/common/common.service';
import { LoginService } from 'src/app/login-routing/login/login.service';






@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public totalItem!:any;
  public loginForm: any;
  constructor(private router:Router,public cartService: CartService,private http: HttpClient,
    private auth:AuthService,public loginService: LoginService,private commonService:CommonService){}
  move(){
    this.router.navigate(['/home']);
  }
  
  variable:boolean=false;
  ngOnInit(): void {
    this.cartService.getProduct().subscribe((data:any)=>{
      this.totalItem=data.length; 
    console.log(this.totalItem);
    
      });
      
    }
  showMenu(){
    this.variable=!this.variable;
  }
  searchIcon(){
    this.router.navigate(['/search']);
  }
  
 login(){
    this.auth.login()
 }
 logout(){
   this.auth.logout();

 }
//  filter(category:any){
//    this.commonService.click(category);
//  }

myCart:any=[]
idCheck(){
  const myCart=this.totalItem.map((post:{id:any})=>post.id);
  console.log(myCart);
}
 
}
