<template>
  <h3 class="text-h5" v-if="step.title">{{ step.title }}</h3>
  <h3 class="text-h5" v-else>{{`Questão ${index}`}}</h3>

  <br>

  <v-row>
    <v-col cols="12">
      <v-card>
        <v-card-text class="text-h6">{{ step.titleCard }}</v-card-text>

        <div v-if="isIntro">
          <v-card-text class="text-justify" v-for="chapter in introDescription" :key="chapter">{{chapter}}</v-card-text>
        </div>
        <div v-else-if="isFinal">
          <div>
            <v-container>
              <v-row v-if="isLoadingFinal" style="width: 450px;" align="center">
                  <v-card-text  class="text-h6 pa-0 text-right">
                    Aguarde, estamos calculando sua nota...
                  </v-card-text>

                  <v-progress-circular
                      color="#9C27B0"
                      indeterminate
                      :size="30"
                      :width="5"
                    ></v-progress-circular>
                </v-row>
              <v-row v-else style="width: 260px;" align="center">
                <v-card-text class="text-h6 pa-0 text-right" style="width: 140px">
                  Seu score foi de:
                </v-card-text>
                <v-card-text class="text-h5 pl-2 font-weight-bold" color="#9C27B0">
                  {{ finalPoint }}
                </v-card-text>
              </v-row>
            </v-container>
          </div>
        </div>
        <div v-else>
          <v-card-text class="text-justify">{{ step.description }}</v-card-text>
        </div>
        <br>
        <br>
        <div v-if="isQuestion" class="text-left">
          <v-rating
            v-model="point"
            length="10"
            :item-labels="labels"
            size="large"
            active-color="#9C27B0"
            color="orange-lighten-1"
            hover
            density="comfortable"
            ></v-rating>
            <br>
            <br>
            <v-container class="bg-purple-lighten-5 rounded-lg">
              <v-row justify="start" align="center">
                <v-col cols="3">
                  <v-img
                    :width="274"
                    aspect-ratio="4/2"
                    cover
                    src="https://d335luupugsy2.cloudfront.net/cms/files/346251/1660578241/$v77v1imwqu"
                  ></v-img>
                </v-col>
                <v-col cols="9">
                  <v-card-text class="text-body-2 text-center bg-yellow-lighten-2 rounded-xl">
                    {{ step.observation }}
                    <!-- <VueWriter :array="textHacker" :delay="1000" :start="2000" :typeSpeed="40" :eraseSpeed="1000000000"/> -->
                  </v-card-text>
                </v-col>
              </v-row>
            </v-container>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { VueWriter } from 'vue-writer'
import { namePointsLocalStorage } from '../utils/const'
export default {
  name: 'Step',
  props: ['step', 'index'],
  //components: { VueWriter },
  data() {
    return {
      point: localStorage.getItem(`${namePointsLocalStorage}-question${this.index}`) || 0,
      isIntro: this.step.type === 'intro',
      isQuestion: this.step.type === 'question',
      isFinal: this.step.type === 'final',
      introDescription: this.step.description.split('\n\n'),
      colors: ['#730ba9','','','','','','','','','#730ba9'],
      labels: ['mal','','','','','','','','','ótimo'],
      textHacker: this.step.observation ? [this.step.observation] : [''],
      isLoadingFinal: false,
      finalPoint: 0,
    }
  },
  watch: {
    point() {
      localStorage.setItem(`${namePointsLocalStorage}-question${this.index}`, this.point);
    },
  },
  methods: {
    calculateFinalPoint() {
      this.isLoadingFinal = true;
      setTimeout(() => {
        this.isLoadingFinal = false
      },3000)

      const listPoints: any[] = [];
      for (let i=1; i<=7; i++) {
        let point = localStorage.getItem(`${namePointsLocalStorage}-question${i}`) || 0;
        this.finalPoint += Number(point);
        console.log('🚀 ~ file: Step.vue:117 ~ calculateFinalPoint ~ point:', point);
      }
      this.finalPoint = Math.round((this.finalPoint / 70) * 100);
      this.isLoadingFinal = false;
    }
  },
  created() {
    if (this.isFinal) {
      this.calculateFinalPoint();
    }
  }
}
</script>
<style scoped>

</style>
