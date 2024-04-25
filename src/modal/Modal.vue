<script setup>
import { ref } from 'vue'
import {
  IonButton,
  IonButtons,
  IonCol,
  IonGrid,
  IonIcon,
  IonPage,
  IonRow,
  modalController,
} from '@ionic/vue'
import { closeOutline } from 'ionicons/icons'

const confirm = () => modalController.dismiss(null, 'confirm')

</script>

<template>
  <ion-page>
    <ion-buttons slot="end" class="ion-align-self-end ion-margin">
      <ion-button @click="confirm">
        <ion-icon :icon="closeOutline" slot="icon-only"></ion-icon>
      </ion-button>
    </ion-buttons>
    <ion-grid>
      <ion-row class="ion-align-items-center full-height">
        <ion-col class="ion-align-self-center">
          <div class="ion-text-center">
            <div>
              Modal content
            </div>
          </div>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-page>
</template>

<style scoped>
ion-row.full-height {
  height: 100% !important;
}
</style>