# DemoQA - Automação de Testes com Cypress

Projeto de automação de testes end-to-end e API para o site DemoQA (https://demoqa.com) e (https://demoqa.com/swagger), usando Cypress com Cucumber (BDD).

## Tecnologias
- [Cypress](https://www.cypress.io/)
- [Cucumber](https://cucumber.io/)
- [Faker.js](https://fakerjs.dev/)

## Pré-requisitos
- Node.js (v18 ou superior)
- npm

## Instalação
```bash
git clone <url-do-repositorio>
cd demoQa
npm install
```

## Como executar
Todos os testes front-end:
```bash
npx cypress run --spec "cypress/e2e/front/features/*.feature"
```

Testes de API:
```bash
npx cypress run --spec "cypress/e2e/api/features/*.feature"
```

Teste específico:
```bash
npx cypress run --spec "cypress/e2e/front/features/elements.feature"
```

Modo interativo:
```bash
npx cypress open
```

## Cenários - Front-end

### Elements - Web Tables
- Cadastrar novo registro
- Editar registro existente
- Deletar registro
- Criar 12 registros e deletar todos

### Forms - Practice Form
- Preencher e submeter o formulário com dados aleatórios e upload de arquivo .txt

### Alerts, Frame & Windows
- Validar abertura de nova janela

### Widgets - Progress Bar
- Parar antes dos 25%
- Completar até 100% e resetar

### Interactions - Sortable
- Ordenar elementos em ordem crescente via drag and drop

## Cenários - API

### Bookstore API
- Fluxo completo: criar usuário, gerar token, validar autorização, listar livros, alugar dois livros e verificar no perfil


## CI/CD
O projeto tem um workflow do GitHub Actions (`.github/workflows/ci.yml`) que roda todos os testes automaticamente a cada push.

## Configurações
- Timeout: 10 minutos
- Retentativas por teste: 2
