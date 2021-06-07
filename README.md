## Description

Suppose you have a store and you want to record sales on your computer. Design an algorithm that reads for each customer the total amount of their purchase. At the end of the day you write down the total amount of sales and the number of customers served.

## Usage

```Javascript

 let Customer_Purchase=require("./Customer_Purchase").Customer_Purchase;
 let Sale=require("./Sale").Sale;

 let arraycustomer=[];
 arraycustomer.push(new Customer_Purchase(5));
 arraycustomer.push(new Customer_Purchase(8));
 arraycustomer.push(new Customer_Purchase(10));
 arraycustomer.push(new Customer_Purchase(9));
 arraycustomer.push(new Customer_Purchase(2));
 arraycustomer.push(new Customer_Purchase(3));
 arraycustomer.push(new Customer_Purchase(4));
 arraycustomer.push(new Customer_Purchase(5.5));
 arraycustomer.push(new Customer_Purchase(8));
 arraycustomer.push(new Customer_Purchase(11));
 arraycustomer.push(new Customer_Purchase(12));
 arraycustomer.push(new Customer_Purchase(13));

 let sale=new Sale(arraycustomer);
 let calc=sale.sales_day();
 console.log("The total of the sale of the day is: USD "+calc.sum);
 console.log("The total number of clients served is: "+calc.counter);
 
```