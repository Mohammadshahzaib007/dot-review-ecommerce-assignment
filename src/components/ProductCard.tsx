import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "30px",
  },
  media: {
    width: "100%", height: "100%", objectFit: "contain"
  },
});

interface Props {
  imgLink: string;
  title: string;
}

export default function ProductCard(props: Props) {
  const classes = useStyles();

  const { imgLink, title } = props;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <div style={{ width: "100%", height: "200px" }}>
          <img
            src={imgLink}
            alt={title}
            className={classes.media}
          />
        </div>

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
            vero, nemo, alias quis eum, veritatis ratione sint magnam expedita
            omnis sed adipisci. Aut labore adipisci laudantium voluptate cum
            minima necessitatibus.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          buy now
        </Button>
        <Button size="small" color="primary">
          add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
