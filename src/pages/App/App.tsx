import { ThemeProvider } from "@mui/material";
import { AuthProvider } from "@services";
import { Home, ThemePresentation, Login, Dashboard, QuestionnaireQuestionsLongILS, QuestionnaireQuestionsShortILS } from "@pages";
import { Theme } from "@utils";
import { Routes } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () =>
  <ThemeProvider theme={Theme}>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/theme" element={<ThemePresentation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/questionnaire_ils_long" element={<QuestionnaireQuestionsLongILS />} />
          <Route path="/questionnaire_ils_short" element={<QuestionnaireQuestionsShortILS />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Router>
    </AuthProvider>
  </ThemeProvider>;
export default App;
