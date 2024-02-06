import React, { useState, useEffect } from "react";
import Card from "./Card";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(2);
  const [totalData, setTotalData] = useState(0);

  useEffect(() => {
    async function practise() {
      props.setProgress(30);
      setLoading(true);
      let url = `https://newsapi.org/v2/top-headlines?country=${
        !props.country ? null : props.country
      }&apiKey=${props.Api}&page=1`;
      let data = await fetch(url);
      props.setProgress(50);
      let parsedData = await data.json();
      props.setProgress(70);
      if (parsedData.articles) 
      {
        // setArticles(articles.concat(parsedData.articles));
        setArticles(articles => articles ? articles.concat(parsedData.articles) : parsedData.articles);
      }
      setLoading(false);
      setTotalData(parsedData.totalResults);
      document.title = props.country;
      props.setProgress(100);
    }
    practise();
  }, []);

  // const componentDidMount = async(props) =>{
  //   props.setProgress(30);
  //   setLoading(true)
  //   let url = `https://newsapi.org/v2/top-headlines?country=${
  //     !props.country ? null : props.country
  //   }&apiKey=${props.Api}&page=1`;
  //   let data = await fetch(url);
  //   props.setProgress(50);
  //   let parsedData = await data.json();
  //   props.setProgress(70);
  //   this.setState({
  //     articles: parsedData.articles,
  //     loading: false,
  //     totalData: parsedData.totalResults,
  //   });
  //   document.title = props.country;
  //   props.setProgress(100);
  // }

  const fetchMoreData = async () => {
    setPage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=${
      !props.country ? null : props.country
    }&apiKey=${props.Api}&page=${page}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setLoading(false);
    setTotalData(parsedData.totalResults);
  };

  return (
    <div className="container my-3">
      <div className="text-center">{loading && <Loading />}</div>
      {articles && (
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalData}
          loader={<div className="text-center">{loading && <Loading />}</div>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="row my-3">
            {articles?.map((element) => {
              return (
                <div className="col-md-4 my-3">
                  <Card
                    title={element.title}
                    description={element.description}
                    image={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
};

export default News;
