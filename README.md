# Clean Natty  

Um software desenvolvido com o objetivo de suprir a demanda de gerentes que coordenam equipes de limpeza, 
afim de controlar seus funcionários, ambientes de limpeza, produtos em estoque e o progresso das limpezas.
Em Clean Natty, você encontra tudo isso funcionando em perfeita harmonia, de maneira intuitiva e com um 
design moderno e 100% responsivo. 

#### Para acessar o site ( Banco de dados estático )
- https://clean-natty.vercel.app/dashboard

## Requisitos Iniciais
```
Ter instalado Node.JS na máquina
```

## Rodar no terminal para iniciar o Projeto
```
npm install
npm install -g json-server
npm install axios
```

## Rodar no terminal para Compilar na localhost:8080
```
npm run serve
```

## Rodar no terminal para Compilar Json Server (API) na localhost:3000
- Descomentar o código na config.js onde está escrito localhost:3000.
- Comentar o código na config.js onde está escrito api.vercel
```
json-server --watch db.json
``` 
