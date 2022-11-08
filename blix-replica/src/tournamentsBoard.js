import React from "react";
import {Tab} from "./newsBoard.js"
import {InnerViewMoreButton} from "./content.js"
import "./tournamentsBoard.css";
import IconImg from "./iconImgWithText";

function TournamentsBoard() {
    return <div>
        <div className="board-tab-menu">
            <Tab page="Tournaments" state="selected-bottom-border"/>

        </div>
        <div className="news-board-content">
            <TournamentCard name="2022-2023 RLCS Fall: Sub-Saharan Africa Regional 1 - Fall Open"
                            status="Ongoing"
                            date="Until 10 Oct"
                            imgsrc="https://i.ytimg.com/vi/GzFKP4IN9y0/maxresdefault.jpg"
                            game="Rocket League"
            />
            <TournamentCard name="Champions Tour Game Changers Series III: North America"
                            status="Ongoing"
                            date="Until 11 Oct"
                            imgsrc="https://owcdn.net/img/604be13d01964.png"
                            game="Valorant"
            />
            <TournamentCard name="Game Changers Brazil - Series 2"
                            status="Ongoing"
                            date="Until 11 Oct"
                            imgsrc="https://owcdn.net/img/604be13d01964.png"
                            game="Valorant"
            />

            <TournamentCard name="2022 Superdome"
                            status="Ongoing"
                            date="Until 11 Oct"
                            imgsrc="https://owcdn.net/img/633ffc210600b.png"
                            game="Valorant"
            />
            <TournamentCard name="2022 CCT North Europe Series #1"
                            status="Ongoing"
                            date="Until 09 Oct"
                            imgsrc="https://img.abiosgaming.com/events/CCT-North-Europe_tournamentsquare.jpg"
                            game="CS:GO"
            />
            <InnerViewMoreButton section="all Tournaments"/>
        </div>
    </div>
}

function TournamentCard(props) {
    return <div className="tournament-card">
        <p className="card-title">{props.name}</p>
        <div>
            <img src={props.imgsrc} alt={props.name} className="tournament-image"/>
            <a className="news-card-date">{props.status} </a>
            <a className="news-card-date">{props.date}</a>
            <IconImg gameName={props.game}></IconImg>
        </div>
    </div>
}

export default TournamentsBoard