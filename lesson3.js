const App={
    data(){
        return {
            message: "Rudra",
            anothermessage: "Arun"
        }
    }

};

const rootApp=Vue.createApp(App);
rootApp.component('child', {
    props: ['customername'],
    template: `<h1>Hello Mr {{customername}}</h1>`


});
rootApp.mount('#testApp')

