<template>
  <router-view />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import router from './router'

onMounted(() => {
  router.push('/customers')
})
  
</script>
