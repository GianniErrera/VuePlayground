<template>
   <input placeholder="Enter your coupon" @blur="onCouponApplied">
</template>



<script>
    export default {
       props: ['title', 'body'],
       data() {
            return {
                isVisible: true
            }
       },
        methods: {
           onCouponApplied() {
               alert("It worked");
           }
       }
    }
</script>
