import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { Task } from '../types';

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
}

export function TaskCard({ task, onEdit, onDelete }: TaskCardProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: task.id,
  });

  const style: React.CSSProperties = {
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`task-card${isDragging ? ' task-card-dragging' : ''}`}
      {...attributes}
    >
      <div className="task-card-drag" {...listeners} title="Drag to move">
        <span className="drag-icon">⠿</span>
      </div>
      <div className="task-card-body">
        <span className="task-card-title">{task.title}</span>
        {task.description && (
          <span className="task-card-desc">{task.description}</span>
        )}
      </div>
      <div className="task-card-actions">
        <button
          className="btn-icon"
          onClick={() => onEdit(task)}
          title="Edit task"
        >
          ✏️
        </button>
        <button
          className="btn-icon btn-icon-danger"
          onClick={() => onDelete(task.id)}
          title="Delete task"
        >
          🗑️
        </button>
      </div>
    </div>
  );
}
