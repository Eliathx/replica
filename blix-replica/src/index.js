import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './scrollbar.css'
import Content from './content.js'
import TopDiv from './topDiv'

const root = ReactDOM.createRoot(document.getElementById("root"))

function Body() {
    return <div className='body'>
        <a>Blix</a>
    </div>
}

function SideBar() {
    return <div className='sidebar'>
        LOREM
        <ul className='pagesMenu'>
            <li className='sidebar-element'>Browse</li>
            <li className='sidebar-element'>News</li>
            <li className='sidebar-element'>Tournaments</li>
            <li className='sidebar-element'>Matches</li>

        </ul>
        <ul className='gamesMenu'>
            <li className='sidebar-element'>CS:GO</li>
            <li className='sidebar-element'>Valorant</li>
            <li className='sidebar-element'>Dota 2</li>
            <li className='sidebar-element'>League of Legends</li>
            <li className='sidebar-element'>Rainbow 6</li>
            <li className='sidebar-element'>Industry</li>
            <li className='sidebar-element'>Rocket League</li>
            <li className='sidebar-element'>Free Fire</li>
            <li className='sidebar-element'>GWENT</li>
            <li className='sidebar-element'>Games</li>
        </ul>
    </div>
}

root.render(
    <div>
        <TopDiv />
        <SideBar />
        <Content />

    </div>
)