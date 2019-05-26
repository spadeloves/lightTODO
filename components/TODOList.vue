<template>
    <b-row>
				<b-col>
					<ul 
            v-for='(category,index) in categoryList' :key='index'
            v-if="category.category_id === active_category">
            {{category.cat_name}}
            <b-list-group-item v-for='(todo,index) in category.todos' :key='index'>
						  {{todo.title}}
					  </b-list-group-item>

          </ul>
			</b-col>
		</b-row>
</template>


<script>
export default {
  name: 'TODOList',
  data: function() {
      return {
        active_category:1,
        categoryList: [
          {
            category_id: 1,
            cat_name: "Category1",
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
            cat_name: "Category2",
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
  },
  methods: {
    changeCategory: function(category_id){
      this.active_category=category_id;
    }
  },
}
</script>