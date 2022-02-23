import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/newsCards";
import wordsToNumbers from "words-to-numbers";

import useStyle from "./styles.js";
const App = () => {
  const classes = useStyle();
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  useEffect(() => {
    alanBtn({
      key: "3e51f10fb7ff4b366a7b4bb22376954c2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({ command, articles, number }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
          setActiveArticle(-1);
        }
        else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        }
        else if (command === "open") {

          const parseNumber = number.length > 2 ? wordsToNumbers(number, { fuzzy: true }) : number;
          if (parseNumber > 20) {
            alanBtn.playText("try again.");
          }
          else {
            window.open(articles[parseNumber - 1].url, "_blank");
            alanBtn.playText("Opening....");
          }
        }
      },
    });
  }, []);

  var date = new Date();
  return (

    <div >
      <center>
        <div className={classes.logoContainer}>
          <img src="https://news.cgtn.com/news/30456a4e7a677a6333566d54/5e174529-2810-471d-8bde-d87bfd878e62.gif" alt="newsTron logo" className={classes.alanLogo} />
          <div className={classes.day}>
            <span className={classes.appname}>NewsTron</span>
            <span className={classes.day}>{date.toDateString()}</span>
          </div>
        </div >
      </center>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  );
};

export default App;
