import React from 'react'
import { View, Text, StyleSheet, Svg, Circle } from '@react-pdf/renderer'
import PropTypes from 'prop-types'
import { NoHyphenText } from './NoHyphenText'

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
    },
    headWrapper: {
        display: 'flex',
        flexDirection: 'row',
    },
    years: {
        width: '65px',
        fontFamily: 'Montserrat',
        fontStyle: 'italic',
        fontSize: '10px',
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        gap: '2px',
    },
    company: {
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        fontSize: '10px',
        color: '#2b134e',
    },
    keywords: {
        display: 'flex',
        flexDirection: 'row',
        gap: '5px',
        marginTop: '3px',
    },
    keyword: {
        display: 'inline-block',
        borderRadius: '8px',
        color: 'white',
        backgroundColor: '#368b80',
        padding: '3px 6px',
        fontFamily: 'Montserrat',
        fontSize: '8px',
    },
    paragraph: {
        position: 'relative',
        fontFamily: 'Quattrocento',
        fontSize: '11px',
        color: '#150926',
        margin: '10px 10px 0px 10px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    ul: {
        margin: '5px 10px 0px 15px',
        fontSize: '10px',
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
    },
    li: {
        display: 'flex',
        flexDirection: 'row',
        gap: '5px',
        alignItems: 'center',
    },
})

const Bullet = () => (
    <Svg width='4px' height='4px' viewBox='0 0 4 4'>
        <Circle cx='2' cy='2' r='2' fill='#150926' />
    </Svg>
)

const Description = ({ paragraphs }) => (
    <View>
        {paragraphs.map((paragraph, i) =>
            typeof paragraph === 'string' ? (
                <NoHyphenText key={i} style={styles.paragraph}>
                    {paragraph}
                </NoHyphenText>
            ) : (
                <View key={i} style={styles.ul}>
                    {paragraph.map(item => (
                        <View key={item} style={styles.li}>
                            <Bullet />
                            <Text>{item}</Text>
                        </View>
                    ))}
                </View>
            ),
        )}
    </View>
)

Description.propTypes = {
    paragraphs: PropTypes.arrayOf(
        PropTypes.oneOf([
            PropTypes.string,
            PropTypes.arrayOf(PropTypes.string),
        ]),
    ),
}

export const ExperienceDetail = ({
    years,
    title,
    company,
    keywords,
    description,
}) => (
    <View style={styles.wrapper}>
        <View style={styles.headWrapper}>
            <Text style={styles.years}>{years}</Text>
            <View style={styles.info}>
                {title ? <Text>{title}</Text> : <React.Fragment />}
                {company ? (
                    <Text style={styles.company}>{company}</Text>
                ) : (
                    <></>
                )}
                <View style={styles.keywords}>
                    {keywords.map(keyword => (
                        <View style={styles.keyword} key={keyword}>
                            <Text>{keyword}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </View>
        <Description paragraphs={description} />
    </View>
)

ExperienceDetail.propTypes = {
    years: PropTypes.string.isRequired,
    title: PropTypes.string,
    company: PropTypes.string.isRequired,
    keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.arrayOf(
        PropTypes.oneOf([
            PropTypes.string,
            PropTypes.arrayOf(PropTypes.string),
        ]),
    ).isRequired,
}
