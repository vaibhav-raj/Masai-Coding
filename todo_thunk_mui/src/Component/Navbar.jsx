import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { useStyles } from "../styles/style";

const Routes = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.navbar} >
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu" >        
            <Link to="/" className={classes.link}>
              < MenuIcon/>
            </Link>
          </IconButton>
          <Button color="primary">
            <Link to="/completed" className={classes.link}>
              Completed
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Routes;
