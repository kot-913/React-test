import React, { Component } from "react";
import Header from "../../common/Header/index";
import Footer from "../../common/components/Footer/index";
import "./style.scss";

class HomePage extends Component {
  state = {
    news: [],
  };

  componentDidMount() {
    fetch(
      "https://finnhub.io/api/v1/company-news?symbol=AAPL&from=2020-04-30&to=2020-05-01&token=btoqs4748v6thnhs3pe0"
    )
      .then((response) => response.json())
      .then((response) =>
        this.setState({
          news: response,
        })
      )
      .catch((error) => console.log(error));
  }

  render() {
    const { news } = this.state;

    return (
      <div>
        <Header />
        <div className="home">
          {news.slice(0, 10).map((item) => (
            <div className="news-post" key={item.id}>
              <img className="postImg" src={item.image} />
              <p>{item.summary}</p>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
