import { createApp } from 'vue'
import {createRouter, createWebHistory}  from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library  } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown, faBullseye, faClose, faPeopleGroup, faRotateRight } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons'
import App from './App.vue'


import './assets/main.css'
import { faBuilding, faComment, faUser, } from '@fortawesome/free-regular-svg-icons'

const router = createRouter( {
    history: createWebHistory(),
    routes: [
       {path: '/Employee-Assessment', name: 'Home', component: import('./components/home.vue'),
        children: [
            {path: '/Employee-Assessment/individual', name: 'Individual', component: import('./components/individual.vue')},
            {path: '/Employee-Assessment/team', name: 'Team', component: import('./components/team.vue')},
            {path: '/Employee-Assessment/company', name: 'Company', component: import('./components/company.vue')},
        ]    
    },
       {path: '/reviews', name: 'Review', component: import('./components/reviews.vue')},
       {path: '/feedback', name: 'Feedback', component: import('./components/feedback.vue')},
       
    ]
})

library.add(faAngleDown, faYoutube, faGithub, faBullseye, faComment, faRotateRight, faUser, faPeopleGroup, faBuilding, faClose)
createApp(App).use(router).component('fa', FontAwesomeIcon).mount('#app')

export default router