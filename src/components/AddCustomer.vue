<template>
  <!-- create add customer dialog -->
  <v-dialog :model-value="modelValue" max-width="50%" persistent>
    <v-card class="rounded-xl">
      <div class="text-end">
        <!-- <v-btn color="blue darken-1" text @click="close"/> -->
        <v-btn flat @click="close">
          <v-icon>fa-solid fa-x</v-icon>
        </v-btn>
      </div>
      <v-card-title class="text-center">
        <span class=" text-h4 font-weight-bold">Add New Customer</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-sheet max-width="75%" class="mx-auto">
          <v-form @submit.prevent="handleSubmit">
          <v-text-field v-model="customerName" label="Customer Name"  variant="underlined" density="compact" required />
          <v-text-field v-model="company" label="Company"  variant="underlined" density="compact" required />
          <v-text-field v-model="contactPhone" :rules="contactNumberRules" label="Contact Phone"  variant="underlined" density="compact" required />
          <v-text-field v-model="email" label="E-mail"  variant="underlined" density="compact" required />
          <v-text-field v-model="country" label="Country"  variant="underlined" density="compact" required />
          <span class=" text-h6 font-weight-bold">Address Details</span>
          <div v-for="(adress, i) in addresses" :key="i">
            <span class="text-subtitle-1 ">Address {{ i + 1 }}</span>
            <v-divider></v-divider>
            <v-row class="mt-1">
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="adress.number" label="Number" :rules="contactNumberRules" variant="underlined" density="compact" required />
              </v-col>
              <v-col cols="12" sm="6" md="8">
                <v-text-field v-model="adress.street" label="Street"  variant="underlined" density="compact" required />
              </v-col>
            </v-row>
            <v-text-field v-model="adress.cityState" label="City, State"  variant="underlined" density="compact" required />
          </div>
          
       
          <v-btn color="green" text variant="outlined" :disabled="addresses.length === 2" class="mt-2" @click="addAdress">Add </v-btn>
          
          <v-btn type="submit" color="green" block class="mt-2">Submit</v-btn>
          </v-form>
        </v-sheet>
        </v-container>
      </v-card-text>

      <!-- <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="blue darken-1" text @click="save">Save</v-btn>
      </v-card-actions> -->
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

    const customerName = ref('');
    const company = ref('');
    const contactPhone = ref('');
    const email = ref('');
    const country = ref('');
    const addresses = ref([
      {
        number: '',
        street: '',
        cityState: '',
      }
    ]);
    const number = ref('');
    const street = ref('');
    const cityState = ref('');

    // const firstNameRules = [
    //   value => {
    //     if (value?.length > 3) return true;
    //     return 'First name must be at least 3 characters.';
    //   },
    // ];


    const contactNumberRules = [
      value => {
        if (value?.length > 9 && /[0-9-]+/.test(value)) return true

        return 'Phone number needs to be at least 9 digits.'
      },
    ];

    const addAdress = () => {
      addresses.value.push({
        number: '',
        street: '',
        cityState: '',
      })
    }
    const handleSubmit = () => {
      // Handle form submission logic here
      console.log('Form submitted:', { 
        customerName: customerName.value,
        company: company.value,
        contactPhone: contactPhone.value,
        email: email.value,
        country: country.value,
        addresses: addresses.value,
        number: number.value,
        street: street.value,
        cityState: cityState.value,
       });
    };

    const close = () => {
      emit('update:modelValue', false);
    };

    const save = () => {
      // Add your save logic here
      emit('update:modelValue', false);
    };

    return {
      close,
      save,
      customerName,
      company,
      email,
      contactPhone,
      country,
      addresses,
      number,
      street,
      cityState,
      handleSubmit,
      contactNumberRules,
      addAdress
    };
  },
};
</script>

<style scoped>
/* .v-input {
  height: 10px !important;
} */

</style>