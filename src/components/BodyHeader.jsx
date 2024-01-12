import {
    View,
    Text,
    StyleSheet,
    Svg,
    Rect,
    Defs,
    LinearGradient,
    Stop,
    Line,
} from '@react-pdf/renderer'
import PropTypes from 'prop-types'

const sectionHeaderHeight = 25
const sectionHeaderHeightPx = sectionHeaderHeight + 'px'

const underlineWidth = 3

const sectionHeaderStyles = StyleSheet.create({
    wrapper: {
        position: 'relative',
        height: sectionHeaderHeightPx,
        display: 'flex',
        justifyContent: 'center',
        maxWidth: '400px',
    },
    svg: {
        position: 'absolute',
    },
    sectionHeader: {
        position: 'absolute',
        zIndex: 2,
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        color: '#2b134e',
        textTransform: 'uppercase',
        fontSize: '16px',
        marginLeft: '40px',
    },
})

export const BodyHeader = ({ children }) => (
    <View style={sectionHeaderStyles.wrapper}>
        <Text style={sectionHeaderStyles.sectionHeader}>{children}</Text>
        <Svg
            width='100%'
            height={sectionHeaderHeightPx}
            viewBox={'0 0 400 ' + sectionHeaderHeight}
            style={sectionHeaderStyles.svg}
        >
            <Defs>
                <LinearGradient id='sectionHeaderGradient'>
                    <Stop offset='0%' stopColor='#370f3e' stopOpacity='0' />
                    <Stop offset='5%' stopColor='#370f3e' stopOpacity='0' />
                    <Stop offset='5%' stopColor='#370f3e' stopOpacity='1' />
                    <Stop offset='20%' stopColor='#370f3e' stopOpacity='1' />
                    <Stop offset='100%' stopColor='#370f3e' stopOpacity='0' />
                </LinearGradient>
            </Defs>
            <Rect
                x='0'
                y={sectionHeaderHeight - underlineWidth}
                width='400'
                height={underlineWidth}
                fill="url('#sectionHeaderGradient')"
                fillOpacity='0.7'
            />
            <Line
                x1='5'
                y1='-25'
                x2='55'
                y2='50'
                strokeWidth='5'
                stroke='#3cd79c'
            />
        </Svg>
    </View>
)

BodyHeader.propTypes = {
    children: PropTypes.string.isRequired,
}
