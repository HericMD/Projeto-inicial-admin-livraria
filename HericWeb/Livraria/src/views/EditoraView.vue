<script>
export default {
  data() {
    return {
      livros: [],
      novo_editora: "",
      novo_site: "",
    };
  },
  methods: {
    add() {
      this.livros.push({
        site: this.novo_site,
        editora: this.novo_editora,
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
      <h2>Gerenciamento de Editora</h2>
    </div>
    <div class="form-input" @keydown.enter="add">
      <input type="text" placeholder="Editora" v-model="novo_editora" />
      <input type="text" placeholder="Site" v-model="novo_site" />
      <button @click="add">Adicionar Editora</button>
    </div>
    <div class="list-table">
      <table v-if="livros.length > 0">
        <thead>
          <tr>
            <th>Editora</th>
            <th>Site</th>
            <th>Remover</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="livro in livros" :key="livro.id">
            <td>{{ livro.editora }}</td>
            <td>{{ livro.site }}</td>
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
    <div></div>
  </div>
</template>
