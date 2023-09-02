// store/index.js
import { createStore } from 'vuex'
import stack from './modules/stack'
import message from './modules/message'

const store = createStore({
    modules: {
        stack,
        message,
    },
})

export default store
