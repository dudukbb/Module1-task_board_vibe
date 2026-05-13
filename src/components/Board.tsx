import { Task } from '../types';
import { Column } from './Column';
import { COLUMNS } from '../types';

interface BoardProps {
  tasks: Task[];
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
}

export function Board({ tasks, onEdit, onDelete }: BoardProps) {
  return (
    <div className="board">
      {COLUMNS.map((col) => (
        <Column
          key={col.id}
          column={col}
          tasks={tasks.filter((t) => t.columnId === col.id)}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
