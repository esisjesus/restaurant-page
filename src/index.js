import './custom.scss';
import { viewDisplayer } from './container/viewDisplayer';

viewDisplayer.showHome()

document.getElementById("home_header").addEventListener("click", viewDisplayer.showHome)
document.getElementById("menu_header").addEventListener("click", viewDisplayer.showMenu)
