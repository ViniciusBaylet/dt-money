# Primeira pasta a ser criada:
- styles
 global.ts
 themes
  default.ts

Coloca o <ThemeProvider> por volta do App no componente App.tsx
Define o theme={defaultTheme}

Cria a pasta @types (arquivo de tipagem do styled components)
Cria o arquivo styled.d.ts

Cria temas globais no arquivo global.ts

Importa o <GlobalStyle /> no arquivo App.tsx


# Segunda pasta a ser criada:
- assets
importar a logo do site e demais imagens


# Terceira pasta a ser criada:
- pages
 Transactions


# Quarta pasta a ser criada:
- components
 Header

# Radix UI:
- biblioteca para criar o dialog (npm install @radix-ui/react-dialog)
- vai no Header que é onde fica o botão que vai ativar o dialog e coloca a tag <Dialog.Root> por volta do botão
- bota a tag <Dialog.Trigger> por volta do botão e passa a propriedade "as child" para que o trigger não crie outro botão e aproveite o botão que já está dentro dele (<NewTransictionButton>)

# JSON Server:
- Simula uma API para que consigamos fazer requisições para um backend ficticio (npm i json-server -D)
- Criar arquivo server.json
- Cada propriedade do objeto = uma rota da aplicação ou uma entidade do banco de dados
- Para rodar o JSON Server utiliza-se o comando: npx json-server server.json -w ou json-server server.json -w -p 3333 (para subir na porta 3333)
- Cria o script dev:server no package.json