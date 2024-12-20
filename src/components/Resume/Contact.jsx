import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub ,faLinkedin,faGoogle} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="w-[70%] mx-auto mt-8 flex mb-16 flex-col font-semibold font-fedroka z-1">
      <div className="flex justify-start gap-[298px] mb-4">
        <div className="relative">
          <FontAwesomeIcon
            icon={faGoogle}
            style={{ fontSize: "24px" }}
            className="absolute top-[0px] left-[-35px]"
          />
          <p>vardhamyadunandan@gmail.com</p>
        </div>
        <div className="relative">
          <FontAwesomeIcon
            icon={faPhone}
            style={{ fontSize: "24px" }}
            className="absolute top-[0px] left-[-35px]"
          />
          <p>8688799831</p>
        </div>
      </div>
      <div className="flex justify-start gap-44">
        <div className="relative">
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ fontSize: "24px" }}
            className="absolute top-[0px] left-[-35px]"
          />
          <p>linkedin.com/in/yadunandan-vardham-55aba9218/</p>
        </div>
        <div className="relative">
          <FontAwesomeIcon
            icon={faGithub}
            style={{ fontSize: "24px" }}
            className="absolute top-[0px] left-[-35px]"
          />
          <p>github.com/yadunandan-Vardham22</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
