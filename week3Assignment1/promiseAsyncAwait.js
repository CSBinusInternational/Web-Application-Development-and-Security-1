
// Function to order food from a bakso store
function orderFood(food){
    return new Promise((resolve, reject)=>{
        // Checks if the food oredered is bakso
        if(food === "Bakso"){
            // If the food is bakso then we return the name of the food ordered and the corresponding message
            resolve({
                name: "Bakso",
                message: "Order is being placed"
            })
        }else{
            // If the food is not bakso then we return the corresponding message
            reject({
                name: "We do not sell that item",
                message:"We mainly make bakso"
            })
        }
    });
}

// Function that states the processingg of the order and states that the order has been received
function processOrder(order){
    return new Promise((resolve, reject)=>{
        console.log("Processing the order")
        resolve(`We have received the order for ${order.name}`)
    })
}



async function doOrder(){
    // Sees if the order is possible 
    try{
        // wait and store the value returned from the orderFood function and state the order has been placed
        const processing = await orderFood("Bakso")
        console.log("Order has been placed")

        // Once the variable processing has stored the return value from the function, place the procssing varible into the parameter of of processOrder
        const processedOrder = await processOrder(processing)
        console.log(processedOrder)

    }catch(err){
        // States the error message that had occured
        console.log(err.name +"\n"+ err.message)
    }
    

}

doOrder()
