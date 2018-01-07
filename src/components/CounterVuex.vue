<template>
    <div>
        {{ count }}

        <p>
            <button @click="increment">+1</button>
        </p>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        // by using vuex, wo don't using data(),
        // instead using computed property
        computed: {
            count() {
                // now we referring to vuex state
                return window.store.state.count
            }
        },

        methods: {
            increment() {
                // instead of direct change vuex state,
                // we using mutation to change state
                window.store.commit('increment')
            }
        }
    }

    // 但是你会注意到一个问题，现在你用了 vuex
    // 你会发现，在这个 component 里你需要 "count" "increment" (可能你还会有更多的component使用它)
    // 同时你 vuex 也有 "count", "increment"
    // 你就一直再重复同样的东西！违背了 DRY

    // 所以 vuex 提供了 mapState -- see CounterVuex2.vue
</script>