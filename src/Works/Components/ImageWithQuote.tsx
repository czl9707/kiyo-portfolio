import { Stack, Box, Typography } from "@mui/material";
import * as React from 'react'

interface ImageWithQuoteProps {
    quote: string | React.ReactNode,
    imgSrc: string,
}

export default function ImageWithQuote({ quote, imgSrc }: ImageWithQuoteProps) {
    return (
        <Stack spacing={1} alignItems="center">
            <Box component='img' src={imgSrc} width="100%" boxShadow={(theme) => theme.shadows[4]} />
            <Typography variant="body2" textAlign="center">{quote}</Typography>
        </Stack>
    )
}