import { Font } from '@react-pdf/renderer'
import quattrocentoRegular from './assets/fonts/Quattrocento-Regular.ttf'
import quattrocentoBold from './assets/fonts/Quattrocento-Bold.ttf'
import titilliumSemiBold from './assets/fonts/TitilliumWeb-SemiBold.ttf'
import titilliumRegular from './assets/fonts/TitilliumWeb-Regular.ttf'
import montserratRegular from './assets/fonts/Montserrat-Regular.ttf'
import montserratExtraLight from './assets/fonts/Montserrat-ExtraLight.ttf'
import montserratExtraLightItalic from './assets/fonts/Montserrat-ExtraLightItalic.ttf'
import montserratBold from './assets/fonts/Montserrat-Bold.ttf'
import montserratItalic from './assets/fonts/Montserrat-Italic.ttf'

Font.register({
    family: 'Quattrocento',
    fonts: [
        { src: quattrocentoRegular },
        { src: quattrocentoBold, fontWeight: 'bold' },
    ],
})

Font.register({
    family: 'Titillium',
    fonts: [
        { src: titilliumRegular },
        { src: titilliumSemiBold, fontWeight: 'semibold' },
    ],
})

Font.register({
    family: 'Montserrat',
    fonts: [
        { src: montserratRegular },
        { src: montserratExtraLight, fontWeight: 'light' },
        {
            src: montserratExtraLightItalic,
            fontWeight: 'light',
            fontStyle: 'italic',
        },
        { src: montserratItalic, fontStyle: 'italic' },
        { src: montserratBold, fontWeight: 'bold' },
    ],
})
