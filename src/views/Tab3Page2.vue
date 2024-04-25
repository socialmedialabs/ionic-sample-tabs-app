<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonLoading,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/vue'
import { chevronBackSharp } from 'ionicons/icons'
const Tab3Page2Content = defineAsyncComponent(() => import('@/tab3/Tab3Page2Content.vue'))
</script>

<template>
  <ion-page>

    <ion-header class="ion-no-border" :translucent="true">
      <ion-toolbar>
        <ion-buttons>
          <ion-button slot="start" router-link="/tab3" router-direction="back">
            <ion-icon slot="icon-only" :icon="chevronBackSharp"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>Tab 3 Page 2</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <Tab3Page2Content />
    </ion-content>

  </ion-page>
</template>

<style scoped></style>