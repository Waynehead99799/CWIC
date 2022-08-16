import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Auth from "layouts/Auth.js";

// views without layouts

// import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import YourListing from "views/YourListings";
import AddNewLising from "views/AddNewListing";
import Messages from "views/Messages";
import EditProfile from "views/EditProfile";
import IndexNavbar from "components/Navbars/IndexNavbar";
import Footer from "components/Footers/Footer";
import ChangePassword from "views/ChangePassword";
import ListingDetail from "views/ListingDetail";

ReactDOM.render(
  <>
    <BrowserRouter>
      <Switch>
        <React.StrictMode>
          <IndexNavbar fixed />
          {/* add routes with layouts */}
          <Route path="/auth" component={Auth} />
          {/* add routes without layouts */}
          <Route path="/AddNewListing" exact component={AddNewLising} />
          <Route path="/Messages" exact component={Messages} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/profile/EditProfile" exact component={EditProfile} />
          <Route
            path="/YourListing/ListingDetail"
            exact
            component={ListingDetail}
          />
          <Route
            path="/profile/EditProfile/ChangePassword"
            exact
            component={ChangePassword}
          />
          <Route path="/YourListing" exact component={YourListing} />
          <Route path="/" exact component={YourListing} />
          {/* add redirect for first page */}
          <Redirect from="*" to="/YourListing" />
          <Footer />
        </React.StrictMode>
      </Switch>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
