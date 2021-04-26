import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Search from "./search/Search";
import Add from "./add/Add";
import ViewContact from "./view/ViewContact";
import ViewEngagement from "./view/ViewEngagement";
import NavigationBar from "../components/common/NavigationBar";
import { useTranslation } from "react-i18next";
import {
  Switch,
  Route,
  Redirect,
  useHistory,
  withRouter,
} from "react-router-dom";

const Main = ({ location }) => {
  const [t, i18n] = useTranslation("common");
  let history = useHistory();

  return (
    <div>
      <Header
        logoAlt={t("header.logoAlt")}
        officialPage={t("header.link")}
        languageButtonText={i18n.language === "en" ? "Français" : "English"}
        languageButtonHandler={() =>
          i18n.language === "en"
            ? i18n.changeLanguage("fr")
            : i18n.changeLanguage("en")
        }
        homeAlt={t("header.homeAlt")}
        titleText={t("app.dts")}
        dashboardText={t("header.dashboard")}
        logoutText={t("header.logout")}
        userAlt={t("header.personIcon")}
        goHome={() => history.push("/search")}
      />
      <Redirect from="/" to="/search" />
      {!location.pathname.startsWith("/viewContact") &&
        !location.pathname.startsWith("/viewEngagement") && (
          <NavigationBar
            textSearch={t("navBtn.SearchConEn")}
            textAdd={t("navBtn.AddConEn")}
          />
        )}
      <Switch>
        <Route path="/search" component={Search} />
        <Route path="/add" component={Add} />
      </Switch>
      <Switch>
        <Route exact path="/viewContact/:id">
          <ViewContact />
        </Route>
        <Route exact path="/viewEngagement/:id">
          <ViewEngagement />
        </Route>
      </Switch>

      <Footer
        textSocial={t("footer.social")}
        textMobile={t("footer.mobile")}
        textAbout={t("footer.mobile")}
        textTerms={t("footer.terms")}
        textPrivacy={t("footer.terms")}
        textDTS={t("footer.dts")}
        textTop={t("footer.top")}
        footerSymbol={t("footer.symbol")}
      />
    </div>
  );
};

export default withRouter(Main);
