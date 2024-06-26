<script setup>
import Tags from "@/components/Tags.vue";
import { RouterLink } from 'vue-router'

defineProps({
  id: Number,
  name: String,
  description: String,
  duration: String,
  genre: String,
  poster: String,
  rating: Number,
})
</script>


<template>
  <RouterLink :to="{ name: 'detail', params: { id: id } }" class="item__link">
  <div class="item">

    <img class="item__image" :src="poster" :alt="name">
    <div class="item__text">
      <h2 class="item__title">{{name}}</h2>
      <p class="item__description">{{description}}</p>
    </div>
      <Tags :duration="duration" :genre="genre" :rating="rating" />

  </div>
  </RouterLink>

</template>

<style scoped>

.item {
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: var(--color-background-element);
  padding: 12px;
  border-radius: 16px;
  width: 324px;
  height: 306px;
  cursor: pointer;
  transition: all ease .3s, border .0s;
}

.item:hover {
  box-shadow: 8px 8px 0 0 #702BFE;
  transform: translate(-8px, -8px);
}

.item:active {
  border: 3px solid #702BFE;
}

.item__link {
  text-decoration: none;

}

.item__text {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.item__title {
  -webkit-line-clamp: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.item__description {
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.item__image {
  border-radius: 8px;
  max-height: 172px;
  min-width: 100%;
  object-fit: cover;
}


</style>