import { menuArray } from "./data.js"
 const  orderArr = []
document.addEventListener('click',function(e){
    if(e.target.dataset.pizza){
        plusClick(e.target.dataset.pizza)
        getPriceArr(e.target.dataset.pizza)
        renderOrder() 
    }
    else if(e.target.dataset.hamburger){
        plusClick(e.target.dataset.hamburger)
        getPriceArr(e.target.dataset.hamburger)
        renderOrder() 
    }
    else if(e.target.dataset.beer){
        plusClick(e.target.dataset.beer)
        getPriceArr(e.target.dataset.beer)
        renderOrder() 
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

function getPriceArr(orderItemID){
   
    const targetOrderObj = menuArray.filter(function(item){
     return item.id.toString() === orderItemID
   })[0]
   orderArr.push(targetOrderObj)
   return  orderArr
}
function removeFromOrder(orderItemID){
    const idx = orderArr.findIndex(item => item.id.toString() === orderItemID.toString())
    if (idx !== -1) {
        orderArr.splice(idx, 1)
    }
    renderOrder()
}
document.addEventListener('click', e => {
  if (e.target.matches('.remove-btn')) {
    removeFromOrder(e.target.dataset.id)
  }
})

function renderOrder() {

    const totalPrice = orderArr.reduce(function(total, current){
        return total + current.price
    },0)
    const orderHtml = orderArr.map(item => `
        <div class="order-item">
        <div class="order-itme-left">
             <h3>${item.name}</h3>
             <button id="remove-btn" class="remove-btn" data-id="${item.id}">remove</button>
        </div>
            <h4>$${item.price}</h4>
        </div>
    `).join('')
    
    document.getElementById('renderPrice').innerHTML = `
        <h1>Your Order</h1>
        ${orderHtml}
         <div class="graylight"></div>
         <h4 class="order-item" >Total Price:<span>$${totalPrice}</span></h4>

         <button class="complete-btn" >Complete Order</button>
    `
}

function render(){
    document.getElementById('menu').innerHTML = getMenuHtml() 
}


render()

