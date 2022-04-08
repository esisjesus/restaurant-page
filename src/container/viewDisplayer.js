import {homeHtml} from '../views/home'
import {menu} from '../views/menu' 
import {navbar} from '../components/header'

export const viewDisplayer = function(){
    const content = document.getElementById("content")
    return{
        showMenu: ()=>{
            let menuBurger = menu.section("burgers")
            let menuApp = menu.section("appetizers")
            let menuBev = menu.section("beverages")
            let menuDess = menu.section("desserts")
            content.innerHTML =  navbar
            content.appendChild(menuBurger)
            content.appendChild(menuApp)
            content.appendChild(menuBev)
            content.appendChild(menuDess)

            document.getElementById("home_header").addEventListener("click", viewDisplayer.showHome)
            document.getElementById("menu_header").addEventListener("click", viewDisplayer.showMenu)
        },
        showHome: ()=>{
            content.innerHTML = homeHtml + navbar
            document.getElementById("home_header").addEventListener("click", viewDisplayer.showHome)
            document.getElementById("menu_header").addEventListener("click", viewDisplayer.showMenu)
        }
    }
}()