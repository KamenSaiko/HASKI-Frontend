import { ThemeProvider } from "@mui/material";
import { AuthProvider } from "@services";
import { Home, ThemePresentation, Login, Dashboard } from "@pages";
import { Theme } from "@utils";
import { Routes } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { logBuffer } from "@shared";
import { SnackbarProvider } from "@components";

logBuffer();

const App = () => (
  <ThemeProvider theme={Theme}>
    <SnackbarProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/theme" element={<ThemePresentation />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<div>404</div>} />
          </Routes>
        </Router>
      </AuthProvider>
    </SnackbarProvider>
  </ThemeProvider>
);
export default App;
