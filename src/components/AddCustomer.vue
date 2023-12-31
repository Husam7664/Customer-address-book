<template>
  <v-dialog :model-value="modelValue" max-width="50%" persistent scrollable>
    <v-card class="rounded-xl">
      <div class="text-end">
        <v-btn flat @click="close" class="mt-2 mr-3">
          <v-icon size="25px">fa-solid fa-x</v-icon>
        </v-btn>
      </div>
      <div class="text-center">
        <span class=" text-h4 font-weight-bold">Add New Customer</span>
      </div>

      <v-card-text>
        <v-container>
          <v-sheet max-width="75%" class="mx-auto">
          <v-form ref="form" @submit.prevent="handleSubmit">
          <v-text-field v-model="customerName" label="Customer Name"  variant="underlined" density="compact" required />
          <v-text-field v-model="company" label="Company"  variant="underlined" density="compact" required />
          <v-text-field v-model="phoneNumber" :rules="contactNumberRules" type="number" label="Contact Phone"  variant="underlined" density="compact" required />
          <v-text-field v-model="email" label="E-mail"  variant="underlined" density="compact" required />
          <v-text-field v-model="country" label="Country"  variant="underlined" density="compact" required />
          <span class=" text-h6 font-weight-bold">Address Details</span>
          <div v-for="(adress, i) in addresses" :key="i">
            <div class="d-flex flex-row">
              <span class="text-subtitle-1">Address {{ i + 1 }}</span>
              <v-spacer />
              <v-btn color="green" v-if="i===1" text variant="outlined" :disabled="addresses.length === 1" density="compact" @click="addresses.splice(i, 1)">Delete </v-btn>
            </div>
            <v-divider></v-divider>
            <v-row class="mt-1">
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="adress.number" label="Number" variant="underlined" density="compact" required />
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
      required: true,
    },
  },
  setup(props, { emit}) {
    // const emit = defineEmits(['update:modelValue']);
    const form = ref(null);
    const customerName = ref('');
    const company = ref('');
    const phoneNumber = ref('');
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

    // const customerNameRules = [
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
    const handleSubmit = async () => {
      const { valid } = await form.value.validate();
      if (valid) {
       const newCustomer = {
        customerName: customerName.value,
        company: company.value,
        phoneNumber: phoneNumber.value,
        email: email.value,
        country: country.value,
        addresses: addresses.value,
        number: number.value,
        street: street.value,
        cityState: cityState.value,
       }
       emit('addNewCustomer', newCustomer)
       emit('update:modelValue', false);
      } else {
        alert('Form not submitted. Please fix the errors.');
      }

    };

    const close = () => {
      emit('update:modelValue', false);
    };

    const save = () => {
      emit('update:modelValue', false);
    };

    return {
      close,
      save,
      form,
      customerName,
      company,
      email,
      phoneNumber,
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