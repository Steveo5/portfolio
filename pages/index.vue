<template>
  <div>
    <div class="flex items-center justify-center bg-gray-900 sm:items-center py-64">
      <div>
        <p class="text-white opacity-90 text-5xl mb-1">Development</p>
        <p class="text-white opacity-90 text-5xl mb-1">through passion</p>
        <p class="text-white opacity-90 text-5xl mb-1">and motivation</p>
      </div>
    </div>

    <project title="Waxeye"
             image-url="/portfolio/images/waxeye-project.jpg"
             image-alt="Waxeye website">
      <project-details project-url="https://waxeye.co.nz"
                       explanation="Waxeye is a digital agency centered around web design/development, VR, AR, MR. The website showcases their case studies from various clients they have worked with over the years. The Waxeye website features several pages through its hamburger menu and a complex CMS driven case study component implementation."
                       involvement-desc="Initially the project was migrated / rebuilt from a previous system, I worked with design and test to produce a product which included:"
                       :involvement-list="[
                         'Layout system including header, footer, an elaborate hamburger menu that resizes properly depending on the device',
                         'Contact page with frontend / backend validation, reCaptcha and sending success emails',
                         'Complex component based case studies, these allow you to put a library of components on the page in any order. This also included dark mode styles'
                     ]"></project-details>
    </project>

    <div class="max-w-6xl mx-auto">
      <hr />
    </div>

    <project title="Chorus consumer"
             image-url="/portfolio/images/chorus-consumer-project.jpg"
             image-alt="Chorus consumer website">
      <project-details project-url="https://chorus.co.nz"
                       explanation="Chorus provides the backbone to New Zealand internet, their consumer website puts a face to the name with many pages, tools and apps encompassing a large ecosystem."
                       involvement-desc="Since 2017, I have worked on rebuilding, refactoring and adding components to the site. These are some of the things I did:"
                       :involvement-list="[
                         'Hamburger menu with submenus and responsive mobile design',
                         'Worked on several standalone apps in different frontend and backend libraries. These were on the /data-calculator and /speed-test amongst other pages',
                         'Creating blocks and components in the CMS to display on the page. These are all over the site',
                         'Create and learn new processes for testing, best practices and start to finish ticketing using Jira and other tools'
                     ]"></project-details>
    </project>

    <div class="max-w-6xl mx-auto">
      <hr />
    </div>

    <project title="Chorus service providers"
             image-url="/portfolio/images/chorus-service-providers-project.jpg"
             image-alt="Chorus service providers website">
      <project-details project-url="https://sp.chorus.co.nz"
                       explanation="Chorus provides the backbone to New Zealand internet. Their service providers website has information for partners in New Zealand wanting to provision their lines, such as Vodafone, Spark etc."
                       involvement-desc="Like Chorus Consumer, I have worked since 2017 on refactoring and making additions to the site. I had less involvement building the site in the beginning but have made many changes since, including:"
                       :involvement-list="[
                         'Making changes to existing components to fit new designs. Also updating content in non-CMSable components',
                         'Building a few new pages and forms, including their Feedback form (purple tab on the right of the page)',
                         'Adjusting CMSable parts of the page (adding new editable parts and removing some others)',
                     ]"></project-details>
    </project>

    <div class="max-w-6xl mx-auto">
      <hr />
    </div>

    <project title="Chorus company"
             image-url="/portfolio/images/chorus-company-project.jpg"
             image-alt="Chorus company website">
      <project-details project-url="https://company.chorus.co.nz"
                       explanation="Chorus provides the backbone to New Zealand internet, the company website is for their service providers."
                       involvement-desc="Like Chorus Consumer and SP, I have worked since 2017 mostly on keeping it up to date and adding pages here and there. Some of the things I specifically worked on are:"
                       :involvement-list="[
                         'Updating the core components to newer versions',
                         'Adding / adjusting existing components in the CMS to fit new designs and requirements',
                         'Creating new pages with CMSable components'
                     ]"></project-details>
    </project>

    <div class="max-w-6xl mx-auto">
      <hr />
    </div>

    <project title="Chorus HyperFibre"
             image-url="/portfolio/images/chorus-hyperfibre-project.jpg"
             image-alt="Chorus HyperFibre website">
      <project-details project-url="https://hyperfibre.chorus.co.nz"
                       explanation="Chorus HyperFibre gives out information on the HyperFibre rollout in New Zealand. They have several pages dedicated to sharing information such as downloads, news, release dates etc."
                       involvement-desc="During the setup I helped create the website, I worked on several pages and have helped keep it up to date since."
                       :involvement-list="[
                         'Worked on the video on the home page (I did not create this but have updated parts of it)',
                         'I helped create the rollouts page and the FAQs page, including updating content since',
                     ]"></project-details>
    </project>

    <div class="max-w-6xl mx-auto">
      <hr />
    </div>

    <project title="Sneakers"
             image-url="/portfolio/images/sneakers-project.jpg"
             image-alt="Sneakers website">
      <project-details project-url="https://sneakersmedia.co.nz"
                       explanation="Sneakers are a media design company, their website shows some information about them and their work."
                       involvement-desc="I mostly worked on this website alone during the end of 2020. Some of the main difficulties I had during development were the reactive slider and learning headless CMS. Some of the main things I worked on include:"
                       :involvement-list="[
                         'Learning and connecting the frontend to a headless cms backend. This allowed for content on some of the pages to be editable',
                         'The slider which is reactive / mobile friendly. This was difficult to get right',
                         'Contact form submission to the CMS and sending emails',
                     ]"></project-details>
    </project>

    <div class="max-w-6xl mx-auto">
      <hr />
    </div>

    <project title="Chorus Fibre lab"
             image-url="/portfolio/images/chorus-fibre-lab-project.jpg"
             image-alt="Chorus Fibre lab">
      <project-details project-url="https://sp.chorus.co.nz/training/chorus-fibre-lab"
                       explanation="Chorus Fibre lab is a virtual tour / experience with tracking inside the users service providers account."
                       involvement-desc="This project is inside the Chorus service providers website but was technically separate. During this time I worked on the menu system inside the Unity game engine. The was a difficult task as I had to partly learn Unity in order to work on it."
                       :involvement-list="[
                         'Menus with tracking inside the users account',
                     ]"></project-details>
    </project>

    <div class="max-w-6xl mx-auto">
      <hr />
    </div>

    <project title="Ecotricity"
             image-url="/portfolio/images/ecotricity-project.jpg"
             image-alt="Ecotricity website">
      <project-details project-url="https://ecotricity.co.nz/"
                       explanation="Ecotricity is an electricity company sporting clean and green power. The website has several pages."
                       involvement-desc="Initially I created the home page, it is mostly still the same now. Some of the things specifically I worked on (but not all) are:"
                       :involvement-list="[
                         'Layout with header and footer sections (this includes the blue background component underneath)',
                         'Component \'Why switch to Ecotricity\' which has a left and right section and a check list',
                         'Simple image and text component',
                     ]"></project-details>
    </project>

    <div class="max-w-6xl mx-auto">
      <hr />
    </div>

    <project title="BiomeCraft community forum"
             image-url="/portfolio/images/biomecraft-project.jpg"
             image-alt="BiomeCraft community forum website">
      <project-details project-url="https://biomecraft.com"
                       explanation="BiomeCraft community is a forum aimed for players of the server. It is still heavily in development so much of the design is still changing and ideas are being fleshed out. It has the potential to be quite complex so I am trying to simplify the ideas."
                       involvement-desc="I created this website using Laravel as the backend and Vue as the frontend. It also has an admin panel that uses a custom service provider, the service provider registers what I call 'books' and works by having a layout with predefined fields. This setup allows me to create a class and simply set its fields and link it to any Laravel model for CRUD operations."
                       :involvement-list="[
                         'The home page has several components including an image slider',
                         'The forum index has many discussions that would be created by users',
                         'The forum post includes information about the post itself and a list of comments',
                         'The user dashboard allows changes to be made to the profile picture, description etc'
                       ]"
                       source-url="https://github.com/Steveo5/biomecraft-website"></project-details>
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
