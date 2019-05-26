<template>
    <b-row>
				<b-col>
					<ul 
            v-for='(category,index) in todoData' :key='index'
            v-if="category.category_id == activeCategory">
            <i class="fas fa-circle" v-bind:style="{color:category.color}"></i> {{category.category_name}}
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
  props:['todoData','activeCategory'],
  methods: {
  },
}
</script>