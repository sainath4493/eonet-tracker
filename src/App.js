import Header from "./components/Header";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/about" strict component={AboutPage} />
          <Route path="/" strict component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
