import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);

const SocialButton = ({ icon1, icon2, icon3 }) => {
  return (
    <>
      <section className="icons fa-xl">
        <FontAwesomeIcon className=" p-2" icon={["fab", icon1]} />
        <FontAwesomeIcon className=" p-2" icon={["fab", icon2]} />
        <FontAwesomeIcon className="p-2" icon={["fab", icon3]} />
      </section>
    </>
  );
};

export default SocialButton;
