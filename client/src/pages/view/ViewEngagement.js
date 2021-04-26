import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import EngagementField from "../../components/common/Field";
import Button from "../../components/default/Button";
import Tag from "../../components/common/Tag";
import ContactCard from "../../components/common/ContactCard";

const ViewEngagement = (_) => {
  const { t } = useTranslation("common");
  const history = useHistory();
  const { state } = useLocation();

  useEffect(() => {
    console.log("State: ", state.engagement);
  });

  return (
    <div className="bg-white text-black text-base font-body mt-8 px-12 xl:mx-16">
      <h1 className="text-rmp-md-blue text-left tracking-wide font-bold text-xl pt-4 pb-6">
        {t("engagement.engagement")}
      </h1>

      <div className="md:flex flex-wrap mb-4">
        <div className="md:w-auto">
          <EngagementField
            label={t("engagement.subject")}
            text={state.engagement.subject}
          />
        </div>
      </div>

      <div className="md:flex flex-wrap mb-4">
        <div className="md:w-5/12">
          <EngagementField
            label={t("engagement.type")}
            text={state.engagement.type}
          />
        </div>
        <div className="md:w-5/12">
          <EngagementField
            label={t("engagement.date")}
            text={state.engagement.date}
          />
        </div>
      </div>

      <div className="md:flex flex-wrap mb-4">
        <div className="md:w-5/12">
          <EngagementField
            label={t("engagement.numParticipants")}
            text={state.engagement.numParticipants}
          />
        </div>
        <div className="md:w-5/12">
          <EngagementField
            label={t("engagement.policy")}
            text={state.engagement.policy}
          />
        </div>
      </div>

      <EngagementField label={t("engagement.tags")} />
      <div className="flex mb-4">
        {state.engagement.tags.map((value, index) => (
          <span className="md:flex h-12" key={index}>
            <Tag text={value} key={index} />
          </span>
        ))}
      </div>

      <div className="md:flex flex-wrap mb-4">
        <div className="break-words">
          <EngagementField
            label={t("engagement.description")}
            text={state.engagement.description}
          />
        </div>
      </div>

      <div className="md:flex flex-wrap mb-4 ">
        <div className="w-full">
          <EngagementField
            label={t("engagement.comments")}
            text={state.engagement.comments}
          />
        </div>
      </div>

      <h2 className="text-rmp-md-blue text-left tracking-wide font-bold text-xl pt-4 mb-8">
        {t("engagement.contacts")}
      </h2>

      {state.engagement && (
        <div className="border border-gray-300 w-full p-8 px-4 my-8 py-6">
          {state.engagement.contacts &&
            state.engagement.contacts.map((result, index) => (
              <ContactCard
                id={result._id}
                key={index}
                index={index}
                name={result.name}
                title={result.orgName}
                phone={result.phone}
                email={result.email}
                lastEngagement={
                  result.engagements.length
                    ? result.engagements[result.engagements.length - 1].subject
                    : t("Contact does not have any engagement")
                }
                date={
                  result.engagements.length
                    ? result.engagements[result.engagements.length - 1].date
                    : ""
                }
                numParticipants={
                  result.engagements.length
                    ? result.engagements[result.engagements.length - 1]
                        .numParticipants
                    : ""
                }
                participants={
                  result.engagements.length
                    ? `, ${t("contact.otherpeople")}`
                    : ""
                }
                button={
                  // <NavLink
                  //   to={{
                  //     pathname: `/viewContact/${result._id}`,
                  //     state: { contact: result },
                  //   }}
                  // >
                  <Button
                    id={result._id}
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
          classes="bg-rmp-md-blue shadow text-white mt-6 py-2 px-4 rounded w-36 focus:outline-none hover:bg-rmp-dk-blue"
        />
      </div>
    </div>
  );
};

export default ViewEngagement;
