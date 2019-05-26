<template>
  <section class="container-fluid">
    <div class="row">
      <div class="col-sm">
        <CategoryList></CategoryList>
      </div>
      <div class="col-sm">
        <TODOList></TODOList>
      </div>
      <div class="col-sm">
        <TODODetail></TODODetail>
      </div>
    </div>
  </section>
</template>

<script>
import CategoryList from '~/components/CategoryList.vue'
import TODOList from '~/components/TODOList.vue'
import TODODetail from '~/components/TODODetail.vue'

export default {
  components: {
    CategoryList,
    TODOList,
    TODODetail

  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

