// function AppName() {
//   return <h1>Todo App</h1>
// }

// export default AppName;

// VERSION -- 2
import styles from "./AppName.module.css";

function AppName() {
  return <h1 className={styles.todoHeading}>TODO App</h1>;
}

export default AppName;