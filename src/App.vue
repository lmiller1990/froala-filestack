<script setup>
import { FroalaOptions } from "froala-editor";
import { useToast } from "vue-toast-notification";
import { ref } from "vue";

const html = ref("")
const loading = ref(true)

async function load () {
  const res = await window.fetch("http://localhost:5555/load")
  const json = await res.json()
  html.value = json.html
  loading.value = false
}

load()

/** @type {Partial<FroalaOptions["events"]>} */
const fileUploadEvents = {
};

/** @type {Partial<FroalaOptions>} */
const config = {
  // imageUploadURL: "http://localhost:5555/image",

  saveURL: "http://localhost:5555/save",

  saveInterval: 2000,

  events: {
    ...fileUploadEvents,
  },
};

const froala = ref()
</script>

<template>
  <div v-if="loading">Loading...</div>
  <Froala v-else ref="froala" tag="textarea" :config="config">
    {{ html }}
  </Froala>
</template>
