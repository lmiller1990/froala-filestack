<script setup>
import { FroalaOptions } from "froala-editor";
import { useToast } from "vue-toast-notification";
import { ref } from "vue";

/** @type {Partial<FroalaOptions["events"]>} */
const fileUploadEvents = {
};

/** @type {Partial<FroalaOptions>} */
const config = {
  // imageUploadURL: "http://localhost:5555/image",

  // saveURL: "http://localhost:5555/save",

  events: {
    ...fileUploadEvents,
  },
};

const froala = ref()
</script>

<template>
</template>
