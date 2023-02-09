import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const isLogged = false;

router.beforeEach((to, from, next) => {
    let nextPage = null; 
    if (to.meta.auth && !isLogged) {
        nextPage = { name: 'home' }
    } 

    next(nextPage);
    
})

createApp(App)
    .use(router)
    .mount('#app')
