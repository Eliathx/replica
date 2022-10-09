import React from "react";
function LatestNews() {
    return <div className='latest-news'>
        <BigNewsPost title="Hola" author="Test name 1" />

        <SmallerNewsPost title="Hola" author="Author 2" />
        <SmallerNewsPost title="Hola2" author="Author 3" />
    </div>
}
function BigNewsPost(props) {
    return <div className='big-news-post'>
        <h2>{props.title}</h2>
        <h2>{props.author}</h2>
    </div>
}
function SmallerNewsPost(props) {
    return <div className='small-news-post'>
        <h2>{props.title}</h2>
        <h2>{props.author}</h2>
    </div>
}
export default LatestNews