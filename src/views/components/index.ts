import { withInstall } from '@/utils'

import heater from './Heater'
import main from './Main'
import footer from './Footer'

export const Heater = withInstall(heater)

export const Main = withInstall(main)

export const Footer = withInstall(footer)
