import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowDataComponent } from './components/show-data/show-data.component';
import { TableComponent } from './components/table/table.component';
import { PrettyPrintPipe } from './pipes/pretty-print.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ShowDataComponent,
    TableComponent,
    PrettyPrintPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: [TableComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
