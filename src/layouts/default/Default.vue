<template>
  <v-app>
    <default-bar :sidebarMenu="sidebarMenu"/>
      <v-navigation-drawer
        v-model="drawer"
        rail
        permanent
        class="d-xl-none d-lg-none"
      >
        <v-list-item
          title="John Leider"
          nav
          class="px-2 mb-4"
        >
          <template v-slot:prepend>
            <div class="mt-2">
              <Icon icon="mynaui:stop-hexagon" color="black" width="42" height="42" />
            </div>
          </template>
          <template v-slot:append>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <!-- <v-divider></v-divider> -->

        <v-list density="compact" nav>
          <template v-for="(item, i) in sidebarMenu" :key="i">
          <v-list-item 
            :prepend-icon="item.icon.name" 
            :title="item.title" 
            :to="item.to"
            active-class="white--text text--darken-4 bg-deep-purple"
            class="px-2 mb-4"
          >
          </v-list-item>
          </template>
        </v-list>
      </v-navigation-drawer>
  
    <default-view />
  </v-app>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import DefaultBar from '../Main.vue'
  import DefaultView from './View.vue'
  import { Icon } from '@iconify/vue';

  const drawer = ref(true)
  const rail = ref(true)
  const sidebarMenu = [
    {
        "title": "Dashboard",
        "icon": {
            "name": "fa-brands fa-hashnode",
        },
        "to": "/dashboard"
    },
    {
        "title": "Product",
        "icon": {
            "name": "fa-solid fa-cube",
        },
        "to": "/product"
    },
    {
        "title": "Customers",
        "icon": {
            "name": "fa-regular fa-id-badge",
        },
        "to": "/customers"
    },
    {
        "title": "Income",
        "icon": {
            "name": "fa-solid fa-wallet",
        },
        "to": "/income"
    },
    {
        "title": "Promote",
        "icon": {
            "name": "fa-solid fa-certificate",
        },
        "to": "/promote"
    },
    {
        "title": "Help",
        "icon": {
            "name": "MoodHappyIcon",
        },
        "to": "/help"
    },
]

</script>
