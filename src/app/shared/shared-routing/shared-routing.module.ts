import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from 'src/app/shared/footer/footer.component';

import { NavbarComponent } from '../navbar/navbar.component';
import { HomeComponent } from '../home/home.component';
const routes:Routes=[
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'navbar',component:NavbarComponent},
  {path:'footer',component:FooterComponent},
  {path:'home',component:HomeComponent}
]
@NgModule({
 imports: [
    RouterModule.forChild(routes)
  ],
    exports:[RouterModule]
})
export class SharedRoutingModule { }
