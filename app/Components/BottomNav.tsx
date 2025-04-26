import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter, usePathname } from 'expo-router';

import HomeActive from '../../assets/images/icons/active-home.svg';
import HomeInactive from '../../assets/images/icons/home.svg';
import ExploreActive from '../../assets/images/icons/active-category.svg';
import ExploreInactive from '../../assets/images/icons/category.svg';
// import CreateActive from '../assets/icons/.svg';
// import CreateInactive from '../assets/icons/create-inactive.svg';
import NotifyActive from '../../assets/images/icons/active-notification.svg';
import NotifyInactive from '../../assets/images/icons/notification.svg';
import ProfileActive from '../../assets/images/icons/active-profile.svg';
import ProfileInactive from '../../assets/images/icons/profile.svg';

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    {
      route: '/homescreen',
      ActiveIcon: HomeActive,
      InactiveIcon: HomeInactive,
    },
    {
      route: '/discover',
      ActiveIcon: ExploreActive,
      InactiveIcon: ExploreInactive,
    },
    // {
    //   route: '/create',
    //   ActiveIcon: CreateActive,
    //   InactiveIcon: CreateInactive,
    // },
    {
      route: '/activity',
      ActiveIcon: NotifyActive,
      InactiveIcon: NotifyInactive,
    },
    {
      route: '/profile',
      ActiveIcon: ProfileActive,
      InactiveIcon: ProfileInactive,
    },
  ];

  return (
    <View style={styles.navContainer}>
      {navItems.map((item, index) => {
        const isActive = pathname === item.route;
        const Icon = isActive ? item.ActiveIcon : item.InactiveIcon;

        return (
          <TouchableOpacity
            key={index}
            onPress={() => router.push(item.route)}
            style={styles.navItem}
          >
            <Icon width={26} height={26} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  navItem: {
    alignItems: 'center',
  },
});
