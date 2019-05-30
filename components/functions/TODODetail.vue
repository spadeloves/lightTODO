<template>
  <section>
    <b-row>
      <b-col>
        <h2>  
          <TODOCheckbox 
          :todo-id="$store.state.todos.activeTODO"
          :category-id="$store.state.todos.activeCategory-1"
          :todo-is-completed="$store.state.todos.todoData[$store.state.todos.activeCategory-1].todos[$store.state.todos.activeTODO].is_completed"
          ></TODOCheckbox>
          {{$store.state.todos.todoData[$store.state.todos.activeCategory-1].todos[$store.state.todos.activeTODO].title}}
        </h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <p><i class="fas fa-folder-open"></i> {{$store.state.todos.todoData[$store.state.todos.activeCategory-1].category_name}}</p>
      </b-col>
      <b-col>
        <p><i class="fas fa-calendar-day"></i> {{$store.state.todos.todoData[$store.state.todos.activeCategory-1].todos[$store.state.todos.activeTODO].deadline}}</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <p>{{$store.state.todos.todoData[$store.state.todos.activeCategory-1].todos[$store.state.todos.activeTODO].note}}</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-list-group>
          <b-list-group-item 
          class="flex-column align-items-start"
          v-for='(comment,index) in $store.state.todos.todoData[$store.state.todos.activeCategory-1].todos[$store.state.todos.activeTODO].comments' :key='index' 
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
  methods: {
  },
}
</script>