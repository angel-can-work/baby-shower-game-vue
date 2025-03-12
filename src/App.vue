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
  <div class="container outer">
    <h1 class="">Baby Shower Game</h1>
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
            {{ prompts[index].message }}: <span>{{ value }}</span>
          </p>
        </div>
      </div>
      <div class="form-story">
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
.container {
  display: grid;
  gap: 40px;
}

h1 {
  font-family: 'Alex Brush', cursive;
  font-size: 80px;
  font-weight: 900;
  color: white;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.75);
}

.outer {
  padding: 60px;
  background-image: url('/src/assets/bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}
.horizontal-rule {
  color: white;
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
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}

.rules-and-answers {
  background: rgba(255, 255, 255, 0.5);
  padding: 20px;
}
.rules {
  margin-bottom: 40px;
}
span {
  font-weight: bold;
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
  h1 {
    text-align: center;
  }

  .outer {
    padding: unset;
  }
}
</style>
