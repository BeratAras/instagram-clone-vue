<template>
  <div class="home">
    <CustomText class="a1" size="normal">Merhaba Dünya</CustomText>
    <IconHome />
  </div>
</template>

<script>
import CustomText from "@/components/CustomText";
import IconHome from "@/assets/icons/home.svg";
export default {
  name: "Home",
  components: { CustomText, IconHome },
  comments: {
    Text
  }
};
</script>

<style lang="scss" scoped>
  .a1{
    font-size: 40px;
  }
</style>