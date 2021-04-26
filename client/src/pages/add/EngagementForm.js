import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import Button from "../../components/default/Button";
import star from "../../assets/images/orange-star.png";
import Tag from "../../components/common/Tag";
import ContactCard from "../../components/common/ContactCard";
import Input from "../../components/default/Input";

/**
 * This component allows user to create engagement with selected contacts
 */
const EngagementForm = () => {
  /**
   * Initialize form input.
   */
  const initialFormData = Object.freeze({
    subject: "",
    type: "",
    date: "",
    numParticipants: 0,
    description: "",
    policy: "",
    comments: "",
    tags: [],
    contacts: [],
  });

  const [engagements, setEngagements] = useState(initialFormData);
  const { t } = useTranslation("common");
  const [tagInput, setInput] = useState("");
  const [contacts, setContacts] = useState([]);
  const [contactCards, setContactCards] = useState([]);
  const [submitted, setSubmit] = useState(false);
  const [changed, setChange] = useState(false);
  let history = useHistory();

  /**
   * Fetch all contacts
   */
  useEffect(() => {
    setEngagements((result) => ({
      ...result,
      contacts: result.contacts.concat(contactCards),
    }));
    axios
      .get("http://localhost:5000/contacts")
      .then((res) => {
        setContacts(res.data);
      })
      .catch((err) => {
        console.log("Error message: ", err);
      });
  }, [changed, contactCards]);

  /**
   * Change listener of input fields
   * update: use register from react-hook-form instead of controlled input
   */
  const changeHandler = (event) => {
    let value = event.target.value;
    setEngagements({
      ...engagements,
      [event.target.name]: value,
    });
  };

  /**
   * Click listener when user click add button to add tags
   */
  const addTagButtonHandler = (event) => {
    event.preventDefault();
    console.log("input: ", tagInput);
    if (tagInput) {
      setEngagements((result) => ({
        ...result,
        tags: result.tags.concat(tagInput),
      }));
      setInput("");
      console.log("Engagements: ", engagements);
    }
  };

  /**
   * Change handler for contact dropdown.
   * Contact card will be displayed when select specific contact
   */
  const handleContact = (event) => {
    let contactId = event.target[event.target.selectedIndex].id;
    setContactCards((result) => [
      ...result,
      ...contacts.filter((result) => result._id === contactId),
    ]);
    console.log("contact Id: ", contactId);
    console.log("contact card: ", contactCards);
    setChange(true);
  };

  /**
   * Remove a specific contact
   */
  const deleteButtonHandler = (event) => {
    event.preventDefault();
    console.log("id: ", event.target.id);
    setEngagements((result) => ({
      ...result,
      contacts: result.contacts.filter((contact) => {
        return contact !== event.target.id;
      }),
    }));
    console.log("engagement: ", engagements.contacts);
    setContactCards(
      contactCards.filter((result) => result._id !== event.target.id)
    );
  };

  /**
   * Remove a specific tag
   */
  const deleteTagHandler = (event) => {
    event.preventDefault();
    setEngagements((result) => ({
      tags: result.tags.filter((id) => id !== event.target.id),
    }));
    console.log("new tags: ", engagements.tags);
  };

  /**
   * Click listener when user submit the form.
   * The post method send the form data to the back-end
   * Form data will be inserted into the database collection
   */
  const onSubmit = (event) => {
    event.preventDefault();
    setEngagements((result) => ({
      ...result,
      contacts: result.contacts.concat(contactCards),
    }));
    axios
      .post("http://localhost:5000/add/engagement", engagements)
      .then((res) => {
        console.log("result: ", res);
      })
      .catch((err) => {
        console.log("Error message: ", err);
      });
    setEngagements(initialFormData);
    setContactCards([]);
    setSubmit(true);
    setTimeout(() => {
      setSubmit(false);
    }, 2000);
  };

  return (
    <form onSubmit={onSubmit}>
      <h1 className="text-3xl font-bold text-rmp-md-blue py-4">
        {t("engSelect.engagement")}
      </h1>

      <h2 className="text-2xl font-bold text-rmp-md-blue my-2">
        {t("engSelect.contact")}
      </h2>

      <div className="mb-6">
        <Input icon={star} labelText={t("engagement.contactName")}>
          <select
            className="h-12 w-96 border-2 border-gray-300 text-sm text-gray-700 focus:outline-none p-2 px-4"
            onChange={handleContact}
          >
            {contacts.map((result, index) => (
              <option id={result._id} key={index}>
                {result.name}
              </option>
            ))}
          </select>
        </Input>
      </div>

      {contactCards.length > 0 && (
        <div className="border border-gray-300 w-full p-8">
          {contactCards.map((result, index) => (
            <ContactCard
              key={index}
              index={index}
              id={result._id}
              name={result.name}
              title={result.title}
              phone={result.phone}
              email={result.email}
              lastEngagement={
                result.engagements.length
                  ? result.engagements[result.engagements.length - 1].subject
                  : t("Contact does not have any engagement")
              }
              date={
                result.engagements.length
                  ? result.engagements[result.engagements.length - 1].date +
                    ", "
                  : ""
              }
              numParticipants={
                result.engagements.length
                  ? result.engagements[result.engagements.length - 1]
                      .numParticipants
                  : ""
              }
              participants={
                result.engagements.length ? t("contact.otherpeople") : ""
              }
              button={
                <Button
                  id={result._id}
                  classes="rounded-full h-12 w-12 flex items-center justify-center bg-rmp-orange text-white focus:outline-none"
                  icon={<FaRegTrashAlt />}
                  clicked={deleteButtonHandler}
                />
              }
            />
          ))}
        </div>
      )}

      <h3 className="text-2xl font-bold text-rmp-md-blue mt-6 mb-2">
        {t("engagement.engagment")}
      </h3>

      <div className="md:flex">
        <div className="mb-6">
          <Input icon={star} labelText={t("engagement.subject")}>
            <input
              name="subject"
              className="md:mr-2 w-96 h-12 border-2 border-gray-300 text-sm text-gray-700 focus:outline-none p-2 px-4"
              value={engagements.subject}
              onChange={changeHandler}
            />
          </Input>
          {/* {errors.subject && (
            <span className="text-sm text-red-500">
              {t("contactValidation.required")}
            </span>
          )} */}
        </div>
        <Input icon={star} labelText={t("engagement.type")}>
          <select
            name="type"
            className="h-12 w-96 border-2 border-gray-300 text-sm text-gray-700 focus:outline-none p-2 px-4"
            onChange={changeHandler}
            value={engagements.type}
          >
            <option>{t("engagementTypes.one")}</option>
            <option>{t("engagementTypes.Conference")}</option>
            <option>{t("engagementTypes.ConferenceCall")}</option>
            <option>{t("engagementTypes.Workshop")}</option>
            <option>{t("engagementTypes.Webinar")}</option>
            <option>{t("engagementTypes.PhoneCall")}</option>
            <option>{t("engagementTypes.CommitteeMeeting")}</option>
            <option>{t("engagementTypes.WorkingGroup")}</option>
            <option>{t("engagementTypes.SeniorManagementBriefing")}</option>
            <option>{t("engagementTypes.MinisterOfficeBriefing")}</option>
            <option>{t("engagementTypes.ScrumSprint")}</option>
            <option>{t("engagementTypes.Advisory")}</option>
          </select>
        </Input>
        {/* {errors.type && (
          <span className="text-sm text-red-500">
            {t("contactValidation.required")}
          </span>
        )} */}
      </div>

      <div className="md:flex">
        <div className="mr-2 w-96">
          <Input icon={star} labelText={t("engagement.date")}>
            <input
              name="date"
              className="md:mr-2 w-48 h-12 border-2 border-gray-300 text-sm text-gray-700 focus:outline-none p-2 px-4"
              value={engagements.date}
              onChange={changeHandler}
              type="date"
            />
          </Input>
          {/* {errors.date && (
            <span className="text-sm text-red-500">
              {t("contactValidation.required")}
            </span>
          )} */}
        </div>
        <div>
          <Input icon={star} labelText={t("engagement.participants")}>
            <input
              name="numParticipants"
              className="md:mr-2 w-20 h-12 border-2 border-gray-300 text-sm text-gray-700 focus:outline-none p-2 px-4"
              onChange={changeHandler}
              type="number"
              min="1"
              value={engagements.numParticipants}
            />
          </Input>
        </div>
      </div>

      <div className="py-6">
        <Input icon={star} labelText={t("engagement.description")}>
          <textarea
            name="description"
            className="md:mr-2 md:w-text-area h-36 border-2 border-gray-300 text-sm text-gray-700 focus:outline-none p-2 px-4"
            value={engagements.description}
            onChange={changeHandler}
            type="text"
          />
        </Input>
        {/* {errors.description && (
          <span className="text-sm text-red-500">
            {t("engagementValidation.required")}
          </span>
        )} */}
      </div>

      <div className="md:flex">
        <div className="mb-6">
          <Input labelText={t("engagement.policy")}>
            <input
              name="policy"
              className="md:mr-2 w-96 h-12 border-2 border-gray-300 text-sm text-gray-700 focus:outline-none p-2 px-4"
              value={engagements.policy}
              onChange={changeHandler}
            />
          </Input>
        </div>
        <div className="flex relative mb-6">
          <Input
            labelText={t("engagement.tags")}
            tagText={t("engagement.tagLabel")}
          >
            <input
              name="tagInput"
              className="md:mr-2 w-40 h-12 border-2 border-gray-300 text-sm text-gray-700 focus:outline-none p-2 px-4"
              value={tagInput}
              onChange={(e) => setInput(e.target.value)}
            />
          </Input>
          <Button
            classes="h-12 w-12 mt-8 text-lg font-bold bg-rmp-orange text-white p-2 rounded-r-md ml-36 focus:outline-none hover:bg-rmp-dk-orange absolute"
            text="+"
            clicked={addTagButtonHandler}
          />
        </div>
      </div>
      <div className="md:flex -mt-2">
        {engagements.tags.map((value, index) => (
          <span className="flex" key={index}>
            <Tag
              text={value}
              key={index}
              removeButton={
                <Button
                  id={value}
                  classes="text-rmp-dk-blue bg-white rounded-full items-center justify-center pl-2 pr-2 ml-2 focus:outline-none"
                  text="x"
                  clicked={deleteTagHandler}
                />
              }
            />
          </span>
        ))}
      </div>
      <div>
        <Input labelText={t("engagement.comments")}>
          <textarea
            name="comments"
            className="md:mr-2 md:w-text-area h-36 border-2 border-gray-300 text-sm text-gray-700 focus:outline-none p-2 px-4"
            value={engagements.comments}
            onChange={changeHandler}
            type="text"
          />
        </Input>
      </div>
      <div className="md:flex mt-6">
        <Button
          text={t("engagement.cancel")}
          classes="bg-gray-300 shadow text-black font-bold mt-6 py-2 px-6 rounded w-60 hover:bg-gray-400 hover:text-white mr-2 focus:outline-none"
          clicked={() => history.push("/search/engagement")}
        />
        <Button
          text={t("engagement.save")}
          classes="bg-rmp-orange shadow text-white font-bold mt-6 py-2 px-6 rounded w-60 hover:bg-rmp-dk-orange focus:outline-none"
          type="submit"
        />
      </div>
      {submitted && (
        <p className="text-rmp-dk-orange mt-6">{t("engagement.saved")}</p>
      )}
    </form>
  );
};

export default EngagementForm;
