import { Injectable } from "@angular/core";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class CheckoutService {
    countries:any = [];
    constructor(){}
    getCountries(){
        return this.countries = [
        "Afghanistan","Albania","Algeria","Argentina","Austria","Bahamas","Bangladesh","Canada","Chile","China","Dominica",
        "Egypt","France","Vatican"
        ]
    }
}