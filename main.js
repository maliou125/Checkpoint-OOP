class ShoppingCart{
    constructor(containerId,totalCostId){
        this.shop= document.getElementById(containerId)
        this.items= this.shop.getElementsByClassName("box") 
        this.totalPrice=document.getElementById(totalCostId)
        this.total = 0;
        this.init(); //methode
    }
init(){
    for (let i =0 ; i< this.items.length; i++){
        this.setupItem(this.items[i])
    }
}

setupItem(item){
    const minus = item.getElementsByClassName("minus")[0];
    const plus = item.getElementsByClassName("plus")[0];
    const quantityInput = item.getElementsByTagName("input")[0];
    const deleteBtn = item.getElementsByClassName("delete-btn")[0];

    const price = parseInt( item.getElementsByClassName("price")[0].innerText.substring(1));

    minus.addEventListener("click",()=> this.decrement(quantityInput,price))
    plus.addEventListener("click",()=> this.decrement(quantityInput,price))
    deleteBtn.addEventListener("click",()=> this.decrement(item,quantityInput,price))
}

decrement(quantityInput,price) {
    if (quantityInput.value > 1) {
        quantityInput.value--;
        this.total -= price;
        this.updateTotal()
    }
    }

increment(quantityInput,price){
    quantityInput.value++;
   this.total += price;
   this.updateTotal()
}

deleteItem(item,quantityInput,price){
    item.remove();
    total -= price * quantityInput.value;
   this.updateTotal()
}


updateTotal(){
    this.totalPrice.innerText = Total Price: $${total};
}


}
document.addEventListener("DOMContentLoaded",()=>{
    const shopping = new ShoppingCart("container","total-cost")
})