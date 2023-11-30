<template>
<ion-page>
    <ion-header>
        <ion-toolbar color="medium">
            <ion-back-button slot="start" default-href="/home"></ion-back-button>
            {{$t('Details')}}
        </ion-toolbar>
    </ion-header>
    <ion-content>
        <div class="one" :style="{backgroundImage:`url(${doctor.img})`}">
        <ion-card class="first">
            <ion-card-header>
                <ion-card-title>{{ doctor.name }}</ion-card-title>
            </ion-card-header>
            <ion-card-content>
                {{ doctor.description }}
            </ion-card-content>
        </ion-card>
        <ion-card class="first">
            <ion-card-header>
                {{$t('Book your Appointment')}}
            </ion-card-header>
            <ion-card-content>
                <ion-datetime-button datetime="datetime">
                    <ion-modal :keep-contents-mounted="true">
                        <ion-datetime id="datetime"></ion-datetime>
                    </ion-modal>
                </ion-datetime-button>
                <ion-toolbar>
                    <ion-button @click="onSubmit" slot="end">{{$t('Submit')}}</ion-button>
                </ion-toolbar>
            </ion-card-content>
        </ion-card>
        <ion-alert :is-open="showModal" header="Slot Booked Succesfully" @ionAlertDimiss="onAlertDismiss">
        </ion-alert>
    </div>
    </ion-content>
</ion-page>
</template>

<script lang="ts">
import {
    defineComponent,
    computed,
    ref
} from 'vue';
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonBackButton,
    IonContent,
    IonDatetime,
    IonModal,
    IonDatetimeButton,
    IonButton,
    IonAlert
} from '@ionic/vue';
import {
    useRouter
} from 'vue-router';
import {
    useStore
} from 'vuex';
export default defineComponent({
    name: 'Details',
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonCard,
        IonCardContent,
        IonCardHeader,
        IonCardTitle,
        IonBackButton,
        IonContent,
        IonDatetime,
        IonModal,
        IonDatetimeButton,
        IonButton,
        IonAlert
    },
    setup() {
        const store = useStore();
        const router = useRouter();
        const docId = computed(() => {
            const route = router.currentRoute.value;
            return route.params.id
        });
        const doctor = computed(() => {
            const doctors = [
                ...store.state.docData.CardioName,
                ...store.state.docData.AneName,
                ...store.state.docData.SurName,
                ...store.state.docData.NeoName
            ];
            return doctors.find((doc: any) => doc.id === parseInt(docId.value))
        });
        const isOpen = ref(false);
        const showModal = ref(false);
        const onSubmit = () => {
            showModal.value = true;
        }
        const onAlertDismiss = () => {
            showModal.value = false;
        };
        return {
            doctor,
            isOpen,
            showModal,
            onSubmit,
            onAlertDismiss,

        }
    }
});
</script>

<style scoped>
.one{
    /* background-color: rgb(197, 200, 209); */
    padding:120px;
    background-size:cover;
    background-position:center;

}
.first{
    border-radius: 20px;
}
</style>
