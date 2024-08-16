import { Stack, Box, Typography, StackProps } from "@mui/material";
import * as React from 'react'

interface ImageWithAnnotationProps {
    annotation?: string | React.ReactNode,
    imgSrc: string,
    noShadow?: boolean,
}

const ImageWithAnnotation = React.forwardRef<HTMLDivElement, ImageWithAnnotationProps & StackProps>(({ annotation, imgSrc, noShadow = false, ...other }, ref) => (
    <Stack spacing={1} alignItems="center" ref={ref} {...other}>
        <Box component='img' src={imgSrc} width="100%" boxShadow={noShadow ? undefined : (theme) => theme.shadows[4]} />
        {annotation && <Typography variant="body2" textAlign="center">{annotation}</Typography>}
    </Stack>
))


export default ImageWithAnnotation;