import React, { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import star from "../../assets/images/orange-star.png";
import Button from "../../components/default/Button";
import Input from "../../components/default/Input";

const EditContact = () => {
  const { t } = useTranslation("common");
  const initialFormData = Object.freeze({
    type: "",
    name: "",
    title: "",
    address: "",
    suite: "",
    city: "",
    province: "",
    country: "",
    postalCode: "",
    email: "",
    phone: "",
    orgName: "",
    orgAddress: "",
    orgSuite: "",
    orgCity: "",
    orgProvince: "",
    orgCountry: "",
    orgPostalCode: "",
    website: "",
  });

  // const [contacts, setContacts] = useState(initialFormData);
  const [submitted, setSubmit] = useState(false);
  let history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const changeHandler = (event) => {
  //   const value = event.target.value;
  //   setContacts({
  //     ...contacts,
  //     [event.target.name]: value,
  //   });
  // };

  const onSubmit = (data) => {
    axios
      .post("/add/contact", data)
      .then((res) => {
        console.log("result: ", res.data);
      })
      .catch((error) => {
        console.log("Error message:", error);
      });
    setSubmit(true);
    // setContacts(initialFormData);
    setTimeout(() => {
      setSubmit(false);
    }, 2000);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-3xl font-bold text-rmp-md-blue py-4">
        {t("contact.create")}
      </h1>

      <Input icon={star} labelText={t("contact.type")}>
        <select
          defaultValue={t("contact.Federal")}
          className={`h-12 w-96 border-2 ${
            errors.type ? "border-red-400" : "border-gray-300"
          } text-sm text-gray-700 focus:outline-none p-2 px-4`}
          ref={register}
          // onChange={changeHandler}
          {...register("type", { required: true })}
        >
          {/* <option>{t("contact.textType")}</option> */}
          <option>{t("contact.Federal")}</option>
          <option>{t("contact.External")}</option>
          <option>{t("contact.Provincial")}</option>
          <option>{t("contact.International")}</option>
        </select>
      </Input>
      {errors.type && (
        <span className="text-sm text-red-500">
          {t("contactValidation.required")}
        </span>
      )}

      <h2 className="text-2xl font-bold text-rmp-md-blue pt-6 pb-4">
        {t("contact.contact")}
      </h2>

      <div className="md:flex">
        <div className="mb-6">
          <Input icon={star} labelText={t("contact.keyContactName")}>
            <input
              className={`md:mr-2 w-96 h-12 border-2 ${
                errors.name ? "border-red-400" : "border-gray-300"
              } text-sm text-gray-700 focus:outline-none p-2 px-4`}
              ref={register}
              // defaultValue={contacts.name}
              // onChange={changeHandler}
              {...register("name", { required: true })}
            />
          </Input>
          {errors.name && (
            <span className="text-sm text-red-500">
              {t("contactValidation.required")}
            </span>
          )}
        </div>
        <div className="mb-6">
          <Input icon={star} labelText={t("contact.keyContactTitle")}>
            <input
              className={`md:mr-2 w-96 h-12 border-2 ${
                errors.name ? "border-red-400" : "border-gray-300"
              } text-sm text-gray-700 focus:outline-none p-2 px-4"`}
              ref={register}
              // defaultValue={contacts.title}
              // onChange={changeHandler}
              {...register("title", { required: true })}
            />
          </Input>
          {errors.title && (
            <span className="text-sm text-red-500">
              {t("contactValidation.required")}
            </span>
          )}
        </div>
      </div>

      <div className="md:flex">
        <div className="mb-6">
          <Input icon={star} labelText={t("contact.address")}>
            <input
              className={`md:mr-2 w-96 h-12 border-2 ${
                errors.name ? "border-red-400" : "border-gray-300"
              } text-sm text-gray-700 focus:outline-none p-2 px-4`}
              ref={register}
              // defaultValue={contacts.address}
              // onChange={changeHandler}
              {...register("address", { required: true })}
            />
          </Input>
          {errors.address && (
            <span className="text-sm text-red-500">
              {t("contactValidation.required")}
            </span>
          )}
        </div>
        <div className="mb-6">
          <Input labelText={t("contact.address2")}>
            <input
              className="md:mr-2 w-96 h-12 border-2 border-gray-300 text-sm text-gray-700 focus:outline-none p-2 px-4"
              ref={register}
              // defaultValue={contacts.suite}
              // onChange={changeHandler}
              {...register("suite")}
            />
          </Input>
        </div>
      </div>

      <div className="md:flex">
        <div className="mb-6">
          <Input icon={star} labelText={t("contact.city")}>
            <input
              className={`md:mr-2 w-96 h-12 border-2 ${
                errors.name ? "border-red-400" : "border-gray-300"
              } text-sm text-gray-700 focus:outline-none p-2 px-4`}
              ref={register}
              // defaultValue={contacts.city}
              // onChange={changeHandler}
              {...register("city", { required: true })}
            />
          </Input>
          {errors.city && (
            <span className="text-sm text-red-500">
              {t("contactValidation.required")}
            </span>
          )}
        </div>
        <div className="mb-6">
          <Input icon={star} labelText={t("contact.prov")}>
            <input
              className={`md:mr-2 w-96 h-12 border-2 ${
                errors.name ? "border-red-400" : "border-gray-300"
              } text-sm text-gray-700 focus:outline-none p-2 px-4`}
              ref={register}
              // defaultValue={contacts.prov}
              // onChange={changeHandler}
              {...register("province", { required: true })}
            />
          </Input>
          {errors.province && (
            <span className="text-sm text-red-500">
              {t("contactValidation.required")}
            </span>
          )}
        </div>
      </div>

      <div className="md:flex">
        <div className="mb-6">
          <Input icon={star} labelText={t("contact.country")}>
            <input
              className={`md:mr-2 w-96 h-12 border-2 ${
                errors.name ? "border-red-400" : "border-gray-300"
              } text-sm text-gray-700 focus:outline-none p-2 px-4`}
              ref={register}
              // defaultValue={contacts.country}
              // onChange={changeHandler}
              {...register("country", { required: true })}
            />
          </Input>
          {errors.country && (
            <span className="text-sm text-red-500">
              {t("contactValidation.required")}
            </span>
          )}
        </div>
        <div className="mb-6">
          <Input icon={star} labelText={t("contact.postal")}>
            <input
              className={`md:mr-2 w-36 h-12 border-2 ${
                errors.name ? "border-red-400" : "border-gray-300"
              } text-sm text-gray-700 focus:outline-none p-2 px-4`}
              ref={register}
              // defaultValue={contacts.postal}
              // onChange={changeHandler}
              {...register("postalCode", { required: true })}
            />
          </Input>
          {errors.postalCode && (
            <span className="text-sm text-red-500">
              {t("contactValidation.required")}
            </span>
          )}
        </div>
      </div>

      <div className="md:flex">
        <div className="mb-6">
          <Input icon={star} labelText={t("contact.keyContactEmail")}>
            <input
              className={`md:mr-2 w-96 h-12 border-2 ${
                errors.name ? "border-red-400" : "border-gray-300"
              } text-sm text-gray-700 focus:outline-none p-2 px-4`}
              ref={register}
              // defaultValue={contacts.email}
              // onChange={changeHandler}
              {...register("email", { required: true })}
            />
          </Input>
          {errors.email && (
            <span className="text-sm text-red-500">
              {t("contactValidation.required")}
            </span>
          )}
        </div>
        <div className="mb-6">
          <Input icon={star} labelText={t("contact.phone")}>
            <input
              className={`md:mr-2 w-96 h-12 border-2 ${
                errors.name ? "border-red-400" : "border-gray-300"
              } text-sm text-gray-700 focus:outline-none p-2 px-4`}
              ref={register}
              // defaultValue={contacts.phone}
              // onChange={changeHandler}
              {...register("phone", { required: true })}
            />
          </Input>
          {errors.phone && (
            <span className="text-sm text-red-500">
              {t("contactValidation.required")}
            </span>
          )}
        </div>
      </div>

      <h3 className="text-2xl font-bold text-rmp-md-blue pt-6 pb-4">
        {t("contact.organization")}
      </h3>

      <div className="md:flex">
        <div className="mb-6">
          <Input icon={star} labelText={t("contact.orgName")}>
            <input
              className={`md:mr-2 w-96 h-12 border-2 ${
                errors.name ? "border-red-400" : "border-gray-300"
              } text-sm text-gray-700 focus:outline-none p-2 px-4`}
              ref={register}
              // defaultValue={contacts.orgName}
              // onChange={changeHandler}
              {...register("orgName", { required: true })}
            />
          </Input>
          {errors.orgName && (
            <span className="text-sm text-red-500">
              {t("contactValidation.required")}
            </span>
          )}
        </div>
        <div className="mb-6">
          <Input labelText={t("contact.orgAddress")}>
            <input
              className="md:mr-2 w-96 h-12 border-2 border-gray-300 text-sm text-gray-700 focus:outline-none p-2 px-4"
              // defaultValue={contacts.orgAddress}
              // onChange={changeHandler}
              ref={register}
              {...register("orgAddress")}
            />
          </Input>
        </div>
      </div>

      <div className="md:flex">
        <div className="mb-6">
          <Input labelText={t("contact.address2")}>
            <input
              className="md:mr-2 w-96 h-12 border-2 border-gray-300 text-sm text-gray-700 focus:outline-none p-2 px-4"
              // defaultValue={contacts.suite}
              // onChange={changeHandler}
              ref={register}
              {...register("orgSuite")}
            />
          </Input>
        </div>
        <div className="mb-6">
          <Input labelText={t("contact.prov")}>
            <input
              className="md:mr-2 w-96 h-12 border-2 border-gray-300 text-sm text-gray-700 focus:outline-none p-2 px-4"
              // defaultValue={contacts.orgProvince}
              // onChange={changeHandler}
              ref={register}
              {...register("orgProvince")}
            />
          </Input>
        </div>
      </div>

      <div className="md:flex">
        <div className="mb-6">
          <Input labelText={t("contact.country")}>
            <input
              className="md:mr-2 w-96 h-12 border-2 border-gray-300 text-sm text-gray-700 focus:outline-none p-2 px-4"
              // defaultValue={contacts.orgCountry}
              // onChange={changeHandler}
              ref={register}
              {...register("orgCountry")}
            />
          </Input>
        </div>
        <div className="mb-6">
          <Input labelText={t("contact.city")}>
            <input
              className="md:mr-2 w-96 h-12 border-2 border-gray-300 text-sm text-gray-700 focus:outline-none p-2 px-4"
              // defaultValue={contacts.orgCity}
              // onChange={changeHandler}
              ref={register}
              {...register("orgCity")}
            />
          </Input>
        </div>
      </div>

      <div className="md:flex">
        <div className="mb-6">
          <Input labelText={t("contact.postal")}>
            <input
              className="md:mr-2 w-36 h-12 border-2 border-gray-300 text-sm text-gray-700 focus:outline-none p-2 px-4"
              // defaultValue={contacts.orgPostalCode}
              // onChange={changeHandler}
              ref={register}
              {...register("orgPostalCode")}
            />
          </Input>
        </div>
      </div>

      <div className="mb-6">
        <Input labelText={t("contact.orgWebsite")}>
          <input
            className="md:mr-2 w-96 h-12 border-2 border-gray-300 text-sm text-gray-700 focus:outline-none p-2 px-4"
            // defaultValue={contacts.website}
            // onChange={changeHandler}
            ref={register}
            {...register("website")}
          />
        </Input>
      </div>
      <div className="md:flex mt-6">
        <Button
          text={t("engagement.cancel")}
          classes="bg-gray-300 shadow text-black font-bold mt-6 py-2 px-6 rounded w-60 focus:outline-none hover:bg-gray-400 hover:text-white mr-2"
          clicked={() => history.push("/search/engagement")}
        />
        <Button
          text={t("engagement.save")}
          classes="bg-rmp-orange shadow text-white font-bold mt-6 py-2 px-6 rounded w-60 focus:outline-none hover:bg-rmp-dk-orange"
          type="submit"
        />
      </div>
      {submitted && (
        <p className="text-rmp-dk-orange mt-6">{t("engagement.saved")}</p>
      )}
    </form>
  );
};

export default EditContact;
