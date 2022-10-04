<table align="right">
  <tr>
    <td>
      <a href="readme-en.md">🇺🇸 English</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="README.md">🇧🇷 Português</a>
    </td>
  </tr>
</table>
<br>

# 🍔 CodeBurger Project Interface

## 📹 Apresentação em Vídeo do Projeto
<div align="center">
  <video src="https://user-images.githubusercontent.com/86276393/180319426-feca2803-6fe7-4480-a151-6ccf7daafd1f.mp4">
</div>

> **Caso o vídeo apresente algum erro, recarregue a página!**<br>
> Acesse o projeto online **[AQUI](https://luk4x-codeburgerv1.netlify.app/)**

## 🚀 Tecnologias utilizadas

-   [ReactJS](https://pt-br.reactjs.org)
-   [React Router](https://reactrouter.com/docs/en/v6/getting-started/overview)
-   [Styled-Components](https://styled-components.com)
-   [Bootstrap](https://getbootstrap.com/) / [React-Bootstrap](https://react-bootstrap.github.io/)
-   [BoxIcons](https://boxicons.com/)
-   [Axios](https://axios-http.com/docs/intro)
-   [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
-   [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
-   [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
-   [ViteJS](https://vitejs.dev/)
-   [Yarn](https://yarnpkg.com/)

## 📝 Sobre

Esse projeto é a Interface Mobile-First do **CodeBurger**, uma aplicação Web que realiza o cadastro e a gerência de pedidos de uma hamburgueria. Os pedidos ficam armazenados em sua [API](https://github.com/Luk4x/dev-burger-order-log-API) que desenvolvi essencialmente com ExpressJS.

### 📄 Páginas

O projeto é composto por 2 componentes de páginas, sendo eles:

  - **Home**: Além de ser a página inicial do CodeBurger, ela responsável por realizar o cadastro dos pedidos validados pelas verificações na API.
  - **Orders**: Essa página é responsável por listar os pedidos já cadastrados na API, e também informa seus respectivos status (com um tempo de preparação aleatório entre `5` à `40` segundos) e preço (gerado a partir da quantidade de caracteres do pedido + um valor aleatório entre `1` à `50`).

### 📑 Demais Componentes

Fora os componentes de Rotas (**Routes**), estilos globais (**GlobalStyles**) e Root (**main**), o projeto conta com mais 5 componentes que são reaproveitados em ambas as páginas, sendo eles:

- **Socials**: Esse componente é relativo ao botão que lista minhas redes sociais.
- **MainContainer**: Esse componente é relativo ao container que abriga as informações dos pedidos.
- **Image**: Esse componente é relativo às imagens de _Logo_ e _Embalagem_ do CodeBurger.
- **Button**: Esse componente é relativo aos botões de _Pedir_ e _Voltar_.
- **Title**: Esse componente é relativo aos títulos do **MainContainer**.

## 📖 Como usar

Para clonar e executar este projeto, você precisará do [Git](https://git-scm.com/), [Node.js v16.13.2](https://nodejs.org/en/) ou superior e [Yarn](https://yarnpkg.com/) instalados em seu computador.<br>No terminal:

```bash
# Clone esse repositório:
$ git clone https://github.com/Luk4x/dev-burger-order-log-interface.git

# Entre no repositório:
$ cd dev-burger-order-log-interface

# Instalar dependências
$ yarn install

# Executar o projeto
$ yarn dev

# O servidor irá iniciar em http://localhost:3000/.
```

## 🤝 Contato dos Contribuintes

<table>
  <tr>
    <td align="center">
      <a href="https://www.linkedin.com/in/lucasmacielf/">
        <img src="https://avatars.githubusercontent.com/Luk4x" width="150px;" alt="Luk4x Github Photo"/><br>
        <sub>
          <b>Lucas Maciel</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
