import logo from "./logo.svg";
import "./App.css";
import HomeScreen from "./component/HomeSCreen";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppProvider } from "./component/Auth";
import AuthHome from "./component/AuthHome";
import AuthLogin from "./component/AuthLogin";
import PrivateRoute from "./component/PrivateRoute";

function App() {
  return (
    <div>
      <br />
      <br />
      <br />
      <AppProvider>
        <Router>
          <Switch>
            <PrivateRoute exact path="/" component={AuthHome} />
            <Route exact path="/login" component={AuthLogin} />
          </Switch>
        </Router>
      </AppProvider>
    </div>
  );
}

export default App;
