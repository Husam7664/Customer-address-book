<script>
import { ref } from 'vue';

export default {
    name: 'NavItem',
    props: {
        item: {
            type: Object,
            default: () => ({}),
        },
        level: {
            type: Number,
            default: 0,
        },
    },

    setup(props) {
        const item = ref(props.item);
        const level = ref(props.level);

        return {
            item,
            level,
        };
    },
};

</script>

<template>
    <!---Single Item-->
    <v-list-item
        :to="item.to"
        active-class="white--text text--darken-4 bg-deep-purple-accent-3"
        rounded="lg"
        class="mb-3"
    >
        <!---If icon-->
        <template v-slot:prepend>
            <!-- <v-icon :item="item.icon" :level="level" /> -->
            <v-icon :icon="item.icon.name" size="20" />
            <!-- <div class="pl-2">{{ item.title }}</div> -->
        </template>
        <v-list-item-title>{{item.title }}</v-list-item-title>
        <!---If Caption-->
        <template v-slot:append>
            <!-- <v-icon icon="" small/> -->
            <v-icon icon="fa-solid fa-chevron-right" size="10"/>
        
        </template>
    </v-list-item>
</template>
<style>
.v-list-item__prepend {
    align-items: start;
    align-self: flex-start;
    display: flex;
    width: 30px;
}
</style>