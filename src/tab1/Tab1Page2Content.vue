<script setup>
import { ref } from 'vue'
import {
  IonNavLink,
  IonButton,
} from '@ionic/vue'

</script>

<template>

  <ion-nav-link router-link="/tab1" router-direction="back">
    <ion-button>Back</ion-button>
  </ion-nav-link>

</template>

<style scoped></style>
