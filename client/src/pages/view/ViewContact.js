import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import ContactField from "../../components/common/Field";
import EngagementCard from "../..//components/common/EngagementCard";
import Button from "../../components/default/Button";

const ViewContact = (_) => {
  const { t } = useTranslation("common");
  const { state } = useLocation();
  let history = useHistory();

  useEffect(() => {
    console.log("state: ", state.contact);
  });

  return (
    <div className="bg-white text-black text-base font-body mt-8 px-12 xl:mx-16">
      <h1 className="text-rmp-md-blue text-left tracking-wide font-bold text-xl pt-4 pb-6">
        {t("contact.contact")}
      </h1>

      <div className="md:flex flex-wrap mb-4">
        <div className="md:w-auto">
          <ContactField label={t("contact.type")} text={state.contact.type} />
        </div>
      </div>

      <div className="md:flex flex-wrap mb-4">
        <div className="md:w-5/12">
          <ContactField
            label={t("contact.keyContactName")}
            text={state.contact.name}
          />
        </div>
        <div className="md:w-5/12">
          <ContactField
            label={t("contact.keyContactTitle")}
            text={state.contact.title}
          />
        </div>
      </div>

      <div className="md:flex flex-wrap mb-4">
        <div className="md:w-5/12">
          <ContactField
            label={t("contact.address")}
            text={state.contact.address}
          />
        </div>
        <div className="md:w-5/12">
          <ContactField
            label={t("contact.address2")}
            text={state.contact.suite}
          />
        </div>
      </div>

      <div className="md:flex flex-wrap mb-4">
        <div className="md:w-5/12">
          <ContactField label={t("contact.city")} text={state.contact.city} />
        </div>
        <div className="md:w-5/12">
          <ContactField
            label={t("contact.prov")}
            text={state.contact.province}
          />
        </div>
      </div>

      <div className="md:flex flex-wrap mb-4">
        <div className="md:w-5/12">
          <ContactField
            label={t("contact.country")}
            text={state.contact.country}
          />
        </div>
        <div className="md:w-5/12">
          <ContactField
            label={t("contact.postal")}
            text={state.contact.postalCode}
          />
        </div>
      </div>

      <div className="md:flex flex-wrap mb-4">
        <div className="md:w-5/12">
          <ContactField
            label={t("contact.keyContactEmail")}
            text={state.contact.email}
          />
        </div>
        <div className="md:w-5/12">
          <ContactField label={t("contact.phone")} text={state.contact.phone} />
        </div>
      </div>

      <h2 className="text-rmp-md-blue text-left tracking-wide font-bold text-xl pt-4 mb-8">
        {t("contact.organization")}
      </h2>

      <div className="md:flex flex-wrap mb-4">
        <div className="md:w-5/12">
          <ContactField
            label={t("contact.orgName")}
            text={state.contact.orgName}
          />
        </div>
        <div className="md:w-5/12">
          <ContactField
            label={t("contact.orgWebsite")}
            text={state.contact.website}
          />
        </div>
      </div>

      <div className="md:flex flex-wrap mb-4">
        <div className="md:w-5/12">
          <ContactField
            label={t("contact.orgAddress")}
            text={state.contact.orgAddress}
          />
        </div>
        <div className="md:w-5/12">
          <ContactField
            label={t("contact.address2")}
            text={state.contact.orgSuite}
          />
        </div>
      </div>

      <div className="md:flex flex-wrap mb-4">
        <div className="md:w-5/12">
          <ContactField
            label={t("contact.city")}
            text={state.contact.orgCity}
          />
        </div>
        <div className="md:w-5/12">
          <ContactField
            label={t("contact.prov")}
            text={state.contact.orgProvince}
          />
        </div>
      </div>

      <div className="md:flex flex-wrap mb-4">
        <div className="md:w-5/12">
          <ContactField
            label={t("contact.country")}
            text={state.contact.orgCountry}
          />
        </div>
        <div className="md:w-5/12">
          <ContactField
            label={t("contact.postal")}
            text={state.contact.orgPostalCode}
          />
        </div>
      </div>

      <h3 className="text-rmp-md-blue text-left tracking-wide font-bold text-xl pt-4">
        {t("contact.engagements")}
      </h3>

      {state.contact && (
        <div className="border border-gray-300 w-full p-8 px-4 my-8 py-6">
          {state.contact.engagements &&
            state.contact.engagements.map((result, index) => (
              <EngagementCard
                key={index}
                index={index}
                title={result.subject}
                type={result.type}
                date={result.date}
                tags={result.tags}
                contactName={result.contacts[0].name}
                textParticipant={t("engagement.participants")}
                participants={result.numParticipants}
                button={
                  // <NavLink
                  //   to={{
                  //     pathname: `/viewEngagement/${result._id}`,
                  //     state: { contact: result },
                  //   }}
                  // >
                  <Button
                    classes="rounded-full h-12 w-12 flex items-center justify-center bg-rmp-orange text-white focus:outline-none"
                    icon={<BsChevronRight />}
                  />
                  // </NavLink>
                }
              />
            ))}
        </div>
      )}

      <div className="md:flex my-6">
        <Button
          text={t("contact.back")}
          classes="bg-gray-300 shadow text-black mt-6 py-2 px-4 rounded w-36 focus:outline-none hover:bg-gray-400 hover:text-white mr-2"
          clicked={() => history.push("/search/engagement")}
        />
        <Button
          text={t("contact.edit")}
          classes="bg-rmp-md-blue  shadow text-white mt-6 py-2 px-4 rounded w-36 focus:outline-none hover:bg-rmp-dk-blue"
        />
      </div>
    </div>
  );
};

export default ViewContact;
