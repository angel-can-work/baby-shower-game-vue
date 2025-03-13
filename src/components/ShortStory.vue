<script setup lang="ts">
import { computed, defineProps } from 'vue'
import type { FormDataType } from '../types'

const props = defineProps<{
  formData: FormDataType
  title: string
}>()

const titlecase = (pronoun: string) => {
  return pronoun
    .toLowerCase()
    .split(' ')
    .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
    .join(' ')
}

const getPronoun = (pronoun: string) => {
  const pronounMap: Record<string, string> = {
    she: 'her',
    he: pronoun === 'her/his/their' ? 'his' : 'him',
    they: pronoun === 'her/him/them' ? 'their' : 'them',
  }

  return pronounMap[props.formData.pronoun]
}

const story = computed(() => {
  const {
    name,
    adjective,
    favActivity,
    hobby,
    toy,
    firstWord,
    emotion,
    skill,
    animal,
    food,
    trait,
    job,
    dessert,
    pastTime,
    play,
    pronoun,
  } = props.formData

  return `From the very first day, everyone knew <span>${titlecase(name)}</span> was special.
        ${titlecase(pronoun)} had the most <span>${adjective}</span> smile,
        and a love for <span>${favActivity}</span> that melted hearts. As a baby, ${pronoun} loved
        <span>${hobby}</span> , especially when it involved using
        <span>${toy}</span>. <span>${titlecase(name)}</span
        >'s first word was <span>${firstWord}</span> , which made everyone feel
        <span>${emotion}</span>.
        <br /><br />
        By the first birthday, <span>${titlecase(name)}</span> could already
        <span>${skill}</span> , proving ${pronoun} was a genius in the making! As
        ${pronoun} grew, <span></span>${titlecase(name)} became known for having
        <span>${adjective}</span> energy and a love for
        <span>${animal}</span>. ${titlecase(getPronoun('her/his/their'))} favorite food was
        <span>${food}</span> , which ${pronoun} demanded every morning! By the time
        ${pronoun} started school, <span>${titlecase(name)}</span> showed a natural talent for
        <span>${hobby}</span>. Teachers were amazed by <span>${titlecase(name)}</span
        >'s ability to <span>${skill}</span> , and classmates loved ${getPronoun('her/him/them')} for
        ${getPronoun('her/his/their')} <span>${trait}</span>. As a teenager,
        <span>${titlecase(name)}</span> had a big dream of becoming a
        <span>${job}</span>. ${titlecase(pronoun)} spent hours
        <span>${pastTime}</span> , hoping to perfect ${getPronoun('her/his/their')} skills. Of course,
        ${pronoun} still made time for ${getPronoun('her/his/their')} best friend,
        <span class="titlecase">${titlecase(dessert)}</span> , who always encouraged ${getPronoun('her/him/them')}
        to <span>${skill}</span>.
        <br />
        <br />
        As an adult, <span>${titlecase(name)}</span> became the world’s most famous
        <span>${job}</span>. ${titlecase(pronoun)} even received recognition for ${getPronoun('her/his/their')}
        work in <span>${play}</span>! Despite all of ${getPronoun('her/his/their')} success,
        <span>${titlecase(name)}</span> always remembered family and friends. ${titlecase(pronoun)} made sure
        to give back and spread <span>${emotion}</span> wherever ${pronoun} went. That, my friends, is the incredible life of baby <span>${titlecase(name)}</span> — a true
        legend in the making!`
})
</script>

<template>
  <div class="container">
    <h2 class="">{{ title }}</h2>
    <p v-html="story"></p>
  </div>
</template>

<style scoped>
.container {
  padding: 20px;
  display: grid;
  row-gap: 20px;
}

::v-deep span {
  font-size: 20px;
  color: var(--vt-c-teal-me-no-lies);
  text-shadow: 0 1px 2px var(--vt-c-kuchinashi-yellow);
}
</style>
