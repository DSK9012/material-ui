import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Box, Stack } from '@mui/system';
import { unstable_capitalize as capitalize } from '@mui/utils';
import { Typography } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF5733',
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#E0C2FF',
      light: '#F5EBFF',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#47008F',
    },
  },
});

function ColorShowcase({ color }: { color: 'primary' | 'secondary' }) {
  return (
    <Stack gap={2} alignItems="center">
      <Button variant="contained" color={color}>
        {capitalize(color)}
      </Button>
      <Stack direction="row" gap={1}>
        <Stack alignItems="center">
          <Typography variant="body2">light</Typography>
          <Box sx={{ bgcolor: `${color}.light`, width: 40, height: 20 }} />
        </Stack>
        <Stack alignItems="center">
          <Typography variant="body2">main</Typography>
          <Box sx={{ bgcolor: `${color}.main`, width: 40, height: 20 }} />
        </Stack>
        <Stack alignItems="center">
          <Typography variant="body2">dark</Typography>
          <Box sx={{ bgcolor: `${color}.dark`, width: 40, height: 20 }} />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default function Palette() {
  return (
    <ThemeProvider theme={theme}>
      <Stack direction="row" gap={8}>
        <ColorShowcase color="primary" />
        <ColorShowcase color="secondary" />
      </Stack>
    </ThemeProvider>
  );
}
