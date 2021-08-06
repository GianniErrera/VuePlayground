<template>
    <div>
        Hello world
         <p class="redtext">
            <task v-for="task in tasks" :key="task.id">
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
                    {  id: 1, description: "Go to the store", completed: true },
                    {  id: 2, description: "Demonstrate", completed: true },
                    {  id: 3, description: "Jogging session", completed: true },
                    {  id: 4, description: "Go to the pub", completed: false },
                    {  id: 5, description: "Lunch break", completed: true },
                    {  id: 6, description: "Phone to Giovanni", completed: false },
                ]
            }
        }
    }
</script>
