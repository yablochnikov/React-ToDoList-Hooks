import React, { useState, useEffect } from "react";

import { InputPlus } from "../components/InputPlus";
import { InputTask } from "../components/InputTask";

import styles from "./index.module.scss";

export const generateId = () =>
  Math.random().toString(16).slice(2) + new Date().getTime().toString(36);

export const App = () => {
  const [tasks, setTask] = useState(
    JSON.parse(localStorage.getItem("tasks"))
      ? JSON.parse(localStorage.getItem("tasks"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const onAdd = inputValue => {
    if (!inputValue) return;
    setTask([
      {
        id: generateId(),
        title: inputValue,
        checked: false
      },

      ...tasks
    ]);
  };

  const onDelete = id => {
    setTask(tasks => tasks.filter(task => task.id !== id));
  };

  return (
    <article className={styles.article}>
      <h1 className={styles.articleTitle}>To Do App</h1>
      <h6>Sensei inc.</h6>
      <section className={styles.articleSection}>
        <InputPlus tasks={tasks} onAdd={onAdd} />
      </section>
      <section className={styles.articleSection}>
        {tasks.length <= 0 && (
          <p className={styles.articleText}>There is no one task.</p>
        )}
        {tasks.map(task => (
          <InputTask
            key={task.id}
            title={task.title}
            id={task.id}
            onDelete={onDelete}
            onEdit={(id, value) => {
              setTask(
                tasks.map(task =>
                  task.id === id
                    ? {
                        ...task,
                        title: value
                      }
                    : task
                )
              );
            }}
            onDone={(id, check) => {
              setTask(
                tasks.map(task =>
                  task.id === id
                    ? {
                        ...task,
                        checked: check
                      }
                    : task
                )
              );
            }}
          />
        ))}
      </section>
    </article>
  );
};
