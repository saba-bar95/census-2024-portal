import App from "./App.jsx";
import Questionnaires from "./Pages/Questionnaires/Questionnaires.jsx";
import Methodology from "./Pages/Methodology/Methodology.jsx";
import Results from "./Pages/Results/Results.jsx";
import Goals from "./Pages/Goals/Goals.jsx";
import LegalBasis from "./Pages/LegalBasis/LegalBasis.jsx";
import ScrollToTop from "./ScrollToTop";
import Date from "./Pages/Date/Date.jsx";
import { Navigate } from "react-router-dom";
import ErrorPage from "./ErrorPage.jsx";

const language = localStorage.getItem("language") || "ka";

const routes = [
  {
    path: "/",
    element: <Navigate to={`/${language}`} />,
  },
  {
    path: `/:language`,
    element: (
      <>
        <ScrollToTop />
        <App />
      </>
    ),
  },
  {
    path: "/:language/questionnaires",
    element: (
      <>
        <ScrollToTop />
        <Questionnaires />
      </>
    ),
  },
  {
    path: "/:language/methodology",
    element: (
      <>
        <ScrollToTop />
        <Methodology />
      </>
    ),
  },
  {
    path: "/:language/results",
    element: (
      <>
        <ScrollToTop />
        <Results />
      </>
    ),
  },
  {
    path: "/:language/goals",
    element: (
      <>
        <ScrollToTop />
        <Goals />
      </>
    ),
  },
  {
    path: "/:language/legalBasis",
    element: (
      <>
        <ScrollToTop />
        <LegalBasis />
      </>
    ),
  },
  {
    path: "/:language/date",
    element: (
      <>
        <ScrollToTop />
        <Date />
      </>
    ),
  },

  {
    path: "*",
    element: <ErrorPage />,
  },
];

export default routes;
