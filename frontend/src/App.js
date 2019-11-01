import React from 'react';

import './App.css';

import logomarca from './assets/logomarca.jpg';

//import Routes from './routes';

function App() {
  return (

  <head>

  <link rel="stylesheet" href="public\estilo.css" />
  <script src="public\script.js"></script>

  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
    integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
    crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
    integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
    crossorigin="anonymous"></script>

  <!-- Bootstrap v4.3-->
  <link rel="stylesheet" href="public/bootstrap/css/bootstrap.min.css" />
  <script src="public\bootstrap\js\bootstrap.min.js"></script>
  <script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>

  <!-- Font Awesome-->
  <link rel="stylesheet" href="public\fontawesome\css\all.css" />
  <link rel="stylesheet" href="css/owl.carousel.min.css">

</head>

<body>
  <nav class="navbar navbar-expand-lg navbar-dark bg-light text-dark icon-user-female
  ">
    <a class="navbar-brand text-primary" data-toggle="tooltip" data-placement="top" title="Pagina Incial"
      href="home.html">Garagens
      do Futuro</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado"
      aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="conteudoNavbarSuportado">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link text-primary" data-toggle="tooltip" data-placement="top" title="Garagem"
            href="tableGaragem.html">Gagaragem
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-primary" data-toggle="tooltip" data-placement="top" title="Veiculo"
            href="tableVeiculo.html">Veiculo</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-primary" data-toggle="tooltip" data-placement="top" title="Usuário"
            href="tableUsuario.html">Usuário</a>
        </li>
      </ul>
    </div>
    <div class="float-middle">
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Pesquisar" aria-label="Pesquisar">
        <button class="btn btn-secondary" type="submit">Pesquisar</button>
      </form>
    </div>
    
    <div className="container">
      <img src={logomarca} alt="CarSale" />
        
    </div>
  );
}

export default App;