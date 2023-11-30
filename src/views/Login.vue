<template>
<ion-page>
    <ion-header >
        <ion-toolbar color="medium">
            <ion-icon :icon="medkitIcon" class="three"></ion-icon>
            <ion-title class="four">{{$t('Medico')}}</ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-content>
        <div class="seven">
            <ion-card class="one">
                <ion-card-content>
                    
                        <ion-item>
                            <ion-input v-model="userName" :placeholder="$t('Enter Id here')" type="text" class="eight"></ion-input>
                        </ion-item>
                        <ion-item>
                            <ion-input v-model="password" :placeholder="$t('Enter password')" type="password" class="eight"></ion-input>
                        </ion-item>
                   
                </ion-card-content>
                <ion-item class="six">
                <ion-toolbar>
                    <ion-button @click="login()">{{$t('Sign In')}}</ion-button>
                </ion-toolbar>
            </ion-item>
            </ion-card>
            
            <ion-item class="second">
                {{$t('New User Register Here')}}
                <ion-button @click="register()">{{$t('Register')}}</ion-button>
            </ion-item>
        </div>
    </ion-content>
    <ion-footer>
        <ion-label position="floating">
            <ion-card-title>{{ $t('Choose your Language') }}</ion-card-title>
            <ion-select v-model="selectedLanguage">
                <ion-select-option value="en">English</ion-select-option>
                <ion-select-option value="te">తెలుగు</ion-select-option>
                <ion-select-option value="ta">தமிழ்</ion-select-option>
            </ion-select>
        </ion-label>
    </ion-footer>
</ion-page>
</template>

<script lang="ts">
import {
    IonContent,
    IonHeader,
    IonPage,
    IonButton,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonList,
    IonInput,
    IonItem,
    IonCardContent,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonCardTitle,
    IonIcon,
    IonFooter
} from '@ionic/vue';
import {
    defineComponent,
    ref,
    watch
} from 'vue';
import i18n from '@/locale';
import {
    useRouter
} from 'vue-router';
import {
    medkit
} from 'ionicons/icons';

export default defineComponent({
    name: 'login',
    components: {
        IonContent,
        IonPage,
        IonTitle,
        IonToolbar,
        IonHeader,
        IonCard,
        IonCardHeader,
        IonList,
        IonInput,
        IonItem,
        IonButton,
        IonCardContent,
        IonLabel,
        IonSelect,
        IonSelectOption,
        IonCardTitle,
        IonIcon,
        IonFooter
    },
    setup() {
        const userName = ref('');
        const password = ref('');
        const selectedLanguage = ref < 'en' | 'ta' | 'te' > ('en');
        watch(selectedLanguage, (newLanguage) => {
            if (isValidLanguage(newLanguage)) {
                i18n.global.locale = newLanguage;
            } else {
                console.warn(`Invalid language code: ${newLanguage}`)
            }
        });
        const isValidLanguage = (lang: string): lang is 'en' | 'ta' | 'te' => {
            return ['en', 'ta', 'te'].includes(lang);
        };

        const router = useRouter()

        const login = () => {
            if (userName.value !== '' && password.value !== '') {
                router.push('/home');
            } else {
                alert('Invalid...! Check the details');
            }
        };
        const register = () => {
            router.push('/signUp');
        };
        const medkitIcon = ref(medkit);
        return {
            userName,
            password,
            selectedLanguage,
            login,
            register,
            medkitIcon
        };
    }
});
</script>

<style scoped>
.one {
    width: 300px;
    margin-right: 160px;
    border-radius: 20px;
    
}

.three {
    width: 30px;
    height: 30px;
    margin-left: 20px;
    margin-right: 10px;
}

.second {
    width: 300px;
    margin-right: 160px;
    border-radius: 10px;
}

.four {
    height: 40px;
    margin-left: 0;
    margin-right: auto;
    display: inline-block;
    vertical-align: middle
}

.six {
    width: 300px;
    margin-right: 160px;
}

.seven {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    height: 100%;
    background-image: url('/login.png');
    padding: 20px;
    /* background-color:rgb(226, 221, 149) */
}

ion-footer {
    z-index: 0;
    background-color:rgb(91, 94, 102);
}


</style>
