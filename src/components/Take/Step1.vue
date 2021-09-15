<template>
  <div>
  <QrcodeScan
    :qrbox="200"
    :fps="30"
    @result="onScan"
  />
  <pre>
    {{logs}}
  </pre>
  </div>
  <!-- <barcode /> -->
</template>

<script>
// import VueBarcode from 'vue-barcode';
import QrcodeScan from '../QRCodeScanner.vue'

export default {
  data() {
    return {
      logs: [],
    }
  },
  components: {
    // barcode: VueBarcode,
    QrcodeScan,
  },
  methods: {
    onScan(decodedText, decodedResult) {
      this.logs.push([new Date().getTime(), decodedText, decodedResult])

      if (this.logs.length > 5) {
        this.logs.shift()
      }
    },
  },
}
</script>
