import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Chart from './Components/Chart';
import News from './Components/News';


function App() {
  const [articles, setArticles] = useState([]);

    // useEffect(() => {
    //     fetch('https://newsapi.org/v2/everything?q=Apple&from=2021-03-23&sortBy=popularity&apiKey=69ec458f35314f3e9ba795668d2b91d9')
    //     .then(res => res.json())
    //     .then(data => setArticles(data.articles))
    //   }, [])


    useEffect(() => {
      axios('https://newsapi.org/v2/everything?q=Apple&from=2021-03-23&sortBy=popularity&apiKey=69ec458f35314f3e9ba795668d2b91d9')
      .then(data => setArticles(data.data.articles))
    }, [])
    return (
      <div id="div">
        <Chart></Chart>
          {articles.map(article => <News article= {article}></News>)}
      </div>
  );
}

export default App;
