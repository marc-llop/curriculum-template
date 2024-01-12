import { View, Text, StyleSheet, Image } from '@react-pdf/renderer'
import { SidebarGradient } from './SidebarGradient'
import { SidebarHeader } from './SidebarHeader'
import { EducationItem } from './Education'
import { EnvelopeIcon } from '../assets/icons/Envelope'
import { PhoneIcon } from '../assets/icons/Phone'
import PropTypes from 'prop-types'
import { LinkedinIcon } from '../assets/icons/Linkedin'
import { GithubIcon } from '../assets/icons/Github'
import profilePic from '../assets/profile_pic_dummy.jpg'

const styles = StyleSheet.create({
    sidebar: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        width: '35%',
        heigth: '100%',
    },
    profilePic: {
        position: 'absolute',
        width: '100%',
    },
    margin: {
        height: '260px',
    },
    section: {
        margin: '10px 20px 20px 10px',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        fontFamily: 'Montserrat',
        fontWeight: 'light',
        fontSize: '10px',
        color: 'white',
    },
    contactRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '10px',
        marginLeft: '15px',
    },
    language: {
        fontFamily: 'Quattrocento',
        marginLeft: '20px',
        fontSize: '12px',
        fontWeight: 'bold',
        lineHeight: 0.1,
    },
    languageSub: {
        marginLeft: '20px',
    },
})

const ContactRow = ({ icon: Icon, text }) => (
    <View style={styles.contactRow}>
        <Icon />
        <Text>{text}</Text>
    </View>
)

ContactRow.propTypes = {
    icon: PropTypes.elementType.isRequired,
    text: PropTypes.string.isRequired,
}

export const Sidebar = ({ content }) => (
    <View style={styles.sidebar}>
        <Image src={profilePic} style={styles.profilePic} />
        <SidebarGradient />
        <View style={styles.margin} />
        <View style={styles.section}>
            <SidebarHeader>{content.contactTitle}</SidebarHeader>
            <ContactRow icon={EnvelopeIcon} text={content.email} />
            <ContactRow icon={PhoneIcon} text={content.phone} />
            <ContactRow icon={LinkedinIcon} text={content.linkedin} />
            <ContactRow icon={GithubIcon} text={content.github} />
        </View>
        <View style={styles.section}>
            <SidebarHeader>{content.languagesTitle}</SidebarHeader>
            {content.languages.map(({ language, level }) => (
                <>
                    <Text style={styles.language}>{language}</Text>
                    <Text style={styles.languageSub}>{level}</Text>
                </>
            ))}
        </View>
        <View style={styles.section}>
            <SidebarHeader>{content.educationTitle}</SidebarHeader>
            {content.education.map(({ years, title, institution }) => (
                <EducationItem
                    year={years}
                    title={title}
                    institution={institution}
                    key={title}
                />
            ))}
        </View>
    </View>
)

Sidebar.propTypes = {
    content: PropTypes.object.isRequired,
}
