<script setup>
import { watch } from 'vue'
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/vue'
import { bookmark, cafe, calendarNumber, camera, storefront } from 'ionicons/icons'

</script>

<template>
  <ion-app>
    <ion-tabs>
      <ion-router-outlet swipeGesture="false" />
      <ion-tab-bar slot="bottom" :translucent="true">
        <ion-tab-button tab="tab1" href="/tab1">
          <ion-icon :icon="calendarNumber" />
          <ion-label>Tab 1</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tab2">
          <ion-icon :icon="bookmark" />
          <ion-label>Tab 2</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tab3">
          <ion-icon :icon="camera" />
          <ion-label>Tab 3</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab4" href="/tab4">
          <ion-icon :icon="cafe" />
          <ion-label>Tab 4</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab5" href="/tab5">
          <ion-icon :icon="storefront" />
          <ion-label>Tab 5</ion-label>
        </ion-tab-button>

      </ion-tab-bar>
    </ion-tabs>
  </ion-app>
</template>

<style scoped></style>
