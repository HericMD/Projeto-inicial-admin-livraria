<script>
import AutoresApi from "@/api/autores.js";
const autoresApi = new AutoresApi();
export default {
  data() {
    return {
      autores: [],
      autor: {},
    };
  },
  async created() {
    this.autores = await autoresApi.buscarTodosOsAutores();
  },
  methods: {
    async salvar() {
      if (this.autor.id) {
        await autoresApi.atualizarAutor(this.autor);
      } else {
        await autoresApi.adicionarAutor(this.autor);
      }
      this.autores = await autoresApi.buscarTodosOsAutores();
      this.autor = {};
    },
    async excluir(autor) {
      await autoresApi.excluirAutor(autor.id);
      this.autores = await autoresApi.buscarTodosOsAutores();
    },
    editar(autor) {
      Object.assign(this.autor, autor);
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de autor</h2>
    </div>
    <div class="form-input" @keydown.enter="add">
      <input type="text" placeholder="Autor" v-model="autor.nome" />
      <button @click="salvar">Adicionar Autor</button>
    </div>
    <div class="list-table">
      <table v-if="autores.length > 0">
        <thead>
          <tr>
            <th>autor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="autor in autores" :key="autor.id">
            <td>{{ autor.nome }}</td>
            <td>
              <button @click="excluir(autor)">
                <img src="@/assets/img/lixo-icon.png" />
              </button>
              <button @click="editar(autor)">
                <img src="@/assets/img/edit-icon.png" />
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
