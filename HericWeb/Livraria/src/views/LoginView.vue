<script></script>
<template>
  <div class="form-input">
    <input type="text" placeholder="Usuário ou e-mail" />
    <input type="text" placeholder="Senha" />
  </div>
  <div class="btn">
    <button>Login</button>
    <button>Register</button>
  </div>
</template>
<style>
.btn {
  display: flex;
  justify-content: center;
}
.btn button {
  padding: 0.5rem;
  width: 15%;
  border: 2px solid rgb(20, 230, 20);
  border-radius: 10px;
  background-color: #fff;
  color: rgb(20, 230, 20);
  font-weight: bold;
  margin: -10px 70px;
}
.btn button:hover {
  background-color: rgb(20, 230, 20);
  color: white;
  transform: translateY(-5px);
  box-shadow: 0px 15px 20px rgba(8, 233, 143, 0.2);
}
</style>
