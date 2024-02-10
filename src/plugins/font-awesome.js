import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faAddressCard, faCalendar } from '@fortawesome/free-regular-svg-icons'
import { faStripe, faPaypal } from '@fortawesome/free-brands-svg-icons'

library.add(faUser)
library.add(faAddressCard)
library.add(faCalendar)
library.add(faStripe)
library.add(faPaypal)

export default {
  install(app) {
    app.component('font-awesome-icon', FontAwesomeIcon)
  }
}
