
class KioskCalc{
constructor(_orange,_mango_avocado){ // setup  the actual object
this.fruitsPriceList ={ "orange": 30, "mango": 15, "avocado": 40 };
this.fruit="orange";
this.quantity=2;
this.fruit1="mango";
this.quantity1=2;
this.fruit2="avocado";
this.quantity2=2;

};
getTotalCost( ){
    return`${this.quantity} ${this.fruit} for KES ${30*this.quantity}`;
}
getTotalCost1(){
return`${this.quantity1} ${this.fruit1} fro KES ${15*this.quantity1}`;
}
   getTotalCost2(){
    return`${this.quantity2} ${this.fruit2} for KES ${40*this.quantity2}`;
   } }
 var kioskCalc = new KioskCalc(30,15,40);// parenthesis  to call constructor method

 console.log(kioskCalc.getTotalCost()); // Instance method
 console.log(kioskCalc.getTotalCost1());
 console.log(kioskCalc.getTotalCost2());