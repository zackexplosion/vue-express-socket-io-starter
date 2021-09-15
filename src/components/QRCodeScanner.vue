<template>
  <div id="qr-code-full-region" />
</template>

<script>

export default {
  name: 'QrcodeScanner',
  props: {
    qrbox: {
      type: Number,
      default: 500,
    },
    fps: {
      type: Number,
      default: 30,
    },
  },
  data() {
    return {
      html5QrCode: null,
    };
  },
  mounted() {
    const elementID = 'qr-code-full-region'
    const config = {
      fps: this.fps,
      qrbox: this.qrbox,
    };
    // If you want to prefer back camera
    const html5QrCode = new window.Html5Qrcode(elementID);
    html5QrCode.start(
      { facingMode: 'environment' },
      config,
      this.onScanSuccess,
    )

    this.html5QrCode = html5QrCode
  },
  unmounted() {
    this.html5QrCode.stop().then((ignore) => {
      // QR Code scanning is stopped.
      console.log('QR Code scanning is stopped.', ignore)
    }).catch((err) => {
      console.error(err)
      // Stop failed, handle it.
    });
  },
  methods: {
    qrCodeErrorCallback(err) {
      console.error(err)
    },
    onScanSuccess(decodedText, decodedResult) {
      this.$emit('result', decodedText, decodedResult);
    },
  },
}
</script>
