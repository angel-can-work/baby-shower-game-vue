<script setup lang="ts">
import { reactive, ref, computed, defineEmits } from 'vue'

const initialState = {
  name: '',
  adjective: '',
  favActivity: '',
  hobby: '',
  toy: '',
  firstWord: '',
  emotion: '',
  skill: '',
  animal: '',
  food: '',
  trait: '',
  job: '',
  dessert: '',
  pastTime: '',
  play: '',
}

const formData = reactive({ ...initialState })

const prompts = ref([
  { message: 'Alliterative name', example: 'Betty Boop' },
  { message: 'Gerund for the sun', example: 'warming, scorching...' },
  { message: 'Olympic Sport', example: 'breakdancing' },
  { message: 'Quirky hobby or talent', example: 'impossible bottling' },
  { message: 'Popular toy', example: 'slingshots' },
  { message: 'Word that rhymes with "Word"', example: 'heard' },
  { message: 'Positive emotion', example: 'happiness' },
  { message: 'Gym class activity', example: 'double dutch' },
  { message: 'Your spirit animal', example: 'phoenix' },
  { message: 'Common soft food served after surgery', example: 'jello' },
  {
    message: 'Word to describe inner strength and determination',
    example: 'courage, heart, spunk...',
  },
  { message: 'Made up occupation', example: 'bounty hunter for dragons' },
  { message: 'Favorite dessert', example: 'cookie' },
  { message: 'Favorite past time', example: 'napping' },
  { message: 'Name of a Broadway play', example: 'Wicked' },
])

const emit = defineEmits(['update-data', 'prompt-data'])

const getFormValues = () => {
  emit('update-data', { ...formData })
  emit('prompt-data', prompts.value)
}

const isFormComplete = computed(() => Object.values(formData).every((value) => value.trim() !== ''))

const clear = () => Object.assign(formData, initialState)
</script>

<template>
  <div class="container">
    <form class="form" @submit.prevent="getFormValues">
      <div class="form-field" v-for="(value, key, index) in formData" v-bind:key="index">
        <p>{{ prompts[index].message }}:</p>
        <input type="text" v-model="formData[key]" :placeholder="prompts[index].example" required />
      </div>
      <section class="btn-group">
        <button type="button" class="clear-btn" v-on:click="clear">Clear</button>
        <button class="btn box-shadow" type="submit" :disabled="!isFormComplete">
          Let's Meet the Baby!
        </button>
      </section>
    </form>
  </div>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
}

.form-field {
  display: inline-flex;
  gap: 8px;

  input {
    border: unset;
    border-bottom: 1px solid var(--vt-c-black);
    padding: 4px 8px;
    text-align: center;
    background-color: var(--vt-c-white);

    &:focus-visible {
      outline: unset;
      background-color: var(--color-form-field-background);
    }
  }
}

.btn-group {
  display: flex;
  justify-content: space-between;
  align-items: end;
}

.clear-btn {
  border: unset;
  background: none;
  color: var(--vt-c-nasturtium-shoot);
  padding: unset;

  &:hover {
    cursor: pointer;
  }
}

.btn {
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
</style>
