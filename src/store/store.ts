import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import createLogger from 'vuex/dist/logger';

import { RootState } from '@/store/types';
import { characters } from '@/store/modules/characters/module';
import { places } from '@/store/modules/places/module';
import { occurences } from '@/store/modules/occurences/module';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store: StoreOptions<RootState> = {
  modules: {
    characters,
    places,
    occurences
  },
  strict: debug,
  plugins: debug ? [createLogger({})] : []
};

export default new Vuex.Store(store);
