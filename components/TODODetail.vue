<template>
  <section>
    <b-row>
      <h2>{{todoData[activeCategory-1].todos[activeTodo].title}}</h2>
    </b-row>
    <b-row>
      <b-col>
        <p><i class="fas fa-folder-open"></i> {{todoData[activeCategory-1].category_name}}</p>
      </b-col>
      <b-col>
        <p><i class="fas fa-calendar-day"></i> {{todoData[activeCategory-1].todos[activeTodo].deadline}}</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <p>{{todoData[activeCategory-1].todos[activeTodo].note}}</p>
      </b-col>
    </b-row>
  </section>
</template>


<script>
export default {
  name: 'TODODetail',
  props:['todoData','activeTodo','activeCategory','selectedTODO','categoryName'],
  methods: {
  },
}
</script>