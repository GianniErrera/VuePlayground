<template>
    <div>
        <div v-show="isVisible">
            <div class="modal is-active">
                <div class="modal-background">
                </div>
                <div class="modal-content">
                    <div class="box">
                        <p>
                            {{ body }}
                        </p>
                    </div>
                </div>

                <button>Some useless button </button>

                <button @click="hideModal" class="modal-close is-large" aria-label="close">
                </button>
            </div>
        </div>
        <button @click="showModal">Show modal</button>
    </div>
</template>
<script>
    export default {
        props: ['body'],
        data() {
            return {
                isVisible: false
            }
        },

        methods: {
            hideModal() {
                this.isVisible = false;
            },

            showModal() {
                this.isVisible = true;
            }
        }
    }

</script>
<style>

</style>
