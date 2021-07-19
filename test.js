const App = {
    data() {
      return {
        comment: '',
        oldComments: [
          'It feels great after nice nap',
          'I like beer',
          'I dont have a pet',
        ],
        checkedNames: [],
        activeClass: 'active',
        name: "rudra",
        optionsValues: [
          {
            id: "Rudra",
            value: "Rudra"
          },
          {
            id: "Arun",
            value: "Arun"
          }
        ]  
        
      }
        
    },
    
    methods: {
      addComment(){
        this.oldComments.push(this.comment)
        this.comment=''
      }
  }
  }
  
  Vue.createApp(App).mount('#app')