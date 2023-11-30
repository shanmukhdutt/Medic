import { createI18n } from "vue-i18n";
import en from './en.json';
import ta from './ta.json';
import te from './te.json';
const i18n=createI18n({
    locale:'en',
    messages:{
        en:en,
        ta:ta,
        te:te
    }
});
export default i18n
