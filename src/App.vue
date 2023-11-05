<script setup>
import { FroalaOptions } from "froala-editor";
import { useToast } from "vue-toast-notification";
import { ref } from "vue";

const toast = useToast();
const loading = ref(true);

const html = ref("");

async function fetchPost() {
  const res = await window.fetch("http://localhost:5555/load");
  const json = await res.json();
  html.value = json.html;
  loading.value = false;
}

fetchPost();


/** @type {Partial<FroalaOptions["events"]>} */
const fileUploadEvents = {
  "initialized": function (editor) {
    window.setEditorHtml = (content) => {
      this.html.set(content)
    }
  },
  "image.inserted": function () {
    console.log("image.inserted", this);
    // return false to cancel?
  },

  "image.uploaded": function () {
    // console.log(`image.uploaded ${file}`);
    return true;
  },

  "save.after": (data) => {
    // console.log("Saved!", data);
    toast.success("Post saved");
  },
};

/** @type {Partial<FroalaOptions>} */
const config = {
  imageUploadURL: "http://localhost:5555/image",

  saveURL: "http://localhost:5555/save",

  saveInterval: 3000,

  events: {
    ...fileUploadEvents,
  },
};

const froala = ref()
</script>

<template>
  <div v-if="loading">Loading...</div>
  <Froala
    v-else
    v-model="content"
    tag="textarea"
    :config="config"
    ref="froala"
  >
    {{ html }}
  </Froala>
</template>
