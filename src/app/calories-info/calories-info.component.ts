import { Component, OnInit } from "@angular/core";
import { FetchFoodInfoService } from "../fetch-food-info.service";

@Component({
  selector: "app-calories-info",
  templateUrl: "./calories-info.component.html",
  styleUrls: ["./calories-info.component.css"]
})
export class CaloriesInfoComponent implements OnInit {
  public food = "";
  public foodName = "";
  public errorMessage = "";
  public isError = true;
  searchWord = "";
  constructor(private foodService: FetchFoodInfoService) {
    //executed before the ngOnInit
  }
  ngOnInit() {} //executed right after the construcor
  onConfirm() {
    console.log("entered");
    this.foodService.getConfig(this.searchWord).subscribe(
      data => {
        if (data["parsed"].length == 0) {
          if (data["hints"].length == 0) {
            this.errorMessage = "The food you're searching for is not found.";
            this.isError = true;
            console.log(this.errorMessage);
          } else {
            this.food = data["hints"][0]["food"]["nutrients"];
            this.foodName = data["hints"][0]["food"]["label"];
            this.isError = false;
            console.log(this.food);
            console.log(JSON.stringify(data));
          }
        } else {
          console.log(JSON.stringify(data));
          this.food = data["parsed"][0]["food"]["nutrients"];
          this.foodName = data["parsed"][0]["food"]["label"];
          this.isError = false;
          console.log(this.food);
        }
      },
      error => {
        this.errorMessage = error;
      }
    );
  }
}
