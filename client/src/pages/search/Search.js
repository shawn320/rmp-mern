import React from "react";
import { useTranslation } from "react-i18next";
import SwitchResult from "../../components/common/Switch";
import ResultContacts from "./ResultContacts";
import ResultEngagement from "./ResultEngagements";
import { Route, useRouteMatch, Redirect } from "react-router-dom";

const Search = () => {
  const { t } = useTranslation("common");
  const { path } = useRouteMatch();

  return (
    <div className="p-12">
      <h1 className="text-4xl font-bold text-rmp-md-blue">{t("app.search")}</h1>
      <SwitchResult
        engagement={`${path}/engagement`}
        contact={`${path}/contact`}
        textEngagement="Engagement"
        textContact="Contact"
      />
      <Redirect from={path} to={`${path}/engagement`} />
      <Route path={`${path}/engagement`}>
        <ResultEngagement view="/viewEngagement" />
      </Route>
      <Route path={`${path}/contact`}>
        <ResultContacts view="/viewContact" />
      </Route>
    </div>
  );
};

export default Search;
