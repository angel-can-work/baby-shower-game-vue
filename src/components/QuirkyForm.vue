<script setup lang="ts">
import { reactive, ref, computed, defineEmits, defineProps } from 'vue'
import type { FormDataType } from '../types'

const props = defineProps<{ formData: FormDataType }>()

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
  pronoun: '',
}

const defaultState = computed(() => {
  return prompts.value.reduce((acc: Record<string, string>, field, index) => {
    const key = Object.keys(initialState)[index] as keyof typeof initialState
    acc[key] = field.example
    return acc
  }, {})
})

const formData = reactive({ ...initialState, ...props.formData })

const prompts = ref([
  { message: 'Alliterative name', example: 'Betty Boop' },
  { message: 'Gerund for the sun', example: 'warming, scorching...' },
  { message: 'Olympic Sport', example: 'breakdancing' },
  { message: 'Quirky hobby or talent', example: 'impossible bottling' },
  { message: 'Popular toy', example: 'slingshots' },
  { message: 'Word that rhymes with "Word"', example: 'heard' },
  { message: 'Positive emotion', example: 'happiness' },
  { message: 'Gym class activity', example: 'double dutch' },
  { message: 'Your spirit animal', example: 'phoenixes' },
  { message: 'Common soft food served after surgery', example: 'jello' },
  {
    message: 'Word to describe inner strength and determination',
    example: 'courage, heart, spunk...',
  },
  { message: 'Made up occupation', example: 'bounty hunter for dragons' },
  { message: 'Favorite dessert', example: 'cookie' },
  { message: 'Favorite past time', example: 'napping' },
  { message: 'Name of a Broadway play', example: 'Wicked' },
  { message: null, example: 'she' },
])

const emit = defineEmits(['update-form'])

const getFormValues = () => {
  emit('update-form', {
    formData: { ...formData },
    prompts: prompts.value,
  })
}

const isFormComplete = computed(() => Object.values(formData).every((value) => value.trim() !== ''))

const clear = () => Object.assign(formData, initialState)

const setDefault = () => Object.assign(formData, defaultState.value)
</script>

<template>
  <div class="container">
    <form class="form" @submit.prevent="getFormValues">
      <div class="form-field" v-for="(value, key, index) in formData" v-bind:key="index">
        <p v-if="prompts[index].message">{{ prompts[index].message }}:</p>
        <input
          v-if="prompts[index].message"
          type="text"
          v-model="formData[key]"
          :placeholder="prompts[index].example"
          required
        />
      </div>

      <section class="radio-buttons">
        <input type="radio" id="she" name="pronoun" value="she" v-model="formData.pronoun" />
        <label for="she">She</label>

        <input type="radio" id="he" name="pronoun" value="he" v-model="formData.pronoun" />
        <label for="he">He</label>

        <input type="radio" id="they" name="pronoun" value="they" v-model="formData.pronoun" />
        <label for="they">They</label>
      </section>
      <section class="btn-group">
        <button type="button" class="clear-btn" v-on:click="clear">Reset</button>
        <button type="button" class="autofill-btn" v-on:click="setDefault">Autofill</button>
        <button class="submit-btn box-shadow" type="submit" :disabled="!isFormComplete">
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

input[type='radio'] {
  margin-right: 4px;
}

label {
  margin-right: 16px;
}

.btn-group {
  display: flex;
  justify-content: space-between;
  align-items: end;
}

.clear-btn,
.autofill-btn {
  border: unset;
  background: none;
  color: var(--vt-c-nasturtium-shoot);
  padding: unset;

  &:hover {
    cursor: pointer;
  }
}

.submit-btn {
  width: fit-content;
  padding: 16px;
  align-self: flex-end;
  border: unset;
  background-color: var(--vt-c-nasturtium-shoot);
  color: var(--vt-c-white);
  margin-left: 50px;

  &:disabled {
    background-color: var(--vt-c-divider-light-1);
    color: var(--vt-c-divider-dark-1);
  }
}
</style>
