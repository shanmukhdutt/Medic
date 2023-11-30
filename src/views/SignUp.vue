<template>
<ion-page>
    <ion-header >
        <ion-toolbar color="medium" >
            <ion-back-button slot="start" default-href="/login"></ion-back-button>
            {{ $t ('SignUp') }}
        </ion-toolbar>
    </ion-header>
    <ion-content >
        <div class="first">
        <ion-row>
            <ion-col>
                <ion-input v-model="firstname" type="text" :placeholder="$t('FirstName')"></ion-input>
            </ion-col>
            <ion-col>
                <ion-input v-model="middlename" type="text" :placeholder="$t('MiddleName')"></ion-input>
            </ion-col>
            <ion-col>
                <ion-input v-model="lastname" type="text" :placeholder="$t('LastName')"></ion-input>
            </ion-col>
        </ion-row>
        <ion-input type="text" v-model="dob" :placeholder="$t('Date Of Birth')" display-format="DD/MM/YYYY"></ion-input>
        <ion-datetime-button datetime="datetime">
            <ion-modal :keep-contents-mounted="true">
                <ion-datetime id="datetime"></ion-datetime>
            </ion-modal>
        </ion-datetime-button>
        <ion-input v-model="address" type="text" :placeholder="$t('Address')"></ion-input>
        <ion-input v-model="email" type="text" :placeholder="$t('Enter Yours Email')"></ion-input>
        <ion-input type="password" :placeholder="$t('Choose your Password')"></ion-input>
        <ion-input type="password" :placeholder="$t('Re Check your Entered Password')"></ion-input>
        <ion-button @click="signUp()">{{ $t('Submit') }}</ion-button>
    </div>
    </ion-content>
</ion-page>
</template>

<script lang="ts">
import {
    defineComponent,
    ref
} from 'vue';
import {
    IonPage,
    IonHeader,
    IonContent,
    IonToolbar,
    IonInput,
    IonRow,
    IonCol,
    IonButton,
    IonDatetime,
    IonDatetimeButton,
    IonModal,
    IonBackButton
} from '@ionic/vue';
import {
    useStore
} from 'vuex';
import {
    useRouter
} from 'vue-router'
export default defineComponent({
    name: 'SignUp',
    components: {
        IonPage,
        IonHeader,
        IonContent,
        IonToolbar,
        IonInput,
        IonRow,
        IonCol,
        IonButton,
        IonDatetime,
        IonDatetimeButton,
        IonModal,
        IonBackButton
    },
    setup() {
        const store = useStore();
        const router = useRouter();
        const firstname = ref('');
        const middlename = ref('');
        const lastname = ref('');
        const dob = ref('');
        const address = ref('');
        const email = ref('');
        const signUp = () => {
            const user = {
                firstname: firstname.value,
                middlename: middlename.value,
                lastname: lastname.value,
                dob: dob.value,
                address: address.value,
                email: email.value
            };
            store.commit('setUser', user);
            router.push('/login')
        };
        return {
            firstname,
            middlename,
            lastname,
            dob,
            address,
            email,
            signUp
        };
    },
});
</script>
<style scoped>
.first{
  background-color:rgb(223, 225, 231);
}
ion-toolbar{
    background-color: rgb(65, 66, 70);
}
</style>
