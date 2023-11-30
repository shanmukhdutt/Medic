<template>
<ion-page>
    <ion-header>
        <ion-toolbar color="medium">
            <ion-back-button slot="start" default-href="/home"></ion-back-button>
            {{$t('About')}}
        </ion-toolbar>
    </ion-header>
    <ion-content>

    </ion-content>
</ion-page>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue';
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonBackButton,
    IonContent
} from '@ionic/vue'
export default defineComponent({
    name: 'About',
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonBackButton,
        IonContent
    }

})
</script>
