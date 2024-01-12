import { View, Text, StyleSheet } from '@react-pdf/renderer'
import PropTypes from 'prop-types'
import { NoHyphenText } from './NoHyphenText'

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
        marginLeft: '20px',
        marginBottom: '10px',
    },
    year: {
        fontFamily: 'Montserrat',
        fontWeight: 'light',
        fontStyle: 'italic',
    },
    title: {
        fontFamily: 'Quattrocento',
        fontSize: '12px',
        fontWeight: 'bold',
        lineHeight: 1.2,
        margin: '8px 0 8px 0',
    },
})

export const EducationItem = ({ year, title, institution }) => (
    <View style={styles.wrapper}>
        <Text style={styles.year}>{year}</Text>
        <NoHyphenText style={styles.title}>{title}</NoHyphenText>
        <Text>{institution}</Text>
    </View>
)

EducationItem.propTypes = {
    year: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    institution: PropTypes.string.isRequired,
}
