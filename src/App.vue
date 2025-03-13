<script setup lang="ts">
import Story from './components/ShortStory.vue'
import QuiryForm from './components/QuirkyForm.vue'
import { ref } from 'vue'

const showStory = ref(false)
const formData = ref({})
const prompts = ref([])

const updateFormData = (data) => {
  formData.value = data
  showStory.value = true
}

const promptData = (data) => {
  prompts.value = data
}
</script>

<template>
  <div class="app-container outer">
    <h1 class="header">Baby Shower Game</h1>
    <hr class="horizontal-rule" />
    <div class="main">
      <div class="rules-and-answers">
        <section class="rules">
          <p>1. Fill in the blanks with silly or heartfelt answers.</p>
          <p>2. Read each completed story aloud for laughs and surprises.</p>
          <p>3. The funniest or most creative answer wins!</p>
        </section>
        <div v-if="Object.keys(formData).length > 0" class="answers">
          <p v-for="(value, key, index) in formData" v-bind:key="index">
            {{ prompts[index].message }}: <b>{{ value }}</b>
          </p>
        </div>
      </div>
      <div class="form-story box-shadow">
        <div v-if="!showStory">
          <QuiryForm @update-data="updateFormData" @prompt-data="promptData" />
        </div>

        <div v-if="showStory" class="">
          <Story title="A Star is Born" :formData="formData" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-container {
  display: grid;
  gap: 40px;
  padding: 60px;
  background-image: url('/src/assets/bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}

.header {
  font-family: 'Alex Brush', cursive;
  font-size: 80px;
  font-weight: 900;
  color: var(--vt-c-white);
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.75);
}

.horizontal-rule {
  color: var(--vt-c-white);
  margin-bottom: 40px;
}

.main {
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 50px;
  row-gap: 40px;
}

.form-story {
  padding: 0 20px;
  background-color: var(--vt-c-white);
}

.rules-and-answers {
  background: rgba(255, 255, 255, 0.5);
  padding: 20px;
}

.rules {
  margin-bottom: 40px;
}

@media screen and (max-width: 992px) {
  .main {
    grid-template-columns: auto;
  }
  .form-story {
    border-left: unset;
    padding: unset;
  }
}

@media screen and (max-width: 576px) {
  .header {
    text-align: center;
  }

  .app-container {
    padding: unset;
  }
}
</style>
