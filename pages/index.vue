<template>
  <section class="container-fluid">
    <div class="row">
      <div class="col-sm-3 categoryListWrap mainSection">
        <SectionHeader title="CategoryList" color="white"></SectionHeader>
        <CategoryList :todo-data='todoData' v-on:changeCategory="changeCategory"></CategoryList>
      </div>
      <div class="col-sm-4">
        <SectionHeader title="TODOList"  color="black"></SectionHeader>
        <TODOList :todo-data='todoData' :active-category="activeCategory" :active-todo="activeTODO" v-on:changeActiveTODO="changeActiveTODO"></TODOList>
      </div>
      <div class="col-sm-5">
        <SectionHeader title="TODODetail"  color="black"></SectionHeader>
        <TODODetail :todo-data='todoData' :active-category="activeCategory" :active-todo="activeTODO"></TODODetail>
      </div>
    </div>
  </section>
</template>

<script>
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
  methods: {
    changeCategory:function(category_id){
      this.activeCategory = category_id;
      this.activeTODO = 0;

    },
    changeActiveTODO:function(todo_id){
      this.activeTODO = todo_id;
    }
  },
  data:function(){
    return {
      activeCategory:1,
      activeTODO:0,
      todoData: [
        {
          category_id: 1,
          category_name: "家事",
          color:"#F96262",
          todos:[
            {
              title: "洗濯する",
              note: "洗濯して、干す。今かかってる洗濯物をたたむ。",
              deadline: "2019/06/01",
              is_completed:true,
              comments:[
                {
                  date:"2019/05/26 13:13",
                  content:"今かかってる洗濯物は取り込んだ"
                },
                {
                  date:"2019/05/26 14:30",
                  content:"ハンガーが足りないかもしれないので、あたらしく買っておいたほうがいいかも"
                },
              ]
            },
            {
              title: "料理作る",
              note: "スパゲッティつくる。カルボナーラの予定",
              deadline: "2019/06/01",
              is_completed:false,
              comments:[
                {
                  date:"2019/05/28 12:54",
                  content:"材料はすべて買ってある。"
                },
              ]
            },
          ]
        },
        {
          category_id: 2,
          category_name: "仕事",
          color:"#78D3CE",
          todos:[
            {
              title: "資料作る",
              note: "〇〇商社のプレゼン用。上司チェック必須。",
              deadline: "2019/06/21",
              is_completed:true,
              comments:[
                {
                  date:"2019/05/28 15:42",
                  content:"イメージ図については、田中君が代わりに作成してくれるとのこと"
                },
                {
                  date:"2019/06/11 10:43",
                  content:"上司より、目次をつけておくように指摘を受けた"
                },
              ]
            },
            {
              title: "メールする",
              note: "〇〇さんの進捗報告メールの確認、返信。",
              deadline: "2019/06/23",
              is_completed:false,
              comments:[
              ]
            },
            {
              title: "週報出す",
              note: "週報テンプレート Document¥personal¥template.md",
              deadline: "2019/06/23",
              is_completed:false,
              comments:[
                {
                  date:"2019/06/19",
                  content:"鈴木さんの週報がよい参考になるとのこと"
                },
              ]
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

.mainSection{
  height: 100vh;
}
</style>

