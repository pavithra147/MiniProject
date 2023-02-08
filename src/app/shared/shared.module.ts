import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing/shared-routing.module';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent, FooterComponent, NavbarComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [NavbarComponent],
})
export class SharedModule {}
