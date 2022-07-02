
// const App = {
//     data() {
//         ret = {
//             counter: 2021
//         };

//         return ret;
//     }
// }

// const app = Vue.createApp(App);
// app.mount('#container');



class App
{
    data()
    {
        let ret = {
            counter: 2021
        };

        return ret;
    }
}

var demoApp = new App();

const app = Vue.createApp(demoApp);
app.mount('#container');
