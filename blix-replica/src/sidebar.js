import React from "react";
import './sidebar.css'
import IconImgWithText from './iconImgWithText.js'
import {SVGIcon} from "./iconImgWithText.js";

function SideBar() {


    return <div className='sidebar'>

        <div className='logoBox'>
            <svg width="80" height="20" viewBox="0 0 80 20" fill="none" xmlns="http://www.w3.org/2000/svg"
                 data-v-5576b570="" className="">
                <path d="M29.5393 0.596205C29.5393 0.26693 29.2724 0 28.9431
            0H26.2067C23.6132 7.53759e-07 21.5107 2.10291 21.5107 4.69697C21.5107 7.29104 23.6132 9.39394 26.2067 
            9.39394L28.9431 9.39394C29.2724 9.39394 29.5393 9.12701 29.5393 8.79773V0.596205Z" fill="#7A3CFF"
                      data-v-5576b570=""></path>
                <path
                    d="M29.5393 11.2023C29.5393 10.873 29.2724 10.6061 28.9431 10.6061L26.2067 10.6061C23.6132 10.6061 21.5107 12.709 21.5107 15.303C21.5107 17.8971 23.6132 20 26.2067 20H28.9431C29.2724 20 29.5393 19.7331 29.5393 19.4038V11.2023Z"
                    fill="#7A3CFF" data-v-5576b570="">
                </path>
                <path
                    d="M0 0.606061C0 0.271343 0.271286 0 0.605935 0H15.9196C18.5055 0 20.6018 2.10291 20.6018 4.69697C20.6018 7.29103 18.5055 9.39394 15.9196 9.39394H0.605935C0.271286 9.39394 0 9.1226 0 8.78788V0.606061Z"
                    fill="#7A3CFF" data-v-5576b570=""></path>
                <path
                    d="M0 11.2121C0 10.8774 0.271286 10.6061 0.605935 10.6061H15.9196C18.5055 10.6061 20.6018 12.709 20.6018 15.303C20.6018 17.8971 18.5055 20 15.9196 20H0.605935C0.271286 20 0 19.7287 0 19.3939V11.2121Z"
                    fill="#7A3CFF" data-v-5576b570=""></path>
                <path
                    d="M43.219 16.5H37V3.5H42.8473C44.1829 3.5 45.2587 3.84147 46.0746 4.52441C46.8905 5.20735 47.2985 6.01116 47.2985 6.93584C47.2985 7.29242 47.2411 7.63389 47.1262 7.96025C47.0114 8.28057 46.8724 8.53742 46.7092 8.73082C46.546 8.92422 46.3828 9.09345 46.2197 9.23849C46.0625 9.3775 45.9235 9.47722 45.8027 9.53766L45.6304 9.62831C45.6908 9.65249 45.7724 9.68875 45.8752 9.7371C45.984 9.7794 46.1713 9.88517 46.4372 10.0544C46.7032 10.2176 46.9389 10.4049 47.1444 10.6165C47.3498 10.828 47.5342 11.1181 47.6974 11.4868C47.8666 11.8554 47.9512 12.2573 47.9512 12.6925C47.9512 13.7078 47.507 14.5962 46.6185 15.3577C45.7362 16.1192 44.603 16.5 43.219 16.5ZM40.5265 13.7169H42.9379C43.3489 13.7169 43.6843 13.593 43.9442 13.3452C44.2041 13.0974 44.334 12.7892 44.334 12.4205C44.334 12.0458 44.2041 11.7345 43.9442 11.4868C43.6843 11.239 43.3489 11.1151 42.9379 11.1151H40.5265V13.7169ZM42.4756 6.29219H40.5265V8.51325H42.4756C42.8443 8.51325 43.1374 8.41353 43.355 8.21409C43.5725 8.0086 43.6813 7.73966 43.6813 7.40725C43.6813 7.06881 43.5725 6.79986 43.355 6.60042C43.1374 6.39493 42.8443 6.29219 42.4756 6.29219Z"
                    fill="white" data-v-5576b570=""></path>
                <path d="M59.4644 16.5H50.1813V3.5H53.7078V13.3452H59.4644V16.5Z" fill="white"
                      data-v-5576b570=""></path>
                <path d="M61.3138 16.5V3.5H64.8403V16.5H61.3138Z" fill="white" data-v-5576b570=""></path>
                <path
                    d="M72.9086 12.1395L70.3068 16.5H66.4086L70.6785 9.71897L66.7803 3.5H70.6785L72.9086 7.30753L75.1388 3.5H79.037L75.1388 9.71897L79.4086 16.5H75.5105L72.9086 12.1395Z"
                    fill="white" data-v-5576b570=""></path>
            </svg>
        </div>

        <ul className='menu'>
            <div className='sidebar-element selected-right-border'>
                <SVGIcon page="Browse"/>
                Browse
            </div>
            <li className='sidebar-element highlight-on-hover'>
                <SVGIcon page="News"/>
                News
            </li>
            <li className='sidebar-element highlight-on-hover'>
                <SVGIcon page="Tournaments-gray"/>
                Tournaments
            </li>
            <li className='sidebar-element highlight-on-hover'>
                <SVGIcon page="Matches"/>
                Matches
            </li>

        </ul>
        <div>
            <div className="news-by-games">
                NEWS BY GAMES
            </div>
            <ul className='menu games-menu'>
                <li className='sidebar-element highlight-on-hover'>
                    <IconImgWithText gameName='CS:GO'/>
                </li>
                <li className='sidebar-element highlight-on-hover'>
                    <IconImgWithText gameName='Valorant'/>
                </li>
                <li className='sidebar-element highlight-on-hover'>
                    <IconImgWithText gameName='Dota 2'/>
                </li>
                <li className='sidebar-element highlight-on-hover'>
                    <IconImgWithText gameName='League of Legends'/>
                </li>
                <li className='sidebar-element highlight-on-hover'>
                    <IconImgWithText gameName='Rainbow 6'/>
                </li>
                <li className='sidebar-element highlight-on-hover'>
                    <IconImgWithText gameName="Industry"/>
                </li>
                <li className='sidebar-element highlight-on-hover'>
                    <IconImgWithText gameName='Rocket League'/>
                </li>
                <li className='sidebar-element highlight-on-hover'>
                    <IconImgWithText gameName="Free Fire"/>
                </li>
                <li className='sidebar-element highlight-on-hover'>
                    <IconImgWithText gameName="GWENT"/>
                </li>
                <li className='sidebar-element highlight-on-hover'>
                    <IconImgWithText gameName="Games"/>
                </li>
            </ul>
        </div>
    </div>
}

export default SideBar