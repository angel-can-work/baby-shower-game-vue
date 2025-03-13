<script setup lang="ts">
import Story from './components/ShortStory.vue'
import QuiryForm from './components/QuirkyForm.vue'
import { ref } from 'vue'
import type { FormDataType } from './types'

const showStory = ref(false)
const formData = ref<FormDataType>({} as FormDataType)
const prompts = ref<{ message: string; example: string }[]>([])

const updateFormData = (data: { formData: FormDataType; prompts: [] }) => {
  formData.value = data.formData
  prompts.value = data.prompts
  showStory.value = true
}

const backToForm = () => {
  showStory.value = false
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
        <div v-if="showStory" class="answers">
          <p v-for="(value, key, index) in formData" v-bind:key="index">
            <span v-if="prompts[index].message">
              {{ prompts[index].message }}: <u>{{ value }}</u>
            </span>
          </p>
        </div>
        <button v-if="showStory" class="back-btn" v-on:click="backToForm">Change Answers</button>
      </div>
      <div class="form-story box-shadow">
        <div v-if="!showStory">
          <QuiryForm @update-form="updateFormData" :formData="formData" />
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
  column-gap: 20px;
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

.rules,
.answers {
  margin-bottom: 40px;
}

.back-btn {
  width: fit-content;
  padding: 16px;
  align-self: flex-end;
  border: unset;
  background-color: var(--vt-c-nasturtium-shoot);
  color: var(--vt-c-white);

  &:disabled {
    background-color: var(--vt-c-divider-light-1);
    color: var(--vt-c-divider-dark-1);
  }
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
