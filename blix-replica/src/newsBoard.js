import React from "react";
import { InnerViewMoreButton} from "./content";
function NewsBoard(){
return <div className="news-board">
    
    <div className="board-tab">
        <Tab page="Latest News"/>
        <Tab page="Breaking News"/>
    </div>

    <div className="news-board-content">
      <NewsCard title="Title test1" date="today"/>
      <NewsCard title="Title test2" date="today"/>
      <NewsCard title="Title test3" date="today"/>
      <NewsCard title="Title test4" date="today"/>
      <InnerViewMoreButton section="all News"/>
    </div>
    
</div>
}
function NewsCard(props){
    return <div className="news-card">
        <h3>{props.title}</h3>
        <a>{props.date}</a>
    </div>
}
function Tab(props){
    return <div className="tab">{props.page}</div>
}
export default NewsBoard
export{Tab}