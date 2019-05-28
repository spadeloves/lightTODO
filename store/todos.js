// 状態管理したい要素に名前をつけて、stateとしてexportする
export const state = () => ({
  // 'todoData' という名前の状態を管理する
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
  ]
})

// 状態を変更する処理は mutationとしてexportする
export const mutations = {
  // ここでは todoData の状態（値）を変更する処理を定義
  setTodoFromStore(state, value) {
    state.todoData = value
  },
}

// 実際に各コンポーネントから呼び出す処理をactionとしてexportする
export const actions = {
  writeHoge(context, value) {
    // コミットすることで状態変更が反映される
    context.commit('setTodoFromStore', value)
  },
  vuexTest(){   
    alert("hogehoge")
  }
}