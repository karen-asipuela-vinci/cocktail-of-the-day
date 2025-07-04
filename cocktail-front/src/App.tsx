import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./Components/Navbar";
import CocktailDayPage from "./Pages/CocktailDayPage";
import SpinPage from "./Pages/SpinPage";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#7b1fa2" },
    secondary: { main: "#f48fb1" },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<CocktailDayPage />} />
          <Route path="/spin" element={<SpinPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
