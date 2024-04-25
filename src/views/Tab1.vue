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
  onIonViewDidEnter,
} from '@ionic/vue'
import { addCircle } from 'ionicons/icons'

import Tab1Content from '@/tab1/Tab1Content.vue'
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
        <ion-title>Tab 1</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="openModal()">
            <ion-icon :icon="addCircle" />
          </ion-button>
        </ion-buttons>
      </ion-toolbar>

    </ion-header>

    <ion-content :fullscreen="true">
      <Tab1Content />
    </ion-content>

  </ion-page>
</template>

<style scoped></style>