import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles({
  list: {
    width: 250,
    paddingLeft: "30px",
  },
  fullList: {
    width: "auto",
  },
  drawer: {
    backgroundColor: "#000c2d",
    color: "#20dd85",
  },
});

export default function CustomDrawer({ state, setState }) {
  const classes = useStyles();

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={() => setState(false)}
    >
      <List>
        {["companies", "Team", "Resources", "Programs", "Blog", "Contact"].map(
          (text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <Drawer
          anchor="right"
          classes={{ paper: classes.drawer }}
          open={state}
          onClose={() => setState(false)}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
