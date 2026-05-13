import { useDroppable } from '@dnd-kit/core';
import { Task, ColumnId } from '../types';
import { TaskCard } from './TaskCard';

interface ColumnProps {
  column: { id: ColumnId; title: string };
  tasks: Task[];
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
}

export function Column({ column, tasks, onEdit, onDelete }: ColumnProps) {
  const { setNodeRef, isOver } = useDroppable({ id: column.id });

  return (
    <div className={`column column-${column.id}`}>
      <div className="column-header">
        <h2 className="column-title">{column.title}</h2>
        <span className="column-count">{tasks.length}</span>
      </div>
      <div
        ref={setNodeRef}
        className={`column-body${isOver ? ' column-body-over' : ''}`}
      >
        {tasks.length === 0 ? (
          <div className="column-empty">Drop tasks here</div>
        ) : (
          tasks.map((task) => (
            <TaskCard key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
          ))
        )}
      </div>
    </div>
  );
}
