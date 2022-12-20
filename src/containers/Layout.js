import { useEffect } from 'react';
import {
    Link
} from "react-router-dom";
import menu from '../images/menu.png';

const Layout = ({ children }) => {
    let menuBtn
    let dropdown
    let linkBtns
    useEffect(() => {
        menuBtn = document.getElementById('menu_btn')
        dropdown = document.getElementById('navbar_dropdown')
        linkBtns = document.getElementsByClassName('navbar_item')
        menuBtn.addEventListener('click', function () {
            if (dropdown.style.display === 'flex') {
                dropdown.style.display = 'none'
            } else {
                dropdown.style.display = 'flex'
            }
        })

        for (let i = 0; i < linkBtns.length; i++) {
            linkBtns[i].addEventListener('click', function () {
                dropdown.style.display = 'none'
            })
        }
    });
    return (
        <div>
            <div className='navbar'>
                <div className='navbar_top'>
                    <img id='menu_btn' className='navbar_menu' src={menu} alt='menu'></img>
                    <span className='navbar_title'>Dashboard</span>
                </div>
                <div id='navbar_dropdown' className='navbar_dropdown'>
                    <Link className='navbar_item' to="/">Home</Link>
                    <Link className='navbar_item' to="/statistics">Statistics</Link>
                    <Link className='navbar_item' to="/items">Items</Link>
                </div>
            </div>
            <div>{children}</div>
        </div>
    )
}

export default Layout;