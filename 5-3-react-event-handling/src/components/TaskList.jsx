import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onDelete }) {
  return (
    <ul className="list">
      {tasks.length === 0 ? (
        <li className="empty">No tasks yet. Add one above.</li>
      ) : (
        tasks.map((t) => (
          <TaskItem key={t.id} id={t.id} text={t.text} onDelete={onDelete} />
        ))
      )}
    </ul>
  );
}
