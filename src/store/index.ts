import { createStore } from 'vuex'
import { nameLocalStorage } from '../utils/const'

export const store = createStore({
  state() {
    return {
      assessmentCompanyBughunt: localStorage.getItem(nameLocalStorage) ? localStorage.getItem(nameLocalStorage) : {},
    }
  },
  mutations: {
    saveAssessmentInfo(obj: any) {
      console.log('🚀 ~ file: index.ts:21 ~ saveAssessmentInfo ~ obj:', JSON.stringify(obj));
      localStorage.setItem(nameLocalStorage, JSON.stringify(obj))
    }
  }
})
