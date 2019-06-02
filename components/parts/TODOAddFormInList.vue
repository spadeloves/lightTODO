<template>
	<b-list-group-item v-if="$store.state.todos.isAddingTask">
  		<b-form-group
    	id="input-group-1"
    	label="Category">
    	    <b-form-select v-model="todoData.category" name="category" class="mb-3">
    	    	<option :value=index v-for='(category,index) in $store.state.todos.todoData' :key='index'
				:selected="$store.state.todos.activeCategory==index"
				>{{category.category_name}}</option>
    	    </b-form-select>
	    </b-form-group>

		<b-form-group
    	id="input-group-1"
    	label="Task">
			<b-form-input v-model="todoData.title" id="taskTitle" name="title" type="text"></b-form-input>
		</b-form-group>

		<b-form-group
    	id="input-group-1"
    	label="Deadline">
		<datepicker bootstrap-styling="true" format="yyyy/MM/dd" v-model="todoData.deadline" ></datepicker>
		</b-form-group>


		<b-button type="submit" variant="primary" v-on:click="addTask">Submit</b-button>

  		</b-list-group-item>
</template>

<script>
import Datepicker from 'vuejs-datepicker';


export default {
  name: 'TODOAddFormInList',
  components: {
    Datepicker
  },
  props:[],
  data:function(){
	  return{
		  todoData:{
			title:"",
			category:"",
			deadline:"",
			is_completed:false,
			comments:[],
			deadline:"",
			note:""
		  }
	  }
  },
  methods: {
	  	addTask:function(event){
			//日付を整形
			var moment = require('moment');
			this.todoData.deadline = moment(this.todoData.deadline).format("YYYY/MM/DD")

			//Storeに保存
			this.$store.dispatch('todos/addTask', this.todoData)
		}
  },
}
</script>