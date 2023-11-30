<template>
<ion-page>
    <ion-header>
        <ion-toolbar color="medium">
            <ion-back-button slot="start" default-href="/home"></ion-back-button>
            {{ $t('Personal Details') }}
        </ion-toolbar>
    </ion-header>
    <ion-content>
        <ion-card>
            <ion-card-header>
                <h3>{{$t('Entered Details')}}</h3>
            </ion-card-header>
            <ion-card-subtitle>
                <ion-card-content v-if="user">
                    <h2>{{ $t('FirstName') }}:{{ user.firstname }}</h2><br>
                    <h2>{{ $t('MiddleName') }}:{{ user.middlename }}</h2><br>
                    <h2>{{ $t('LastName') }}:{{ user.lastname }}</h2><br>
                    <h2>{{ $t('Date Of Birth')}}:{{ user.dob }}</h2><br>
                    <h2>{{ $t('Address') }}:{{ user.address }}</h2><br>
                    <h2>{{ $t('Email') }}:{{ user.email }}</h2><br>
                </ion-card-content>
            </ion-card-subtitle>
        </ion-card>
    </ion-content>
</ion-page>
</template>

<script lang="ts">
import {
    computed,
    defineComponent
} from 'vue';
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonBackButton,
    IonContent,
    IonCard,
    IonCardSubtitle,
    IonCardHeader,
    IonCardContent
} from '@ionic/vue';
import {
    useStore
} from 'vuex';
export default defineComponent({
    name: 'PersonalDetails',
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonBackButton,
        IonContent,
        IonCardHeader,
        IonCard,
        IonCardSubtitle,
        IonCardContent,
    },
    setup() {
        const store = useStore();
        const user = computed(() => store.getters.getUser);
        return {
            user
        };
    },
});
</script>
