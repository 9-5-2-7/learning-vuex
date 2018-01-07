<template>
    <div>
        {{ count }}

        <p>
            <button @click="increment">+1</button>
        </p>
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'

    export default {
        computed: mapState(['count']), // after by using mapState(), `count` point to `state.count`

        methods: {
            // but now, we still duplicate `increment` now
            // vuex also provide "mapMutations"
            // increment() {
            //     this.$store.commit('increment')
            // }

            ...mapMutations(['increment']),

            // your custom methods gose here
            // ...
        }
    }


    // 假设其它的 component 也需要这个 'count' -- Other.vue
</script>