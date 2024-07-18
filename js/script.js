const { createApp } = Vue

createApp({
    data() {
        return {
            newTask: null,
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
        },
        addTask() {
            const newObj = {
                text: this.newTask,
                done: false
            }
            this.todo.push(newObj);
            this.newTask = null;
        }
    }
}).mount('#app');
