import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

import { createVuetify } from 'vuetify'
import { VBtn } from 'vuetify/components'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { fa } from 'vuetify/iconsets/fa-svg'

export default createVuetify({
  aliases: {
    AppPrimaryButton: VBtn
  },
  defaults: {
    VBtn: {
      class: 'text-none'
    },
    AppPrimaryButton: {
      variant: 'tonal',
      color: 'primary',
      class: 'text-none'
    }
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      fa,
      mdi
    }
  }
})
