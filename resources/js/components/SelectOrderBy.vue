<template>
<div>

    <select v-model="selected">
    <option disabled value="">Please select one</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
    </select>
    <span>Selected: {{ selected }}</span>
</div>
</template>

<script>
    export default {
        data() {
            return {
                selected: ""
            }
        },
        methods: {

        }
    }

</script>

