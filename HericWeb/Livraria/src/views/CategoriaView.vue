<script>
import axios from "axios";
export default {
  data() {
    return {
      categorias: [],
      novo_id: "",
      novo_nome: "",
    };
  },
  async created() {
    const categorias = await axios.get("http://localhost:4000/categorias");
    this.categorias = categorias.data;
  },

  methods: {
    async add() {
      const categoria = {
        id: this.novo_id,
        nome: this.novo_categoria,
      };
      const categoria_criado = await axios.post(
        "http://localhost:4000/categorias",
        categoria
      );
      this.categorias.push(categoria_criado.data);
    },
    async excluir(categoria) {
      await axios.delete(`http://localhost:4000/categorias/${categoria.id}`);
      const indice = this.categorias.indexOf(categoria);
      this.categorias.splice(indice, 1);
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de categorias</h2>
    </div>
    <div class="form-input" @keydown.enter="add">
      <input type="text" placeholder="Categoria" v-model="novo_categoria" />
      <button @click="add">Adicionar Categoria</button>
    </div>
    <div class="list-table">
      <table v-if="categorias.length > 0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Categoria</th>
            <th>Remover</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="categoria in categorias" :key="categoria.id">
            <td>{{ categoria.id }}</td>
            <td>{{ categoria.nome }}</td>
            <td>
              <button @click="excluir(categoria)">
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
