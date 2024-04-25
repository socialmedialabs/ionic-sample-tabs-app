<script setup>
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/vue'
import Tab5Content from '@/tab5/Tab5Content.vue'
</script>

<template>
  <ion-page>

    <ion-header class="ion-no-border" :translucent="true">
      <ion-toolbar>
        <ion-title>Tab 5</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <Tab5Content />
    </ion-content>

  </ion-page>
</template>

<style scoped></style>