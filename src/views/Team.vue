<template>
    <div>
        <h5>Equipe</h5>
        {{ color }}
        <div v-if="member">
            Olá {{ member }}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Team',

        props: {
            color: {
                type: String,
                default: '',
            },
            member: {
                type: String,
                default: '',
            }
        },
        
        data() {
            return {
                
            };
        },

        computed: {
            
        },

        methods: {
            
        },
    };
</script>
