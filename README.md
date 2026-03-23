# Lista CI/CD

Aplicação simples de lista de tarefas desenvolvida com **React + Vite**, com foco na implementação de **Integração Contínua (CI)** e **Entrega Contínua (CD)** usando GitHub Actions.

---

## Deploy

🔗 Acesse o projeto online:  
https://maikogabriel.github.io/lista-ci-cd/

---

## Sobre o Projeto

Este projeto consiste em uma lista simples onde é possível adicionar itens.

O objetivo principal é demonstrar na prática a criação de uma pipeline automatizada de CI/CD, incluindo validação de código, testes, build e deploy automático.

---

## Tecnologias utilizadas

- React
- Vite
- ESLint
- Vitest
- GitHub Actions

---

## Pipeline CI/CD

A pipeline é executada automaticamente a cada **push ou pull request na branch `main`**.

### Integração Contínua (CI)

- Instalação de dependências (`npm ci`)
- Análise de código com ESLint
- Execução de testes automatizados
- Build da aplicação

### Entrega Contínua (CD)

- Deploy automático no GitHub Pages após build bem-sucedido

---
## Scripts disponíveis

```bash
npm run dev     # ambiente de desenvolvimento
npm run build   # build de produção
npm run lint    # análise de código
npm run test    # testes automatizados

---
git clone https://github.com/maikogabriel/lista-ci-cd.git
cd lista-ci-cd
npm install
npm run dev
