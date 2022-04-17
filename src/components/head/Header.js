import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Collapse,
  IconButton,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import SortIcon from "@mui/icons-material/Sort";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/home.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },

  appbar: {
    background: "none",
  },

  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },

  appbarTitle: {
    flexGrow: "1",
  },

  icon: {
    color: "#5AFF3D",
  },

  colorText: {
    color: "#5AFF3D",
  },

  container: {
    textAlign: "center",
  },

  title: {
    color: "#fff",
    fontSize: "4.5rem",
  },

  goDown: {
    color: "#5AFF3D",
    fontSize: "2rem",
  },
}));

export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={1}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            Manage<span className={classes.colorText}>You. </span>
          </h1>
          <IconButton>
            <SortIcon className={classes.icon} style={{ fontSize: 40 }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedSize={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome To <br />
            <span className={classes.colorText}>ManageYou.</span>
          </h1>
          <Link to="/home">
            <IconButton>
              <KeyboardArrowDownIcon
                className={classes.goDown}
                style={{ fontSize: "5rem" }}
              />
            </IconButton>
          </Link>
        </div>
      </Collapse>
    </div>
  );
}
