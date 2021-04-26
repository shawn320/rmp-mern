import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import ContactCard from "../../components/common/ContactCard";
import Button from "../../components/default/Button";

const ResultContacts = (props) => {
  const { t } = useTranslation("common");
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("/contacts")
      .then((res) => {
        setContacts(res.data);
      })
      .catch((err) => {
        console.log("Error message: ", err);
      });
  }, []);

  useEffect(() => {
    setFilteredContacts(
      contacts.filter((result) =>
        Object.values(result).some(
          (value) =>
            typeof value === "string" && value.includes(search.toLowerCase())
        )
      )
    );
  }, [search, contacts]);

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
      {contacts && (
        <div className="border border-gray-300 w-full p-8">
          {filteredContacts &&
            filteredContacts.map((result, index) => (
              <ContactCard
                id={result._id}
                key={index}
                index={index}
                name={result.name}
                title={result.orgName}
                phone={result.phone}
                email={result.email}
                lastEngagement={
                  result.engagements.length > 0
                    ? result.engagements[result.engagements.length - 1].subject
                    : t("Contact does not have any engagement")
                }
                date={
                  result.engagements.length > 0
                    ? result.engagements[result.engagements.length - 1].date +
                      ", "
                    : ""
                }
                numParticipants={
                  result.engagements.length > 0
                    ? result.engagements[result.engagements.length - 1]
                        .numParticipants
                    : ""
                }
                participants={
                  result.engagements.length > 0 && t("contact.otherpeople")
                }
                button={
                  <NavLink
                    to={{
                      pathname: `${props.view}/${result._id}`,
                      state: { contact: result },
                    }}
                  >
                    <Button
                      id={result._id}
                      classes="rounded-full h-12 w-12 flex items-center justify-center bg-rmp-orange text-white focus:outline-none"
                      icon={<BsChevronRight />}
                    />
                  </NavLink>
                }
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default ResultContacts;
