const { createApp } = Vue

createApp({
    data() {
        return {
            todo: [
                {
                    text: 'Fare l\'esercizio di Boolean',
                    done: true
                },
                {
                    text: 'Comprare il pane',
                    done: false
                },
                {
                    text: 'Studiare',
                    done: false
                },
                {
                    text: 'Giocare col gatto',
                    done: true
                },
                {
                    text: 'Giocare a Elden Ring',
                    done: false
                },
            ]
        }
    },
    methods: {
        deleteTask(index) {
            this.todo.splice(index, 1);
        }
    }
}).mount('#app')
