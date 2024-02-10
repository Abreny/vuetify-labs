import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

import { createVuetify } from 'vuetify'
import { VBtn } from 'vuetify/components'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { fa } from 'vuetify/iconsets/fa-svg'
import { myCustomLightTheme } from '@/assets/theme'

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
    aliases: {
      ...aliases,
      paypal: 'fa:fa-brands fa-paypal',
      stripe: 'fa:fa-brands fa-stripe',
      user: 'fa:fa-solid fa-user'
    },
    sets: {
      fa,
      mdi
    }
  },
  theme: {
    defaultTheme: 'dark',
    themes: {
      myCustomLightTheme
    }
  }
})
