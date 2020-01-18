import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class FetchFoodInfoService {
  configUrl;
  constructor(private http: HttpClient) {}
  getConfig(searchWord) {
    this.configUrl =
      "https://api.edamam.com/api/food-database/parser?ingr=" +
      searchWord +
      "&app_id=620e1ffc&app_key=c736d1271d585ed32f23afb516bb1b28";
    console.log(this.http.get(this.configUrl));
    return this.http.get(this.configUrl).pipe(catchError(this.errorHandling));
  }
  errorHandling(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error");
  }
}
