import { ClipboardListIcon } from 'lucide-react';
import styles from './styles.module.css';

type HeaderProps = {
  quantidadeTarefas: number;
  nomeUsuario: string;
};

export function Header({ quantidadeTarefas, nomeUsuario }: HeaderProps) {
  return (
    <header className={styles.header}>
      <h1>
        <ClipboardListIcon />
        Task Manager
      </h1>

      <h4>Olá, {nomeUsuario}!</h4>
      <p>Você tem {quantidadeTarefas} tarefas pendentes.</p>
    </header>
  );
}
