import HeaderPage from "./components/header";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import FooterPage from "./components/footer";
import { Route, Switch } from "react-router";
import HomePage from "./features/home/pages";
import CartPage from "./features/cart/pages";

function App() {
  return (
    <div className="App">
      <HeaderPage />
      <main>
        <section className="container">
          <ul className="b-crumbs">
            <li>
              <a href="index.html">Home</a>
              <FontAwesomeIcon icon={faAngleRight} className="ml-2 mr-2" />
            </li>
            <li>
              <a href="catalog-list.html">Catalog</a>
              <FontAwesomeIcon icon={faAngleRight} />
            </li>
            <li className="active">
              <span>Women</span>
            </li>
          </ul>
          <h1 className="main-ttl">
            <span>Women</span>
          </h1>
          <div className="section-cont">
            <div className="prod-items section-items">
             
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/cart" component={CartPage} />
              </Switch>
              
            </div>
          </div>
        </section>
      </main>
      <FooterPage />
    </div>
  );
}

export default App;
