import { Typography, styled } from "@mui/material";

const PrimaryTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
}));

const SecondaryTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.secondary.main,
}));

const SuccessTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.success.main,
}));

const WarningTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.warning.main,
}));

export {
    PrimaryTypography,
    SecondaryTypography,
    SuccessTypography,
    WarningTypography,
};