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

![luk4x-repo-status](https://img.shields.io/badge/Status-Finished-lightgrey?style=for-the-badge&logo=headspace&logoColor=green&color=lightgrey)
![luk4x-repo-license](https://img.shields.io/github/license/Luk4x/dev-burger-order-log-interface?style=for-the-badge&logo=unlicense&logoColor=lightgrey)
# 🍔 CodeBurger Project Interface

<br>
<p align="center">
  <a href="#-project-video-presentation">Video</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies-used">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-pages">Pages</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-other-components">Components</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-cloning-the-project">Cloning</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-contributor-contact">Contact</a>
</p>
<br>

## 📹 Project Video Presentation
<div align="center">
  <video src="https://user-images.githubusercontent.com/86276393/180319426-feca2803-6fe7-4480-a151-6ccf7daafd1f.mp4">
</div>

> **If the video has any errors, reload the page!**<br>
> Access the project online **[HERE](https://luk4x-codeburgerv1.netlify.app/)**

## 🚀 Technologies used

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

## 📝 About

> Watching the video above and/or accessing the project online will help you understand the explanation!
  
This project is the Mobile-First Interface of **CodeBurger**, a web application that performs the registration and management of orders for a hamburger shop. Orders are stored in their [API](https://github.com/Luk4x/dev-burger-order-log-API) that I developed essentially with ExpressJS.

### 📄 Pages

The project consists of 2 page components, which are:

  - **Home**: Além de ser a página inicial do CodeBurger, ela responsável por realizar o cadastro dos pedidos validados pelas verificações na API.
  - **Orders**: Essa página é responsável por listar os pedidos já cadastrados na API, e também informa seus respectivos status (com um tempo de preparação aleatório entre `5` à `40` segundos) e preço (gerado a partir da quantidade de caracteres do pedido + um valor aleatório entre `1` à `50`).

### 📑 Other Components

Apart from the **Routes**, **GlobalStyles** and **main** components, the project has 5 more components that are reused on both pages, which are:

- **Socials**: This component is relative to the button that lists my social networks.
- **MainContainer**: This component is related to the container that houses the order information.
- **Image**: This component is relative to the CodeBurger _Logo_ and _Packaging_ images.
- **Button**: This component is relative to the _Pedir_ and _Voltar_ buttons.
- **Title**: This component is related to the titles of the **MainContainer**.

## 📖 Cloning the Project

To clone and run this project on your computer you will need [Git](https://git-scm.com/), [Node.js v16.13.2](https://nodejs.org/en/) or higher and [Yarn](https://yarnpkg.com/) previously installed.<br>
You'll also need the project's API running, so before continuing here, go to [API Repository](https://github.com/Luk4x/dev-burger-order-log-API) and go through the steps on how to clone and run it first!<br>
After these two steps, in the terminal:

```bash
# Clone this repository with:
> git clone https://github.com/Luk4x/dev-burger-order-log-interface.git

# Enter the repository with:
> cd dev-burger-order-log-interface

# Install dependencies with:
> yarn install

# Run the project with:
> yarn dev

# Once this is done, you will be able to access the project through the link that will appear in the terminal! (something like http://localhost:3000/ or http://127.0.0.1:5173/)
```

## 🤝 Contributor Contact

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

<p align="right">
  <a href="#-codeburger-project-interface">Back to Top</a>
</p>
