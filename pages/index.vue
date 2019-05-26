<template>
  <section class="container-fluid">
    <div class="row">
      <div class="col-sm-4 categoryListWrap">
        <SectionHeader title="CategoryList" color="white"></SectionHeader>
        <CategoryList :todo-data='todoData' v-on:changeCategory="changeCategory"></CategoryList>
      </div>
      <div class="col-sm-4">
        <SectionHeader title="TODOList"  color="black"></SectionHeader>
        <TODOList :todo-data='todoData' :active-category="activeCategory"></TODOList>
      </div>
      <div class="col-sm-4">
        <TODODetail></TODODetail>
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeader from '~/components/SectionHeader.vue'
import CategoryList from '~/components/CategoryList.vue'
import TODOList from '~/components/TODOList.vue'
import TODODetail from '~/components/TODODetail.vue'

export default {
  components: {
    CategoryList,
    TODOList,
    TODODetail,
    SectionHeader
  },
  methods: {
    changeCategory:function(category_id){
      this.activeCategory = category_id;
    }
  },
  data:function(){
    return {
      activeCategory:1,
      todoData: [
        {
          category_id: 1,
          category_name: "Category1",
          color:"#11ff11",
          todos:[
            {
              title: "todo1-1",
              note: "note 1-1",
              deadline: "2019/06/01"
            },
            {
              title: "todo1-2",
              note: "note 1-2",
              deadline: "2019/06/01"
            },
          ]
        },
        {
          category_id: 2,
          category_name: "Category2",
          color:"#ffff11",
          todos:[
            {
              title: "todo2-1",
              note: "note 2-1",
              deadline: "2019/06/21"
            },
            {
              title: "todo2-2",
              note: "note 2-2",
              deadline: "2019/06/23"
            },
          ]
        },
      ]
		}
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

.categoryListWrap{
  background-color: #414141;
}
</style>

