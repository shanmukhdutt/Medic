<template>
<ion-page>
    <ion-menu content-id="main-content">
        <ion-header>
            <ion-toolbar color="medium">
                <ion-title>{{ $t ('Menu') }}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <div class="seven">
            <ion-card class="four">
                <ion-card-content @click="viewHome()" class="fourth">{{ $t('Home') }}</ion-card-content>
            </ion-card>
            <ion-card class="four">
                <ion-card-content @click="Pd()" class="fourth">{{$t('Personal Details')}}</ion-card-content>
            </ion-card>
            <ion-card class="four">
                <ion-card-content @click="ActSet()" class="fourth">{{ $t('Account Settings') }}</ion-card-content>
            </ion-card>
            <ion-card class="four">
                <ion-card-content @click="Help()" class="fourth">{{ $t('Help') }}</ion-card-content>
            </ion-card>
            <ion-card class="four">
                <ion-card-content @click="Abou()" class="fourth">{{ $t('About') }}</ion-card-content>
            </ion-card>
            <ion-card class="four">
                <ion-card-content @click="logout()" class="fourth">{{ $t('LogOut') }}</ion-card-content>
            </ion-card>
        </div>
        </ion-content>
    </ion-menu>
    <ion-header>
        <ion-toolbar color="medium">
            <ion-buttons slot="start">
                <ion-menu-button></ion-menu-button>

            </ion-buttons>
            <ion-title>{{ $t ('Medic') }}</ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-content class="zero" id="main-content">
        <div class="ten">
        <ion-card class="six">
            <ion-card-header>
                <ion-card-title>{{ $t ('Cardiology') }}</ion-card-title>
            </ion-card-header>
            <ion-card-content>
                {{ $t ('healthcare provider who can treat chest pain, high blood pressure and heart failure, as well as problems with your heart valves, blood vessels and other heart and vascular issues. They can order tests like electrocardiograms, echocardiograms and CTs (computed tomography) to find out whats wrong') }}
            </ion-card-content>
            <ion-item>
                <ion-label position="floating">{{ $t ('Select Cardiologist') }}</ion-label>
                <ion-select v-model="selectedCardiologist" @ion-change="(e)=>setSelectedCardiologist(e.detail.value)">
                    <ion-select-option v-for="name in docData.CardioName" :key="name.id" :value="name.id">{{ name.name }}</ion-select-option>
                </ion-select>
            </ion-item>
        </ion-card>
        <ion-card class="six">
            <ion-card-header>
                <ion-card-title>{{ $t ('Anesthesia') }}</ion-card-title>
            </ion-card-header>
            <ion-card-content>
                {{ $t ('prevents patients from feeling pain during procedures like surgery, certain screening and diagnostic tests, tissue sample removal (e.g., skin biopsies), and dental work. It allows people to have procedures that lead to healthier and longer lives') }}
            </ion-card-content>
            <ion-item>
                <ion-label position="floating">{{ $t ('Select Anaesthesiologist') }}</ion-label>
                <ion-select v-model="selectedAnaesthesiologist" @ion-change="(e)=>setSelectedAnaesthesiologist(e.detail.value)">
                    <ion-select-option v-for="name in docData.AneName" :key="name.id" :value="name.id">{{ name.name }}</ion-select-option>
                </ion-select>
            </ion-item>
        </ion-card>
        <ion-card class="six">
            <ion-card-header>
                <ion-card-title>{{ $t ('Surgeory') }}</ion-card-title>
            </ion-card-header>
            <ion-card-content>
                {{ $t ('concerned with diseases and conditions requiring or amenable to operative or manual procedures') }}
            </ion-card-content>
            <ion-item>
                <ion-label position="floating">{{ $t ('Select Surgeon') }}</ion-label>
                <ion-select v-model="selectedSurgeon" @ion-change="(e)=>setSelectedSurgeon(e.detail.value)">
                    <ion-select-option v-for="name in docData.SurName" :key="name.id" :value="name.id">{{ name.name }}</ion-select-option>
                </ion-select>
            </ion-item>
        </ion-card>
        <ion-card class="six">
            <ion-card-header>
                <ion-card-title>{{ $t ('Neurology') }}</ion-card-title>
            </ion-card-header>
            <ion-card-content>
                {{ $t ('diagnosis and treatment of all categories of conditions and disease involving the nervous system, which comprises the brain, the spinal cord and the peripheral nerves') }}
            </ion-card-content>
            <ion-item>
                <ion-label position="floating">{{ $t ('Select Neurologist') }}</ion-label>
                <ion-select v-model="selectedNeurologist" @ion-change="(e)=>setSelectedNeurologist(e.detail.value)">
                    <ion-select-option v-for="name in docData.NeoName" :key="name.id" :value="name.id">{{ name.name }}</ion-select-option>
                </ion-select>
            </ion-item>
        </ion-card>
    </div>
    </ion-content>
    <ion-footer >
        <ion-toolbar class="one" color="medium">
            <ion-icon :icon="Fitness" class="two" @click="openModal(iconData[0])"></ion-icon>
            <ion-icon :icon="Bicycle" class="two" @click="openModal(iconData[1])"></ion-icon>
            <ion-icon :icon="Body" class="two" @click="openModal(iconData[2])"></ion-icon>
            <ion-icon :icon="Food" class="two" @click="openModal(iconData[3])"></ion-icon>
        </ion-toolbar>
    </ion-footer>
    <ion-modal :is-open="showModal">
        <ion-header>
            <ion-toolbar color="medium">
                <ion-title>{{ $t('Tips') }}</ion-title>
                <ion-buttons slot="start">
                    <ion-button @click="closeModal">
                        <ion-icon :icon="Close"></ion-icon>
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <div class="five">
            <ion-card class="fifth" >
                <ion-card-title>{{ $t(modalData.title) }}</ion-card-title>
                <ion-card-content>{{ $t(modalData.description) }}</ion-card-content>
            </ion-card>
        </div>
        </ion-content>
    </ion-modal>
</ion-page>
</template>

<script lang="ts">
import {
    defineComponent,
    ref,

} from 'vue';
import {
    IonPage,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonMenuButton,
    IonFooter,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonSelectOption,
    IonSelect,
    IonLabel,
    IonItem,
    IonIcon,
    IonModal,
    IonButton
} from '@ionic/vue';
import {
    fitness,
    bicycle,
    body,
    fastFood,
    close
} from 'ionicons/icons';
import {
    useStore
} from 'vuex';
import {
    useRouter
} from 'vue-router';
interface Name {
    id: number;
    name: string;
    description: string;
}
interface docData {
    CardioName: Name[];
    AneName: Name[];
    SurName: Name[];
    NeoName: Name[];
}
export default defineComponent({
    name: 'Home',
    components: {
        IonPage,
        IonMenu,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonButtons,
        IonMenuButton,
        IonFooter,
        IonCard,
        IonCardHeader,
        IonCardContent,
        IonCardTitle,
        IonSelectOption,
        IonSelect,
        IonLabel,
        IonItem,
        IonIcon,
        IonModal,
        IonButton
    },
    setup() {
        const store = useStore();
        const router = useRouter();

        const selectedCardiologist = () => store.state.selectedCardiologist;
        const selectedAnaesthesiologist = () => store.state.selectedAnaesthesiologist;
        const selectedSurgeon = () => store.state.selectedSurgeon;
        const selectedNeurologist = () => store.state.selectedNeurologist;

        const setSelectedCardiologist = (id: any) => {
            store.commit('setSelectedCardiologist', id);
            router.push({
                name: 'Details',
                params: {
                    id
                }
            })
        };
        const setSelectedAnaesthesiologist = (id: any) => {
            store.commit('setSelectedAnaesthesiologist', id);
            router.push({
                name: 'Details',
                params: {
                    id
                }
            })
        };
        const setSelectedSurgeon = (id: any) => {
            store.commit('setSelectedSurgeon', id);
            router.push({
                name: 'Details',
                params: {
                    id
                }
            })
        };
        const setSelectedNeurologist = (id: any) => {
            store.commit('setSelectedNeurologist', id);
            router.push({
                name: 'Details',
                params: {
                    id
                }
            })
        };

        const Pd = () => {
            router.push('/personalDetails')
        };
        const viewHome = () => {
            router.push('/home')
        };
        const logout = () => {
            router.push('/login')
        };
        const Abou = () => {
            router.push('/about')
        };
        const Help = () => {
            router.push('/help')
        };
        const ActSet = () => {
            router.push('/accountsettings')
        };

        const showModal = ref(false);
        const modalData = ref({
            title: '',
            description: ''
        });

        const Fitness = ref(fitness);
        const Bicycle = ref(bicycle);
        const Body = ref(body);
        const Food = ref(fastFood);
        const Close = ref(close);

        const iconData = ref([{
                title: 'Fitness',
                description: 'Get at least 150 minutes of moderate aerobic activity a week. Or get at least 75 minutes of vigorous aerobic activity a week. You also can get an equal combination of moderate and vigorous activity. Aim to spread out this exercise over a few days or more in a week.'
            },
            {
                title: 'Cycling',
                description: 'Cycling can help lose belly fat, but it will take time. A recent study showed regular cycling may enhance overall fat loss and promote a healthy weight. To reduce overall belly girth, moderate-intensity aerobic exercises, such as cycling either indoor or outdoor are effective to lower belly fat.'
            },
            {
                title: 'Body',
                description: 'Your metabolism constantly provides your body with energy for essential body functions like breathing and digestion. Your body needs a minimum number of calories (the basal metabolic rate or BMR) to sustain these functions. Factors like age,muscle mass and physical activity affect metabolism or BMR'
            },
            {
                title: 'Food',
                description: 'A healthy diet can help to reduce your risk of developing heart disease, type 2 diabetes, high blood pressure and some types of cancer. Eating nutritious foods can help you to feel happier and more energetic. A healthy diet has been linked with improved memory and a lower risk of developing dementia in later life.'
            }
        ]);
        const openModal = (selectedIcon: any) => {
            modalData.value = {
                ...selectedIcon
            };
            showModal.value = true;
        };
        const closeModal = () => {
            showModal.value = false;
        };

        return {
            selectedCardiologist,
            selectedAnaesthesiologist,
            selectedSurgeon,
            selectedNeurologist,
            setSelectedCardiologist,
            setSelectedAnaesthesiologist,
            setSelectedSurgeon,
            setSelectedNeurologist,
            viewHome,
            Pd,
            logout,
            Abou,
            Help,
            ActSet,
            Fitness,
            Bicycle,
            Body,
            Food,
            Close,
            openModal,
            closeModal,
            iconData,
            close,
            showModal,
            modalData,
            docData: store.state.docData as docData,
        };
    },
});
</script>

<style scoped>
.one {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.two {
    width: 30px;
    height: 30px;
    margin: 0 120px;
}
.ten{
   background-color:rgb(176, 179, 189);
   padding:10px;
}
.five{
     background-color:rgb(192, 197, 216);
     padding:210px;
}
.six{
    border-radius: 20px;
}
.seven{
    color:rgb(3, 44, 206);
}
.four{
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    margin-block: 20px;
}
.fourth{
    padding:16px;
    cursor:pointer;
}
.fifth{
 border-radius:10px;
}
</style>
