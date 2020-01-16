import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class FetchFoodInfoService {
  configUrl;
  constructor(private http: HttpClient) {}
  getConfig() {
    this.configUrl =
      "https://api.edamam.com/api/food-database/parser?ingr=tomatoe&app_id=620e1ffc&app_key=c736d1271d585ed32f23afb516bb1b28";
    console.log(this.http.get(this.configUrl));
    return this.http.get(this.configUrl);
  }
}
