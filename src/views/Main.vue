<script setup>
import Item from "@/components/Item.vue"
import { ref } from "vue";

let items = ref([]);
fetch('data.json')
    .then(response => response.json())
    .then(data => items.value = data.items)
</script>



<template>
<main class="main">
  <div class="items" >
    <div v-for="item in items" :key="item.id" >
      <Item v-bind:item="item" :id="item.id" :name="item.name" :description="item.description" :duration="item.duration" :genre="item.genre" :poster="item.poster" :rating="item.rating">

      </Item>
    </div>
  </div>
</main>
</template>

<style scoped>
.items {
  padding:  32px 48px;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(324px, max-content));
  justify-content: center;
}

.main {
  padding-top: 100px;
}

</style>