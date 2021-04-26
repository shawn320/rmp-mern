import React from "react";

const ContactCard = (props) => {
  const {
    name,
    id,
    title,
    phone,
    email,
    lastEngagement,
    date,
    numParticipants,
    participants,
    index,
    button,
  } = props;

  return (
    <div
      className={`grid grid-cols-12 leading-10 bdr bottom py-4 px-2 text-gray-700 text-sm ${
        index === 0 ? "border-t" : ""
      } border-b border-gray-400`}
      id={id}
    >
      <div className="col-span-12 sm:col-span-10 md:col-span-6">
        <div>
          <span className="text-rmp-orange font-bold pr-0">{name}</span>,{" "}
          {title}
        </div>
        <div>
          <span>{phone}</span>, {email}
        </div>
      </div>
      <div className="col-span-12 sm:col-span-10 md:col-span-5 lg:border-l border-gray-400 md:pl-6">
        <div>
          <span className="text-rmp-orange font-bold">{lastEngagement}</span>
        </div>
        <div>
          {date} {numParticipants} {participants}
        </div>
      </div>
      <div className="col-start-6 col-span-12 sm:col-span-2 md:col-span-1 flex items-center">
        {button}
      </div>
    </div>
  );
};

export default ContactCard;
