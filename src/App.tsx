import { useState, useEffect, useCallback } from 'react';
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  closestCenter,
} from '@dnd-kit/core';
import { Board } from './components/Board';
import { TaskModal } from './components/TaskModal';
import { Task, ColumnId, VALID_COLUMN_IDS } from './types';

const STORAGE_KEY = 'kanban-tasks';

function loadTasks(): Task[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? (JSON.parse(stored) as Task[]) : [];
  } catch {
    return [];
  }
}

function saveTasks(tasks: Task[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

export default function App() {
  const [tasks, setTasks] = useState<Task[]>(loadTasks);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [activeTask, setActiveTask] = useState<Task | null>(null);

  // Persist to localStorage whenever tasks change
  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  // Keyboard shortcut: "n" opens new task modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const isInInput =
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT' ||
        target.isContentEditable;
      if (e.key === 'n' && !e.ctrlKey && !e.metaKey && !e.altKey && !isInInput) {
        setEditingTask(null);
        setModalOpen(true);
      }
      if (e.key === 'Escape') {
        setModalOpen(false);
        setEditingTask(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleCreate = useCallback(
    (title: string, description: string, columnId: ColumnId) => {
      const newTask: Task = {
        id: crypto.randomUUID(),
        title: title.trim(),
        description: description.trim(),
        columnId,
        createdAt: Date.now(),
      };
      setTasks((prev) => [...prev, newTask]);
    },
    [],
  );

  const handleUpdate = useCallback(
    (id: string, title: string, description: string) => {
      setTasks((prev) =>
        prev.map((t) =>
          t.id === id ? { ...t, title: title.trim(), description: description.trim() } : t,
        ),
      );
    },
    [],
  );

  const handleDelete = useCallback((id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const handleDragStart = (event: DragStartEvent) => {
    const task = tasks.find((t) => t.id === (event.active.id as string));
    setActiveTask(task ?? null);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveTask(null);
    if (!over) return;
    const targetColumnId = over.id as ColumnId;
    if (VALID_COLUMN_IDS.includes(targetColumnId)) {
      setTasks((prev) =>
        prev.map((t) =>
          t.id === (active.id as string) ? { ...t, columnId: targetColumnId } : t,
        ),
      );
    }
  };

  const openNewTask = () => {
    setEditingTask(null);
    setModalOpen(true);
  };

  const openEditTask = (task: Task) => {
    setEditingTask(task);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditingTask(null);
  };

  const handleModalSave = (title: string, description: string, columnId: ColumnId) => {
    if (editingTask) {
      handleUpdate(editingTask.id, title, description);
    } else {
      handleCreate(title, description, columnId);
    }
    closeModal();
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header-left">
          <h1 className="app-title">Kanban Board</h1>
          <span className="shortcut-hint">
            Press <kbd>N</kbd> for new task
          </span>
        </div>
        <button className="btn-primary" onClick={openNewTask}>
          + New Task
        </button>
      </header>

      <main className="app-main">
        <DndContext
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <Board tasks={tasks} onEdit={openEditTask} onDelete={handleDelete} />
          <DragOverlay>
            {activeTask ? (
              <div className="task-card task-card-overlay">
                <div className="task-card-drag">
                  <span className="drag-icon">⠿</span>
                </div>
                <div className="task-card-body">
                  <span className="task-card-title">{activeTask.title}</span>
                  {activeTask.description && (
                    <span className="task-card-desc">{activeTask.description}</span>
                  )}
                </div>
              </div>
            ) : null}
          </DragOverlay>
        </DndContext>
      </main>

      {modalOpen && (
        <TaskModal task={editingTask} onSave={handleModalSave} onClose={closeModal} />
      )}
    </div>
  );
}
