<template>
    <div>
        <h3>Todos</h3>
        <div class="todos">
            <div @dblclick="onDblclick(todo)" v-for="todo in allTodos"
             v-bind:key="todo.id" class="todo" v-bind:class="{'is-complete':todo.completed}"
             >
                {{ todo.title }}
                <i class="fas fa-trash-alt" v-on:click="deleteTodo(todo.id)"></i>
            </div>
        </div>
    </div>

</template>

<script>
import {mapGetters , mapActions} from 'vuex'
export default {
    name:'Todos',
    methods: {
        ...mapActions(['fetchTodos', 'deleteTodo' , 'updateTodo']),
        onDblclick(todo){
            const updTodo = {
                id: todo.id,
                title:todo.title,
                completed: !todo.completed
            }
            this.updateTodo(updTodo)
        }
     },
    computed : mapGetters(['allTodos']),
    created(){
        this.fetchTodos();
    }
}
</script>

<style scoped>
    .todos{
        display:grid;
        grid-template-columns: repeat(3, 1fr);
        grid-row-gap: 1rem;
    }
    .todo{
        border:1px solid #ccc;
        background:#42b883;
        padding:1rem;
        border-radius: 5px;
        text-align: center;
        position:relative;
        cursor:pointer;
    }
    i{
        position:absolute;
        bottom:10px;
        right: 10px;
        color:#fff;
        cursor:pointer;
    }
    .legend{
        display:flex;
        justify-content: space-around;
        margin-bottom:1rem;
    }
    .complete-box{
        display:inline-block;
        width: 10px;
        height:10px;
        background: #35495e;
    }
    .incomplete-box{
        display:inline-block;
        width:10px;
        height: 10px;
        background: #41b883;
    }
    .is-complete{
        background:#35495e;
        color:#fff;
    }
    @media(max-width: 500px){
        .todos{
            grid-template-columns: 1fr;
        }
    }
</style>