import * as React from 'react';
import Fade from '@mui/material/Fade'
import Slide from '@mui/material/Slide'

import { useInView } from 'react-intersection-observer';

function FadeIn({ children }): React.ReactNode {
    const { ref, inView } = useInView({
        triggerOnce: false,
        initialInView: false,
        threshold: 0,
        onChange: (inView, entry) => { console.log(inView) }
    });

    const easing = {
        enter: "cubic-bezier(0, 0, 0.15, 1)",
        exit: "cubic-bezier(0, 0, 0.15, 1)",
    }

    return (
        <Fade ref={ref} in={inView} appear style={{ transitionDuration: '2s' }} easing={easing}>
            <Slide in={inView} direction="up" appear style={{ transitionDuration: '2s', transitionProperty: "all" }} easing={easing}>
                {children}
            </Slide>
        </Fade>
    )
}

function Categorize(instance: HTMLDivElement): void {
    const id = instance.id;
    if (!id) return;
}

export { FadeIn, Categorize };