<template>
  <v-card class="mt-6 rounded-xl">
    <v-card-title class="d-flex flex-row cusromer-list">
      <div>
        <h3 class="text-h6 font-weight-bold">All Customers</h3>
        <span class="text-caption text-green">List of all customers</span>
      </div>
      <v-spacer />
      <v-text-field
        v-model="search"
        prepend-inner-icon="fa-solid fa-search"
        label="Search"
        single-line
        hide-details
        density="compact"
        variant="solo"
        bg-color="green-lighten-5"
        class="ml-auto my-auto pr-5"
        style="max-width: 225px;"
        rounded="lg"
      />
      <div class="d-flex flex-wrap mr-4">
        <!-- // shortby dropdown here -->
        <!-- <p class="text-caption pt-4">Sort by:</p> -->
        <!-- <v-select
          v-model="sortBy"
          :items="sortByOptions"
          dense
          hide-details
          class="ml-2"
          variant="solo"
          flat
        >
          <template v-slot:prependInnerIcon>
            <v-icon>fa-solid fa-chevron-down</v-icon>
          </template>
        </v-select> -->
        <div class="d-flex flex-wrap px-4 my-3 bg-green-lighten-5" style="border-radius: 10px;">
          <p class="text-body-2 mt-2">Sort by:</p>
          <select class="ml-2 text-body-2" style="border: none; outline: none;">
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
          <option value="30">30</option>
          </select>
          <v-icon class="pl-2 mt-3" size="15">fa-solid fa-chevron-down</v-icon>
        </div>
      
      </div>
    </v-card-title>
    <v-data-table 
      v-model:search="search"
      :headers="headers"
      :items="customersList"
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
      <template v-slot:item="{ item, index }"> 
        <tr class="text-body-2 font-weight-bold" @click="selectRow(item ,index)">
          <td>{{ item.customerName }}</td>
          <td>{{ item.company }}</td>
          <td>{{ item.phoneNumber }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.country }}</td>
          <td><v-chip
            :color="item.status === 'Active'  ? 'green' : 'red'"
            :text="item.status === 'Active' ? 'Active' : 'Inactive'"
            label
            size="small"
          ></v-chip></td>
        </tr>
        <tr v-show="expanded && selectedRowIndex === index" v-for="(address, i) in item.addresses" :key="i" class="text-caption">
          <td></td>
          <td> Adress {{ i + 1 }}</td>
          <td>{{ address.number }}</td>
          <td>{{ address.street }}</td>
          <td>{{ address.cityState }}</td>
          <td></td>
        </tr>
      </template>

      <template v-slot:bottom>
      <div class="d-flex flex-wrap pa-3">
        <!-- <v-row justify="start"> -->
        <div class="text-caption pt-2 pl-2 font-weight-bold" style="color: #B5B7C0;">Showing data 1 to 8 of 256K entries:</div>
        <v-spacer />
        <!-- </v-row> -->
        <!-- <v-row justify="end">
          <v-col cols="5">
            <v-container class="max-width"> -->
              <v-pagination
                density="compact"
                v-model="page"
                :total-visible="5"
                active-color="primary"
                :length="40"
              ></v-pagination>
            <!-- </v-container>
          </v-col>
        </v-row> -->
      </div>
    </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { ref, onMounted, watch } from 'vue'

export default {
  name: 'CustomerTable',
  props: {
    customersList: {
      type: Array,
      required: true,
    },
  },
  setup() {
  const search = ref('')
  const page = ref(1)
  const expanded = ref(false)
  const selectedRowIndex = ref(-1)

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

  const sortBy = ref('newest')

  const sortByOptions = [
    'newest',
    'oldest',
  ]

  const selectRow = (item, index) => {
    console.log('item', item, index)
    selectedRowIndex.value = index
    expanded.value = !expanded.value
    
    // if (selectedRowIndex.value === index) {
    //   expanded.value = false
    //   selectedRowIndex.value = -1
    // }
  }

  return {
    search,
    page,
    headers,
    expanded,
    selectRow,
    selectedRowIndex,
    sortByOptions,
    sortBy,
  }

}

}


// const customersList = data
</script>

<style scoped>
.cusromer-list {
  box-shadow: none;
}

/* .v-text-field--outline .v-input__control {
  box-shadow: none;
} */

/* .v-feild {
  border-radius: 0px !important;
  box-shadow: none;
} */

/* .v-input {
  height: 10px !important;
} */
.my-header-style {
  background-color: #f5f5f5 !important;
  color: #bb0c0c !important;
}
</style>
