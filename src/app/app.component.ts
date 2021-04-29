import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  kidsPackages: number = 0;
  winePackages: number = 0;
  teamPackages: number = 0;
  picnicPackages: number = 0;

  anyDiscountsKids: number = 0;
  anyDiscountsWine: number = 0;
  anyDiscountsTeam: number = 0;
  anyDiscountsPicnic: number = 0;
  teamDiscounts: number = 0;
  wine4for3Discounts: number = 0;
  picnic4for3Discounts: number = 0;
  picnicDiscounts: number = 0;

  //prices, you can change base prices here
  kidsPackagesPrice: number = 220;
  winePackagesPrice: number = 440;
  teamPackagesPrice: number = 800;
  picnicPackagesPrice: number = 110;
  //discount quantities, you can change discount quantities here
  anyDiscountsKidsDiscount: number = 44;
  anyDiscountsWineDiscount: number = 88;
  anyDiscountsTeamDiscount: number = 160;
  anyDiscountsPicnicDiscount: number = 22;
  teamDiscountsDiscount: number = 100;
  wine4for3DiscountsDiscount: number = 440;
  picnic4for3DiscountsDiscount: number = 110;
  picnicDiscountsDiscount: number = 110;
  //total and discount quantity
  discountTotal: number = 0;
  total: number = 0;

  constructor(private _snackBar: MatSnackBar) { }

  //function to buy packages, applies discounts to each one of them.
  buyPackages() {
    //reset discounts
    this.anyDiscountsKids = 0;
    this.anyDiscountsWine = 0;
    this.anyDiscountsTeam = 0;
    this.anyDiscountsPicnic = 0;
    this.teamDiscounts = 0;
    this.wine4for3Discounts = 0;
    this.picnic4for3Discounts = 0;
    this.picnicDiscounts = 0;
    this.total = 0;
    this.discountTotal = 0;
    //apply discounts
    this.globalDiscount();
    this.teamPackageDiscounts();
    this.winePicnicDiscounts();
    this.picnic2for1Discounts();
    this.discountTotal = 
      + this.anyDiscountsKids * this.anyDiscountsKidsDiscount
      + this.anyDiscountsWine * this.anyDiscountsWineDiscount
      + this.anyDiscountsTeam * this.anyDiscountsTeamDiscount
      + this.anyDiscountsPicnic * this.anyDiscountsPicnicDiscount
      + this.teamDiscounts * this.teamDiscountsDiscount
      + this.wine4for3Discounts * this.wine4for3DiscountsDiscount
      + this.picnic4for3Discounts * this.picnic4for3DiscountsDiscount
      + this.picnicDiscounts * this.picnicDiscountsDiscount;
    //calculate total
    this.total = 
      + this.kidsPackages * this.kidsPackagesPrice
      + this.winePackages * this.winePackagesPrice
      + this.teamPackages * this.teamPackagesPrice
      + this.picnicPackages * this.picnicPackagesPrice
      - this.discountTotal;
  }
  //function to apply the 20% discount on the 5th package bought. Applies on all packages.
  globalDiscount() {
    //this variable is used to count how many discounts we give.
    var aux;
    //total kids discounts
    if (this.kidsPackages >= 5) {
      aux = this.kidsPackages
      while (aux >= 5) {
        this.anyDiscountsKids++;
        aux = aux - 5;
      }
    }
    //total wine discounts
    if (this.winePackages >= 5) {
      aux = this.winePackages
      while (aux >= 5) {
        this.anyDiscountsWine++;
        aux = aux - 5;
      }
    }
    //total team discounts
    if (this.teamPackages >= 5) {
      aux = this.teamPackages
      while (aux >= 5) {
        this.anyDiscountsTeam++;
        aux = aux - 5;
      }
    }
    //total picnic discounts
    if (this.picnicPackages >= 5) {
      aux = this.picnicPackages
      while (aux >= 5) {
        this.anyDiscountsPicnic++;
        aux = aux - 5;
      }
    }
  }
  //buy two team packages for 1500$ discount
  teamPackageDiscounts() {
    //this variable is used to count how many discounts we give.
    var aux;
    if (this.teamPackages >= 2) {
      aux = this.teamPackages
      while (aux >= 2) {
        this.teamDiscounts++;
        aux = aux - 2;
      }
    }
  }
  //Wine tours and picnics discount, buy 4, pay 3.
  winePicnicDiscounts() {
    //this variable is used to count how many discounts we give.
    var aux;
    //total picnic discounts
    if (this.picnicPackages >= 3) {
      aux = this.picnicPackages
      while (aux >= 4) {
        this.picnic4for3Discounts++;
        aux = aux - 4;       
      }
      if (aux == 3) {
        this.openSnackBar("You could buy one picnic package more for free, see our discounts!", "OK");
      }
    }    
    //total wine discounts
    if (this.winePackages >= 3) {
      aux = this.winePackages
      while (aux >= 4) {
        this.wine4for3Discounts++;
        aux = aux - 4;        
      }
      if (aux == 3) {
        this.openSnackBar("You could buy one wine package more for free, see our discounts!", "OK");
      }
    }    
  }
  //Picnic discounts, buy 2, get 1 free. (e.g: 3 for the price of 2)
  picnic2for1Discounts() {
    //this variable is used to count how many discounts we give.
    var aux;
    if (this.picnicPackages >= 2) {
      aux = this.picnicPackages
      while (aux >= 3) {
        this.picnicDiscounts++;
        aux = aux - 3;
      }
      if (aux == 2) {
        this.openSnackBar("You could buy one picnic package more for free, see our discounts!", "OK");
      }
    }    
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
