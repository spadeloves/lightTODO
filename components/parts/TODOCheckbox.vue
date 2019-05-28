<template>
	<i class="far fa-check-square" v-if='todoIsCompleted' v-on:click="$store.dispatch('todos/toggleTaskStatus',{category_id:categoryId,todo_id:todoId})"></i>
    <i class="far fa-square" v-on:click="$store.dispatch('todos/toggleTaskStatus',{category_id:categoryId,todo_id:todoId})" v-else></i>
</template>

<script>
export default {
  name: 'TODOCheckbox',
  props:['todoId','categoryId','todoIsCompleted'],
  methods: {
  	changeTODOStatus:function(status){
  		console.log(this.todoIsCompleted);
  		this.todoIsCompleted = status;
  		console.log(this.todoIsCompleted);
  	}
  },
}
</script>