import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

import pt from 'vuetify/es5/locale/pt'

export default new Vuetify({
    lang: {
        locales: { pt },
        current: 'pt'
    },
    theme: {
        themes: {
            light: {
                primary: '#F15B5B',
                secondary: '#FCBB56',
            }
        }
    },
    icons: {
        iconfont: 'mdi',
    },
});