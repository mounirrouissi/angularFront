import { favoriteDirective } from './directives/favorite.directive';
import { ItemComponent } from './media/item.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListComponent } from './media/list.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SortingPipe } from './pipes/sorting.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ItemComponent,
    AppComponent,
    ListComponent,
  favoriteDirective,
  FilterPipe,
  SortingPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,ItemComponent]
})
export class AppModule { }
