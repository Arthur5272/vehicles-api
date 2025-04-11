# 🚗 Vehicle Management API

<div align="center">
  <img src="https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white">
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white">
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white">
  <br>
  <img src="https://img.shields.io/github/last-commit/seu-usuario/vehicles-api?style=for-the-badge">
  <img src="https://img.shields.io/github/license/seu-usuario/vehicles-api?style=for-the-badge">
</div>

API completa para gerenciamento de veículos com autenticação JWT e dashboard de estatísticas.

## ✨ Funcionalidades

- 🔐 Autenticação JWT com expiração
- 📊 Dashboard com métricas de veículos
- ✅ CRUD completo de veículos
- 📈 Estatísticas em tempo real
- 🛡 Validação de dados com Zod
- 🗃 Banco de dados relacional com PostgreSQL
- 🚀 Arquitetura escalável e modular

## 🛠 Tecnologias

| Ferramenta          | Função                            |
|---------------------|-----------------------------------|
| **Node.js**         | Ambiente de execução              |
| **Express**         | Framework web                     |
| **Prisma**          | ORM para PostgreSQL               |
| **JWT**             | Autenticação de usuários          |
| **Zod**             | Validação de dados                |
| **TypeScript**      | Tipagem estática                  |
| **Bcrypt**          | Hash de senhas                    |

## ⚙️ Configuração

### Pré-requisitos
- Node.js 18+
- PostgreSQL
- NPM/Yarn

```bash
# 1. Clonar repositório
git clone https://github.com/seu-usuario/vehicles-api.git
cd vehicles-api

# 2. Instalar dependências
npm install

# 3. Configurar ambiente
cp .env.example .env