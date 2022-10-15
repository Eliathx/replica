import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './scrollbar.css'
import SideBar from './sidebar'
import Content from './content.js'
import TopDiv from './topDiv.js'

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <div>
        <TopDiv />
        <SideBar />
        <Content />
    </div>
)