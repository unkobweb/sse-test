<script setup>
const props = defineProps({
  user: {
    type: Number,
    required: true
  }
})

console.log(`User ${props.user} is being rendered`)

function post() {
  fetch(`http://localhost:3000?user=${props.user}`, {
    method: "POST"
  }).then(res => res.text()).then(console.log)
}

const eventSource = new EventSource(`http://localhost:3000/sse?user=${props.user}`);

eventSource.onmessage= ({data}) => {
  console.log(`Data found for user ${props.user}`)
  console.log(data)
}
</script>

<template>
  <button @click="post">POST User {{ user }}</button> 
</template>
