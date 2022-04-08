import { fetchData } from "../container/fetchData"

export const menu = function(){
    let _burgerCard = function(price, name, image){
        return(
            `
                <div class="card bg-primary m-2" style="width: 18rem;">
                ${image && `<img src=${image} class="card-img-top image" alt="${name}"></img>`}
                <div class="card-body d-flex flew-row justify-content-between">
                    <h5 class="card-title">${name}</h5>
                    <h5>${price}$</h5>
                </div>
                </div>
            `
        )
    }
    let _html= function(){
        const tag =`<div class="menu"></div>`
        
    }
    return{
        section: function(block){
            let menu = document.createElement('div')
            menu.classList.add('menu')
            let section = document.createElement('div')
            section.classList.add('section')
            let title = document.createElement('h1')
            let titleText = document.createTextNode(block)
            title.appendChild(titleText)
            let innerSection = document.createElement('div')
            innerSection.classList.add("section_content")
            section.appendChild(title)
            section.appendChild(innerSection)
            menu.appendChild(section)
            
            fetchData.fetchMenu
            .then(menu =>
                menu['menu'][block].forEach(el=>{
                    let card = _burgerCard(el.price, el.name, el.image)
                    innerSection.innerHTML += card
            })
            )
            return menu
        },
        
    }

}()