import styles from "./Info.module.css";

interface Props {
  taskCounter: number;
  checkedTasksCounter: number;
}

export function Info({ taskCounter, checkedTasksCounter }: Props) {
  return (
    <header className={styles.container}>
      <aside>
        <p>Tasks created</p>
        <span>{taskCounter}</span>
      </aside>

      <aside>
        <p>Done</p>
        <span>
          {taskCounter === 0
          ? taskCounter
          : `${checkedTasksCounter} de ${taskCounter}`
        }
        </span>
      </aside>
    </header>
  );
}
