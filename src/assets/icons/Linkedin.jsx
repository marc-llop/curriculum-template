import { Svg, Path, Rect, Circle } from '@react-pdf/renderer'

export const LinkedinIcon = () => (
    <Svg
        width='18'
        height='18'
        style={{ marginLeft: '2px' }}
        viewBox='0 0 24 24'
        fill='none'
        fillOpacity='0'
        stroke='white'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
    >
        <Path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></Path>
        <Rect x='2' y='9' width='4' height='12'></Rect>
        <Circle cx='4' cy='4' r='2'></Circle>
    </Svg>
)
