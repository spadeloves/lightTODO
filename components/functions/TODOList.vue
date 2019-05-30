<template>
    <b-row>
				<b-col>
					<ul 
            v-for='(category,cat_index) in $store.state.todos.todoData' :key='cat_index'
            v-if="category.category_id == $store.state.todos.activeCategory">
            <i class="fas fa-circle" v-bind:style="{color:category.color}"></i> {{category.category_name}}
            <b-list-group-item v-for='(todo,index) in category.todos' :key='index'
            :data-todoid="index" 
            v-on:click="setActiveTODO"
            :href="'#'+(cat_index+1)+'-'+(index+1)" 
            :active='$store.state.todos.activeTODO==index'>
              <TODOCheckbox 
              :todo-id="index"
              :category-id="$store.state.todos.activeCategory-1"
              :todo-is-completed="$store.state.todos.todoData[$store.state.todos.activeCategory-1].todos[index].is_completed"
              ></TODOCheckbox>
              {{todo.title}}
              <p class="float-right">{{todo.deadline}}</p>
					  </b-list-group-item>
          </ul>
			</b-col>
		</b-row>
</template>


<script>
import TODOCheckbox from '~/components/parts/TODOCheckbox.vue'

export default {
  name: 'TODOList',
  components: {
    TODOCheckbox,
  },
  props:['activeCategory','activeTodo'],
  methods: {
    setActiveTODO:function(event){
      console.log(event);
      this.$store.dispatch('todos/setActiveTask', event.target.dataset.todoid)
    }
  },
}
</script>