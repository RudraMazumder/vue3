const App = {
    data() {
        return {

            searchText: '',
            columns: ["title", "year"],
            movies: [
                {
                    name: "Rambo 1",
                    year: 1996
                },
                {
                    name: "Rambo 2",
                    year: 1995
                },
                {
                    name: "Rambo 3",
                    year: 2001
                },
                {
                    name: "Equalizer",
                    year: 2014
                },
                {
                    name: "Godzilla",
                    year: 2002
                },
                {
                    name: "God father",
                    year: 2005
                }
            ]

        }

    },
    methods :{
        sortAscendingByYear(){
            this.movies.sort((a,b)=>a.year>b.year?1:-1);
        },
        sortDescendingByYear(){
            this.movies.sort((a,b)=>a.year>b.year?-1:1);
        }
       
    },
    computed: {
        filterItems(){
            let filter = new RegExp(this.searchText,'i');
            return this.movies.filter(e1=>e1.name.match(filter))
        }
    }

    
}

Vue.createApp(App).mount('#app1')