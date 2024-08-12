import * as React from 'react';

import { useInView } from 'react-intersection-observer';
import { useForkRef, useTheme } from '@mui/material';
import { Transition, TransitionStatus } from 'react-transition-group';

const FadeSlide = React.forwardRef<unknown, { children: React.ReactElement, delay?: number }>(function FadeSlide(props, ref) {
    const { children, delay = 0 } = props;
    const theme = useTheme();
    const constStyles = {
        transitionDelay: `${delay}ms`,
        transitionProperty: 'all',
    }
    const normalizedStyles = {
        entered: {
            opacity: 1,
            transform: 'none',
            transitionDuration: `${theme.transitions.duration.enteringScreen}ms`,
            transitionTimingFunction: theme.transitions.easing.easeIn
        },
        exited: {
            opacity: 0,
            transform: 'translateY(2rem)',
            transitionDuration: `0`,
        }
    }
    const transitionStyles: Record<TransitionStatus, object> = {
        entering: normalizedStyles["entered"],
        entered: normalizedStyles["entered"],
        exiting: normalizedStyles["exited"],
        exited: normalizedStyles["exited"],
        unmounted: {}
    };


    const { ref: inViewRef, inView } = useInView({
        triggerOnce: false,
        initialInView: false,
        threshold: 0,
    });

    const childrenRef = React.useRef(null);
    const handleRef = useForkRef(getReactNodeRef(children), childrenRef, ref, inViewRef);

    return (
        <Transition
            in={inView}
            nodeRef={childrenRef}
            addEndListener={(() => { return })}
            appear
        >
            {(state, childProps) => {
                return React.cloneElement(children, {
                    ref: handleRef,
                    style: {
                        ...constStyles,
                        ...transitionStyles[state],
                        ...children.props.style,
                    },
                    ...childProps,
                });
            }}
        </Transition>
    );
});

// https://github.com/mui/material-ui/blob/36ad1dba4c689cec3b556e4b347b31e48c2d2147/packages/mui-utils/src/getReactNodeRef/getReactNodeRef.ts
function getReactNodeRef(element: React.ReactNode): React.Ref<any> | null {
    if (!element || !React.isValidElement(element)) {
        return null;
    }

    return Object.prototype.propertyIsEnumerable.call(element.props, 'ref')
        ? element.props.ref
        : element.ref;
}

export default FadeSlide;