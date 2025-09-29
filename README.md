# 📦 Projeto de Versionamento de Banco com Migrations e Trunk Based Development

Este projeto demonstra o uso de **Node.js**, **Sequelize** e **PostgreSQL** para versionamento de banco de dados, seguindo boas práticas de **Trunk Based Development**, **Pull Requests**, **Code Review**, **Conventional Commits** e **migrations**.

A ideia é simular um cenário real de desenvolvimento colaborativo, onde o banco do cliente evolui ao longo do tempo de forma controlada e versionada.

---

## 🚀 Stack Utilizada

- **Node.js** → ambiente de execução JavaScript.  
- **Sequelize** → ORM para manipulação do banco e geração de migrations.  
- **Sequelize CLI** → comandos de terminal para rodar e reverter migrations.  
- **PostgreSQL** → banco de dados relacional escolhido.  
- **GitHub** → versionamento de código, PRs e revisão.  

---

## ⚙️ Pré-requisitos

Antes de rodar o projeto, tu precisa ter instalado:

- [Node.js](https://nodejs.org/) (>= 18)  
- [PostgreSQL](https://www.postgresql.org/) (>= 14)  
- [Git](https://git-scm.com/)  

---

## 📂 Estrutura do Projeto

```
projeto/
│── src/
│   ├── config/        # Configuração do banco
│   └── models/        # Definições de modelos (ORM)
│── migrations/        # Scripts de evolução do banco
│── seeders/           # Dados iniciais
│── .sequelizerc       # Configurações do Sequelize CLI
│── .env               # Variáveis de ambiente (credenciais DB)
│── package.json
│── README.md
```

---

## 🔧 Configuração

1. Clone o repositório:
   ```bash
   git clone <url-do-repo>
   cd projeto
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure o arquivo `.env`:
   ```env
   DB_USER=postgres
   DB_PASS=postgres
   DB_NAME=projeto_db
   DB_HOST=localhost
   DB_PORT=5432
   ```

4. Crie o banco:
   ```bash
   npx sequelize db:create
   ```

---

## 🛠️ Comandos Principais

### Criar nova migration
```bash
npx sequelize migration:generate --name nome-da-migration
```

### Executar migrations
```bash
npx sequelize db:migrate
```

### Desfazer última migration
```bash
npx sequelize db:migrate:undo
```

### Desfazer todas as migrations
```bash
npx sequelize db:migrate:undo:all
```

---

## 🌱 Fluxo de Trabalho (Trunk Based)

1. Criar uma branch a partir da `main`:  
   ```bash
   git checkout -b feat/nome-da-feature
   ```

2. Fazer alterações e commits seguindo **Conventional Commits**.

3. Abrir um **Pull Request** para a `main`.

4. Passar por **Code Review**.

5. Fazer **merge** somente via PR.  
   👉 Nunca commitar direto na `main`.

---

## 📝 Padrão de Branches

- `feat/*` → nova funcionalidade  
- `fix/*` → correção de bug  
- `docs/*` → mudanças de documentação  
- `chore/*` → tarefas de infraestrutura  
- `refactor/*` → refatoração sem mudança de comportamento  

Exemplo:  
```
feat/criar-tabela-itens
fix/corrigir-migration
```

---

## ✅ Conventional Commits

- `feat:` → nova feature  
- `fix:` → correção  
- `docs:` → documentação  
- `test:` → testes  
- `refactor:` → refatoração  
- `chore:` → manutenção/interno  

Exemplo:  
```
feat: criar migration para tabela Itens
fix: corrigir nome da coluna descricao
```

---

## 📊 Sequência das Atividades (Trabalho)

1. **Migration** para criar tabela `Itens` com `id` e `descricao`.  
   - Criar branch → PR → merge na `main`.

2. **Migration** para inserir 3 registros.  
   - Criar branch → PR → **não mergear ainda**.

3. **Migration** para inserir mais 10 registros (em 2 migrations de 5 cada).  
   - Criar branch → PR → merge na `main`.

4. **Merge do PR** da etapa 2 (inserção dos 3 registros).  

---

## 🔍 Como Contribuir

1. Crie uma branch nova:
   ```bash
   git checkout -b feat/minha-feature
   ```

2. Faça commits padronizados:
   ```bash
   git commit -m "feat: adicionar migration para tabela clientes"
   ```

3. Abra um Pull Request no GitHub.  

4. Aguarde revisão e merge.  

---

## 👨‍💻 Testando o Projeto

1. Rode todas as migrations:
   ```bash
   npx sequelize db:migrate
   ```

2. Abra o banco (psql ou pgAdmin) e execute:
   ```sql
   SELECT * FROM "Itens";
   ```

3. Confirme que os registros das migrations foram inseridos.  

---

## 📎 Links Úteis

- [Sequelize ORM](https://sequelize.org/)  
- [Sequelize CLI](https://sequelize.org/docs/v6/other-topics/migrations/)  
- [Conventional Commits](https://www.conventionalcommits.org/)  
- [PostgreSQL](https://www.postgresql.org/)  

---

Com este README, qualquer novo integrante consegue configurar o ambiente, rodar as migrations e entender o fluxo de trabalho do projeto sem precisar de ajuda externa.
