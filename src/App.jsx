import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer'
import './FontsRegister'
import { BodyHeader } from './components/BodyHeader'
import { Sidebar } from './components/Sidebar'
import content from './content_dummy.json'
import { ExperienceDetail } from './components/ExperienceDetail'
import PropTypes from 'prop-types'
import { Separator } from './components/Separator'

const styles = StyleSheet.create({
    page: {
        fontFamily: 'Quattrocento',
        display: 'flex',
        flexDirection: 'row',
        maxWidth: '100%',
    },
    body: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        color: '#2b134e',
        maxWidth: '65%',
    },
    secondPageBody: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        color: '#2b134e',
        width: '100%',
        margin: '50px 0 0 15px',
    },
    header: {
        margin: '38px 40px 38px 40px',
    },
    name: {
        fontFamily: 'Titillium',
        fontSize: '42px',
        fontWeight: 'semibold',
        lineHeight: '1',
    },
    surname: {
        fontSize: '36px',
    },
    title: {
        fontFamily: 'Montserrat',
        fontSize: '20px',
        color: '#2b134e',
        marginTop: '20px',
        marginLeft: '2px',
    },
    sectionParagraph: {
        position: 'relative',
        fontFamily: 'Quattrocento',
        fontSize: '11px',
        color: '#150926',
        margin: '15px 40px 15px 40px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
})

const intersperse = (separator, list) =>
    list.flatMap((element, index) =>
        index == 0 ? [element] : [separator, element],
    )

const ExperienceSection = ({ start, end, experienceItems, style }) => {
    const relevantItems = end
        ? experienceItems.slice(start, end)
        : experienceItems.slice(start)
    const experienceComponents = relevantItems.map(expContent => (
        <ExperienceDetail key={expContent.years} {...expContent} />
    ))
    const componentsWithSeparators = intersperse(
        <Separator />,
        experienceComponents,
    )
    return (
        <>
            <BodyHeader>{content.experienceTitle}</BodyHeader>
            <View style={style}>{componentsWithSeparators}</View>
        </>
    )
}

ExperienceSection.propTypes = {
    start: PropTypes.number,
    end: PropTypes.number,
    experienceItems: PropTypes.arrayOf(
        PropTypes.shape(ExperienceDetail.propTypes),
    ),
    style: PropTypes.object,
}

const expItemsInFirstPage = 2

function App() {
    return (
        <Document>
            <Page size='A4' orientation='portrait' style={styles.page}>
                <Sidebar content={content} />
                <View style={styles.body}>
                    <View style={styles.header}>
                        <Text style={styles.name}>{content.name}</Text>
                        <Text style={[styles.name, styles.surname]}>
                            {content.surname}
                        </Text>
                        <Text style={styles.title}>{content.title}</Text>
                    </View>
                    <BodyHeader>{content.profileTitle}</BodyHeader>
                    <View style={styles.sectionParagraph}>
                        {content.profile.map((paragraph, i) => (
                            <Text key={i}>{paragraph}</Text>
                        ))}
                    </View>
                    <ExperienceSection
                        style={styles.sectionParagraph}
                        start={0}
                        end={expItemsInFirstPage}
                        experienceItems={content.experience}
                    />
                </View>
            </Page>
            <Page size='A4' orientation='portrait' style={styles.page}>
                <View style={styles.secondPageBody}>
                    <ExperienceSection
                        style={styles.sectionParagraph}
                        start={expItemsInFirstPage}
                        experienceItems={content.experience}
                    />
                </View>
            </Page>
        </Document>
    )
}

export default App

/*
Porpra-blau-turquesa
<svg height="100%" width="100%">
  <defs>
    <linearGradient id="0" x1="0.5" y1="0" x2="0.5" y2="1">
      <stop offset="22%" stop-color="rgba(67, 28, 89, 0)"/>
      <stop offset="28.67%" stop-color="rgba(59, 25, 85, 0.33)"/>
      <stop offset="42%" stop-color="#2b134e"/>
      <stop offset="51.67%" stop-color="#2c1860"/>
      <stop offset="71%" stop-color="#1e2a76"/>
      <stop offset="76.33%" stop-color="#1e417a"/>
      <stop offset="87%" stop-color="#136a96"/>
      <stop offset="91%" stop-color="#198692"/>
      <stop offset="99%" stop-color="#27be7a"/>
    </linearGradient>
  </defs>
  <rect fill="url(#0)" height="100%" width="100%"/>
</svg>

Porpra-turquesa
<svg height="100%" width="100%">
  <defs>
    <linearGradient id="0" x1="0.5" y1="0" x2="0.5" y2="1">
      <stop offset="22%" stop-color="rgba(67, 28, 89, 0)"/>
      <stop offset="27.67%" stop-color="rgba(63, 23, 80, 0.33)"/>
      <stop offset="39%" stop-color="#370f3e"/>
      <stop offset="49.67%" stop-color="#341042"/>
      <stop offset="71%" stop-color="#2b134e"/>
      <stop offset="80.67%" stop-color="#275e7c"/>
      <stop offset="100%" stop-color="#18f7b7"/>
    </linearGradient>
  </defs>
  <rect fill="url(#0)" height="100%" width="100%"/>
</svg>

*/
