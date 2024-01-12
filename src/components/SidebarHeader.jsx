import {
    View,
    Text,
    StyleSheet,
    Svg,
    Rect,
    Defs,
    LinearGradient,
    Stop,
} from '@react-pdf/renderer'
import PropTypes from 'prop-types'

const sectionHeaderHeight = 20
const sectionHeaderHeightPx = sectionHeaderHeight + 'px'

const underlineWidth = 10

const headerStyles = StyleSheet.create({
    wrapper: {
        position: 'relative',
        height: sectionHeaderHeightPx,
        display: 'flex',
        flexDirection: 'column',
        gap: '7px',
    },
    text: {
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: '12px',
        marginLeft: '15px',
    },
})

export const SidebarHeader = ({ children }) => (
    <View style={headerStyles.wrapper}>
        <Text style={headerStyles.text}>{children}</Text>
        <Svg
            width='100%'
            height={sectionHeaderHeightPx}
            viewBox={'0 0 1000 ' + sectionHeaderHeight}
        >
            <Defs>
                <LinearGradient id='sectionHeaderGradient'>
                    <Stop offset='0%' stopColor='white' stopOpacity='1' />
                    <Stop offset='20%' stopColor='white' stopOpacity='1' />
                    <Stop offset='100%' stopColor='white' stopOpacity='0' />
                </LinearGradient>
            </Defs>
            <Rect
                x='0'
                y={sectionHeaderHeight - underlineWidth}
                width='1000'
                height={underlineWidth}
                fill="url('#sectionHeaderGradient')"
                fillOpacity='0.7'
            />
        </Svg>
    </View>
)

SidebarHeader.propTypes = {
    children: PropTypes.string.isRequired,
}
