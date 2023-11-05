import { createApp } from "vue";

import "froala-editor/js/plugins.pkgd.min.js";
// import "froala-editor/js/plugins/file.min.js";

import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";


import VueFroala from "vue-froala-wysiwyg";
// import 'vue-toast-notification/dist/theme-bootstrap.css';

import ToastPlugin from "vue-toast-notification";
import "vue-toast-notification/dist/theme-default.css";

import App from "./App.vue";
import "./style.css";

const app = createApp(App);

app.use(VueFroala);
app.use(ToastPlugin);

app.mount("#app");
