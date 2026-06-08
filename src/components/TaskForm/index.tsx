import { useState } from 'react';
import styles from './styles.module.css';
import { StickyNotePlusIcon } from 'lucide-react';

type TaskFormProps = {
  adicionartarefa: (tarefa: string) => void;
};

export function TaskForm({ adicionartarefa }: TaskFormProps) {
  const [tarefaTexto, setTarefaTexto] = useState('');

  function handleEnviar(event: React.FormEvent) {
    event.preventDefault();
    if (!tarefaTexto.trim()) return;

    adicionartarefa(tarefaTexto);
    setTarefaTexto('');
  }

  return (
    <form className={styles.form} onSubmit={handleEnviar}>
      <input
        className={styles.input}
        type='text'
        placeholder='Adicione uma nova tarefa'
        value={tarefaTexto}
        onChange={e => setTarefaTexto(e.target.value)}
      />
      <button className={styles.button} type='submit' title='Adicionar tarefa'>
        <StickyNotePlusIcon />
      </button>
    </form>
  );
}
