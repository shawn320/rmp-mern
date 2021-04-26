import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import EngagementCard from "../../components/common/EngagementCard";
import { useTranslation } from "react-i18next";
import Button from "../../components/default/Button";

const ResultEngagement = (props) => {
  const { t } = useTranslation("common");
  const [engagements, setEngagements] = useState([]);
  const [filteredEngagements, setFilteredEngagements] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/engagements")
      .then((res) => {
        setEngagements(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Error message: ", err);
      });
  }, []);

  useEffect(() => {
    setFilteredEngagements(
      engagements.filter((result) =>
        Object.values(result).some(
          (value) =>
            typeof value === "string" && value.includes(search.toLowerCase())
        )
      )
    );
  }, [search, engagements]);

  return (
    <div>
      <input
        className="h-12 w-60 border-2 border-gray-300 text-sm text-gray-700 focus:outline-none p-2 mb-6 px-4"
        type="text"
        placeholder={t("app.placeholderSearch")}
        onChange={(e) => setSearch(e.target.value)}
      />
      <h2 className="text-2xl font-bold text-rmp-md-blue pt-6 pb-4">
        {t("app.results")}
      </h2>
      <div className="border border-gray-300 w-full p-8">
        {filteredEngagements &&
          filteredEngagements.map((result, index) => {
            return (
              <EngagementCard
                key={index}
                index={index}
                title={result.subject}
                type={result.type}
                date={result.date}
                tags={result.tags}
                contactName={result.contacts.length && result.contacts[0].name}
                textParticipant={t("engagement.participants")}
                participants={result.numParticipants}
                button={
                  <NavLink
                    to={{
                      pathname: `${props.view}/${result._id}`,
                      state: { engagement: result },
                    }}
                  >
                    <Button
                      classes="rounded-full h-12 w-12 flex items-center justify-center bg-rmp-orange text-white focus:outline-none"
                      icon={<BsChevronRight />}
                    />
                  </NavLink>
                }
              />
            );
          })}
      </div>
    </div>
  );
};

export default ResultEngagement;
