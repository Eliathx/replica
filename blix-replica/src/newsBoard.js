import React from "react";
import { InnerViewMoreButton } from "./content";
import './newsBoard.css'
import {SVGIcon} from "./iconImgWithText";

function NewsBoard() {
    return <div className="news-board">

        <div className="board-tab-menu" >
            <Tab page="Latest News" state="selected-bottom-border"/>
            <Tab page="Breaking News" />
        </div>

        <div className="news-board-content">
            <NewsCard  title="Williams Resolve announces Rocket League roster changes" date="9 Oct, 08:17" />
            <NewsCard title="Sources: Sacy and pANcada joined Sentinel's roster" date="7 Oct, 18:03" />
            <NewsCard title="Worlds 2022 will be the event with most world champions so far" date="7 Oct, 09:36" />
            <NewsCard title="Sources: Mixwell signing with Team Heretics" date="6 Oct, 12:43" />
            <NewsCard title="Cryocells officially joins 100 Thieves roster" date="3 Oct, 22:07" />
            <InnerViewMoreButton section="all News" />
        </div>

    </div>
}
function NewsCard(props) {
    return <div className="news-card">
        <a className="card-title">{props.title}</a>
        <a className="news-card-date"><svg className='icon' width="15" height="15" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" class=""><path fill='#656567'fill-rule="evenodd" clip-rule="evenodd" d="M4.1999 1.40002C4.01425 1.40002 3.8362 1.47377 3.70493 1.60505C3.57365 1.73633 3.4999 1.91437 3.4999 2.10002V2.80002H2.7999C2.4286 2.80002 2.0725 2.94752 1.80995 3.21007C1.5474 3.47263 1.3999 3.82872 1.3999 4.20002V11.2C1.3999 11.5713 1.5474 11.9274 1.80995 12.19C2.0725 12.4525 2.4286 12.6 2.7999 12.6H11.1999C11.5712 12.6 11.9273 12.4525 12.1899 12.19C12.4524 11.9274 12.5999 11.5713 12.5999 11.2V4.20002C12.5999 3.82872 12.4524 3.47263 12.1899 3.21007C11.9273 2.94752 11.5712 2.80002 11.1999 2.80002H10.4999V2.10002C10.4999 1.91437 10.4262 1.73633 10.2949 1.60505C10.1636 1.47377 9.98555 1.40002 9.7999 1.40002C9.61425 1.40002 9.4362 1.47377 9.30493 1.60505C9.17365 1.73633 9.0999 1.91437 9.0999 2.10002V2.80002H4.8999V2.10002C4.8999 1.91437 4.82615 1.73633 4.69488 1.60505C4.5636 1.47377 4.38555 1.40002 4.1999 1.40002ZM4.1999 4.90002C4.01425 4.90002 3.8362 4.97377 3.70493 5.10505C3.57365 5.23633 3.4999 5.41437 3.4999 5.60002C3.4999 5.78568 3.57365 5.96372 3.70493 6.095C3.8362 6.22627 4.01425 6.30002 4.1999 6.30002H9.7999C9.98555 6.30002 10.1636 6.22627 10.2949 6.095C10.4262 5.96372 10.4999 5.78568 10.4999 5.60002C10.4999 5.41437 10.4262 5.23633 10.2949 5.10505C10.1636 4.97377 9.98555 4.90002 9.7999 4.90002H4.1999Z">
            </path></svg>⠀{props.date}</a>
    </div>
}
function Tab(props) {
    return <div className={`tab ${props.state}`}>
        <SVGIcon page={props.page}/>
        {props.page}</div>
}
export default NewsBoard
export { Tab }