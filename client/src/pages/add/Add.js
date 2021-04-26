import React from "react";
import { useTranslation } from "react-i18next";
import SwitchResult from "../../components/common/Switch";
import star from "../../assets/images/orange-star.png";
import EngagementForm from "./EngagementForm";
import ContactForm from "./ContactForm";
import { Route, useRouteMatch, Redirect } from "react-router-dom";

const Add = () => {
  const { t } = useTranslation("common");
  const { path } = useRouteMatch();

  return (
    <div className="p-12">
      <h1 className="text-4xl font-bold text-rmp-md-blue">{t("app.add")}</h1>
      <div className="flex py-2 h-8">
        <img alt="" src={star} className="h-4" />
        <p className="flex text-rmp-dk-orange text-sm px-1 items-center">
          {t("app.requiredField")}
        </p>
      </div>
      <SwitchResult
        engagement={`${path}/engagement`}
        contact={`${path}/contact`}
        textEngagement="Engagement"
        textContact="Contact"
      />
      <Redirect from={path} to={`${path}/engagement`} />
      <Route path={`${path}/engagement`}>
        <EngagementForm />
      </Route>
      <Route path={`${path}/contact`}>
        <ContactForm />
      </Route>
    </div>
  );
};

export default Add;
