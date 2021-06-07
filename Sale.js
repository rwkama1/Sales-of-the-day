class Sale
{
    constructor(ppurchasecustomers)
    {
        this.purchasecustomers=ppurchasecustomers;
    }
    sales_day=()=>
    {
        let counter,sum;
        counter=0;
        sum=0;
       this.purchasecustomers.map(
           customer=>{
                sum=sum+customer.total;
                counter=counter+1;
           }
       )
       return {sum,counter}

    }
   
}
module.exports={Sale}