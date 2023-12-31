<template>
    <!------Sidebar-------->
    <v-navigation-drawer left elevation="0"  app class="leftSidebar"  v-model="sDrawer">
        <div class="pa-5">
            <Logo />
        </div>
        <!---Navigation -->
        <div>
            <v-list class="pa-6">
                <!---Menu Loop -->
                <template v-for="(item, i) in sidebarMenu" :key="i">
                    <NavItem :item="item"  class="leftPadding" />
                </template>
            </v-list>
    </div>
    </v-navigation-drawer>
</template>

<script>
import { ref, onMounted } from 'vue';
import NavItem from './vertical-sidebar/NavItem/index.vue';
import sidebarItems from './vertical-sidebar/sidebarItem';
import Logo from './Logo.vue';

export default {
    name: 'Main',
    components: {
        NavItem,
        Logo,
    },
    setup() {
      const sDrawer = ref(true);
      const sidebarMenu = ref(sidebarItems);
      return {
          sDrawer,
          sidebarMenu,
      };
    },
};
</script>