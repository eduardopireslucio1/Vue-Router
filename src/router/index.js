import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import(/* webpackChuncName:"home" */'../views/Home')
const Company = () => import(/* webpackChuncName:"company" */'../views/Company')
const Contact = () => import(/* webpackChuncName:"contact" */'../views/Contact')
const Error404 = () => import(/* webpackChuncName:"404" */'../views/404')
const Team = () => import(/* webpackChuncName:"team" */'../views/Team')
const CompanyHistory = () => import(/* webpackChuncName:"company-history" */'../views/CompanyHistory')
const CompanyAwards = () => import(/* webpackChuncName:"company-awards" */'../views/CompanyAwards')

const routes = [
    { 
        path: '/', 
        name: 'home', 
        component: Home 
    },

    { 
        path: '/empresa', 
        name: 'company', 
        component: Company,
        meta: {
            sidebar: true,
        },
        children: [
            {
                path: 'historia',
                name: 'company-history',
                component: CompanyHistory
            },
            {
                path: 'premios',
                name: 'company-awards',
                component: CompanyAwards
            }
        ]
    },

    { 
        path: '/equipe/:member(\\w+)?',
        name: 'team',
        component: Team, 
        props: route => ({ member: route.params.member, color: 'black' }) 
    },
    
    { 
        path: '/contato',
        name: 'contact',
        meta: {
            auth: true,
        },
        component: Contact,
    },
    
    { 
        path: '/:pathMatch(.*)', 
        component: Error404 
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: -30 }
    }
});

export default router;