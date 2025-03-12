<script setup lang="ts">
import { reactive, ref, computed, defineEmits } from 'vue'

const formData = reactive({
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
})

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
</script>

<template>
  <div class="container">
    <form class="form" @submit.prevent="getFormValues">
      <div class="form-field" v-for="(value, key, index) in formData" v-bind:key="index">
        <p>{{ prompts[index].message }}:</p>
        <input
          type="text"
          v-model="formData[key]"
          :placeholder="prompts[index].example"
          class=""
          required
        />
      </div>
      <button class="btn" type="submit" :disabled="!isFormComplete">Let's Meet the Baby!</button>
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
    border-bottom: 1px solid black;
    padding: 4px 8px;
    text-align: center;
    background-color: white;
  }
}
.btn {
  width: fit-content;
  padding: 16px;
  align-self: flex-end;
  border: unset;
  background-color: #8aa247;
  color: black;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);

  &:disabled {
    background-color: #8080808a;
    color: lightgray;
  }
}
</style>
