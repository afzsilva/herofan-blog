import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuNavBarComponent } from './components/menu-nav-bar/menu-nav-bar.component';
import { WelcomeSectionComponent } from './components/welcome-section/welcome-section.component';
import { SmallcardListComponent } from './components/smallcard-list/smallcard-list.component';
import { SmallcardItemComponent } from './components/smallcard-item/smallcard-item.component';
import { BigCardComponent } from './components/big-card/big-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuNavBarComponent,
    WelcomeSectionComponent,
    SmallcardListComponent,
    SmallcardItemComponent,
    BigCardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
