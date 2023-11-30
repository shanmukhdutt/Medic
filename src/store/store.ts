// import { State } from 'ionicons/dist/types/stencil-public-runtime';
import {createStore} from 'vuex';
export default createStore({
    state:{
        selectedCardiologist:null,
        selectedAnaesthesiologist:null,
        selectedSurgeon:null,
        selectedNeurologist:null,
        user:null,
        docData:{
        CardioName:[
            {id:1,name:'N',description:'8 yrs exp in AIMS',img:'/cardio.png'},
            {id:2,name:'O',description:'7 yrs exp in AIMS',img:'/cardio.png'},
            {id:3,name:'P',description:'6 yrs exp in AIMS',img:'/cardio.png'}
        ],
        AneName:[
            {id:4,name:'L',description:'9 yrs exp in AIMS',img:'/anes.png'},
            {id:5,name:'K',description:'8 yrs exp in AIMS',img:'/anes.png'},
            {id:6,name:'J',description:'7 yrs exp in AIMS',img:'/anes.png'}
        ],
        SurName:[
            {id:7,name:'H',description:'9 yrs exp in AIMS',img:'/surgeo.png'},
            {id:8,name:'G',description:'8 yrs exp in AIMS',img:'/surgeo.png'},
            {id:9,name:'F',description:'7 yrs exp in AIMS',img:'/surgeo.png'}
        ],
        NeoName:[
            {id:10,name:'A',description:'9 yrs exp in AIMS',img:'/neorolo.png'},
            {id:11,name:'B',description:'8 yrs exp in AIMS',img:'/neorolo.png'},
            {id:12,name:'C',description:'7 yrs exp in AIMS',img:'/neorolo.png'}
        ],
    },
    },
    mutations:{
        setSelectedCardiologist(state,nameDoc){
            state.selectedCardiologist=nameDoc
        },
        setSelectedAnaesthesiologist(state,nameDoc){
            state.selectedAnaesthesiologist=nameDoc
        },
        setSelectedSurgeon(state,nameDoc){
            state.selectedSurgeon=nameDoc
        },
        setSelectedNeurologist(state,nameDoc){
            state.selectedNeurologist=nameDoc
        },
        setUser(state,user){
           state.user=user
        },
    },
    getters:{
        getDetailsData:(state)=>{
            const detailsData=[
                ...state.docData.CardioName,
                ...state.docData.AneName,
                ...state.docData.SurName,
                ...state.docData.NeoName
            ];
            return detailsData;
        },
        getUser:(state)=>state.user,
    },
    });