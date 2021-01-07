<template>
  <div class="app">
    <MasterHeader />
    <main>
      <Container>
        <router-view />
      </Container>
    </main>
  </div>
</template>


<script>
  import MasterHeader from "@/components/Header";
  import Container from "@/components/Container";
  export default {
    name: "App",
    components: { Container, MasterHeader,}
  }
</script>


<style>
  main{
    padding: 40px;
  }
</style>