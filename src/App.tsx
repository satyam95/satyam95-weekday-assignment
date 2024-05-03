import { Box, Grid, ThemeProvider, createTheme } from "@mui/material";
import "@fontsource-variable/lexend";
import JobCard from "./Components/JobCard";

const theme = createTheme({
  typography: {
    fontFamily: '"Lexend Variable", sans-serif',
  },
  palette: {
    primary: {
      main: "#55efc4",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box className="container-view">
          <Grid container spacing="30px">
            <Grid item xs={4}>
              <JobCard />
            </Grid>
            <Grid item xs={4}>
              <JobCard />
            </Grid>
            <Grid item xs={4}>
              <JobCard />
            </Grid>
            <Grid item xs={4}>
              <JobCard />
            </Grid>
            <Grid item xs={4}>
              <JobCard />
            </Grid>
            <Grid item xs={4}>
              <JobCard />
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
