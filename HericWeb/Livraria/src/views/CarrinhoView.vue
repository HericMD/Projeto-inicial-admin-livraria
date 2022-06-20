<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      livros: [
        {
          id: "c77142d1-ac69-43bf-878d-40f9aa19906e",
          nome: "livro 1",
          quantidade: "a",
        },
        {
          id: "a3728541-c035-4b28-9d3f-3cde8cfe8890",
          nome: "livro 2",
          quantidade: "b",
        },
        {
          id: "dbe4257e-428e-407a-9e53-ca255c59966b",
          nome: "livro 3",
          quantidade: "c",
        },
        {
          id: "3204d628-3a4c-43ac-961e-138b4ec37d96",
          nome: "livro 4",
          quantidade: "d",
        },
      ],
      novo_quantidade: "",
      novo_livro: "",
    };
  },
  methods: {
    add() {
      const novo_id = uuidv4();
      this.livros.push({
        id: novo_id,
        nome: this.novo_livro,
        quantidade: this.novo_quantidade,
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
    <div class="form-input">
      <input type="text" placeholder="Livro" v-model="novo_livro" />
      <input type="text" placeholder="Quantidade" v-model="novo_quantidade" />
      <button @click="add">Adicionar ao carrinho</button>
    </div>
    <div class="list-times">
      <table v-if="livros.length > 0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Quantidade</th>
            <th>Preço</th>
            <th>Remover</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="livro in livros" :key="livro.id">
            <td>{{ livro.id }}</td>
            <td>{{ livro.nome }}</td>
            <td>{{ livro.quantidade }}</td>
            <td>???</td>
            <td>
              <button @click="excluir(livro)">
                <img src="src/assets/img/lixo-icon.png" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <span v-else><h1>Carrinho vazio!</h1></span>
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
  height: 30px;
}
</style>
