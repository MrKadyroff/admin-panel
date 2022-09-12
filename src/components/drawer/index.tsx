import { makeStyles } from "@material-ui/core/styles";
import {
    Drawer as MUIDrawer,
    ListItem,
    ListItemIcon,
    ListItemText,
    Grid,
} from "@material-ui/core";
import { Outlet, useNavigate, Link as RouterLink } from "react-router-dom";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AppBar from "@material-ui/core/AppBar";
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Box, Typography, Avatar, Link, List, ListSubheader, ListItemButton } from '@mui/material';
import { styled } from '@mui/material/styles';

const drawerWidth = 280;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        minHeight: '100%',
        overflow: 'hidden'
    },
    outlet: {
        flexGrow: 1,
        overflow: 'auto',
        minHeight: '100%',
        paddingTop: 80,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        marginTop: 300
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "#FFFFFF"
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        height: "92px",
        marginLeft: drawerWidth,
        backgroundColor: "#FFFFFF"
    },

    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3)
    },
    imgLogo: {
        width: "109px",
        height: "50px",
        margin: "24px 20px"
    },
    iconSearch: {
        margin: "38px 50px",
        color: "#212B36"
    },
    iconAccount: {
        margin: "38px 24px",
        color: "#212B36"
    },
    itemList: {

    }
}));

export function Drawer() {
    const navigate = useNavigate();
    const classes = useStyles();

    const itemsList = [
        {
            text: "Главная",
            icon: <AccountBalanceIcon />,
            onClick: () => navigate('/admin/app')
        },
        {
            text: "Профиль",
            icon: <AccountBalanceIcon />,
            onClick: () => navigate('/admin/profile')
        }
    ];

    return <div className={classes.root}>
        <AppBar elevation={0} position="fixed" className={classes.appBar} >
            <Grid container direction="row" alignItems="baseline" justifyContent="flex-end">
                <Grid item xs={2}>
                    <SearchIcon className={classes.iconSearch} />
                </Grid>
                <Grid item xs={10} justifyContent="flex-end">
                    <AccountCircleIcon className={classes.iconAccount} />
                </Grid>
            </Grid>
        </AppBar>
        <MUIDrawer variant="persistent" anchor="left" open className={classes.drawer} classes={{ paper: classes.drawerPaper }}>
            <img alt="Logo umitstore" className={classes.imgLogo} src="/icons/logo-umitstore.svg" />,
            <Box sx={{ mb: 2, mx: 2.5, }}>
                <Link underline="none" component={RouterLink} to="#">
                    <Grid style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: "16px 20px",
                        borderRadius: "12px",
                        background: "rgba(145, 158, 171, 0.08)",
                    }}>
                        <Avatar src="/icons/avatar.jpg" alt="photoURL" />
                        <Box sx={{ ml: 2 }}>
                            <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                                Carlota Monteiro
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Admin
                            </Typography>
                        </Box>
                    </Grid>
                </Link>
            </Box>
            <List disablePadding sx={{ p: 2 }} subheader={<ListSubheader style={{ color: "#212B36", fontWeight: 700, fontSize: "13px", }}>GENERAL</ListSubheader>}>
                {itemsList.map((item, index) => {
                    const { text, icon, onClick } = item;
                    return (
                        <ListItem button key={text} onClick={onClick}>
                            {icon && <ListItemIcon >{icon}</ListItemIcon>}
                            <ListItemText primary={text} />
                        </ListItem>
                    )
                })}
            </List>
        </MUIDrawer>
        <div className={classes.outlet}>
            <Outlet />
        </div>

    </div >;
}
