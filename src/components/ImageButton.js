import React from "react";
import { ImageContextConsumer } from "../imageContext";
import styles from "../MyStyles.module.css";

function ImageButton(props) {
  const face = "<face>";
  return (
    <ImageContextConsumer>
      {(context) => (
        <div className="btnWrap">
          {" "}
          <button
            onClick={context.toggleTheme}
            className={styles[context.theme + "-contextBtn"]}
          >
            {face}
          </button>
        </div>
      )}
    </ImageContextConsumer>
  );
}

export default ImageButton;
