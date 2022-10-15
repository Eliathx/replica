import React from "react";
import { Tab } from "./newsBoard.js"
import {InnerViewMoreButton} from "./content.js"
import "./tournamentsBoard.css";

function TournamentsBoard() {
    return <div>
        <div className="board-tab">
            <Tab page="Tournaments" />
            
        </div>
        <div className="news-board-content">
               <TournamentCard name="VCT" status="Ongoing" date="Until 10 Oct"/>
               <TournamentCard name="GC" status="Ongoing" date="Until 11 Oct"/>
               <TournamentCard name="GC" status="Ongoing" date="Until 11 Oct"/>
               <TournamentCard name="GC" status="Ongoing" date="Until 11 Oct"/>
               <TournamentCard name="Worlds" status="Ongoing" date="Until 09 Oct"/>
                <InnerViewMoreButton section="all News" />
            </div>
    </div>
}
function TournamentCard(props){
    return <div className="tournament-card">
        {props.name}<br/>  <a>{props.status} | {props.date}</a>
    </div>
}
export default TournamentsBoard