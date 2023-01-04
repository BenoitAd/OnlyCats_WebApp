import Article from "../Article";
import React from "react";

export default function Articles(props : any) {
    var articlesData = props.articlesData;

    return (
        articlesData?.map( (articleData : any , index:number) => { 
                return (
                <React.Fragment key={index}>
                <Article description={articleData.description} srcImg={articleData.src}
                pseudo={articleData.pseudo} date={articleData.date}/>
                </React.Fragment>
                )
            }
        )
     )
}