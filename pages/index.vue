<template>
  <section class="container-fluid">
    <div class="row">
      <div class="col-sm-3 categoryListWrap mainSection">
        <SectionHeader title="CategoryList" color="white"></SectionHeader>
        <CategoryList></CategoryList>
        <AddToggleButton size="3" color="#4ba2ff" target="toggleCategoryForm"></AddToggleButton>
      </div>
      <div class="col-sm-4">
        <SectionHeader title="TODOList"  color="black"></SectionHeader>
        <TODOList></TODOList>
        <AddToggleButton size="3" color="#4ba2ff" target="toggleTaskForm"></AddToggleButton>
      </div>
      <div class="col-sm-5">
        <SectionHeader title="TODODetail"  color="black"></SectionHeader>
        <TODODetail></TODODetail>
      </div>
    </div>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'

import SectionHeader from '~/components/parts/SectionHeader.vue'
import CategoryList from '~/components/functions/CategoryList.vue'
import TODOList from '~/components/functions/TODOList.vue'
import TODODetail from '~/components/functions/TODODetail.vue'


export default {
  components: {
    CategoryList,
    TODOList,
    TODODetail,
    SectionHeader
  },
}
</script>

<style>
.categoryListWrap{
  background-color: #414141;
}
</style>
