import { Header } from './components/Header';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';
import { useState, useEffect } from 'react';

type Tarefa = {
  id: string;
  texto: string;
  concluida: boolean;
};

export function App() {
  const nomeUsuario = 'Rafael';

  const [tarefas, setTarefas] = useState<Tarefa[]>(() => {
    const tarefasSalvas = localStorage.getItem('@taskmanager:tarefas');
    if (tarefasSalvas) {
      return JSON.parse(tarefasSalvas);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('@taskmanager:tarefas', JSON.stringify(tarefas));
  }, [tarefas]);

  const quantidadeTarefasPendentes = tarefas.filter(t => !t.concluida).length;

  function handleAddTarefa(tarefa: string) {
    const newTarefas = [
      ...tarefas,
      {
        id: crypto.randomUUID(),
        texto: tarefa,
        concluida: false,
      },
    ];
    setTarefas(newTarefas);
  }

  function handleToggleTask(id: string) {
    setTarefas(
      tarefas.map(t => (t.id === id ? { ...t, concluida: !t.concluida } : t)),
    );
  }

  function handleDeleteTask(id: string) {
    setTarefas(tarefas.filter(t => t.id !== id));
  }

  return (
    <>
      <Container>
        <Header
          quantidadeTarefas={quantidadeTarefasPendentes}
          nomeUsuario={nomeUsuario}
        />
        <TaskForm adicionartarefa={handleAddTarefa} />
        <TaskList
          tarefas={tarefas}
          onToggleTask={handleToggleTask}
          onDeleteTask={handleDeleteTask}
        />
      </Container>
    </>
  );
}
