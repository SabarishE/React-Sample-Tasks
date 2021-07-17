import { useState, useContext } from "react";

import SearchIcon from "@material-ui/icons/Search";
import { Badge } from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import { products } from "../productscollection";

import { navDrawer } from "./context";

// ----- content imports -------
import { Dashboard } from "./dashboard";
import { Chart } from "./chart";
import { Adduser } from "./adduser";
import { Userlist } from "./userlist";
import { Edituser } from "./edituser";
import { Cheatsheet } from "./cheatsheet";

import { Cart } from "./cart";
import { Cards } from "./cards";

import { Switch, Route, Link, Redirect } from "react-router-dom";

export function Rightside() {
  var item = products;
  const [cart, setcart] = useState([]);
  const [dis, setdis] = useState(0);

  var sample = [
    { salary: 1420, age: 45, profession: "Accountant", name: "sample 1" },
    { salary: 4500, age: 35, profession: "Mathematician", name: "sample 2" },
    { salary: 2300, age: 40, profession: "Psychiatrist", name: "sample 3" }
  ];
  const [user, setuser] = useState(sample);

  const s = {
    salary: 0,
    age: 0,
    profession: "Change Profession",
    name: "Change Name"
  };
  const [edit, setedit] = useState({ v: s });

  return (
    <>
      <div id="rigthside">
        <Topnav />

        <div id="cheat-block">
          <Link to="/cheatsheet">
            <button>CHEATSHEET</button>
          </Link>
        </div>

        <div id="user-btn">
          <h2 style={{ width: "100%", margin: "0 0 5px 0" }}>CRUD</h2>
          <Link to="/adduser" style={{ marginRight: "10px" }}>
            <button>ADD user</button>
          </Link>

          <Link to="/userlist" style={{ marginRight: "10px" }}>
            <button>User List</button>
          </Link>
        </div>

        <div id="products">
          <h1 style={{ margin: "0 0 5px 0" }}>E-CART</h1>
          <Link to="/products" style={{ marginRight: "10px" }}>
            <button id="products-btn">PRODUCTS</button>
          </Link>
          <Link to="/cart" style={{ marginRight: "10px" }}>
            <button id="cart-btn">
              <span id="cart-logo">&#128722;</span>
              CART
              <span id="cart-count">{cart.length}</span>
            </button>
          </Link>
        </div>

        <Switch>
          <Route path="/products">
            <Cards item={item} setcart={setcart} setdis={setdis} cart={cart} />
          </Route>
        </Switch>

        <Switch>
          <Route path="/cart">
            <Cart cart={cart} setcart={setcart} setdis={setdis} dis={dis} />
          </Route>
        </Switch>

        <Switch>
          <Route path="/adduser">
            <Adduser user={user} setuser={setuser} />
          </Route>
        </Switch>

        <Switch>
          <Route path="/userlist">
            <Userlist
              userlist={user}
              setuserlist={setuser}
              edit={edit}
              setedit={setedit}
            />
          </Route>
        </Switch>

        <Switch>
          <Route path={`/edituser`}>
            <Edituser user={user} edit={edit} setuser={setuser} />
          </Route>
        </Switch>

        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>

        <Switch>
          <Route path="/test">
            <Chart />
          </Route>
        </Switch>

        <Switch>
          <Route path="/cheatsheet">
            <Cheatsheet />
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/">
            <Redirect to="/dashboard" />
          </Route>
        </Switch>
      </div>
    </>
  );
}

function Topnav() {
  const { showside } = useContext(navDrawer);

  return (
    <>
      <div id="u-topnav">
        <img
          src="https://cdn4.iconfinder.com/data/icons/navigation-40/24/hamburger-menu-512.png"
          alt="burger"
          className="icon-image mv ap"
          onClick={showside}
        ></img>
        <img
          src="https://cdn1.iconfinder.com/data/icons/science-technology-outline-24-px/24/Magnifier_magnifying_glass_search_search_web_searching_glass-512.png"
          alt="search-icon"
          className="search-img mv si"
        ></img>

        <div className="searchblock mv-disappear">
          <input type="text" placeholder="Search for ..."></input>
          <SearchIcon id="searchicon" />
        </div>
        <div id="topnav-right">
          <div id="nav-icons">
            <Badge badgeContent={3} color="secondary">
              <MailIcon />
            </Badge>
            <Badge badgeContent={9} color="secondary">
              <NotificationsIcon />
            </Badge>
          </div>

          <div id="log">
            <p className="mv-disappear user-disappear">Username</p>
            <AccountCircleIcon />
          </div>
        </div>
      </div>
    </>
  );
}
