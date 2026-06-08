# 📋 Task Manager

O **Task Manager** é uma aplicação web moderna e minimalista para gerenciamento
de tarefas diárias. Desenvolvida utilizando **React**, **TypeScript** e **CSS
Modules**, a aplicação foca em uma experiência fluida, limpa e com alta
performance, garantindo que o usuário organize sua rotina com facilidade.

---

## 📸 Demonstração

Aqui está o visual final da aplicação (baseado no design limpo e responsivo):

<p align="center">
  <img src="https://github.com/lucasmessias91/Task-Manager/blob/main/public/taskManagerApp.png?raw=true" alt="Task Manager Screenshot" width="100%" max-width="800px">
</p>

---

## 🚀 Funcionalidades Corrigidas e Implementadas

- **Adicionar Tarefas:** Criação dinâmica de novas tarefas impedindo o envio de
  campos vazios ou apenas com espaços.
- **Marcar como Concluída:** Alternância de estado individual com efeito visual
  translúcido e texto riscado (_strikethrough_).
- **Excluir Tarefas:** Remoção segura da tarefa da lista usando filtragem
  imutável de estado.
- **Contador Dinâmico:** Exibição em tempo real no cabeçalho contendo o número
  exato de tarefas que ainda estão pendentes.
- **Persistência Local (LocalStorage):** As tarefas ficam salvas no navegador de
  forma automática. O usuário pode recarregar a página ou fechar o navegador sem
  perder nenhum dado.

---

## 🛠️ Tecnologias e Conceitos Utilizados

O projeto demonstra forte domínio de conceitos modernos de desenvolvimento
frontend, estruturado da seguinte forma:

- **React (Functional Components):** Componentização inteligente e isolada para
  melhor legibilidade e reutilização do código.
- **TypeScript:** Tipagem estática rigorosa (`types` e `interfaces`) aplicada a
  propriedades (Props), estados e eventos de formulário, mitigando bugs em tempo
  de desenvolvimento.
- **Hooks do React:**
  - `useState`: Gerenciamento do estado local do formulário e do estado global
    das tarefas.
  - `useEffect`: Sincronização e persistência automática do array de dados com a
    API do navegador.
  - _Lazy Initialization:_ Carregamento otimizado do estado inicial lendo o
    `localStorage` apenas uma única vez na inicialização do app.
- **CSS Modules:** Estilização encapsulada por componente, garantindo que as
  regras visuais não vazem e eliminando conflitos de escopo no CSS.
- **Acessibilidade e Semântica:** Uso de HTML semântico (`<header>`, `<ul>`,
  `<li>`) e tags de acessibilidade como `aria-label` para leitores de tela em
  elementos essencialmente visuais.
- **Design System com CSS Variables:** Uso centralizado de uma paleta de cores
  voltada para um _Dark Mode_ elegante e confortável, facilitando futuras
  manutenções.

---

## 📂 Estrutura do Projeto

A arquitetura de pastas preza pela organização padrão de mercado:

```text
src/
├── components/
│   ├── Container/       # Componente de alinhamento estrutural
│   ├── Header/          # Cabeçalho com dados de usuário e contador
│   ├── TaskForm/        # Formulário de captação e validação de texto
│   ├── TaskItem/        # Card individual de exibição da tarefa
│   └── TaskList/        # Gerenciador de renderização da lista de cards
├── styles/
│   ├── theme.css        # Centralização de variáveis e cores (Design Tokens)
│   └── global.css       # Estilos globais e resets do app
├── App.tsx              # Componente central e gerenciador do estado imutável
├── App.module.css       # Layout e envelopamento centralizado da aplicação
└── main.tsx             # Ponto de entrada da aplicação
```
