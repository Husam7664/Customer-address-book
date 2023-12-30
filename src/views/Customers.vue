<template>
<div class="mr-xl">
    <div class="d-flex flex-row">
      <h1>Hello Evano,</h1>
      <!-- add item btn here -->
      <v-btn
        class="ml-auto mb-2 text-green"
        color="green-lighten-4"
        dark
        size="35px"
        icon="fa-solid fa-plus"
        @click="addCustomer = !addCustomer"
      />
    </div>
    <AddCustomer v-model="addCustomer"/>
    <v-card class="d-flex flex-wrap justify-space-around rounded-xl">
      <CustomerOverView
      v-bind="{
                title: 'Total Customers',
                stats: '5,423',
                change: -16,
                // 16% this month
              }"
      />
      <v-divider
        class="ms-3"
        inset
        vertical
      />
      <CustomerOverView
      v-bind="{
                title: 'Members',
                stats: '1,893',
                change: 1, 
                // 1% this month
              }"
      />
      <v-divider
        class="ms-3"
        inset
        vertical
      />
      <CustomerOverView
      v-bind="{
                title: 'Active Now',
                stats: '189',
                change: 72.80,
              }"
      />
    </v-card>

    <CustomerTable />
   


</div>
</template>

<script>
import { ref } from 'vue';
import CustomerOverView from '@/components/customerOverView.vue';
import CustomerTable from '@/components/customerTable.vue';
import AddCustomer from '@/components/AddCustomer.vue';
export default {
name : 'Customers', 
components: {
    CustomerOverView,
    CustomerTable,
    AddCustomer,
},
setup() {
    const addCustomer = ref(false)
    return {
      addCustomer,
    }
  }

}
</script>
