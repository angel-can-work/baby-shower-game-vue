<script setup lang="ts">
defineProps<{
  formData: {
    name: string
    adjective: string
    favActivity: string
    hobby: string
    toy: string
    firstWord: string
    emotion: string
    skill: string
    animal: string
    food: string
    trait: string
    job: string
    dessert: string
    pastTime: string
    play: string
  }
  title: string
}>()
</script>

<template>
  <div class="container">
    <h2 class="">{{ title }}</h2>
    <!-- compute this -->
    <p>
      Once upon a time, a little bundle of joy named <span>{{ formData.name }}</span> was born! From
      the very first day, everyone knew <span>{{ formData.name }}</span> was special. [She/He/They]
      had the most <span>{{ formData.adjective }}</span> smile, and a love for
      <span>{{ formData.favActivity }}</span> that melted hearts. As a baby, [she/he/they] loved
      <span>{{ formData.hobby }}</span> , especially when it involved using
      <span>{{ formData.toy }}</span> . <span>{{ formData.name }}</span
      >'s' first word was <span>{{ formData.firstWord }}</span> , which made everyone feel
      <span>{{ formData.emotion }}</span
      >.
      <br />
      <br />
      By the first birthday, <span>{{ formData.name }}</span> could already
      <span>{{ formData.skill }}</span> , proving [she/he/they] was a genius in the making! As
      [she/he/they] grew, <span></span>{{ formData.name }} became known for having
      <span>{{ formData.adjective }}</span> energy and a love for
      <span>{{ formData.animal }}</span> . [Her/His/Their] favorite food was
      <span>{{ formData.food }}</span> , which [she/he/they] demanded every morning ! By the time
      [she/he/they] started school, <span>{{ formData.name }}</span> showed a natural talent for
      <span>{{ formData.hobby }}</span
      >. Teachers were amazed by <span>{{ formData.name }}</span
      >'s' ability to <span>{{ formData.skill }}</span> , and classmates loved [her/him/them] for
      [her/his/their] <span>{{ formData.trait }}</span> . As a teenager,
      <span>{{ formData.name }}</span> had a big dream of becoming a
      <span>{{ formData.job }}</span> . [She/He/They] spent hours
      <span>{{ formData.favActivity }}</span> , hoping to perfect their skills. Of course,
      [she/he/they] still made time for [her/his/their] best friend,
      <span class="titlecase">{{ formData.dessert }}</span> , who always encouraged [her/him/them]
      to <span>{{ formData.skill }}</span
      >.
      <br />
      <br />
      As an adult, <span>{{ formData.name }}</span> became the world’s most famous
      <span>{{ formData.job }}</span> . [She/He/They] even received recognition for [her/his/their]
      work in <span>{{ formData.play }}</span> ! Despite all of [her/his/their] success,
      <span>{{ formData.name }}</span> always remembered family and friends. [She/He/They] made sure
      to give back and spread <span>{{ formData.emotion }}</span> wherever [she/he/they] went. And
      that, my friends, is the incredible life of baby <span>{{ formData.name }}</span> —a true
      legend in the making!
    </p>
  </div>
</template>

<style scoped>
.container {
  padding: 20px;
  display: grid;
  row-gap: 20px;
}
span {
  font-weight: bold;
  font-size: 20px;
  color: var(--vt-c-teal-me-no-lies);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}
.titlecase {
  text-transform: capitalize;
}
</style>
