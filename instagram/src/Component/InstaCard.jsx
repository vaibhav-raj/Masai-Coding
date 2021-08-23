import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChatIcon from "@material-ui/icons/Chat";
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import  useComment  from "../CustomHooks/useComment"

const useStyles = makeStyles((theme) => ({
  root: {
    margin: " 20px auto",
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function InstaCard({
  url,
  id,
  liked,
  handleLike,
  comments,
  handleComment,
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [date, setDate] = useState(Date);
    const [comment, bind, resetComment] = useComment("")

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setInterval(() => {
      setDate(Date);
    }, 1000);
  });

  //body start
  const body = (
    <div style={{ width: 350, margin: " 150px auto" }} className={classes.paper}>
      <Paper className={classes.modalStyle}>
        <Box>
          <TextField
            style={{ width: "90%", margin: "20px" }}
            label="Type your comment here"
            variant="outlined"
            value={comment}
            {...bind}
          />
          <div style={{ width: "100%" }}>
            <Button
              style={{ margin: "20px" }}
              variant="contained"
              color="primary"
              onClick={() => {
                comment.length > 0 && handleComment(id, comment);
                resetComment()
              }}
            >
              Add Comment
            </Button>
            <Button variant="contained" color="secondary" onClick={handleClose}>
              close
            </Button>
          </div>
        </Box>
      </Paper>
    </div>
  );
  //body end

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            VR
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Vaibhav_Raj"
        subheader={date}
      />
      <CardMedia className={classes.media} image={url} title="Paella dish" />
      <CardActions disableSpacing>
        <IconButton onClick={() => handleLike(id, liked)}>
          <FavoriteIcon
            data-testid="like-icon"
            style={liked ? { color: "red" } : undefined}
          />
        </IconButton>
        <IconButton onClick={handleOpen}>
          <ChatIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>All comments</Typography>
          {comments.map((cmt) => (
            <Box key={cmt.id}>
              <Typography>{cmt.text}</Typography>
            </Box>
          ))}
        </CardContent>
      </Collapse>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </Card>
  );
}
