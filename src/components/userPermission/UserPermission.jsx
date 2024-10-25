import { useState } from "react";
import "./UserPermission.css";

const UserPermission = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    setIsVisible(false);
  };
  return (
    isVisible && (
      <section className="cookies" id="cookies">
        <div className="cookies-card">
          <article>
            <p className="cookies-para">
              This website uses cookies for research purpose. We respect your
              privacy and ensure that any data collected will remain
              confidential and not be shared with third parties. By continuing
              to use this site, you consent to our use of cookies.
            </p>
            <button
              className="cookies-button"
              onClick={() => {
                handleAccept();
              }}
            >
              Got it
            </button>
          </article>
        </div>
      </section>
    )
  );
};

export default UserPermission;
