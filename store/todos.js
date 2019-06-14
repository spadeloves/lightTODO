// 状態管理したい要素に名前をつけて、stateとしてexportする
export const state = () => ({
  // //選択されているカテゴリ
  activeCategory:1,
  //選択されているタスク（Index）
  activeTODO:0,
  //タスク追加モードフラグ
  isAddingTask:0,
  //カテゴリ追加モードフラグ
  isAddingCategory:0,
  // タスクデータ
  // TODO: 動的に読み込むようにする
  todoData: [],
})

// 状態を変更する処理は mutationとしてexportする
export const mutations = {
  // ここでは todoData の状態（値）を変更する処理を定義
  setTodoStatusFromStore(state,todoInfo) {
    state.todoData[todoInfo.category_id].todos[todoInfo.todo_id].is_completed = !state.todoData[todoInfo.category_id].todos[todoInfo.todo_id].is_completed
  },
  // 選択されているカテゴリID の状態（値）を変更する処理を定義
  setAcrtiveCategoryFromStore(state,category_id) {
    state.activeCategory= category_id
  },
  // 選択されているTodoID の状態（値）を変更する処理を定義
  setAcrtiveTaskFromStore(state,todo_id) {
    state.activeTODO= todo_id
  },
  // タスク追加モードを変更する処理を定義
  toggleTaskAddingMode(state) {
    state.isAddingTask = !state.isAddingTask
  },
  // カテゴリ追加モードを変更する処理を定義
  toggleCategoryAddingMode(state) {
    state.isAddingCategory = !state.isAddingCategory
  },
  // タスクの追加
  addTodo(state, todoData) {
    state.todoData[todoData.category].todos.push(todoData)
  },
  // カテゴリの追加
  addCategory(state, categoryData) {
    categoryData.category_id = state.todoData.length + 1
    state.todoData.push(categoryData)
  },
  // カテゴリの追加
  addComment(state, commentData) {
    state.todoData[state.activeCategory-1].todos[state.activeTODO].comments.push(commentData)
  },
}


// 実際に各コンポーネントから呼び出す処理をactionとしてexportする
export const actions = {
  toggleTaskStatus(context,todoInfo){
    context.commit('setTodoStatusFromStore',todoInfo)
  },
  setActiveCategory(context,category_id){
    context.commit('setAcrtiveCategoryFromStore',category_id)
  },
  setActiveTask(context,todo_id){
    context.commit('setAcrtiveTaskFromStore',todo_id)
  },
  toggleTaskForm(context){
    context.commit('toggleTaskAddingMode')
  },
  toggleCategoryForm(context){
    context.commit('toggleCategoryAddingMode')
  },
  addTask(context, todoData) {
    context.commit('addTodo',todoData)
  },
  addCategory(context, categoryData) {
    context.commit('addCategory',categoryData)
  },
  addComment(context, commentData) {
    context.commit('addComment', commentData)
  },
}
