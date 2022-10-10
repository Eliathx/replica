import React from "react";
import IconImg from './iconImg.js'
function CurrentMatchesBar() {

    return <div className='currentMatchesBar'>
       <CurrentMatchCard team1="CGN" team2="Dsyre"/>
       <CurrentMatchCard team1="DRX" team2="FURIA"/>
       <CurrentMatchCard team1="T1" team2="XSET"/>
       <CurrentMatchCard team1="GUILD" team2="NAVI"/>
    </div>
}

function CurrentMatchCard(props){
    return <button className='currentMatchCard'><IconImg gameName={props.team1}/>
    &nbsp;&nbsp;vs&nbsp;&nbsp; 
    <IconImg gameName={props.team2} /></button>
}

function TopDiv() {
    return <div className='top-menu'>
        <CurrentMatchesBar />
        <button className='signIn'>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="white" fillOpacity="0.6" xmlns="http://www.w3.org/2000/svg" class="giBjg8veuDjL2oEA9sQhkw=="><path fill-rule="evenodd" clip-rule="evenodd" d="M2.39961 2.40002C2.61178 2.40002 2.81527 2.48431 2.96529 2.63434C3.11532 2.78437 3.19961 2.98785 3.19961 3.20002V12.8C3.19961 13.0122 3.11532 13.2157 2.96529 13.3657C2.81527 13.5157 2.61178 13.6 2.39961 13.6C2.18744 13.6 1.98395 13.5157 1.83392 13.3657C1.68389 13.2157 1.59961 13.0122 1.59961 12.8V3.20002C1.59961 2.98785 1.68389 2.78437 1.83392 2.63434C1.98395 2.48431 2.18744 2.40002 2.39961 2.40002ZM8.56521 5.03442C8.71519 5.18445 8.79944 5.38789 8.79944 5.60002C8.79944 5.81216 8.71519 6.0156 8.56521 6.16562L7.53081 7.20002H13.5996C13.8118 7.20002 14.0153 7.28431 14.1653 7.43434C14.3153 7.58437 14.3996 7.78785 14.3996 8.00002C14.3996 8.2122 14.3153 8.41568 14.1653 8.56571C14.0153 8.71574 13.8118 8.80002 13.5996 8.80002H7.53081L8.56521 9.83443C8.71094 9.98531 8.79157 10.1874 8.78975 10.3971C8.78793 10.6069 8.70379 10.8076 8.55546 10.9559C8.40714 11.1042 8.20649 11.1883 7.99673 11.1902C7.78697 11.192 7.58489 11.1114 7.43401 10.9656L5.03401 8.56562C4.88403 8.4156 4.79978 8.21216 4.79978 8.00002C4.79978 7.78789 4.88403 7.58445 5.03401 7.43442L7.43401 5.03442C7.58403 4.88445 7.78748 4.8002 7.99961 4.8002C8.21174 4.8002 8.41519 4.88445 8.56521 5.03442Z"></path></svg>
            ⠀Sign in
        </button>

    </div>
}
export default TopDiv