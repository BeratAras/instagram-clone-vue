<template>
  <header>
    <Container class="header-inner">
      <router-link to="/" class="logo">
        <img src="../assets/images/logo.png" alt="logo">
      </router-link>

      <form class="search">
        <input type="text" placeholder="Ara">
      </form>

      <nav>
        <router-link to="/">
          <IconHomeFill v-if="$route.name == 'Home'" />
          <IconHome v-else />
        </router-link>
        <router-link to="/direct">
          <IconDirectFill v-if="$route.name == 'Direct'" />
          <IconDirect v-else />
        </router-link>
        <router-link to="/explore">
          <IconExploreFill v-if="$route.name == 'Explore'" />
          <IconExplore v-else />
        </router-link>
        <router-link to="/profile">Profile</router-link>
      </nav>
    </Container>
  </header>
</template>

<script>

import IconHome from '@/assets/icons/home.svg';
import IconHomeFill from '@/assets/icons/home-fill.svg';
import IconDirect from '@/assets/icons/direct.svg';
import IconDirectFill from '@/assets/icons/direct-fill.svg';
import IconExplore from '@/assets/icons/explore.svg';
import IconExploreFill from '@/assets/icons/explore-fill.svg';
import Container from "@/components/Container";

export default {
  name: "MainHeader",
  components: {Container, IconHome, IconHomeFill, IconDirect, IconDirectFill, IconExplore, IconExploreFill}
};
</script>

<style lang="scss" scoped>
  header{
    background: white;
    border-bottom: 1px solid rgb(219,219,219);
    .header-inner{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      align-items: center;
      height: 57px;

      .search{
        text-align: center;

        input{
          min-width: 125px;
          width: 185px;
          height: 28px;
          border: 1px solid rgb(219,219,219);
          background-color: rgb(250,250,250);
          border-radius: 4px;
          padding: 0 20px;
        }
      }
      nav{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        a{
          margin-left: 20px;
        }
      }
    }
  }



</style>