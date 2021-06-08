<template>
  <div>recommend</div>
</template>

<script>
import { getRecommend } from '@/service/recommend'

export default {
  data() {
    return {}
  },
  async created() {
    const result = await getRecommend()
    console.log('result', result)
  }
}
</script>