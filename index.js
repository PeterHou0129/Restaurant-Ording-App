import { menuArray } from "./data.js"
 const  orderArr = []
document.addEventListener('click',function(e){
    if(e.target.dataset.pizza){
        plusClick(e.target.dataset.pizza)
        renderPrice(e.target.dataset.pizza)
        
    }
    else if(e.target.dataset.hamburger){
        plusClick(e.target.dataset.hamburger)
        renderPrice(e.target.dataset.hamburger)
    }
    else if(e.target.dataset.beer){
        plusClick(e.target.dataset.beer)
        renderPrice(e.target.dataset.beer)
    }
})

function plusClick(menuId){
   const targetMenuObj = menuArray.filter(function(item){
     return item.id.toString() === menuId
   })[0]
    
    document.getElementById('renderPrice').style.display = 'flex'
   return targetMenuObj.price
}


function getMenuHtml(){
    let menuHtml = ``
    
    menuArray.map(function(item){
        menuHtml += `
        <div class="menu-inner">
            <img class="icon" src="pic/${item.name}.png" >
            <div class="menutext">
                <h3>${item.name}</h3>
                <p>${item.ingredients}</p>
                <h4>$${item.price}</h4> 
            </div>
            <div class="add-btn-wrapper">
                <button class="add-btn" data-${item.name} = ${item.id}>+</button>
            </div>
        </div>
        <div>
            
        </div>
        <div class="graylight"></div>

        `
       
    })

    return menuHtml 
}

function renderPrice(orderItemID){
   
    const targetOrderObj = menuArray.filter(function(item){
     return item.id.toString() === orderItemID
   })[0]
   
   orderArr.push(targetOrderObj)
   console.log(orderArr)

    // menuArray.map(function(item){
    //     renderPriceHtml += `
    //     <div class="renderPrice" id="renderPrice">
    //         <h1>Your Order</h1>
    //         <div class="order-item">
    //             <h3>${item.name}</h3>
    //             <h4>$${item.price}</h4>
    //         </div>
            
    // </div>`
    // })
     
    return  orderArr
}


function render(){
    document.getElementById('menu').innerHTML = getMenuHtml() 
}

render()