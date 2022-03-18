import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/layout';

import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdFavorite,
  MdPlaylistAdd,
} from 'react-icons/md';
import NextImage from 'next/image';
import NextLink from 'next/link';
import { IconType } from 'react-icons';
import { Icon } from '@chakra-ui/react';

interface SidebarItem {
  label: string;
  icon: IconType;
  path: string;
}

const navigationMenu: SidebarItem[] = [
  {
    label: 'Home',
    icon: MdHome,
    path: '/',
  },
  {
    label: 'Search',
    icon: MdSearch,
    path: '/search',
  },
  {
    label: 'Your Library',
    icon: MdLibraryMusic,
    path: '/library',
  },
];
const musicMenu: SidebarItem[] = [
  {
    label: 'Create Playlist',
    path: '/',
    icon: MdPlaylistAdd,
  },
  {
    label: 'Liked Songs',
    path: '/favorites',
    icon: MdFavorite,
  },
];

export function SideBar() {
  return (
    <Box
      width={'100%'}
      height={'100%'}
      color={'grey'}
      bg={'black'}
      padding={'1rem'}
    >
      <Box>
        <NextImage src={'/logo.png'} height={45} width={150} />
      </Box>
      <Box paddingY={'1rem'}>
        <List spacing={4}>
          {navigationMenu.map((item) => (
            <ListTile
              label={item.label}
              icon={item.icon}
              path={item.path}
              key={item.label}
            />
          ))}
        </List>
      </Box>
      <Box paddingY={'1rem'}>
        <List spacing={4}>
          {musicMenu.map((item) => (
            <ListTile
              label={item.label}
              icon={item.icon}
              path={item.path}
              key={item.label}
            />
          ))}
        </List>
      </Box>
      <Divider />
      <Box height={'64%'} overflowY={'auto'} paddingY={'1rem'}>
        {new Array(120).fill(1).map(() => (
          <h1>Hello</h1>
        ))}
      </Box>
    </Box>
  );
}

const ListTile = ({ label, path, icon }: SidebarItem) => {
  return (
    <ListItem marginX={'8px'} fontSize={'1rem'}>
      <LinkBox>
        <NextLink href={path} passHref>
          <LinkOverlay>
            <ListIcon as={icon} size={'25px'} color={'white'} />
            {label}
          </LinkOverlay>
        </NextLink>
      </LinkBox>
    </ListItem>
  );
};
