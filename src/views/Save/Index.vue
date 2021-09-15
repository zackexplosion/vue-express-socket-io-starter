<template>
  <div>
    <a-steps
      :current="currentStep"
      size="small"
    >
      <template v-for="(step, index) in steps">
        <a-step
          :key="index"
          :title="step.title"
        />
      </template>
    </a-steps>

    <div :is="currentView" />
    <hr>
    開發專用區
    <div class="steps-action">
      <a-button
        v-if="currentStep < steps.length - 1"
        type="primary"
        @click="next"
      >
        下一步
      </a-button>
      <a-button
        v-if="currentStep == steps.length - 1"
        type="primary"
        @click="$message.success('Processing complete!')"
      >
        Done
      </a-button>
      <a-button
        v-if="currentStep > 0"
        style="margin-left: 8px"
        @click="prev"
      >
        Previous
      </a-button>
    </div>
  </div>
</template>

<script>
// import VueBarcode from 'vue-barcode';
import Step1 from './Step1.vue'
import Step2 from './Step2.vue'
import Step3 from './Step3.vue'

export default {
  components: {
    // barcode: VueBarcode,
    // Step1,
    // Step2
  },
  data() {
    return {
      steps: [
        {
          title: '選擇服務人員',
          component: Step1,
        },
        {
          title: '輸入資料',
          component: Step2,
        },
        {
          title: '確認資料',
          component: Step3,
        },
      ],
      currentView: Step1,
      currentStep: 0,
    }
  },
  methods: {
    next() {
      this.currentStep += 1;
      this.currentView = this.steps[this.currentStep].component
    },
    prev() {
      this.currentStep -= 1;
      this.currentView = this.steps[this.currentStep].component
    },
  },
}
</script>
