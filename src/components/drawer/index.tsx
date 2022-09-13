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
import AppBar from "@material-ui/core/AppBar";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const drawerWidth = 280;

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
  iconSearch: {
    margin: "38px 50px",
    color: "#212B36",
  },
  iconAccount: {
    margin: "38px 24px",
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
        <Grid
          container
          direction="row"
          alignItems="baseline"
          justifyContent="flex-end"
        >
          <Grid item xs={2}>
            <SearchIcon className={classes.iconSearch} />
          </Grid>
          <Grid item xs={10} justifyContent="flex-end">
            <AccountCircleIcon className={classes.iconAccount} />
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
