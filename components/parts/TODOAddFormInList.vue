<template>
	<b-list-group-item v-if="$store.state.todos.isAddingTask">
  		<b-form-group
    	id="input-group-1"
    	label="Email address:"
    	label-for="input-1"
    	description="We'll never share your email with anyone else.">
    	    <b-form-select class="mb-3">
    	    	<option value="null">Please select an option</option>
    	    </b-form-select>
      		<b-form-input id="taskTitle" name="taskTitle" type="text"></b-form-input>
	    </b-form-group>

  		</b-list-group-item>
</template>

<script>
export default {
  name: 'TODOAddFormInList',
  props:[],
  methods: {
  },
}
</script>