<template>
<div>
    <h1>Customers</h1>
    <CustomerOverView
    v-bind="{
              title: 'Profit',
              stats: '$12,628',
              change: 72.80,
            }"
    />
  <div>
    <div class="d-sm-none">
      Float left on viewports sized SM (small) or wider
    </div>
    <br>
    <div class="d-md-none">
      Float left on viewports sized MD (medium) or wider
    </div>
    <br>
    <div class="d-lg-none">
      Float left on viewports sized LG (large) or wider
    </div>
    <br>
    <div class="d-xl-none">
      Float left on viewports sized XL (extra-large) or wider
    </div>
    <br>
  </div>

</div>
</template>

<script>
import CustomerOverView from '@/components/customerOverView.vue';
export default {
name : 'Customers', 
components: {
    CustomerOverView
}

}
</script>

<style>

</style>