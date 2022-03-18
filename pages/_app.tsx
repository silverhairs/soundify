import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import 'reset-css';
import type { AppProps } from 'next/app';
import { PlayerLayout } from '../components/global/PlayerLayout';

const theme = extendTheme({
  colors: {
    gray: {
      100: '#F5F5F5',
      200: '#eeeeee',
      300: 'e0e0e0',
      400: 'bdbdbd',
      500: '9e9e9e',
      600: '757575',
      700: '616161',
      800: '424242',
      900: '212121',
    },
  },
  components: {
    Button: {
      variants: {
        link: {
          ':focus': {
            outline: 'none',
            boxShadow: 'none',
          },
        },
      },
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <PlayerLayout>
        <Component {...pageProps} />
      </PlayerLayout>
    </ChakraProvider>
  );
}

export default MyApp;
