import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $loading: (arg: boolean) => void;
  }
}
