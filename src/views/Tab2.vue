<script setup>
import { defineAsyncComponent, ref } from 'vue'
import {
  IonButton,
  IonButtons,
  IonContent,
  IonMenu,
  IonMenuButton,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonLoading,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/vue'
import { add, menuOutline, navigateSharp } from 'ionicons/icons'
const Tab2Content = defineAsyncComponent(() => import('@/tab2/Tab2Content.vue'))

</script>

<template>


  <ion-page>
    <ion-header class="ion-no-border" :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="end">
        </ion-buttons>
        <ion-title>Tab 2</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">

      <ion-fab slot="fixed" vertical="top" horizontal="end" :edge="false">
        <ion-fab-button size="small">
          <ion-icon :icon="add" color="dark"></ion-icon>
        </ion-fab-button>
      </ion-fab>

      <Tab2Content />

    </ion-content>

  </ion-page>
</template>

<style scoped></style>