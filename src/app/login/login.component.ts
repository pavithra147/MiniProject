import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public loginForm!:FormGroup
public data:any;
@Output() local=new EventEmitter<String>();
// public submitted=false

  constructor(private form:FormBuilder, private http :HttpClient,private router: Router) { }
   
  
  ngOnInit(): void {
  this.loginForm=this.form.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
     })
   }
   list:any
  // submit(){
  //  const postData=this.loginForm.value;
  //   this.http.post("http://localhost:3000/loginDetails",postData).subscribe(response=>console.log(response));
    
  //  }
    submit(){
        this.http.get<any>("http://localhost:3000/registerDetails")
        .subscribe(res=>{
          console.log("response",res);
          // const user= res.find((a:any)=>{
          //   return ((a.email === this.loginForm.value.email) && (a.password === this.loginForm.value.password))});
          const user=  ((res.email === this.loginForm.value.email)&& (res.password === this.loginForm.value.password));
          //localStorage.setItem("emailId",(this.loginForm.value.email));
          
          if(user){
            alert("Login Success");
           this.router.navigate(['/home']);
      localStorage.setItem("emailId",this.loginForm.value.email);
          
          }else{
            alert("User not found");
          }
        },(error:any)=>{alert("something went wrong!!")})

       
      
    }
   
    
  
 }






