<script setup>
import { ref } from 'vue'
import {
  IonNavLink,
  IonButton,
} from '@ionic/vue'

</script>

<template>

  <div>
    Tab 3
  </div>

  <ion-nav-link router-link="/tab3/page2">
    <ion-button>Next</ion-button>
  </ion-nav-link>

</template>

<style scoped></style>