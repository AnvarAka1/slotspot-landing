import barbershopIcon from '../assets/icons/scissors-icon.svg'
import nailPolishIcon from '../assets/icons/nail-polish-icon.svg'
import spaIcon from '../assets/icons/spa-icon.svg'
import joystickIcon from '../assets/icons/joystick-icon.svg'


export type CategoryType = {
  barbershop: string
  nail: string
  spa: string
  entertainment: string
}


export const ICONS: CategoryType = {
  'barbershop': barbershopIcon,
  'nail': nailPolishIcon,
  'spa': spaIcon,
  'entertainment': joystickIcon
}

export const COLOR_BY_CATEGORY: CategoryType = {
  'barbershop': 'cardYellow',
  'nail': 'cardViolet',
  'spa': 'cardBlue',
  'entertainment': 'cardGreen'
}
