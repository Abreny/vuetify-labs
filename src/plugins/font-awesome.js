import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMoon, faUser } from '@fortawesome/free-solid-svg-icons'
import {
  faAddressCard,
  faCalendar,
  faMoon as faMoonRegular
} from '@fortawesome/free-regular-svg-icons'
import { faStripe, faPaypal } from '@fortawesome/free-brands-svg-icons'

library.add(faUser)
library.add(faMoon)
library.add(faAddressCard)
library.add(faCalendar)
library.add(faMoonRegular)
library.add(faStripe)
library.add(faPaypal)

export default {
  install(app) {
    app.component('font-awesome-icon', FontAwesomeIcon)
  }
}
