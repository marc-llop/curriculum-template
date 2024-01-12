import { Text } from '@react-pdf/renderer'

const noHyphenation = word => [word]

export const NoHyphenText = props => (
    <Text {...props} hyphenationCallback={noHyphenation}>
        {props.children}
    </Text>
)

NoHyphenText.propTypes = Text.propTypes
