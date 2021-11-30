<script lang="ts">
import { defineComponent } from 'vue'
import useStore from '@/store'
import { mapActions } from 'pinia'
export default defineComponent({
    data() {
        // window.api.v1.ok.test2()
        // this.api.v1.test2()
        //     .then(res => {
        //         console.log(res.data)
        //     })
        // this.axios({
        //     data: {
        //         a: 'ok'
        //     },
        //     url: 'okokok'
        // })
        return {
            msg: 'okok',
            count: 0
        }
    },
    computed: {
        loading() {
            return window.store.index.loading
        }
    },
    methods: {
        ...mapActions(useStore, ['logout']),
        handleLogout() {
            this.logout()
            this.$router.push({ name: 'login' })
        }
    }
})
</script>

<template>
    <h1>{{ msg }}</h1>

    <p>
        Recommended IDE setup:
        <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
        +
        <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    </p>

    <p>See <code>README.md</code> for more information. {{ loading }}</p>

    <p>
        <a href="https://vitejs.dev/guide/features.html" target="_blank">
        Vite Docs
        </a>
        |
        <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
    </p>

    <button type="button" @click="count++">count is: {{ count }}</button>
    <p>
        Edit
        {{ loading }}
        <code>components/HelloWorld.vue</code> to test hot module replacement.
        <el-button @click="handleLogout">注销</el-button>
    </p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
