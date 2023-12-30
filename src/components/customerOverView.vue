<script setup>
import { computed, defineProps } from 'vue'
// assets users logo import
import logo from '@/assets/users.svg'
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  // image: {
  //   type: String,
  //   required: true,
  // },
  stats: {
    type: String,
    required: true,
  },
  change: {
    type: Number,
    required: true,
  },
})


const isPositive = computed(() => Math.sign(props.change) === 1)
</script>

<template>
  <!-- <v-card > -->
    <div class="d-flex flex-row" style="max-width: 100%;">
      <v-card-text class="d-flex align-center pb-4">
      <v-avatar color="green-lighten-4" size="84" style="max-width: 100%;">
        <img
          :src="logo"
          alt="image"
        >
      </v-avatar>
    </v-card-text>

    <v-card-text>
      <p class="mb-1">
        {{ props.title }}
      </p>
      <h5 class="text-h5 text-no-wrap mb-3">
        {{ props.stats }}
      </h5>
      <span
        :class="isPositive ? 'text-success' : 'text-error'"
        class="d-flex align-center gap-1 text-sm"
      >
        <VIcon
          size="18"
          :icon="isPositive ? 'bx-up-arrow-alt' : 'bx-down-arrow-alt'"
        />
        {{ isPositive ? Math.abs(props.change) : props.change }}% this month
      </span>
    </v-card-text>
    </div>
    
  <!-- </v-card> -->
</template>
