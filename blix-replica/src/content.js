import React from "react"
import LatestNews from "./latestNews";
import NewsBoard from "./newsBoard";
import MatchesBoard from "./matchesBoard";
import TournamentsBoard from "./tournamentsBoard";
import "./content.css";
import {SVGIcon} from "./iconImg";

function ViewMoreButton(props) {
    return <button className='view-more-button highlight-on-hover'>
        <SVGIcon page="View-more"/>
        ⠀View {props.section}</button>
}

function InnerViewMoreButton(props) {

    return <button className='inner-view-more-button highlight-inner-on-hover'>
        <SVGIcon page="View-more"/>View {props.section}</button>
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