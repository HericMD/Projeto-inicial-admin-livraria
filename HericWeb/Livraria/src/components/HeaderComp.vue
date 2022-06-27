<template>
  <header>
    <div class="menu-esquerdo">
      <span>
        <RouterLink to="/">Home</RouterLink>
      </span>
      <span>|</span>
      <span>
        <RouterLink to="/livro">Livro</RouterLink>
      </span>
      <span>|</span>
      <span>
        <RouterLink to="/categoria">Categoria</RouterLink>
      </span>
      <span>|</span>
      <span>
        <RouterLink to="/autor">Autor</RouterLink>
      </span>
      <span>|</span>
      <span>
        <RouterLink to="/editora">Editora</RouterLink>
      </span>
    </div>
    <div class="menu-direito">
      <span>
        <RouterLink to="/login">Login</RouterLink>
      </span>
    </div>
  </header>
</template>

<style>
header {
  height: 10%;
  background-color: rgb(57, 57, 128);
  color: white;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
}

a {
  color: inherit;
  text-decoration: none;
}

.router-link-active {
  font-weight: bold;
}

header span {
  padding: 0 20px;
}
</style>
