<template>
  <!-- create add customer dialog -->
  <v-dialog :model-value="modelValue" max-width="50%">
    <v-card>
      <v-card-title>
        <span class="headline">Add Customer</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-text-field v-model="customerName" label="Customer Name" required />
          <v-text-field v-model="company" label="Company" required />
          <v-text-field v-model="customerName" label="Contact Phone" required />
          <v-text-field v-model="email" label="E-mail" required />
          <v-text-field v-model="country" label="Country" required />
        
          <!-- <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="name" label="Name" required></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="email" label="E-mail" required></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="phone" label="Phone" required></v-text-field>
            </v-col>
          </v-row> -->
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
        <v-btn color="blue darken-1" text @click="save">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { ref, defineEmits } from 'vue';

export default {
  name: 'AddCustomer',
  props: {
    modelValue: {
      type: Boolean,
      // required: true,
    },
  },
  setup(props, { emit}) {
    // const emit = defineEmits(['update:modelValue']);

    const name = ref('');
    const email = ref('');
    const phone = ref('');

    const close = () => {
      emit('update:modelValue', false);
    };

    const save = () => {
      // Add your save logic here
      emit('update:modelValue', false);
    };

    return {
      name,
      email,
      phone,
      close,
      save,
    };
  },
};
</script>

<style>
/* Add your styles here */
</style>
