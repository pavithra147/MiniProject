import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public loginForm!:FormGroup
// public submitted=false
  
  constructor(private form:FormBuilder, private http :HttpClient) { }
   
  
  ngOnInit(): void {
  this.loginForm=this.form.group({
      email:['',Validators.required],
      password:['',Validators.required]
     })
   }
   list:any
  submit(){
    // this.submitted=true;
    // if(this.loginForm.invalid){
    //   return
    // }
    

    
    const postData=this.loginForm.value;
    this.http.post("http://localhost:3000/loginDetails",postData).subscribe(response=>console.log(response));
    
  }


}


