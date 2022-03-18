import { Box } from '@chakra-ui/layout';
import { SideBar } from './SideBar';

export function PlayerLayout(props: any): JSX.Element {
  return (
    <Box display={'flex'} flexDir={'column'} height={'100vh'} width={'100vw'}>
      <Box display={'flex'} width={'100%'} height={'90%'}>
        <Box width={'15%'}>
          <SideBar />
        </Box>
        <Box width={'85%'}>{props.children}</Box>
      </Box>
      <Box>player</Box>
    </Box>
  );
}
