<template>
    <div>
        <div>
            <ul class="tabs">
                <li class="is-active"><a>Pictures</a></li>
                <li><a>Music</a></li>
                <li><a>Videos</a></li>
                <li><a>Documents</a></li>
            </ul>
        </div>

        <div class="tabs-details">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    mounted() {
        console.log(this.$children);
    }

}
</script>
<style lang="">

</style>
