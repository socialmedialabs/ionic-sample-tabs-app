<script setup>
import { ref } from 'vue'
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  onIonViewDidEnter,
  onIonViewDidLeave,
} from '@ionic/vue'
import Tab4Content from '@/tab4/Tab4Content.vue'

const closeSliders = ref(0)
onIonViewDidEnter(() => {
  closeSliders.value = Math.floor(new Date().getTime() / 1000)
})
</script>

<template>
  <ion-page>

    <ion-header class="ion-no-border" :translucent="true">
      <ion-toolbar>
        <ion-title>Tab 4</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <Tab4Content />
    </ion-content>

  </ion-page>
</template>

<style scoped></style>