<template>
  <div class="max-w-5xl mx-auto px-6">
    <project title="Waxeye"
             image-url="/images/waxeye-project.jpg"
             image-alt="Waxeye website">
      <project-details project-url="https://waxeye.co.nz"
                       explanation="Waxeye is a digital agency centered around web design/development, VR, AR, MR. The website showcases their case studies from various clients they have worked with over the years. Waxeye website features several pages through its hamburger menu and a complex CMS driven case study component implementation."
                       involvement-desc="Initially the project was migrated / rebuilt from a previous system, I worked with design and test to produce a product which included:"
                       :involvement-list="[
                           'Layout system which included header, footer an elaborate hamburger menu that resizes properly depending on the device',
                           'Contact page with frontend / backend validation, reCaptcha and sending success emails',
                           'Complex component based case studies, these allow for putting a library of components on the page in any order. This also included dark '
                       ]"></project-details>
    </project>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProjectDetails from '~/components/ProjectDetails.vue';
import Project from "~/components/Project.vue"

export default Vue.extend({
  components: { Project, ProjectDetails }
})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
