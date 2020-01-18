import { Component, OnInit } from "@angular/core";
import { FetchFoodInfoService } from "../fetch-food-info.service";

@Component({
  selector: "app-calories-info",
  templateUrl: "./calories-info.component.html",
  styleUrls: ["./calories-info.component.css"]
})
export class CaloriesInfoComponent implements OnInit {
  public food = "";
  public errorMessage = "";
  searchWord = "tomatoe";
  constructor(private foodService: FetchFoodInfoService) {
    //executed before the ngOnInit
  }
  ngOnInit() {
    this.foodService.getConfig(this.searchWord).subscribe(
      data => {
        if (data["parsed"].length == 0) {
          if (data["hints"].length == 0) {
            this.errorMessage = "The food you're searching for is not found.";
            console.log(this.errorMessage);
          } else {
            this.food = data["hints"][0]["food"]["nutrients"];
          }
        } else {
          this.food = data["parsed"][0]["food"]["nutrients"];
        }
      },
      error => {
        this.errorMessage = error;
      }
    );
  } //executed right after the construcor
}
