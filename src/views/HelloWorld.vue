<template>
    <h1>
      <WpTooltip title="232323">
        <div>
            sdds
        </div>
      </WpTooltip>
      Hello, World.
    </h1>
</template>

<script lang="ts">
import { WpTooltip } from 'wisdom-plus'
export default defineComponent({
    name: 'Home',
    components: {
        WpTooltip
    }
})
</script>

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
