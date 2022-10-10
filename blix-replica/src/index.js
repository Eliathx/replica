import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './scrollbar.css'
import SideBar from './sidebar'
import Content from './content.js'
import TopDiv from './topDiv'

const root = ReactDOM.createRoot(document.getElementById("root"))

function Body() {
    return <div className='body'>
        <a>Blix</a>
    </div>
}



root.render(
    <div>
        <TopDiv />
        <SideBar />
        <Content />

    </div>
)