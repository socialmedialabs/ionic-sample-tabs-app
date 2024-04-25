<script setup>
import { ref } from 'vue'
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
  modalController,
} from '@ionic/vue'

import { addCircle, chevronBackSharp } from 'ionicons/icons'

import Tab1Page2 from '@/tab1/Tab1Page2Content.vue'
import Modal from '@/modal/Modal.vue'

const openModal = async () => {
  const modal = await modalController.create({
    component: Modal,
    componentProps: {
    },
    cssClass: 'ion-fullscreen-modal'
  })
  await modal.present()
}
</script>

<template>
  <ion-page>

    <ion-header class="ion-no-border" :translucent="true">

      <ion-toolbar>
        <ion-buttons>
          <ion-button slot="start" router-link="/tab1" router-direction="back">
            <ion-icon slot="icon-only" :icon="chevronBackSharp"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>Tab 1 Page 2</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="openModal()">
            <ion-icon :icon="addCircle" />
          </ion-button>
        </ion-buttons>
      </ion-toolbar>

    </ion-header>

    <ion-content :fullscreen="true">
      <Tab1Page2 />
    </ion-content>

  </ion-page>
</template>

<style scoped></style>