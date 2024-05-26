<template>
  <v-container class="fill-height">
    <v-responsive
      class="align-centerfill-height mx-auto"
      max-width="900"
    >
      <v-img
        class="mb-4"
        height="150"
        src="@/assets/logo.png"
      />

      <div class="text-center">
        <div class="text-body-2 font-weight-light mb-n1">Seja Bem-Vindo</div>

        <h1 class="text-h2 font-weight-bold">Cyber Security</h1>
      </div>

      <div class="py-4" />

      <v-row>
        <v-col cols="12">
          <form>
            <v-text-field
              v-model="state.company"
              :counter="60"
              :error-messages="v$.company.$errors.map(e => e.$message)"
              label="Empresa"
              required
              @blur="v$.company.$touch"
              @input="v$.company.$touch"
            ></v-text-field>

            <v-text-field
              v-model="state.contact"

              :counter="20"
              :error-messages="v$.contact.$errors.map(e => e.$message)"
              label="Contato"
              required
              @blur="v$.contact.$touch"
              @input="v$.contact.$touch"
            ></v-text-field>

            <v-text-field
              v-model="state.phone"

              :counter="20"
              :error-messages="v$.phone.$errors.map(e => e.$message)"
              label="Fone"
              required
              @blur="v$.phone.$touch"
              @input="v$.phone.$touch"
            ></v-text-field>

            <v-text-field
              v-model="state.email"

              :error-messages="v$.email.$errors.map(e => e.$message)"
              label="E-mail"
              required
              @blur="v$.email.$touch"
              @input="v$.email.$touch"
            ></v-text-field>



            <v-btn
              class="me-4"
              @click="save"
            >
              INICIAR
            </v-btn>
            <v-btn @click="clear">
              LIMPAR
            </v-btn>
          </form>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
  import { reactive } from 'vue';
  import { useVuelidate } from '@vuelidate/core';
  import { email, required } from '@vuelidate/validators';
  import { useRouter } from 'vue-router';
  import { useStore } from 'vuex';
  import { nameLocalStorage } from '../utils/const';
  const router = useRouter();

  // console.log('🚀 ~ file: HelloWorld.vue:120 ~ router:', router);

  // console.log(useRouter(), 1);
  // setTimeout(() => console.log(useRouter(), 2), 3000);
  // let useRouterResult = useRouter();
  // setTimeout(() => console.log(useRouterResult, 3), 5000);


  const companyInfoBugHunt = localStorage.getItem(nameLocalStorage);
  let companyInfoBugHuntParsed
  if (companyInfoBugHunt) {
    companyInfoBugHuntParsed = JSON.parse(companyInfoBugHunt)
  }

  const initialState = {
    company: companyInfoBugHuntParsed ? companyInfoBugHuntParsed.company : '',
    contact: companyInfoBugHuntParsed ? companyInfoBugHuntParsed.contact : '',
    phone: companyInfoBugHuntParsed ? companyInfoBugHuntParsed.phone : '',
    email: companyInfoBugHuntParsed ? companyInfoBugHuntParsed.email : '',
  }

  const state = reactive({
    ...initialState,
  })

  const rules = {
    company: { required },
    contact: { required },
    phone: { required },
    email: { required, email },
  }

  const v$ = useVuelidate(rules, state)

  function clear () {
    v$.value.$reset()

    for (const [key, value] of Object.entries(initialState)) {
      state[key] = value
    }
  }

  function save() {
    const companyInfoBugHunt =
      {
        company: state.company,
        contact: state.contact,
        phone: state.phone,
        email: state.email,
      }

    localStorage.setItem(nameLocalStorage, JSON.stringify(companyInfoBugHunt))
    console.log('🚀 ~ file: HelloWorld.vue:147 ~ save ~ router:', router);
    router.push('/assessment')
  }
</script>
