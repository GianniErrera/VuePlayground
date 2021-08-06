<template>
   <article class="message" v-show="isVisible">
        <div class="message-header">
                {{ title }}
                <button class="delete" aria-label="delete" @click="hideMessage">x</button>
        </div>
        <div class="message-body">
        {{ body }}
        </div>
    </article>
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
           hideMessage() {
               this.isVisible = false;
           }
       }
    }
</script>

