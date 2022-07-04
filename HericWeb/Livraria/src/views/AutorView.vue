<script>
export default {
  data() {
    return {
      livros: [],
      novo_autor: "",
    };
  },
  methods: {
    add() {
      this.livros.push({
        autor: this.novo_autor,
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
      <h2>Gerenciamento de Autores</h2>
    </div>
    <div class="form-input" @keydown.enter="add">
      <input type="text" placeholder="Autores" v-model="novo_autor" />
      <button @click="add">Adicionar Autor</button>
    </div>
    <div class="list-table">
      <table v-if="livros.length > 0">
        <thead>
          <tr>
            <th>Autores</th>
            <th>Remover</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="livro in livros" :key="livro.id">
            <td>{{ livro.autor }}</td>
            <td>
              <button @click="excluir(livro)">
                <img src="@/assets/img/lixo-icon.png" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <span v-else><h1>Lista vazia!</h1></span>
    </div>
  </div>
</template>
