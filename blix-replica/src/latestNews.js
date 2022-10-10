import React from "react";

function LatestNews() {
    return <div className='latest-news'>
        <BigNewsPost 
        title="Williams Resolve announces Rocket League roster changes" 
        author="Lorem ipsum" 
        imgsrc='https://cdn.sanity.io/images/fnx611yr/production/a6130a1a899b67b059f9a83178d7fbd187d62bf5-4088x2299.jpg' />
        <SmallerNewsPost title="Hola" author="Author 2" imgsrc='https://top-mmo.fr/wp-content/uploads/2022/09/valorant-champions-sacy-rank-one-eu-1.jpg' />
        <SmallerNewsPost title="Hola2" author="Author 3" imgsrc='https://esports.eldesmarque.com/wp-content/uploads/2021/09/Mundial.jpg' />
    </div>
}
const toBottomBlackGradient = 'linear-gradient(0deg, rgba(0,0,0,0.7679446778711485) 15%, rgba(0,0,0,0.2413340336134454) 50%, rgba(0,212,255,0) 100%)'

function BigNewsPost(props) {
    return <div className='big-news-post' style={{
         backgroundImage: `${toBottomBlackGradient}, url(${props.imgsrc})` }}>
        <h2>{props.title}</h2>
        <h2>{props.author}</h2>
    </div>
}
function SmallerNewsPost(props) {
    return <div className='small-news-post' style={{
         backgroundImage: `${toBottomBlackGradient}, url(${props.imgsrc})` }}>
        <h2>{props.title}</h2>
        <h2>{props.author}</h2>
    </div>
}
export default LatestNews