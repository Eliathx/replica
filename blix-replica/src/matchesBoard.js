import React, { useState } from "react";
import { Tab } from "./newsBoard";
import "./matchesBoard.css";

function MatchesBoard() {
    return <div>

        <div className="board-tab">
            <Tab page="Live" />
            <Tab page="Upcoming" />
            <Tab page="Finished" />
        </div>
        <div className="matches-board-content">
            <CollapsibleMatch game="CSGO" />
            <CollapsibleMatch game="Rainbow Six" />
            <CollapsibleMatch game="FIFA" />
        </div>

    </div>
}
function MatchCard(props) {
    return <div className="match-card">Holaaa</div>
}

function CollapsibleMatch(props) {
    const [open, setOPen] = useState(false);
    const toggle = () => { setOPen(!open) }

    return (<div>
        <button onClick={toggle} className="collapsible-button">
            {props.game}
        </button>

        <div className="collapsible-content">
            {open && <div>
                <script>
                </script>
                <MatchCard />
                <MatchCard />
                <MatchCard />
                <MatchCard />
            </div>}
        </div>
    </div>)
}
export default MatchesBoard