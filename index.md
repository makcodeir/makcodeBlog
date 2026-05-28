---
title: Home
---

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vitepress'

const router = useRouter()

onMounted(() => {
  router.go('/posts/')
})
</script>

در حال انتقال به وبلاگ...

