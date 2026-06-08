import { TaskItem } from '../TaskItem';
import styles from './styles.module.css';

type Tarefa = {
  id: string;
  texto: string;
  concluida: boolean;
};

type TaskListProps = {
  tarefas: Tarefa[];
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
};

export function TaskList({
  tarefas,
  onToggleTask,
  onDeleteTask,
}: TaskListProps) {
  if (tarefas.length === 0) {
    return <p className={styles.emptyMessage}>Nenhuma tarefa encontrada. 🎉</p>;
  }

  return (
    <ul className='task-list'>
      {tarefas.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
}
