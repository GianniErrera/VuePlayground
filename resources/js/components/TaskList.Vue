<template>
    <div>
        Hello world
         <p class="redtext">
            <task v-for="task in tasks">
                {{task.description}}
            </task>
        </p>
    </div>
</template>

<script>
    export default {
       data() {
            return {
                tasks: [
                    { description: "Go to the store", completed: true },
                    { description: "Demonstrate", completed: true },
                    { description: "Jogging session", completed: true },
                    { description: "Go to the pub", completed: false },
                    { description: "Lunch break", completed: true },
                    { description: "Phone to Giovanni", completed: false },
                ]
            }
        }
    }
</script>

