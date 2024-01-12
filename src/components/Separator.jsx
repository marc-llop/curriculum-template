import {
    View,
    StyleSheet,
    Svg,
    Rect,
    Defs,
    LinearGradient,
    Stop,
} from '@react-pdf/renderer'

const separatorStyles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
})

export const Separator = () => (
    <View style={separatorStyles.wrapper}>
        <Svg width='300px' height='2px' viewBox='0 0 300 2'>
            <Defs>
                <LinearGradient id='sectionHeaderGradient'>
                    <Stop offset='0%' stopColor='#370f3e' stopOpacity='0' />
                    <Stop offset='50%' stopColor='#370f3e' stopOpacity='1' />
                    <Stop offset='100%' stopColor='#370f3e' stopOpacity='0' />
                </LinearGradient>
            </Defs>
            <Rect
                x='0'
                y='0'
                width='300'
                height='2'
                fill="url('#sectionHeaderGradient')"
                fillOpacity='0.7'
            />
        </Svg>
    </View>
)
