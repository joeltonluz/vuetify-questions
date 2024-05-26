<template>
  <v-stepper
    v-model="step"
    :items="items"
    next-text="Avançar"
    prev-text="Voltar"
    non-linear
    selected-class
    flat
  >
    <template v-for="step, index in listSteps" :key="index" v-slot:[`item.${index+1}`]>
      <Step
        :step="step"
        :index="index"
      />
    </template>
  </v-stepper>
</template>
<script>
  import { textIntroduction } from '../utils/text'
  import { listSteps } from '../utils/listSteps'
  import Step from '../components/Step.vue'
  export default {
    name: 'AssessmentView',
    components: {
      Step,
    },
    data: () => ({
      chaptersIntro: textIntroduction.split('\n\n'),
      step: 1,
      listSteps: '',
      items: [
        'Início',
        'Q1',
        'Q2',
        'Q3',
        'Q4',
        'Q5',
        'Q6',
        'Q7',
        'Final',
      ],
    }),
    created() {
      this.listSteps = listSteps;
    },
  }
</script>
