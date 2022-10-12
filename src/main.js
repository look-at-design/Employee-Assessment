import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown, faBullseye, faCircleXmark, faClose, faPeopleGroup, faPlus, faRotateRight } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons'
import App from './App.vue'

// component imports
import Home from './components/home.vue'
import Individual from './components/individual.vue'
import Team from './components/team.vue'
import Company from './components/company.vue'
import Reviews from './components/reviews.vue'
import Feedback from './components/feedback.vue'
import NotFound from './components/notfound.vue'


import './assets/main.css'
import { faBuilding, faComment, faUser, } from '@fortawesome/free-regular-svg-icons'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/:catchAll(.*)', component: NotFound },
        {
            path: '/home', name: 'Home', component: Home,
            children: [
                { path: '/', name: 'Individual', component: Individual },
                { path: '/home/team', name: 'Team', component: Team },
                { path: '/home/company', name: 'Company', component: Company },
            ]
        },
        { path: '/reviews', name: 'Review', component: Reviews },
        { path: '/feedback', name: 'Feedback', component: Feedback },

    ]
})

library.add(faAngleDown, faYoutube, faGithub, faBullseye, faComment, faRotateRight, faUser, faPeopleGroup, faBuilding, faClose, faPlus, faCircleXmark)
createApp(App).use(router).component('fa', FontAwesomeIcon).mount('#app')

export default router