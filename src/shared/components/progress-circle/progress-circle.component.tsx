import React, { useEffect, useRef } from 'react'

interface ProgressCircleProps {
  percent: number
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({ percent }) => {
    const circleRef = useRef<SVGCircleElement>(null)

    useEffect(() => {
        const circle = circleRef.current
        if (circle) {
            const radius = circle.r.baseVal.value
            const circumference = 2 * Math.PI * radius
            const offset = circumference - (percent / 100) * circumference

            circle.style.strokeDasharray = `${circumference} ${circumference}`
            circle.style.strokeDashoffset = `${offset}`
        }
    }, [percent])

    return (
        <svg width="25" height="25">
            <circle cx="12.5" cy="12.5" r="10" stroke="#ccc" strokeWidth="3" fill="none" />
            <circle
                ref={circleRef}
                cx="12.5"
                cy="12.5"
                r="10"
                stroke="#713FFF"
                strokeWidth="3"
                fill="none"
                style={{
                    transform: 'rotate(-90deg)',
                    transformOrigin: '50% 50%',
                    strokeDasharray: '62.83', // 2 * Math.PI * 10
                    strokeDashoffset: '62.83',
                    transition: 'stroke-dashoffset 0.35s',
                }}
            />
        </svg>
    )
}

export default ProgressCircle
