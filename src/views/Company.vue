<template>
    <div>
        <h5>Company</h5>
    </div>
    
    <div :class="{ 'sidebar': sidebar }">
        <router-link :to="{ name:'company-history' }">História</router-link> | 
        <router-link :to="{ name:'company-awards' }">Premios</router-link>
    </div>

    <router-view></router-view>
</template>

<script>
    export default {
        name: 'Company',
        
        data() {
            return {
                
            };
        },

        swatch: {
            '$route'(newValue, oldValue) {
                console.log(newValue);
                console.log(oldValue);
            }
        },

        beforeRouteEnter(to, from, next) {
            console.log('=>>>> beforeRouteEnter');
            console.log('to', to);
            console.log('from', from);
            next();
        },

        beforeRouteUpdate(to, from, next) {
            console.log('=>>>> beforeRouteUpdate');
            console.log('to', to);
            console.log('from', from);
            next();
        },

        beforeRouteLeave(to, from, next) {
            console.log('=>>>> beforeRouteLeave');
            console.log('to', to);
            console.log('from', from);
            next();
        },

        computed: {
            sidebar() {
                return this.$route.meta.sidebar;
            }
        },

        methods: {
            
        },
    };
</script>

<style>
.sidebar {
    background-color: #CCC;
    padding: 5px;
}
</style>

