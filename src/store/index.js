// import Vuex from 'vuex'
// import Vue from 'vue'
// import todos from './modules/todos';

// Vue.use(Vuex);

// export default new Vuex.Store({
//     modules:{
//         todos
//     }
// })



import { createApp } from 'vue'; // Import createApp from Vue
import Vuex from 'vuex';
import todos from '../store/modules/todos.js';

const app = createApp({}); // Create a new Vue app instance

app.use(Vuex);

export default Vuex.createStore({
    modules: {
        todos
    }
});



