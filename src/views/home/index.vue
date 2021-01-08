<template>
  <div class="home">
    <div class="timeline">
      <CustomText size="normal">Base</CustomText>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, sunt, vero! A alias aliquam aperiam
        dignissimos doloribus, necessitatibus numquam omnis provident quasi quisquam repudiandae saepe, tempore velit
        veritatis voluptas voluptatibus.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, sunt, vero! A alias aliquam aperiam
        dignissimos doloribus, necessitatibus numquam omnis provident quasi quisquam repudiandae saepe, tempore velit
        veritatis voluptas voluptatibus.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, sunt, vero! A alias aliquam aperiam
        dignissimos doloribus, necessitatibus numquam omnis provident quasi quisquam repudiandae saepe, tempore velit
        veritatis voluptas voluptatibus.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, sunt, vero! A alias aliquam aperiam
        dignissimos doloribus, necessitatibus numquam omnis provident quasi quisquam repudiandae saepe, tempore velit
        veritatis voluptas voluptatibus.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, sunt, vero! A alias aliquam aperiam
        dignissimos doloribus, necessitatibus numquam omnis provident quasi quisquam repudiandae saepe, tempore velit
        veritatis voluptas voluptatibus.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, sunt, vero! A alias aliquam aperiam
        dignissimos doloribus, necessitatibus numquam omnis provident quasi quisquam repudiandae saepe, tempore velit
        veritatis voluptas voluptatibus.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, sunt, vero! A alias aliquam aperiam
        dignissimos doloribus, necessitatibus numquam omnis provident quasi quisquam repudiandae saepe, tempore velit
        veritatis voluptas voluptatibus.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, sunt, vero! A alias aliquam aperiam
        dignissimos doloribus, necessitatibus numquam omnis provident quasi quisquam repudiandae saepe, tempore velit
        veritatis voluptas voluptatibus.</p>
    </div>

    <div class="sidebar">
      <CustomText size="normal">Sidebar</CustomText>
    </div>
  </div>
</template>


<script>
import CustomText from "@/components/CustomText";

export default {
  name: "Home",
  components: { CustomText }
};
</script>


<style lang="scss" scoped>
.home {
  display: grid;
  grid-template-columns: 1fr 295px;
  grid-gap: 30px;
  max-width: none;
}

@media only screen and (max-width: 980px) {
  .home {
    display: flex;
    justify-content: center;
    align-items: center;

    .timeline{
      max-width: 605px;
    }
  }
  .sidebar {
    display: none;
  }
}
</style>