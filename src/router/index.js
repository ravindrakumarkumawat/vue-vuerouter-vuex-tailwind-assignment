import { createRouter, createWebHistory } from 'vue-router'
import Chat from '/src/components/ChatRoom.vue'
import Join from '/src/components/JoinRoom.vue'

const routes = [
    {
        path: '/',
        name: 'join',
        component: Join,
    },
    {
        path: '/chat',
        name: 'chat',
        component: Chat,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
