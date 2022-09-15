import { styled } from "@mui/material/styles";
import { Box, Stack, Container, Typography } from "@mui/material";
import { Logo, Page } from "../../components";
import LoginForm from "../../sections/login/LoginForm";
import { useNavigate } from "react-router-dom";
import { Button, Grid, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  welcomeBanner: {
    height: 260,
    padding: 10,
    borderRadius: 16,
    background: " #C8FACD",
    width: "calc(100% /3 - 40px)",
  },
  welcomeText: {
    padding: "38px 40px",
    lineHeight: 3,
  },
  welcomeImg: {
    float: "right",
    // marginRight: ,
  },
  statisticsBlock: {
    borderRadius: 18,
    boxShadow:
      " 0px 0px 2px rgba(145, 158, 171, 0.2), 0px 12px 24px -4px rgba(145, 158, 171, 0.12);",
    padding: 24,
    maxWidth: "calc(100% /3 - 40px)",
  },
  statisticsBlockNumber: {
    marginTop: 40,
  },
  statisticsBlockImage: {
    marginTop: 40,
  },
  container: {
    margin: "0px 40px ",
  },
}));

export function Home() {
  const classes = useStyles();
  return (
    <Page title="Главная" className={classes.container}>
      <Grid container justifyContent="space-between">
        <Grid item xs={8} className={classes.welcomeBanner}>
          <Grid container justifyContent="space-between">
            <Grid item xs={6}>
              <Grid
                container
                direction="column"
                className={classes.welcomeText}
              >
                <Grid item>
                  <Typography variant="h5">
                    Welcome back Fabiana Capmany !
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="caption">
                    Welcome back Fabiana Capmany !
                  </Typography>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary">
                    Go now
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <img
                src="../../../../img/welcomeBox.svg"
                className={classes.welcomeImg}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid container justifyContent="space-between">
            <Grid item xs={6}>
              <Grid
                container
                direction="column"
                className={classes.welcomeText}
              >
                <Grid item>
                  <Typography variant="h5">
                    Welcome back Fabiana Capmany !
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="caption">
                    Welcome back Fabiana Capmany !
                  </Typography>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary">
                    Go now
                  </Button>
                </Grid>
                ``
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <img
                src="../../../../img/welcomeBox.svg"
                className={classes.welcomeImg}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent="space-between">
        <Grid item xs={4} className={classes.statisticsBlock}>
          <Grid container justifyContent="space-between">
            <Grid item xs={12}>
              <Typography fontWeight={600} color="black">
                Активные аукционы
              </Typography>
            </Grid>

            <Grid item xs={6} className={classes.statisticsBlockNumber}>
              <Typography variant="h4" fontWeight={600} color="black">
                19
              </Typography>
            </Grid>

            <Grid item xs={6}>
              <img
                src="../../../../img/chartActiveAuctions.svg"
                className={classes.welcomeImg}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4} className={classes.statisticsBlock}>
          <Grid container justifyContent="space-between">
            <Grid item xs={12}>
              <Typography fontWeight={600} color="black">
                Стартующие аукционы
              </Typography>
            </Grid>

            <Grid item xs={6} className={classes.statisticsBlockNumber}>
              <Typography variant="h4" fontWeight={600} color="black">
                4
              </Typography>
            </Grid>

            <Grid item xs={6}>
              <img
                src="../../../../img/aucStartChart.svg"
                className={classes.welcomeImg}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4} className={classes.statisticsBlock}>
          <Grid container justifyContent="space-between">
            <Grid item xs={12}>
              <Typography fontWeight={600} color="black">
                Завершенные аукционы
              </Typography>
            </Grid>

            <Grid item xs={6} className={classes.statisticsBlockNumber}>
              <Typography variant="h4" fontWeight={600} color="black">
                678
              </Typography>
            </Grid>

            <Grid item xs={6}>
              <img
                src="../../../../img/aucEndedChart.svg"
                className={classes.welcomeImg}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Page>
  );
}
