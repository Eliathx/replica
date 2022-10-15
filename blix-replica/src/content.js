import React from "react"
import LatestNews from "./latestNews";
import NewsBoard from "./newsBoard";
import MatchesBoard from "./matchesBoard";
import TournamentsBoard from "./tournamentsBoard";
import "./content.css";
function ViewMoreButton(props) {
    return <button className='view-more-button'>
        <svg className="icon" width="20" height="20" viewBox="0 0 20 20">
            <path fill="#7953cc" d="M3.314,4.8h13.372c0.41,0,0.743-0.333,0.743-0.743c0-0.41-0.333-0.743-0.743-0.743H3.314
								c-0.41,0-0.743,0.333-0.743,0.743C2.571,4.467,2.904,4.8,3.314,4.8z M16.686,15.2H3.314c-0.41,0-0.743,0.333-0.743,0.743
								s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,15.2,16.686,15.2z M16.686,9.257H3.314
								c-0.41,0-0.743,0.333-0.743,0.743s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,9.257,16.686,9.257z"></path>
        </svg>
        ⠀View {props.section}</button>
}

function InnerViewMoreButton(props) {

    return <button className='inner-view-more-button'>
        <svg className="icon" width="20" height="20" viewBox="0 0 20 20">
            <path fill="#7953cc" d="M3.314,4.8h13.372c0.41,0,0.743-0.333,0.743-0.743c0-0.41-0.333-0.743-0.743-0.743H3.314
								c-0.41,0-0.743,0.333-0.743,0.743C2.571,4.467,2.904,4.8,3.314,4.8z M16.686,15.2H3.314c-0.41,0-0.743,0.333-0.743,0.743
								s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,15.2,16.686,15.2z M16.686,9.257H3.314
								c-0.41,0-0.743,0.333-0.743,0.743s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,9.257,16.686,9.257z"></path>
        </svg>
        ⠀View {props.section}</button>
}

function Content() {
    return <div className='content'>
        <LatestNews/>
        <ViewMoreButton section="more Articles"/>
        <NewsBoard/>
        <MatchesBoard/>
        <TournamentsBoard/>
    </div>
}

export default Content;
export {ViewMoreButton, InnerViewMoreButton};