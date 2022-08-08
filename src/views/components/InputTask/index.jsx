import React, { useState } from "react";

import styles from "./index.module.scss";

export const InputTask = ({ title, id, onDelete, onEdit, onDone }) => {
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState(title);
  const [isEditMode, setEditMode] = useState(false);

  return (
    <div className={styles.inputTask}>
      <label className={styles.inputTaskLabel}>
        <input
          type='checkbox'
          className={styles.inputTaskCheckbox}
          onClick={() => {
            setChecked(!checked);

            onDone(id, !checked);
          }}
        />
        {!isEditMode ? (
          <h3
            className={styles.inputTaskTitle}
            style={{ textDecoration: checked ? "line-through" : null }}
          >
            {title}
          </h3>
        ) : (
          <input
            value={value}
            onChange={e => {
              setValue(e.target.value);
            }}
            contentEditable={true}
            className={styles.inputTaskTitleEdit}
          />
        )}
      </label>
      {isEditMode ? (
        <button
          aria-label='Save'
          className={styles.inputTaskSave}
          onClick={() => {
            setEditMode(!isEditMode);
            onEdit(id, value);
          }}
        />
      ) : (
        <button
          onClick={() => setEditMode(!isEditMode)}
          aria-label='Edit'
          className={styles.inputTaskEdit}
        />
      )}
      <button
        onClick={() => {
          if (confirm("Are you sure?")) {
            onDelete(id);
          }
        }}
        aria-label='Remove'
        className={styles.inputTaskRemove}
      />
    </div>
  );
};

/* For Edit mode
<input
    className={styles.inputTaskTitleEdit}
/>

<button
    aria-label="Save"
    className={styles.inputTaskSave}
/>
*/
