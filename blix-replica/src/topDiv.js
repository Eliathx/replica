import React from "react";
import IconImgWithText from './iconImgWithText.js'
import "./topDiv.css";

function CurrentMatchesBar() {

    return <div className='currentMatchesBar'>
       <CurrentMatchCard team1="CGN" team2="Dsyre"/>
       <CurrentMatchCard team1="DRX" team2="FURIA"/>
        <CurrentMatchCard team1="T1" team2="XSET"/>
       <CurrentMatchCard team1="GUILD" team2="NAVI"/>
    </div>
}

function CurrentMatchCard(props){
    return <div className='current-match-card'><IconImgWithText gameName={props.team1}/>
        <svg style={{marginLeft:9}} className="game-icon" width="13" height="8" viewBox="0 0 13 8" xmlns="http://www.w3.org/2000/svg">
            <path fill="#7a7a7c"
                  d="M7.09398 1.082L3.41998 7H1.64898L0.339984 1.082H2.03398L2.89198 5.119L5.37798 1.082H7.09398ZM8.68727 7.088C8.17393 7.088 7.68627 7.033 7.22427 6.923C6.7696 6.80567 6.41393 6.65533 6.15727 6.472L6.81727 5.229C7.07393 5.39767 7.3856 5.53333 7.75227 5.636C8.12627 5.73867 8.50027 5.79 8.87427 5.79C9.26293 5.79 9.5526 5.74233 9.74327 5.647C9.93393 5.54433 10.0293 5.40133 10.0293 5.218C10.0293 5.07133 9.94493 4.965 9.77627 4.899C9.6076 4.833 9.33627 4.76333 8.96227 4.69C8.53693 4.60933 8.18493 4.52133 7.90627 4.426C7.63493 4.33067 7.3966 4.17667 7.19127 3.964C6.99327 3.744 6.89427 3.447 6.89427 3.073C6.89427 2.42033 7.1656 1.91067 7.70827 1.544C8.25827 1.17733 8.97693 0.994 9.86427 0.994C10.2749 0.994 10.6746 1.038 11.0633 1.126C11.4519 1.214 11.7819 1.335 12.0533 1.489L11.4373 2.743C10.9533 2.44233 10.3703 2.292 9.68827 2.292C9.31427 2.292 9.02827 2.347 8.83027 2.457C8.6396 2.567 8.54427 2.70633 8.54427 2.875C8.54427 3.029 8.6286 3.14267 8.79727 3.216C8.96593 3.282 9.24827 3.35533 9.64427 3.436C10.0623 3.51667 10.4033 3.60467 10.6673 3.7C10.9386 3.788 11.1733 3.93833 11.3713 4.151C11.5693 4.36367 11.6683 4.65333 11.6683 5.02C11.6683 5.68 11.3896 6.18967 10.8323 6.549C10.2823 6.90833 9.56727 7.088 8.68727 7.088Z"></path>
        </svg>
    <IconImgWithText gameName={props.team2} />&nbsp;<span className='started-text'>started</span></div>
}

function TopDiv() {
    return <div className='top-menu'>
        <CurrentMatchesBar />
        <div className="fade-right"></div>
        <button className='signIn'>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="white" fillOpacity="0.6" xmlns="http://www.w3.org/2000/svg" class="giBjg8veuDjL2oEA9sQhkw=="><path fill-rule="evenodd" clip-rule="evenodd" d="M2.39961 2.40002C2.61178 2.40002 2.81527 2.48431 2.96529 2.63434C3.11532 2.78437 3.19961 2.98785 3.19961 3.20002V12.8C3.19961 13.0122 3.11532 13.2157 2.96529 13.3657C2.81527 13.5157 2.61178 13.6 2.39961 13.6C2.18744 13.6 1.98395 13.5157 1.83392 13.3657C1.68389 13.2157 1.59961 13.0122 1.59961 12.8V3.20002C1.59961 2.98785 1.68389 2.78437 1.83392 2.63434C1.98395 2.48431 2.18744 2.40002 2.39961 2.40002ZM8.56521 5.03442C8.71519 5.18445 8.79944 5.38789 8.79944 5.60002C8.79944 5.81216 8.71519 6.0156 8.56521 6.16562L7.53081 7.20002H13.5996C13.8118 7.20002 14.0153 7.28431 14.1653 7.43434C14.3153 7.58437 14.3996 7.78785 14.3996 8.00002C14.3996 8.2122 14.3153 8.41568 14.1653 8.56571C14.0153 8.71574 13.8118 8.80002 13.5996 8.80002H7.53081L8.56521 9.83443C8.71094 9.98531 8.79157 10.1874 8.78975 10.3971C8.78793 10.6069 8.70379 10.8076 8.55546 10.9559C8.40714 11.1042 8.20649 11.1883 7.99673 11.1902C7.78697 11.192 7.58489 11.1114 7.43401 10.9656L5.03401 8.56562C4.88403 8.4156 4.79978 8.21216 4.79978 8.00002C4.79978 7.78789 4.88403 7.58445 5.03401 7.43442L7.43401 5.03442C7.58403 4.88445 7.78748 4.8002 7.99961 4.8002C8.21174 4.8002 8.41519 4.88445 8.56521 5.03442Z"></path></svg>
            ⠀Sign in
        </button>
    </div>
}
export default TopDiv