import { StickyNoteXIcon } from 'lucide-react';
import styles from './styles.module.css';

type Tarefa = {
  id: string;
  texto: string;
  concluida: boolean;
};

type TaskItemProps = {
  task: Tarefa;
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
};

export function TaskItem({ task, onToggleTask, onDeleteTask }: TaskItemProps) {
  return (
    <li
      className={`${styles.taskItem} ${task.concluida ? styles.completed : ''}`}
    >
      <div className={styles.taskContent} onClick={() => onToggleTask(task.id)}>
        <input
          type='checkbox'
          checked={task.concluida}
          onChange={() => onToggleTask(task.id)}
        />
        <span>{task.texto}</span>
      </div>
      <button
        title='Excluir tarefa'
        className={styles.deleteBtn}
        onClick={e => {
          e.stopPropagation();
          onDeleteTask(task.id);
        }}
        aria-label='Excluir tarefa'
      >
        <StickyNoteXIcon />
      </button>
    </li>
  );
}
