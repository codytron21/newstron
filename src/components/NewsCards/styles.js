import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "45vh",
    padding: "20%",
    borderRadius: 10,
    fontWeight: 700,
    fontSize: 15,
    color: "white",
    // backgroundImage: `url("https://i.pinimg.com/originals/4e/b9/45/4eb945eec0590f430da2b6fc4e6d9594.gif")`,
    // backgroundImage: `url("https://news.cgtn.com/news/30456a4e7a677a6333566d54/5e174529-2810-471d-8bde-d87bfd878e62.gif")`,
    // backgroundPosition: " center",
    // backgroundRepeat: "no-repeat",
    opacity: "1",
    overflow: "hidden",
    "&:hover": {
      overflow: "visible",
    },
  },
  infoCard: {
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
  },
  title: {
    fontSize: "500",
  },
  container: {
    padding: "0 5%",
    width: "100%",
    margin: 0,
  },
});
