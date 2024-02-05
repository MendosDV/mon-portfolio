<template>
<div class="bg-white pt-5 pb-4 ">
    <div class="container">
      <div class="p-3 px-md-0">
        <h5 class="blue-color bolder">Portfolio</h5>
        <h4 class="mb-4 mb-md-5">Some of my projects 🧩</h4>
        <div class="col-md-12">
          <ProjectCard v-for="project in projects" :key="project.name" :project="project" class="mb-5"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from './ProjectCard.vue'

export default {
  name: 'ProjectApp',
  components: { ProjectCard },
  data () {
    return {
      projects: [
        {
          name: 'Pixy',
          image: 'https://private-user-images.githubusercontent.com/130302103/284335900-005dee55-f296-4725-9dee-16f27c322744.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDcxMDE5NzksIm5iZiI6MTcwNzEwMTY3OSwicGF0aCI6Ii8xMzAzMDIxMDMvMjg0MzM1OTAwLTAwNWRlZTU1LWYyOTYtNDcyNS05ZGVlLTE2ZjI3YzMyMjc0NC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMjA1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDIwNVQwMjU0MzlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hY2RhNzE1OWZkYWI1ODg1MDBhMTYzMzg2ZDY5YjRkZDIyNGY2Mzk3NWM2MjBkZDRiMzM2YTNmMTA5MDgwYTVkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.gZcExksT5zEMO1mH4DfzdmjbTpaA6WlYg5ftLySj2is',
          description: "Pixy est une extension Chrome qui aide les parents à protéger leurs enfants des contenus inappropriés en ligne. Avec trois niveaux de protection, Pixy met en évidence ou remplace les mots jugés inappropriés. Son tableau de bord parental offre un aperçu complet des activités en ligne des enfants. Elle a été développé en JavaScript pour l'extension Chrome et Ruby on Rails pour l'API.",
          github: 'https://github.com/MendosDV/pixy',
          stack: [
            '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 256 256"><rect width="256" height="256" fill="#D30001" rx="60"/><path fill="#fff" d="M227.87 116.783L228 116.912C228 116.912 226.501 117.97 224.914 119.293C174.825 82.2557 144.226 99.716 134.614 104.39C90.9629 128.747 103.577 188.54 103.834 189.733L103.838 189.751H34.1729C34.1729 189.751 36.8183 163.649 55.3368 132.785C73.8553 101.921 105.425 78.552 131.086 76.2593C180.566 71.3028 225.159 114.13 227.87 116.783ZM106.483 172.115L116.007 175.554C116.448 179.008 117.073 182.278 117.728 185.262L118.123 187.018L107.541 183.226C107.1 180.58 106.66 176.788 106.483 172.115ZM32.4091 143.543L42.5503 147.247C41.3157 150.102 39.7436 153.767 38.6018 156.647L38.1411 157.829L28 154.125C28.8818 151.744 30.7336 147.335 32.4091 143.543ZM110.452 140.016L116.801 145.042C116.095 147.794 115.559 150.545 115.192 153.296L114.949 155.36L107.806 149.716C108.511 146.541 109.305 143.279 110.452 140.016ZM126.06 115.413L130.028 121.409C128.476 123.032 127.037 124.654 125.756 126.367L124.825 127.67L120.593 121.321C122.18 119.293 124.032 117.265 126.06 115.413ZM62.9206 102.362L69.1816 107.829C67.5943 109.482 66.0567 111.235 64.6058 113.012L63.1852 114.795L56.3951 108.975C58.4233 106.771 60.6278 104.566 62.9206 102.362ZM150.31 102.009L152.25 107.829C150.205 108.464 148.159 109.268 146.113 110.196L144.578 110.915L142.55 104.831C144.755 103.861 147.312 102.891 150.31 102.009ZM170.945 99.8924C173.203 100.034 175.517 100.287 177.887 100.699L179.675 101.039L179.323 106.506C176.995 106.012 174.667 105.688 172.339 105.533L170.593 105.448L170.945 99.8924ZM98.5467 75.5538L102.515 81.6384C100.795 82.4982 99.1255 83.4572 97.4307 84.4782L95.7248 85.5185L91.6684 79.3457C94.0493 77.9347 96.3421 76.7002 98.5467 75.5538ZM171.122 72.2028C176.369 73.7019 178.626 74.7291 179.53 75.2101L179.675 75.2892L179.323 81.1975C177.441 80.4333 175.56 79.7082 173.653 79.0223L170.769 78.0229L171.122 72.2028ZM137.436 67L139.199 72.3792H138.317C136.399 72.3792 134.481 72.4288 132.563 72.5652L130.646 72.7319L128.97 67.5291C131.88 67.1764 134.702 67 137.436 67Z"/></svg>',
            '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="rounded-2" viewBox="0 0 1052 1052"><path fill="#f0db4f" d="M0 0h1052v1052H0z"/><path d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z" fill="#323330"/></svg>',
          ],
          video: 'https://www.youtube.com/watch?v=VjiWpGR82t0&t=173s',
        },
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
  .effect-border {
    --color: #446DF6;
    --border: 6px;
    --offset: 30px;
    --gap: 5px;

    --_c: var(--color) var(--border), #0000 0 calc(100% - var(--border)),var(--color) 0;
    --_o: calc(3*var(--offset));
    padding:
      calc(var(--gap) + var(--border))
      calc(var(--gap) + var(--border) + var(--offset))
      calc(var(--gap) + var(--border) + var(--offset))
      calc(var(--gap) + var(--border));
    background:
      linear-gradient(      var(--_c)) var(--_o) var(--_o),
      linear-gradient(90deg,var(--_c)) var(--_o) var(--_o);
    background-size: calc(100% - var(--_o)) calc(100% - var(--_o));
    background-repeat: no-repeat;
    filter: grayscale(.4);
    transition: .5s ease-out;
  }

  .effect-border:hover {
    --color: #CCF281;
    background-position: 0px 0px;
    background-size: calc(100% - var(--offset)) calc(100% - var(--offset));
    filter: grayscale(0);
  }
</style>
