import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class FetchFoodInfoService {
  configUrl =
    "https://api.edamam.com/api/food-database/parser?ingr=orange&app_id=620e1ffc&app_key=c736d1271d585ed32f23afb516bb1b28";
  constructor(private http: HttpClient) {}
  getConfig() {
    console.log(this.http.get(this.configUrl));
    return this.http.get(this.configUrl);
  }
}
