<script setup>
import Tags from "@/components/Tags.vue";
import {ref} from "vue";

let params = ref([]);
fetch('../detail.json')
    .then(response => response.json())
    .then(detail => params.value = detail)
</script>

<template>
  <main class="main">
    <div class="card">
      <div class="card__column card__column-left">
        <h1 class="card__title">{{ params.name }}</h1>
        <img class="card__image" :src="params.poster" :alt="params.name">
          <Tags :duration="params.duration" :genre="params.genre" :rating="params.rating"/>
      </div>
      <div class="card__column card__column-right">
        <div class="card__info">
          <p class="card__info-title">Description</p>
          <p class="card__info-text">{{ params.description }}</p>
        </div>
        <div class="card__info">
          <p class="card__info-title">Trivia</p>
          <ul>
            <li v-for="trivia in params.trivia">{{trivia}}</li>
          </ul>
        </div>
        <div class="card__info">
          <p class="card__info-title">Actors</p>
          <ul>
            <li v-for="actor in params.actors"><a target="_blank" :href="'https://www.imdb.com/name/' + actor.imdb_id">{{actor.name}}</a></li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.main {
  padding-top: 100px;
}

.card {
  padding: 24px 46px 42px;
  display: grid;
  gap: 64px;
  grid-template-columns: repeat(auto-fill, minmax(240px, max-content));
}

.card__column {
  display: flex;
  flex-direction: column;
}

.card__column-left {
  max-width: 240px;

  gap: 24px;
}

.card__column-right {
  max-width: 360px;
  gap: 16px;
}

.card__image {
  border-radius: 8px;
  max-height: 320px;
  min-width: 100%;
  object-fit: cover;
}

.card__info {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.card__info-title {
  font-size: 32px;
  font-weight: bold;
}


</style>