import logo from "./logo.svg";
import "./App.css";
import HomeScreen from "./component/HomeSCreen";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppProvider } from "./component/Auth";
import AuthHome from "./component/AuthHome";
import AuthLogin from "./component/AuthLogin";
import PrivateRoute from "./BestComponent/PrivateRoute";
import HomeDesign from "./BestComponent/HomeDesign";
import Registration from "./BestComponent/Registration";
import { ProviderState } from "./BestComponent/AuthFile";
import HeaderView from "./BestComponent/HeaderView";
import CoursePage from "./BestComponent/CoursePage";
import AboutPage from "./BestComponent/AboutPage";
import StudyPage from "./BestComponent/StudyPage";

function App() {
  return (
    <div>
      <ProviderState>
        <Router>
          <HeaderView /> <br />
          <br />
          <br />
          <Switch>
            <Route exact path="/" component={HomeDesign} />
            <PrivateRoute exact path="/course" component={CoursePage} />
            <Route exact path="/about" component={AboutPage} />
            <PrivateRoute exact path="/study" component={StudyPage} />
            <Route exact path="/login" component={Registration} />
          </Switch>
        </Router>
      </ProviderState>
    </div>
  );
}

export default App;
