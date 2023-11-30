<template>
<ion-page>
    <ion-header>
        <ion-toolbar color="medium">
            <ion-back-button slot="start" default-href="/home"></ion-back-button>
            {{ $t ('Help') }}
        </ion-toolbar>
    </ion-header>
    <ion-content>
        <ion-card>
            <ion-card-title>Diognosis</ion-card-title>
            <ion-card-content>Get your report by entering the symptoms</ion-card-content>
        </ion-card>
     <ion-searchbar @ionInput="search"></ion-searchbar>
     <ion-card v-if="searchResults.length > 0">
        <ion-card-title>Search Results</ion-card-title> 
        <ion-card-content>
            <ion-list>
                <ion-item v-for="feature in searchResults" :key="feature.toString">{{ feature }}</ion-item>
            </ion-list>
        </ion-card-content>
     </ion-card>
    </ion-content>
</ion-page>
</template>

<script lang="ts">
import {
    defineComponent,ref
} from 'vue';
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonBackButton,
    IonContent,
    IonSearchbar,
    IonCard,
    IonCardTitle,
    IonCardContent,
    IonList,
    IonItem
} from '@ionic/vue'
import axios from 'axios';

export default defineComponent({
    name: 'Help',
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonBackButton,
        IonContent,
        IonSearchbar,
        IonCard,
        IonCardTitle,
        IonCardContent,
        IonList,
        IonItem
    },
    setup(){
        const searchResults=ref<String[]>([]);
            const search = async (event?: Event) => {
      const searchItem: string = (event?.target as HTMLInputElement)?.value || '';
            try{
                const response=await axios.get<string[]>(
                    `https://api.endlessmedical.com/v1/dx/GetOutcomes?search=${searchItem}`
                );
                console.log(response.data)
                searchResults.value=response.data;
            }catch(error){
                console.warn('Error')
            }
        };
        return{
            search,
            searchResults
        };
    }
});
</script>
