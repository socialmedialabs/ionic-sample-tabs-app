<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import {
  IonAvatar,
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  onIonViewDidEnter,
} from '@ionic/vue'
import { pencilOutline, shareOutline, trashOutline } from 'ionicons/icons'

const props = defineProps({
  closeSliders: Number,
})

watch(() => props.closeSliders, () => {
  const slidingItems = document.querySelectorAll('ion-item-sliding')
  slidingItems.forEach((item) => {
    item.close()
  })
})

</script>

<template>
  <ion-list :inset="true">
    <ion-item-sliding>
      <ion-item :button="true">
        <ion-avatar aria-hidden="true" slot="start">
          <img alt="" src="/assets/img/svg/avatar.svg" />
        </ion-avatar>
        <ion-label>Rick Astley</ion-label>
      </ion-item>
      <ion-item-options slot="end">
        <ion-item-option color="secondary">
          <ion-icon slot="icon-only" :icon="pencilOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="tertiary">
          <ion-icon slot="icon-only" :icon="shareOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="danger" expandable="true">
          <ion-icon slot="icon-only" :icon="trashOutline"></ion-icon>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    <ion-item-sliding>
      <ion-item :button="true">
        <ion-avatar aria-hidden="true" slot="start">
          <img alt="" src="/assets/img/svg/avatar.svg" />
        </ion-avatar>
        <ion-label>Leeroy Jenkins</ion-label>
      </ion-item>
      <ion-item-options slot="end">
        <ion-item-option color="secondary">
          <ion-icon slot="icon-only" :icon="pencilOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="tertiary">
          <ion-icon slot="icon-only" :icon="shareOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="danger" expandable="true">
          <ion-icon slot="icon-only" :icon="trashOutline"></ion-icon>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    <ion-item-sliding>
      <ion-item :button="true">
        <ion-avatar aria-hidden="true" slot="start">
          <img alt="" src="/assets/img/svg/avatar.svg" />
        </ion-avatar>
        <ion-label>Ionitron</ion-label>
      </ion-item>
      <ion-item-options slot="end">
        <ion-item-option color="secondary">
          <ion-icon slot="icon-only" :icon="pencilOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="tertiary">
          <ion-icon slot="icon-only" :icon="shareOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="danger" expandable="true">
          <ion-icon slot="icon-only" :icon="trashOutline"></ion-icon>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    <ion-item-sliding>
      <ion-item :button="true">
        <ion-avatar aria-hidden="true" slot="start">
          <img alt="" src="/assets/img/svg/avatar.svg" />
        </ion-avatar>
        <ion-label>Wall-E</ion-label>
      </ion-item>
      <ion-item-options slot="end">
        <ion-item-option color="secondary">
          <ion-icon slot="icon-only" :icon="pencilOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="tertiary">
          <ion-icon slot="icon-only" :icon="shareOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="danger" expandable="true">
          <ion-icon slot="icon-only" :icon="trashOutline"></ion-icon>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    <ion-item-sliding>
      <ion-item :button="true">
        <ion-avatar aria-hidden="true" slot="start">
          <img alt="" src="/assets/img/svg/avatar.svg" />
        </ion-avatar>
        <ion-label>Cortana</ion-label>
      </ion-item>
      <ion-item-options slot="end">
        <ion-item-option color="secondary">
          <ion-icon slot="icon-only" :icon="pencilOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="tertiary">
          <ion-icon slot="icon-only" :icon="shareOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="danger" expandable="true">
          <ion-icon slot="icon-only" :icon="trashOutline"></ion-icon>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    <ion-item-sliding>
      <ion-item :button="true">
        <ion-avatar aria-hidden="true" slot="start">
          <img alt="" src="/assets/img/svg/avatar.svg" />
        </ion-avatar>
        <ion-label>Bender</ion-label>
      </ion-item>
      <ion-item-options slot="end">
        <ion-item-option color="secondary">
          <ion-icon slot="icon-only" :icon="pencilOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="tertiary">
          <ion-icon slot="icon-only" :icon="shareOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="danger" expandable="true">
          <ion-icon slot="icon-only" :icon="trashOutline"></ion-icon>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    <ion-item-sliding>
      <ion-item :button="true">
        <ion-avatar aria-hidden="true" slot="start">
          <img alt="" src="/assets/img/svg/avatar.svg" />
        </ion-avatar>
        <ion-label>BB-8</ion-label>
      </ion-item>
      <ion-item-options slot="end">
        <ion-item-option color="secondary">
          <ion-icon slot="icon-only" :icon="pencilOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="tertiary">
          <ion-icon slot="icon-only" :icon="shareOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="danger" expandable="true">
          <ion-icon slot="icon-only" :icon="trashOutline"></ion-icon>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    <ion-item-sliding>
      <ion-item :button="true">
        <ion-avatar aria-hidden="true" slot="start">
          <img alt="" src="/assets/img/svg/avatar.svg" />
        </ion-avatar>
        <ion-label>Rick Astley</ion-label>
      </ion-item>
      <ion-item-options slot="end">
        <ion-item-option color="secondary">
          <ion-icon slot="icon-only" :icon="pencilOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="tertiary">
          <ion-icon slot="icon-only" :icon="shareOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="danger" expandable="true">
          <ion-icon slot="icon-only" :icon="trashOutline"></ion-icon>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    <ion-item-sliding>
      <ion-item :button="true">
        <ion-avatar aria-hidden="true" slot="start">
          <img alt="" src="/assets/img/svg/avatar.svg" />
        </ion-avatar>
        <ion-label>Leeroy Jenkins</ion-label>
      </ion-item>
      <ion-item-options slot="end">
        <ion-item-option color="secondary">
          <ion-icon slot="icon-only" :icon="pencilOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="tertiary">
          <ion-icon slot="icon-only" :icon="shareOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="danger" expandable="true">
          <ion-icon slot="icon-only" :icon="trashOutline"></ion-icon>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    <ion-item-sliding>
      <ion-item :button="true">
        <ion-avatar aria-hidden="true" slot="start">
          <img alt="" src="/assets/img/svg/avatar.svg" />
        </ion-avatar>
        <ion-label>Ionitron</ion-label>
      </ion-item>
      <ion-item-options slot="end">
        <ion-item-option color="secondary">
          <ion-icon slot="icon-only" :icon="pencilOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="tertiary">
          <ion-icon slot="icon-only" :icon="shareOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="danger" expandable="true">
          <ion-icon slot="icon-only" :icon="trashOutline"></ion-icon>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    <ion-item-sliding>
      <ion-item :button="true">
        <ion-avatar aria-hidden="true" slot="start">
          <img alt="" src="/assets/img/svg/avatar.svg" />
        </ion-avatar>
        <ion-label>Wall-E</ion-label>
      </ion-item>
      <ion-item-options slot="end">
        <ion-item-option color="secondary">
          <ion-icon slot="icon-only" :icon="pencilOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="tertiary">
          <ion-icon slot="icon-only" :icon="shareOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="danger" expandable="true">
          <ion-icon slot="icon-only" :icon="trashOutline"></ion-icon>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    <ion-item-sliding>
      <ion-item :button="true">
        <ion-avatar aria-hidden="true" slot="start">
          <img alt="" src="/assets/img/svg/avatar.svg" />
        </ion-avatar>
        <ion-label>Cortana</ion-label>
      </ion-item>
      <ion-item-options slot="end">
        <ion-item-option color="secondary">
          <ion-icon slot="icon-only" :icon="pencilOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="tertiary">
          <ion-icon slot="icon-only" :icon="shareOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="danger" expandable="true">
          <ion-icon slot="icon-only" :icon="trashOutline"></ion-icon>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    <ion-item-sliding>
      <ion-item :button="true">
        <ion-avatar aria-hidden="true" slot="start">
          <img alt="" src="/assets/img/svg/avatar.svg" />
        </ion-avatar>
        <ion-label>Bender</ion-label>
      </ion-item>
      <ion-item-options slot="end">
        <ion-item-option color="secondary">
          <ion-icon slot="icon-only" :icon="pencilOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="tertiary">
          <ion-icon slot="icon-only" :icon="shareOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="danger" expandable="true">
          <ion-icon slot="icon-only" :icon="trashOutline"></ion-icon>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    <ion-item-sliding>
      <ion-item :button="true">
        <ion-avatar aria-hidden="true" slot="start">
          <img alt="" src="/assets/img/svg/avatar.svg" />
        </ion-avatar>
        <ion-label>BB-8</ion-label>
      </ion-item>
      <ion-item-options slot="end">
        <ion-item-option color="secondary">
          <ion-icon slot="icon-only" :icon="pencilOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="tertiary">
          <ion-icon slot="icon-only" :icon="shareOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="danger" expandable="true">
          <ion-icon slot="icon-only" :icon="trashOutline"></ion-icon>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    <ion-item-sliding>
      <ion-item :button="true">
        <ion-avatar aria-hidden="true" slot="start">
          <img alt="" src="/assets/img/svg/avatar.svg" />
        </ion-avatar>
        <ion-label>Rick Astley</ion-label>
      </ion-item>
      <ion-item-options slot="end">
        <ion-item-option color="secondary">
          <ion-icon slot="icon-only" :icon="pencilOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="tertiary">
          <ion-icon slot="icon-only" :icon="shareOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="danger" expandable="true">
          <ion-icon slot="icon-only" :icon="trashOutline"></ion-icon>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    <ion-item-sliding>
      <ion-item :button="true">
        <ion-avatar aria-hidden="true" slot="start">
          <img alt="" src="/assets/img/svg/avatar.svg" />
        </ion-avatar>
        <ion-label>Leeroy Jenkins</ion-label>
      </ion-item>
      <ion-item-options slot="end">
        <ion-item-option color="secondary">
          <ion-icon slot="icon-only" :icon="pencilOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="tertiary">
          <ion-icon slot="icon-only" :icon="shareOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="danger" expandable="true">
          <ion-icon slot="icon-only" :icon="trashOutline"></ion-icon>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    <ion-item-sliding>
      <ion-item :button="true">
        <ion-avatar aria-hidden="true" slot="start">
          <img alt="" src="/assets/img/svg/avatar.svg" />
        </ion-avatar>
        <ion-label>Ionitron</ion-label>
      </ion-item>
      <ion-item-options slot="end">
        <ion-item-option color="secondary">
          <ion-icon slot="icon-only" :icon="pencilOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="tertiary">
          <ion-icon slot="icon-only" :icon="shareOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="danger" expandable="true">
          <ion-icon slot="icon-only" :icon="trashOutline"></ion-icon>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    <ion-item-sliding>
      <ion-item :button="true">
        <ion-avatar aria-hidden="true" slot="start">
          <img alt="" src="/assets/img/svg/avatar.svg" />
        </ion-avatar>
        <ion-label>Wall-E</ion-label>
      </ion-item>
      <ion-item-options slot="end">
        <ion-item-option color="secondary">
          <ion-icon slot="icon-only" :icon="pencilOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="tertiary">
          <ion-icon slot="icon-only" :icon="shareOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="danger" expandable="true">
          <ion-icon slot="icon-only" :icon="trashOutline"></ion-icon>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    <ion-item-sliding>
      <ion-item :button="true">
        <ion-avatar aria-hidden="true" slot="start">
          <img alt="" src="/assets/img/svg/avatar.svg" />
        </ion-avatar>
        <ion-label>Cortana</ion-label>
      </ion-item>
      <ion-item-options slot="end">
        <ion-item-option color="secondary">
          <ion-icon slot="icon-only" :icon="pencilOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="tertiary">
          <ion-icon slot="icon-only" :icon="shareOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="danger" expandable="true">
          <ion-icon slot="icon-only" :icon="trashOutline"></ion-icon>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    <ion-item-sliding>
      <ion-item :button="true">
        <ion-avatar aria-hidden="true" slot="start">
          <img alt="" src="/assets/img/svg/avatar.svg" />
        </ion-avatar>
        <ion-label>Bender</ion-label>
      </ion-item>
      <ion-item-options slot="end">
        <ion-item-option color="secondary">
          <ion-icon slot="icon-only" :icon="pencilOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="tertiary">
          <ion-icon slot="icon-only" :icon="shareOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="danger" expandable="true">
          <ion-icon slot="icon-only" :icon="trashOutline"></ion-icon>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    <ion-item-sliding>
      <ion-item :button="true">
        <ion-avatar aria-hidden="true" slot="start">
          <img alt="" src="/assets/img/svg/avatar.svg" />
        </ion-avatar>
        <ion-label>BB-8</ion-label>
      </ion-item>
      <ion-item-options slot="end">
        <ion-item-option color="secondary">
          <ion-icon slot="icon-only" :icon="pencilOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="tertiary">
          <ion-icon slot="icon-only" :icon="shareOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="danger" expandable="true">
          <ion-icon slot="icon-only" :icon="trashOutline"></ion-icon>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    <ion-item-sliding>
      <ion-item :button="true">
        <ion-avatar aria-hidden="true" slot="start">
          <img alt="" src="/assets/img/svg/avatar.svg" />
        </ion-avatar>
        <ion-label>Rick Astley</ion-label>
      </ion-item>
      <ion-item-options slot="end">
        <ion-item-option color="secondary">
          <ion-icon slot="icon-only" :icon="pencilOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="tertiary">
          <ion-icon slot="icon-only" :icon="shareOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="danger" expandable="true">
          <ion-icon slot="icon-only" :icon="trashOutline"></ion-icon>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    <ion-item-sliding>
      <ion-item :button="true">
        <ion-avatar aria-hidden="true" slot="start">
          <img alt="" src="/assets/img/svg/avatar.svg" />
        </ion-avatar>
        <ion-label>Leeroy Jenkins</ion-label>
      </ion-item>
      <ion-item-options slot="end">
        <ion-item-option color="secondary">
          <ion-icon slot="icon-only" :icon="pencilOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="tertiary">
          <ion-icon slot="icon-only" :icon="shareOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="danger" expandable="true">
          <ion-icon slot="icon-only" :icon="trashOutline"></ion-icon>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    <ion-item-sliding>
      <ion-item :button="true">
        <ion-avatar aria-hidden="true" slot="start">
          <img alt="" src="/assets/img/svg/avatar.svg" />
        </ion-avatar>
        <ion-label>Ionitron</ion-label>
      </ion-item>
      <ion-item-options slot="end">
        <ion-item-option color="secondary">
          <ion-icon slot="icon-only" :icon="pencilOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="tertiary">
          <ion-icon slot="icon-only" :icon="shareOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="danger" expandable="true">
          <ion-icon slot="icon-only" :icon="trashOutline"></ion-icon>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    <ion-item-sliding>
      <ion-item :button="true">
        <ion-avatar aria-hidden="true" slot="start">
          <img alt="" src="/assets/img/svg/avatar.svg" />
        </ion-avatar>
        <ion-label>Wall-E</ion-label>
      </ion-item>
      <ion-item-options slot="end">
        <ion-item-option color="secondary">
          <ion-icon slot="icon-only" :icon="pencilOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="tertiary">
          <ion-icon slot="icon-only" :icon="shareOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="danger" expandable="true">
          <ion-icon slot="icon-only" :icon="trashOutline"></ion-icon>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    <ion-item-sliding>
      <ion-item :button="true">
        <ion-avatar aria-hidden="true" slot="start">
          <img alt="" src="/assets/img/svg/avatar.svg" />
        </ion-avatar>
        <ion-label>Cortana</ion-label>
      </ion-item>
      <ion-item-options slot="end">
        <ion-item-option color="secondary">
          <ion-icon slot="icon-only" :icon="pencilOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="tertiary">
          <ion-icon slot="icon-only" :icon="shareOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="danger" expandable="true">
          <ion-icon slot="icon-only" :icon="trashOutline"></ion-icon>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    <ion-item-sliding>
      <ion-item :button="true">
        <ion-avatar aria-hidden="true" slot="start">
          <img alt="" src="/assets/img/svg/avatar.svg" />
        </ion-avatar>
        <ion-label>Bender</ion-label>
      </ion-item>
      <ion-item-options slot="end">
        <ion-item-option color="secondary">
          <ion-icon slot="icon-only" :icon="pencilOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="tertiary">
          <ion-icon slot="icon-only" :icon="shareOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="danger" expandable="true">
          <ion-icon slot="icon-only" :icon="trashOutline"></ion-icon>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    <ion-item-sliding>
      <ion-item :button="true">
        <ion-avatar aria-hidden="true" slot="start">
          <img alt="" src="/assets/img/svg/avatar.svg" />
        </ion-avatar>
        <ion-label>BB-8</ion-label>
      </ion-item>
      <ion-item-options slot="end">
        <ion-item-option color="secondary">
          <ion-icon slot="icon-only" :icon="pencilOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="tertiary">
          <ion-icon slot="icon-only" :icon="shareOutline"></ion-icon>
        </ion-item-option>
        <ion-item-option color="danger" expandable="true">
          <ion-icon slot="icon-only" :icon="trashOutline"></ion-icon>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>
  </ion-list>
</template>

<style scoped>
ion-icon {
  margin-inline: 0 !important;
  font-size: 1.5em !important;
}
</style>