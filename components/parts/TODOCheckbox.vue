<template>
	<i class="far fa-check-square" v-if='todoIsCompleted'></i>
    <i class="far fa-square" v-else></i>
</template>

<script>
export default {
  name: 'TODOCheckbox',
  props:['todoId','categoryId','todoIsCompleted'],
  methods: {
  },
}
</script>