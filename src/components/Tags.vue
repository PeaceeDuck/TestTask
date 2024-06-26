<script setup>
import IconGenre from "@/components/icons/IconGenre.vue";
import IconScore from "@/components/icons/IconScore.vue";
import IconDuration from "@/components/icons/IconDuration.vue";

defineProps({
  duration: String,
  genre: String,
  rating: Number,
})
</script>

<template>
  <div class="tags">
    <div class="tag tag_score" :class="rating < 4 ? 'tag_score-low' : rating < 7 ? 'tag_score-medium' : 'tag_score-high'">
      <IconScore class="tag__icon" />
      <p class="tag__text">{{rating?.toFixed(2)}}</p>
    </div>
    <div class="tag tag_genre">
      <IconGenre class="tag__icon"/>
      <p class="tag__text">{{genre}}</p>
    </div>
    <div class="tag tag_duration">
      <IconDuration class="tag__icon"/>
      <p class="tag__text">{{duration}}</p>
    </div>
  </div>
</template>

<style scoped>

.tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 0;
  margin-top: auto;
}

.tag {
  padding: 2px 6px;
  border-radius: 8px;
  display: flex;
  gap: 2px;
  justify-items: center;
  align-items: center;
}

.tag_score-high {
  background-color: var(--color-tag-green);
}

.tag_score-medium {
  background-color: var(--color-tag-purple);
}

.tag_score-low {
  background-color: var(--color-tag-red);
}

.tag_genre {
  background-color: var(--color-tag-blue);
}

.tag_duration {
  background-color: var(--color-tag-purple);
}

.tag__icon {
  width: fit-content;
}

.tag__text {
  font-size: 11px;
}
</style>