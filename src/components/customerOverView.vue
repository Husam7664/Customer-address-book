<template>
  <div class="d-flex flex-wrap" style="max-width: 100%;">
    <v-card-text class="d-flex align-center pb-4">
    <v-avatar color="green-lighten-4" size="84" style="max-width: 100%;">
      <!-- <img
        :src="logo"
        alt="image"
      > -->
      <Icon :icon="props.icon" color="green" width="42" height="42" />
    </v-avatar>
  </v-card-text>

  <v-card-text>
    <p class="mb-0">
      {{ props.title }}
    </p>
    <h5 class="text-h5 text-no-wrap mb-1 font-weight-bold">
      {{ props.stats }}
    </h5>
    <div class="avatars" v-if="props.title === 'Active Now'">
      <a href="#" class="avatars__item"><img class="avatar" src="https://randomuser.me/api/portraits/women/65.jpg" alt=""></a>
      <a href="#" class="avatars__item"><img class="avatar" src="https://randomuser.me/api/portraits/men/25.jpg" alt=""></a>
      <a href="#" class="avatars__item"><img class="avatar" src="https://randomuser.me/api/portraits/women/25.jpg" alt=""></a>
      <a href="#" class="avatars__item"><img class="avatar" src="https://randomuser.me/api/portraits/men/55.jpg" alt=""></a>
      <a href="#" class="avatars__item"><img class="avatar" src="https://via.placeholder.com/300/09f/fff.png" alt=""></a>
    </div>
    <span
      :class="isPositive ? 'text-success' : 'text-red-accent-4'"
      class="d-flex align-center gap-1 text-sm"
      v-else
    >
      <v-icon
        size="14"
        :icon="isPositive ? 'fa-solid fa-arrow-up' : 'fa-solid fa-arrow-down'"
      />
      {{ isPositive ? Math.abs(props.change) : props.change }}%&nbsp;
      <span class="text-caption text-black">this month</span>
    </span>
  </v-card-text>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { Icon } from '@iconify/vue';
import logo from '@/assets/users.svg'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
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


<style lang="scss" scoped>
.avatars {
  display: flex;
  list-style-type: none;
  margin: auto;
  padding:0px;
  flex-direction: row;
	&__item{
		background-color: #596376;
	  border: 2px solid #ffffff;
	  border-radius: 100%;
	  color: #ffffff;
	  display: block;
	  font-family: sans-serif;
	  font-size: 12px;
	  font-weight: 100;
	  height: 26px;
		width: 26px;
	  line-height: 26px;
	  text-align: center;
		transition: margin 0.1s ease-in-out;
		overflow: hidden;
		margin-left: -10px;
    &:first-child {
      z-index: 5;
    }
    &:nth-child(2) {
      z-index: 4;
    }
    &:nth-child(3) {
      z-index: 3;
    }
    &:nth-child(4) {
      z-index: 2;
    }
		&:nth-child(5) {
      z-index: 1;
    }
    &:last-child {z-index: 0}
    img{width:100%}
	}
	&:hover {
    .avatars__item {
      margin-right:10px;
    }
	}
}
</style>