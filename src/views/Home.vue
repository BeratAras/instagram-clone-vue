<template>
  <div class="home">
      <h1>Home</h1>
    <CustomText class="a1" size="normal">Merhaba Dünya</CustomText>
  </div>
</template>

<script>
import CustomText from "@/components/CustomText";
export default {
  name: "Home",
  components: { CustomText },
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