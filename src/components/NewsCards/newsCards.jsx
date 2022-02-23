import React from "react";
import { Grid, Grow, Typography } from "@material-ui/core";
import NewsCard from "../NewsCard/newsCard";
import useStyles from "./styles.js";
const infoCards = [
  {
    color: "#00838f",
    title: "NewsTron at your service",
    info2: "just say HELLO for small talk.",
    info3: "what is the temperature,for temperature",
    info: "Try searching for news by voice.",
    text: '"what can i do here"  to know more about me',
  },
  {
    color: "#1565c0",
    title: "News by Categories",
    info: "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Give me the latest Technology news",
  },
  {
    color: "#4527a0",
    title: "News by Terms",
    info: "india, movies, Smartphones, cricket",
    text: "What's up with PlayStation 5",
  },
  {
    color: "#283593",
    title: "News by Sources",
    info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
    text: "Give me the news from CNN",
  },
  // {
  //   color: "#1584c0",
  //   title: "News by Country",
  //   info: "India, America, France,Australia",
  //   text: "Headlines from India",
  // },
];

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();
  if (!articles.length) {
    return (
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {infoCards.map((infoCard) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className={classes.infoCard}
            >
              <div
                className={classes.card}
                style={{
                  backgroundColor: infoCard.color,
                }}
              >
                <div>
                  <Typography
                    variant="p"
                    component="h3"
                    className={classes.title}
                  >
                    {infoCard.title}
                  </Typography>
                </div>
                {infoCard.info ? (
                  <>
                    <Typography variant="h6" component="h6">
                      {/* <strong>{infoCard.title.split(" ")[2]}</strong>: <br /> */}
                      {infoCard.info}
                    </Typography>
                    <Typography variant="h6" component="h6">
                      {infoCard.info2}
                    </Typography>
                    <Typography variant="h6" component="h6">
                      {infoCard.info3}
                    </Typography>
                  </>
                ) : null}
                <Typography variant="h6" component="h6">
                  <strong> Try saying: </strong>
                  <br /> <i>{infoCard.text}</i>
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
            <NewsCard i={i} article={article} activeArticle={activeArticle} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
