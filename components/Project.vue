<template>
  <div class="max-w-5xl mx-auto px-6 py-20">
    <div class="grid grid-cols-12">
      <div class="col-span-7 pr-10 flex flex-col">
        <div class="mb-5">
          <h1 class="text-4xl font-bold">{{ title }}</h1>
        </div>

        <slot />
      </div>
      <div class="col-span-5">
        <img :src="imageUrl"
             :alt="imageAlt"
             class="rounded-2xl object-cover shadow-xl w-full" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    imageAlt: {
      type: String,
      required: true
    }
  }
}
</script>