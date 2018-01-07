<template>
    <div>The count from that other unrelated component is: {{ count }}</div>
</template>

<script>
    export default {
        computed: {
            count() {
                return this.$store.state.count
            }
        }
    }

    // 但是通常，我们都会把 store 创建单独的文件 -- src/store/index.js
    // 把 main.js 的 store 部分移到 src/store/index.js
</script>