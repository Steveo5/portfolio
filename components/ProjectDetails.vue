<template>
  <div class="flex flex-col justify-between flex-grow">
    <div>
      <p>{{ explanation }}</p>

      <div class="mt-7 mb-4">
        <h3 class="text-xl font-semibold">What was my involvement in the project?</h3>
      </div>

      <p>{{ involvementDesc }}</p>

      <ul class="list-disc my-4 ml-4">
        <li v-for="involvementListItem in involvementList">{{ involvementListItem }}</li>
      </ul>
    </div>

    <div class="pt-4 flex">
      <a :href="projectUrl" target="_blank" class="text-blue-600 underline">Project website</a>
      <div class="ml-4">
        <a :href="sourceUrl"
           target="_blank"
           class="text-blue-600 underline"
           v-if="sourceUrl !== ''">Source</a>
        <p class="text-gray-400 underline"
           v-else>Source not available</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    explanation: {
      type: String,
      required: true
    },
    involvementDesc: {
      type: String,
      required: true
    },
    involvementList: {
      type: Array as Array<String>,
      default: []
    },
    projectUrl: {
      type: String,
      required: true
    },
    sourceUrl: {
      type: String,
      default: ''
    }
  }
}
</script>