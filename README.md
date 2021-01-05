# [DELIVERY MUCH] Tech Challenge Backend

API que recebe ingredientes como parâmetro de entrada em uma chamada GET e retorna uma lista de receitas. Utilizando as APIs públicas da RecipePuppy (http://www.recipepuppy.com/about/api/) e da Giphy (https://developers.giphy.com/docs/) para obter os dados necessários.

## Configuração
Duplique o arquivo .env.example na raiz do projeto e renomeie para .env:

Dentro do arquivo .env substitua YOUR_GIPHY_API_KEY para o a sua chave de API do GIPHY.


## Build
Abra seu terminal na pasta do projeto e execute:

``` shell
npm install
```
ou
``` shell
yarn install
```

## Rodar o projeto
Para rodar o projeto basta executar no terminal na pasta raiz do projeto o comando:

``` shell
npm start
```
ou

``` shell
yarn start
```


A aplicação poderá ser acessada em: http://localhost:3000/recipes/?i={ingredient_1},{ingredient_2}


## Testes
Para rodar os testes execute o comando:
``` shell
npm test
```
ou

``` shell
yarn start
```


## Docker
Para rodar o projeto no docker primeiro será necessário criar o container com o projeto. No terminal na raiz do projeto execute o comando abaixo: 

``` shell
docker build -t {nome_do_usuario_no_docker_hub}/tech-challenge .
```
Após a criação do container, para rodar o projeto execute:

``` shell
docker run --name {container_name} -p 8080:3000 {nome_do_usuario_no_docker_hub}/tech-challenge
```

Uma vez rodando para acessar a API utilize a URL:
http://localhost:8080/recipes/?i={ingredient_1},{ingredient_2}
(note que talvez tenha que substituir o localhost pelo ip atribuido ao docker)


Nas próximas vezes que quiser rodar o projeto basta executar:

``` shell
docker start {container_name}
```

Para parar de rodar o projeto execute:

``` shell
docker stop {container_name}
```



