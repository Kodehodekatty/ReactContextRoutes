import { ImageContextConsumer } from "../imageContext";
import styles from "../MyStyles.module.css";

function Image(props) {
  return (
    <ImageContextConsumer>
      {(context) => (
        <div className={styles[context.theme + "-theme"]}>
          {context.theme === "dark" ? "face" : "dark"}
        </div>
      )}
    </ImageContextConsumer>
  );
}

export default Image;
