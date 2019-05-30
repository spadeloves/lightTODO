<template>
	<i class="fas fa-plus float-right" v-bind:style="{fontSize: size + 'em', color: color}"></i>
</template>

<script>
export default {
  name: 'addTodoButton',
  props:[
    "size",
  	"color",
  ],
  methods: {
  	changeTODOStatus:function(status){
  		this.todoIsCompleted = status;
  	}
  },
}
</script>