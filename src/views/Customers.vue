<template>
<div class="mr-xl">
    <div class="d-flex flex-row my-2">
      <p class="text-h4">Hello Evano <span>&#128075;&#127996;</span>,</p>
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
    <AddCustomer v-model="addCustomer" @addNewCustomer="addNewCustomer"/>
    <v-card class="d-flex flex-wrap justify-space-around rounded-xl customer-overview">
      <template v-for="(item, i) in customerOverView" :key="i">
        <CustomerOverView
          v-bind="item"
        />
        <v-divider
          class="ms-3"
          inset
          vertical
          v-if="i !== customerOverView.length - 1"
        />
      </template>
    </v-card>
    <CustomerTable :customersList="customersList" />
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
    const customerOverView = ref([
      {
        title: 'Total Customers',
        stats: '5,423',
        change: 16,
      },
      {
        title: 'Members',
        stats: '1,893',
        change: -1,
      },
      {
        title: 'Active Now',
        stats: '189',
        change: 72.80,
      },
    ])
    const customersList = ref([
    {
      customerName: 'John Doe',
      company: 'ABC Corp',
      phoneNumber: '123-456-7890',
      email: 'john.doe@example.com',
      country: 'USA',
      status: 'Active',
      addresses: [
        {
          number: '456',
          street: 'Broadway Ave',
          cityState: 'CityB',
        },
        {
          number: '789',
          street: 'Park Blvd',
          cityState: 'CityC',
        },
      ],
    },
    {
      customerName: 'Jane Smith',
      company: 'XYZ Ltd',
      phoneNumber: '987-654-3210',
      email: 'jane.smith@example.com',
      country: 'Canada',
      status: 'Inactive',
      addresses: [
        {
          number: '101',
          street: 'Main St',
          cityState: 'CityX',
        },
      ],
    },
    {
      customerName: 'Alice Johnson',
      company: '123 Industries',
      phoneNumber: '555-123-4567',
      email: 'alice.johnson@example.com',
      country: 'UK',
      status: 'Active',
      addresses: [
        {
          number: '222',
          street: 'Elm St',
          cityState: 'CityY',
        },
        {
          number: '333',
          street: 'Oak St',
          cityState: 'CityZ',
        },
      ],
    },
    {
      customerName: 'Bob Williams',
      company: '456 Co.',
      phoneNumber: '789-012-3456',
      email: 'bob.williams@example.com',
      country: 'Australia',
      status: 'Inactive',
      addresses: [
        {
          number: '777',
          street: 'Pine St',
          cityState: 'CityA',
        },
      ], 
    },
    {
      customerName: 'Eva Davis',
      company: '789 Enterprises',
      phoneNumber: '234-567-8901',
      email: 'eva.davis@example.com',
      country: 'Germany',
      status: 'Active',
      addresses: [
        {
          number: '444',
          street: 'Maple Ave',
          cityState: 'CityW',
        },
      ],
    },

      // {
      //   customerName: 'Mike Brown',
      //   company: 'Acme Corp',
      //   phoneNumber: '567-890-1234',
      //   email: 'mike.brown@example.com',
      //   country: 'France',
      //   status: 'Inactive',
      // },
      // {
      //   customerName: 'Sara Miller',
      //   company: 'Tech Solutions',
      //   phoneNumber: '345-678-9012',
      //   email: 'sara.miller@example.com',
      //   country: 'Spain',
      //   status: 'Active',
      // },
      // {
      //   customerName: 'Tom Clark',
      //   company: 'Global Innovations',
      //   phoneNumber: '901-234-5678',
      //   email: 'tom.clark@example.com',
      //   country: 'Italy',
      //   status: 'Inactive',
      // },
      // {
      //   customerName: 'Grace White',
      //   company: 'Future Trends',
      //   phoneNumber: '678-901-2345',
      //   email: 'grace.white@example.com',
      //   country: 'Japan',
      //   status: 'Active',
      // },
      // {
      //   customerName: 'Mark Turner',
      //   company: 'Infinite Solutions',
      //   phoneNumber: '432-109-8765',
      //   email: 'mark.turner@example.com',
      //   country: 'Brazil',
      //   status: 'Inactive',
      // },
    ])


    const addNewCustomer = (customer) => {
      console.log('addNewCustomer',customer)
      customersList.value.push(customer)
    }
    return {
      addCustomer,
      addNewCustomer,
      customersList,
      customerOverView
    }
  }

}
</script>

<style lang="scss" scoped>
.customer-overview {
  box-shadow: none;
}
</style>
