<template>
  <Header />
  <SecurePassword />
  <Instruction />
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/partials/Header.vue";
import SecurePassword from "./components/SecurePassword.vue";
import Instruction from "./components/Instruction.vue";

export default {
  name: "App",
  components: {
    Header,
    SecurePassword,
    Instruction,
  },
};
</script>

<style>
</style>
