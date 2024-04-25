<script setup>
import { defineAsyncComponent } from 'vue'
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonNavLink,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/vue'
import { ellipsisHorizontal } from 'ionicons/icons'

const Tab3Content = defineAsyncComponent(() => import('@/tab3/Tab3Content.vue'))
</script>

<template>
  <ion-page>

    <ion-header class="ion-no-border" :translucent="true">
      <ion-toolbar>
        <ion-title>Tab 3</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <Tab3Content />
    </ion-content>

  </ion-page>
</template>

<style scoped></style>