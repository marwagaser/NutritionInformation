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
  public isError = false;
  searchWord = "";
  imgURL = "";
  displayImg = false;
  constructor(private foodService: FetchFoodInfoService) {
    //executed before the ngOnInit
  }
  ngOnInit() {} //executed right after the construcor
  onConfirm() {
    this.displayImg = false;
    this.foodService.getConfig(this.searchWord).subscribe(
      data => {
        if (data["parsed"].length == 0) {
          if (data["hints"].length == 0) {
            this.errorMessage = "The food you're searching for is not found.";
            this.isError = true;
          } else {
            this.food = data["hints"][0]["food"]["nutrients"];
            this.foodName = data["hints"][0]["food"]["label"];
            this.isError = false;
            var img = data["hints"][0]["food"]["label"];
            this.displayImg = true;

            this.foodService.getImage(img).subscribe(data => {
              this.imgURL = data["hits"][0]["largeImageURL"];
            });
          }
        } else {
          this.food = data["parsed"][0]["food"]["nutrients"];
          this.foodName = data["parsed"][0]["food"]["label"];
          this.isError = false;
          var img = data["parsed"][0]["food"]["label"];
          this.displayImg = true;
          this.foodService.getImage(img).subscribe(data => {
            this.imgURL = data["hits"][0]["largeImageURL"];
          });
        }
      },
      error => {
        this.errorMessage = error;
      }
    );
  }
}
