import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import createLogger from 'vuex/dist/logger';

import { RootState } from '@/store/types';
import { characters } from '@/store/modules/characters/module';
import { documentation } from '@/store/modules/documentation/module';
import { places } from '@/store/modules/places/module';
import { events } from '@/store/modules/events/module';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store: StoreOptions<RootState> = {
  modules: {
    characters,
    places,
    events,
    documentation
  },
  strict: debug,
  plugins: debug ? [createLogger({})] : []
};

export default new Vuex.Store(store);
