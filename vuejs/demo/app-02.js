
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
            title: 'Notes',
            placeholder: 'Enter Note',
            inputValue: '',
            notes: ['Hey', 'Hey2']
        };

        return ret;
    }

    methods = {
        onInput(event)
        {
            console.log(event.target.value);
            let val = event.target.value;
            this.inputValue = val;
        },

        onAddClick()
        {
            if (this.inputValue == '') {
                return;
            }

            this.notes.push(this.inputValue);
            this.inputValue = "";          
        },

        onKeyPress(event)
        {
            if (event.key == 'Enter') {
                this.onAddClick();
            }
        },

        onDeleteClick(index, event)
        {
            console.log(index);
            this.notes.splice(index, 1);
        }
    }

    computed = {
        doubleCount()
        {
            return this.notes.length * 2;
        }
    }

    watch = {
        //
        inputValue(value)
        {
            console.log('watch:', value);
        }
    }
}

var demoApp = new App();

const app = Vue.createApp(demoApp);
app.mount('#container');