import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CaloriesInfoComponent } from "./calories-info/calories-info.component";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [AppComponent, CaloriesInfoComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
