import Article from "../Article";

export default function Articles(props : any) {
    var articlesData = props.articlesData;

    return (
        articlesData?.map( (articleData : any) => { 
                return <Article description={articleData.description} srcImg={articleData.src}
                pseudo={articleData.pseudo} date={articleData.date}/>
            }
        )
     )
}