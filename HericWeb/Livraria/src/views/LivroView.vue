<script>
export default {
  data() {
    return {
      novo_categoria: "",
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
      <input type="text" placeholder="Livro" v-model="novo_livro" />
      <select name="Categoria" v-model="novo_categoria">
        <option value="" disabled selected>Selecione a categoria</option>
        <option value="Ação">Ação</option>
        <option value="Didático">Didático</option>
        <option value="Fantasia">Fantasia</option>
        <option value="Ficção">Ficção</option>
        <option value="Horror">Horror</option>
      </select>
      <input type="text" placeholder="Autor" v-model="novo_autor" />
      <input type="text" placeholder="Editora" v-model="novo_editora" />

      <button @click="add">Adicionar Livro</button>
    </div>
    <div class="list-table">
      <table v-if="livros.length > 0">
        <thead>
          <tr>
            <th>Livro</th>
            <th>Categoria</th>
            <th>Autores</th>
            <th>Editora</th>
            <th>Remover</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="livro in livros" :key="livro.id">
            <td>{{ livro.nome }}</td>
            <td>{{ livro.categoria }}</td>
            <td>{{ livro.autor }}</td>
            <td>{{ livro.editora }}</td>
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
  </div>
</template>
