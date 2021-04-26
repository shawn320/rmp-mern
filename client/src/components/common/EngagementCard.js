import React from "react";
import Tag from "../common/Tag";

const EngagementCard = (props) => {
  const {
    title,
    type,
    date,
    tags,
    contactName,
    textParticipant,
    participants,
    index,
    button,
  } = props;

  return (
    <div
      className={`grid grid-cols-12 leading-10 bdr bottom py-4 px-2 text-gray-700 text-sm ${
        index === 0 ? "border-t" : ""
      } border-b border-gray-400`}
    >
      <div className="col-span-12 sm:col-span-10 md:col-span-6">
        <div>
          <span className="text-rmp-orange font-bold pr-0">{title},</span>{" "}
          {type}, {date}
        </div>
        <div>
          <div className="md:flex -mt-2">
            {tags.map((value, index) => (
              <span className="flex h-12" key={index}>
                <Tag text={value} key={index} />
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="col-span-12 sm:col-span-10 md:col-span-5 lg:border-l border-gray-400 md:pl-6">
        <div>
          <span className="text-rmp-orange font-bold">{contactName}</span>
        </div>
        <div>
          {textParticipant} {participants}
        </div>
      </div>
      <div className="col-start-6 col-span-12 sm:col-span-2 md:col-span-1 flex items-center">
        {button}
      </div>
    </div>
  );
};

export default EngagementCard;
