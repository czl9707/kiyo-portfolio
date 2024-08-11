import { ButtonBase, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { handleNavigation } from '../Components/Utils';

const SliderButtonWrap = styled(ButtonBase)(({ theme }) => ({
    transitionDuration: `${theme.transitions.duration.complex}ms`,
    transitionTimingFunction: theme.transitions.easing.easeIn,
    boxSizing: 'border-box',
    marginRight: "4rem",
    boxShadow: `0 -8px 0  ${theme.palette.primary.main} inset`,
    '.TypographyText': {
        marginRight: "1rem",
        transitionDuration: `${theme.transitions.duration.complex}ms`,
        transitionTimingFunction: theme.transitions.easing.easeIn,
    },
    '&:hover, &.Mui-focusVisible': {
        marginRight: "2rem",
        boxShadow: `-16px 0 0  ${theme.palette.primary.main} inset`,
        '& .TypographyText': {
            marginRight: "3rem",
        },
    }
}));


interface SliderButtonProps {
    href: string,
    text: string,
    externalLink?: boolean
}

function SliderButton({ href, text, externalLink = false }: SliderButtonProps) {
    return (
        <SliderButtonWrap
            disableRipple disableTouchRipple
            onClick={handleNavigation(href, externalLink)}>
            <Typography variant='button' className='TypographyText'>
                {text}
            </Typography>
            <Typography variant='button' sx={{ fontSize: "1.5em" }}>
                &gt;
            </Typography>
        </SliderButtonWrap>
    )
}

export default SliderButton;