<template>
	<b-list-group-item v-if="$store.state.todos.isAddingCategory">
		<b-form-group
    	id="input-group-1"
    	label="Category name">
			<b-form-input v-model="categoryData.category_name" id="categoryName" name="name" type="name"></b-form-input>
		</b-form-group>

		<b-form-group
    	id="input-group-1"
    	label="Color">
			<b-textarea v-model="categoryData.color" type="text"></b-textarea>
		</b-form-group>


		<b-button type="submit" variant="primary" v-on:click="addCategory">Submit</b-button>

	</b-list-group-item>
</template>

<script>


export default {
  name: 'AddCategoryFormInList',
  components: {
  },
  props:[],
  data:function(){
	  return{
		  categoryData:{
				category_id:"",
				category_name:"",
				color:"",
				todos:[]
		  }
	  }
  },
  methods: {
	  	addCategory:function(event){

			//Storeに保存
			this.$store.dispatch('todos/addCategory', this.categoryData)
			this.$store.dispatch("todos/toggleTaskForm")
		}
  },
}
</script>
