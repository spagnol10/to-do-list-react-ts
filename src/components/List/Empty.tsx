import styles from "./Empty.module.css";

import clipboard from "../../assets/clipboard.png";

export function Empty() {
  return (
    <div className={styles.container}>
      <img src={clipboard} alt="" />
      <p>
        <strong>
          You don’t have any tasks registered yet. Create tasks and organize
          your to-do items.
        </strong>
      </p>
    </div>
  );
}
