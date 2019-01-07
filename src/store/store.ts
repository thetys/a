import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import createLogger from 'vuex/dist/logger';

import { characters } from '@/store/modules/characters/module';
import { RootState } from '@/store/types';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store: StoreOptions<RootState> = {
  modules: {
    characters
  },
  strict: debug,
  plugins: debug ? [createLogger({})] : []
};

export default new Vuex.Store(store);
