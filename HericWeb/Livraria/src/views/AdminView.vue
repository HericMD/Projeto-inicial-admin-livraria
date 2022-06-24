<script>
export default {
  data() {
    return {
      livros: [],
    };
  },
  methods: {
    add() {
      this.livros.push({
        editora: this.novo_editora,
        categoria: this.novo_categoria,
        autor: this.novo_autor,
        nome: this.novo_livro,
      });
    },
    excluir(livro) {
      const indice = this.livros.indexOf(livro);
      this.livros.splice(indice, 1);
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de livros</h2>
    </div>
    <div class="form-input" @keydown.enter="add">
      <input type="text" placeholder="Editora" v-model="novo_editora" />
      <input type="text" placeholder="Categoria" v-model="novo_categoria" />
      <input type="text" placeholder="Autor" v-model="novo_autor" />
      <input type="text" placeholder="Livro" v-model="novo_livro" />

      <button @click="add">Adicionar ao carrinho</button>
    </div>
    <div class="list-times">
      <table v-if="livros.length > 0">
        <thead>
          <tr>
            <th>Editora</th>
            <th>Categoria</th>
            <th>Autores</th>
            <th>Nome</th>
            <th>Remover</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="livro in livros" :key="livro.id">
            <td>{{ livro.editora }}</td>
            <td>{{ livro.categoria }}</td>
            <td>{{ livro.autor }}</td>
            <td>{{ livro.nome }}</td>
            <td>
              <button @click="excluir(livro)">
                <img src="src/assets/img/lixo-icon.png" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <span v-else><h1>Adicione Livros</h1></span>
    </div>
    <div></div>
  </div>
</template>

<style>
.title {
  text-align: center;
  margin: 2rem 0;
}

.form-input {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 2rem 0;
}

.form-input input {
  width: 50%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 3px;
}

.form-input button {
  padding: 0.5rem;
  width: 15%;
  border: 2px solid rgb(20, 230, 20);
  border-radius: 10px;
  background-color: #fff;
  color: rgb(20, 230, 20);
  font-weight: bold;
  margin-top: 10px;
}

.form-input button:hover {
  background-color: rgb(20, 230, 20);
  color: white;
  transform: translateY(-5px);
  box-shadow: 0px 15px 20px rgba(8, 233, 143, 0.2);
}

.list-times {
  display: flex;
  justify-content: center;
}

table {
  width: 50%;
  border-spacing: 0;
  margin: 0 auto;
  border: 1px solid black;
  font-size: 1.1rem;
  text-align: center;
}

table thead {
  background-color: rgb(40, 40, 40);
  color: white;
}

table tbody tr:nth-child(odd) {
  background-color: rgb(70, 120, 250, 0.5);
  color: white;
}

table tbody tr:nth-child(even) {
  background-color: rgb(230, 230, 230);
  color: black;
}

td img {
  height: 25px;
}
</style>
