<template>
  <div>
    <QrcodeScan
      :qrbox="200"
      :fps="30"
      @result="onScan"
    />
    <pre>
    {{ logs }}
    </pre>
  </div>
</template>

<script>
// import VueBarcode from 'vue-barcode';
import QrcodeScan from '@/components/QRCodeScanner.vue'
import { Modal } from 'ant-design-vue'

export default {
  components: {
    // barcode: VueBarcode,
    QrcodeScan,
  },
  data() {
    return {
      scanedValidQRCode: false,
      logs: [],
    }
  },
  methods: {
    onScan(decodedText, decodedResult) {
      const valid = true

      if (!this.scanedValidQRCode && valid) {
        // this.$message.success('掃描成功！')
        Modal.confirm({
          title: '掃描成功!!',
          content: '掃描的內容...',
          onOk: () => {
            this.$emit('next')
          },
        });

        this.scanedValidQRCode = true
      }

      this.logs.push([new Date().getTime(), decodedText, decodedResult])

      if (this.logs.length > 5) {
        this.logs.shift()
      }
    },
  },
}
</script>
