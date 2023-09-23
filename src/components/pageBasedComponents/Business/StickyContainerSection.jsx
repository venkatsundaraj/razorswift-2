'use client'

import PrimaryHeading from '@/components/headingComponents/PrimaryHeading'
import { Box } from '@mui/material'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const backgroundColor = ['teal', 'tomato', 'orange', 'violet']

const initialState = {
    id: 0,
    value: 0,
}

function StickyContainerSection() {
    const [childItems, setChildItems] = useState([])
    const [percentage, setpercentage] = useState(0)
    const [scrolledValue, setScrolledValue] = useState(0)
    const [scaleValue, setScaleValue] = useState(initialState)

    const cardsRef = useRef(new Array())
    const sectionRef = useRef(null)
    const { scrollY } = useScroll()

    useEffect(() => {
        for (let i = 0; i <= percentage; i++) {
            const fractionValue = (scrolledValue / 25) * 0.05

            cardsRef.current[i].dataset.value = fractionValue - i * 0.05
            cardsRef.current[i].style.transform = `scale(calc(1 - ${
                fractionValue - i * 0.05
            })) `

            setScaleValue((prev) => {
                return { id: i, value: fractionValue - i * 0.05 }
            })
        }
    }, [scrolledValue, percentage])

    useMotionValueEvent(scrollY, 'change', (latest) => {
        const primaryCondition = latest > sectionRef.current.offsetTop
        if (primaryCondition) {
            const value =
                (latest - sectionRef.current.offsetTop) /
                (sectionRef.current.clientHeight -
                    document.documentElement.clientHeight)
            const filteredValue = Math.min(100, value * 100)
            setScrolledValue(+filteredValue.toFixed(2))
            if (filteredValue < 25) {
                setpercentage(0)
            } else if (25 < filteredValue && filteredValue < 50) {
                setpercentage(1)
            } else if (50 < filteredValue && filteredValue < 75) {
                setpercentage(2)
            } else if (75 < filteredValue && filteredValue < 100) {
                setpercentage(3)
            }
        }
    })

    return (
        <section
            ref={sectionRef}
            style={{
                padding: `40px`,
                overflowX: 'unset',
                display: 'flex',
                height: {
                    md: `calc(4 * 80vh + 200px)`,
                    xl: 'calc(4 * 80vh + 200px)',
                },
                width: '100%',
                flexDirection: 'column',
            }}
        >
            {backgroundColor.map((item, i) => {
                return (
                    <Box
                        ref={(element) => (cardsRef.current[i] = element)}
                        key={i}
                        sx={{
                            display: 'flex',
                            alignItems: 'top',
                            justifyContent: 'center',
                            width: '100%',
                            height: {
                                md: `${i === 0 ? '100vh' : '90vh'}`,
                                xl: `${i === 0 ? '90vh' : '80vh'}`,
                            },
                            borderRadius: 4,
                            backgroundColor: `${item}`,
                            position: 'sticky',
                            top: { md: `${i * 25}px`, xl: `${25 + i * 55}px` },
                        }}
                    >
                        <PrimaryHeading sx={{ color: 'white' }}>
                            {i}
                        </PrimaryHeading>
                    </Box>
                )
            })}
        </section>
    )
}

export default StickyContainerSection
