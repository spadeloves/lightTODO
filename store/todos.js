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
  todoData: [
    {
      category_id: 1,
      category_name: "家事",
      color:"#F96262",
      todos:[
        {
          title: "洗濯する",
          note: "洗濯して、干す。今かかってる洗濯物をたたむ。",
          deadline: "2019/06/01",
          is_completed:true,
          comments:[
            {
              date:"2019/05/26 13:13",
              content:"今かかってる洗濯物は取り込んだ"
            },
            {
              date:"2019/05/26 14:30",
              content:"ハンガーが足りないかもしれないので、あたらしく買っておいたほうがいいかも"
            },
          ]
        },
        {
          title: "料理作る",
          note: "スパゲッティつくる。カルボナーラの予定",
          deadline: "2019/06/01",
          is_completed:false,
          comments:[
            {
              date:"2019/05/28 12:54",
              content:"材料はすべて買ってある。"
            },
          ]
        },
      ]
    },
    {
      category_id: 2,
      category_name: "仕事",
      color:"#78D3CE",
      todos:[
        {
          title: "資料作る",
          note: "〇〇商社のプレゼン用。上司チェック必須。",
          deadline: "2019/06/21",
          is_completed:true,
          comments:[
            {
              date:"2019/05/28 15:42",
              content:"イメージ図については、田中君が代わりに作成してくれるとのこと"
            },
            {
              date:"2019/06/11 10:43",
              content:"上司より、目次をつけておくように指摘を受けた"
            },
          ]
        },
        {
          title: "メールする",
          note: "〇〇さんの進捗報告メールの確認、返信。",
          deadline: "2019/06/23",
          is_completed:false,
          comments:[
          ]
        },
        {
          title: "週報出す",
          note: "週報テンプレート Document¥personal¥template.md",
          deadline: "2019/06/23",
          is_completed:false,
          comments:[
            {
              date:"2019/06/19",
              content:"鈴木さんの週報がよい参考になるとのこと"
            },
          ]
        },
      ]
    },
    // {
    //   category_id: 3,
    //   category_name: "映画",
    //   color:"#FF23D3",
    //   todos:[]
    // },
  ]
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
}
