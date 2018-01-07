<template>
    <div>
        {{ count }}

        <p>
            <button @click="increment">+1</button>
        </p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                count: 0
                // Q: how about other component, also want to tracking this count?
                // you may want to create global variable store this count,
                // and once change than `$emit` this change to that variable
                // or using vue eventbus
            }
        },
        methods: {
            increment() {
                this.count++
            }
        }
    }
</script>