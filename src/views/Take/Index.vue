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
    <div class="steps-action">
      <a-button
        v-if="currentStep < steps.length - 1"
        type="primary"
        @click="next"
      >
        Next
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
import Step4 from './Step4.vue'

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
          title: '掃描QRCODE',
          component: Step1,
        },
        {
          title: '選擇服務人員',
          component: Step2,
        },
        {
          title: '選擇桌號',
          component: Step3,
        },
        {
          title: '確認資料',
          component: Step4,
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
