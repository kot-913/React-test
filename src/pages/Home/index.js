import React from "react";
import Footer from "../../common/components/Footer/index";
import CircularProgress from "../../common/components/Loader/loader";
import Header from "../../common/Header/index";
import "./style.scss";

const HomePage = () => {
	const [news, setNews] = React.useState([]);
	const [loading, setLoading] = React.useState(true);



	React.useEffect(() => {
		fetch(
			"https://finnhub.io/api/v1/company-news?symbol=AAPL&from=2020-04-30&to=2020-05-01&token=btoqs4748v6thnhs3pe0"
		)
			.then((response) => response.json())
			.then((response) => {
				setNews(response);
				setLoading(false);
			}
			)
			.catch((error) => console.log("Somethin is wrong!"));
	}, []);



	let date = news.slice(0, 8).map((item) => (
		<div className="news-post" key={item.id}>
			<img className="postImg" src={item.image} alt="" />
			<p>{item.summary}</p>
		</div>
	));

	return (
		<div>
			<Header />

			<div className="home">{loading ? <CircularProgress /> : date}</div>
			<Footer />
		</div>
	);
}


export default HomePage;
