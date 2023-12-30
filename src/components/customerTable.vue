<script setup>
import { ref, onMounted } from 'vue'
const search = ref('')
const page = ref(1)
const usreList = ref([
  {
    customerName: 'John Doe',
    company: 'ABC Corp',
    phoneNumber: '123-456-7890',
    email: 'john.doe@example.com',
    country: 'USA',
    status: 'Active',
  },
  {
    customerName: 'Jane Smith',
    company: 'XYZ Ltd',
    phoneNumber: '987-654-3210',
    email: 'jane.smith@example.com',
    country: 'Canada',
    status: 'Inactive',
  },
  {
    customerName: 'Alice Johnson',
    company: '123 Industries',
    phoneNumber: '555-123-4567',
    email: 'alice.johnson@example.com',
    country: 'UK',
    status: 'Active',
  },
  {
    customerName: 'Bob Williams',
    company: '456 Co.',
    phoneNumber: '789-012-3456',
    email: 'bob.williams@example.com',
    country: 'Australia',
    status: 'Inactive',
  },
  {
    customerName: 'Eva Davis',
    company: '789 Enterprises',
    phoneNumber: '234-567-8901',
    email: 'eva.davis@example.com',
    country: 'Germany',
    status: 'Active',
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

const status = {
  1: 'Current',
  2: 'Professional',
  3: 'Rejected',
  4: 'Resigned',
  5: 'Applied',
}

const statusColor = {
  Current: 'primary',
  Professional: 'success',
  Rejected: 'error',
  Resigned: 'warning',
  Applied: 'info',
}

// table header color change
const headers = [
{
  align: 'start',
  key: 'customerName',
  sortable: false,
  title: 'Customer Name',
  
},
{ key: 'company', title: 'Company', class: 'my-header-style' },
{ key: 'phoneNumber', title: 'Phone Number' },
{ key: 'email', title: 'Email' },
{ key: 'country', title: 'Country' },
{ key: 'status', title: 'Status', 
  // align: 'center' 
},
]


// const usreList = data
</script>

<template>
  <VCard class="mt-6 rounded-xl">
    <VCardTitle class="d-flex flex-row">
      <div>
        <h3 class="text-h6 mb-0">All Customers</h3>
        <span class="text-caption">List of all customers</span>
      </div>
      <VSpacer />
      <VTextField
        v-model="search"
        prepend-inner-icon="fa-solid fa-search"
        label="Search"
        single-line
        hide-details
        density="compact"
        class="ml-auto my-auto"
      />
      
    </VCardTitle>
    <v-data-table 
      v-model:search="search"
      :headers="headers"
      :items="usreList"
      class="table-rounded"
      disable-sort
      pagination
    >
    <template v-slot:headers="{ headers }">
      <tr>
        <th v-for="(header, i) in headers[0]" :key="i" style="color: #B5B7C0;">
          {{ header.title }}
        </th>
      </tr>
    </template>
      <template v-slot:item.status="{ item }">
        <!-- <div class="text-center"> -->
          <v-chip
            :color="item.status === 'Active'  ? 'green' : 'red'"
            :text="item.status === 'Active' ? 'Active' : 'Inactive'"
            label
            size="small"
          ></v-chip>
        <!-- </div> -->
      </template>
      <template v-slot:bottom>
      <div class="text-center">
        <!-- <v-row justify="start"> -->
        <div class="text-caption">Showing data 1 to 8 of 256K entries:</div>
        <!-- </v-row> -->
        <v-row justify="end">
          <v-col cols="5">
            <v-container class="max-width">
              <v-pagination
                density="compact"
                v-model="page"
                active-color="primary"
                :length="40"
              ></v-pagination>
            </v-container>
          </v-col>
        </v-row>
      </div>
    </template>
    </v-data-table>
  </VCard>
</template>

<style scoped>

/* .v-input {
  height: 10px !important;
} */
.my-header-style {
  background-color: #f5f5f5 !important;
  color: #bb0c0c !important;
}
</style>
