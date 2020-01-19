import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from "../environments/environment";
@Injectable({
  providedIn: "root"
})
export class FetchFoodInfoService {
  configUrl;
  constructor(private http: HttpClient) {}
  getConfig(searchWord) {
    this.configUrl = `https://api.edamam.com/api/food-database/parser?ingr=${searchWord}
      "&app_id=${environment.apiID}&app_key=${environment.apiKey}`;
    console.log(this.http.get(this.configUrl));
    return this.http.get(this.configUrl).pipe(catchError(this.errorHandling));
  }
  errorHandling(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error");
  }
  getImage(searchWord) {
    var theimgurl = `https://pixabay.com/api/?key=${environment.imagesAPIkey}&q=yellow+flowers&image_type=photo`;
    return this.http.get(theimgurl).pipe(catchError(this.errorHandling));
  }
}
