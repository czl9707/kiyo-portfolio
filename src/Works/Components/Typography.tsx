import { Typography, TypographyProps } from "@mui/material";
import * as React from 'react';

const PrimaryTypography = React.forwardRef<HTMLSpanElement, TypographyProps>(
    function PrimaryTypography(props, ref) {
        return (
            <Typography {...props} color={
                (theme) => ({ color: theme.palette.primary.main, })
            } ref={ref} />
        );
    }
)


const SecondaryTypography = React.forwardRef<HTMLSpanElement, TypographyProps>(
    function SecondaryTypography(props, ref) {
        return (
            <Typography {...props} color={
                (theme) => ({ color: theme.palette.secondary.main, })
            } ref={ref} />
        );
    }
)

const SuccessTypography = React.forwardRef<HTMLSpanElement, TypographyProps>(
    function SuccessTypography(props, ref) {
        return (
            <Typography {...props} color={
                (theme) => ({ color: theme.palette.success.main, })
            } ref={ref} />
        );
    }
)

const WarningTypography = React.forwardRef<HTMLSpanElement, TypographyProps>(
    function WarningTypography(props, ref) {
        return (
            <Typography {...props} color={
                (theme) => ({ color: theme.palette.warning.main, })
            } ref={ref} />
        );
    }
)

export {
    PrimaryTypography,
    SecondaryTypography,
    SuccessTypography,
    WarningTypography,
};