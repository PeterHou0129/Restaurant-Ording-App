import { menuArray } from "./data.js"


document.addEventListener('click',function(e){
    if(e.target.dataset.pizza){
        plusPizaClick(e.target.dataset.pizza)
    }
    else if(e.target.dataset.hamburger){
        plusHamburgerClick(e.target.dataset.hamburger)
    }
    else if(e.target.dataset.beer){
        plusBeerClick(e.target.dataset.beer)
    }
})

function plusPizaClick(id){
    console.log(id)
}

function plusHamburgerClick(id){
      console.log(id)
}

function plusBeerClick(id){
      console.log(id)
}

function getMenuHtml(){
    let menuHtml = ``
    menuArray.map(function(item){
        const listArr = []
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


function render(){
    document.getElementById('menu').innerHTML = getMenuHtml()
}

render()