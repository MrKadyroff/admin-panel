import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  Grid,
  Box,
  Theme,
} from "@material-ui/core";
import { Outlet, useNavigate } from "react-router-dom";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AppBar from "@material-ui/core/AppBar/AppBar";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import { Badge } from "@mui/material";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    minHeight: "100%",
    overflow: "hidden",
    color: "#637381",
  },
  outlet: {
    flexGrow: 1,
    overflow: "auto",
    minHeight: "100%",
    paddingTop: 80,
    margin: 20,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    marginTop: 300,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#FFFFFF",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    height: "92px",
    marginLeft: drawerWidth,
    backgroundColor: "#FFFFFF",
    color: "#637381",
  },

  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  imgLogo: {
    width: "109px",
    height: "50px",
    margin: "24px 20px",
  },
  icon: {
    margin: "38px 50px",
    color: "#212B36",
  },
  iconAccount: {
    // margin: "38px 24px",
    marginLeft: 50,
    color: "#212B36",
  },
}));

export function Drawer() {
  const navigate = useNavigate();
  const classes = useStyles();

  const itemsList = [
    {
      text: "Главная",
      icon: <AccountBalanceIcon />,
      onClick: () => navigate("/admin/app"),
    },
    {
      text: "Профиль",
      icon: <AccountBalanceIcon />,
      onClick: () => navigate("/admin/profile"),
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar elevation={0} position="fixed" className={classes.appBar}>
        <Grid container justifyContent="space-between">
          <Grid item>
            <SearchIcon className={classes.icon} />
          </Grid>
          <Grid item justifyContent="space-between">
            <Grid container justifyContent="flex-end">
              <Grid item>
                <LanguageIcon className={classes.icon} />
              </Grid>
              <Grid item>
                <NotificationsIcon className={classes.icon} />
              </Grid>
              <Grid item className={classes.icon}>
                2 400 000 т
              </Grid>
              <Grid item>
                <SearchIcon className={classes.icon} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </AppBar>
      <MUIDrawer
        variant="persistent"
        anchor="left"
        open
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
      >
        <img
          alt="Logo umitstore"
          className={classes.imgLogo}
          src="/icons/logo-umitstore.svg"
        />
        ,
        <List>
          {itemsList.map((item, index) => {
            const { text, icon, onClick } = item;
            return (
              <ListItem button key={text} onClick={onClick}>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
      </MUIDrawer>
      <div className={classes.outlet}>
        <Outlet />
      </div>
    </div>
  );
}
