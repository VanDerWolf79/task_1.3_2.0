<template>
  <div class="project-list">
    <div class="project-item" v-for="project in projects" :key="project.id">
      <img :src="project.image" alt="Project" />
      <h2>{{ project.title }}</h2>
      <p v-if="project.showDetails">{{ project.description }}</p>
      <button @click="toggleDetails(project)">Toggle Details</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        { id: 1, title: "Project 1", description: "Description 1", showDetails: false },
        { id: 2, title: "Project 2", description: "Description 2", showDetails: false },
        // Add more project items
      ],
    };
  },
  methods: {
    toggleDetails(project) {
      project.showDetails = !project.showDetails;
    },
  },
};
</script>
