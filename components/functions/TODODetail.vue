<template>
  <section>
    <b-row>
      <b-col>
        <h2>  
          <TODOCheckbox 
          :todo-id="activeTodo"
          :category-id="activeCategory-1"
          :todo-is-completed="todoData[activeCategory-1].todos[activeTodo].is_completed"
          ></TODOCheckbox>
          {{todoData[activeCategory-1].todos[activeTodo].title}}
        </h2>
      </b-col>
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
    <b-row>
      <b-col>
        <b-list-group>
          <b-list-group-item 
          class="flex-column align-items-start"
          v-for='(comment,index) in todoData[activeCategory-1].todos[activeTodo].comments' :key='index' 
          >
            <div class="d-flex w-100 justify-content-between">
              <small>{{comment.date}}</small>
            </div>
            <p class="mb-1">
              {{comment.content}}
            </p>
          </b-list-group-item>
        </b-list-group>
      </b-col>
    </b-row>
  </section>
</template>


<script>
import TODOCheckbox from '~/components/parts/TODOCheckbox.vue'

export default {
  components: {
    TODOCheckbox,
  },
  name: 'TODODetail',
  props:['todoData','activeTodo','activeCategory','selectedTODO','categoryName'],
  methods: {
  },
}
</script>