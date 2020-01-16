import { Component, OnInit } from "@angular/core";
import { FetchFoodInfoService } from "../fetch-food-info.service";

@Component({
  selector: "app-calories-info",
  templateUrl: "./calories-info.component.html",
  styleUrls: ["./calories-info.component.css"]
})
export class CaloriesInfoComponent implements OnInit {
  public food;

  constructor(private foodService: FetchFoodInfoService) {
    //executed before the ngOnInit
    this.foodService.getConfig().subscribe(data => {
      this.food = data["parsed"][0]["food"]["nutrients"];
      console.log(data["parsed"][0]["food"]["nutrients"]);
    });
  }
  ngOnInit() {} //executed right after the construcor
}
