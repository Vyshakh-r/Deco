import React from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path } from 'react-native-svg';

// Icon imports
import HomeActive from '../../../assets/images/icons/active-home.svg';
import HomeInactive from '../../../assets/images/icons/home.svg';
import ExploreActive from '../../../assets/images/icons/active-category.svg';
import ExploreInactive from '../../../assets/images/icons/category.svg';
import CreateActive from '../../../assets/images/icons/Plus.svg';
import CreateInactive from '../../../assets/images/icons/Plus.svg';
import NotifyActive from '../../../assets/images/icons/active-notification.svg';
import NotifyInactive from '../../../assets/images/icons/notification.svg';
import ProfileActive from '../../../assets/images/icons/active-profile.svg';
import ProfileInactive from '../../../assets/images/icons/profile.svg';

const { width } = Dimensions.get('window');

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { route: '/Homescreen', ActiveIcon: HomeActive, InactiveIcon: HomeInactive },
    { route: '/discover', ActiveIcon: ExploreActive, InactiveIcon: ExploreInactive },
    { route: '/create', ActiveIcon: CreateActive, InactiveIcon: CreateInactive, isCreate: true },
    { route: '/activity', ActiveIcon: NotifyActive, InactiveIcon: NotifyInactive },
    { route: '/profile', ActiveIcon: ProfileActive, InactiveIcon: ProfileInactive },
  ];

  return (
    <View style={styles.container}>
      {/* Curved background with transparent notch */}
      <Svg width={width} height="80" style={styles.backgroundCurve}>
        <Path
          d={`M0 0H${width}V80C${width} 80 ${width - 60} 65 ${width / 2} 65C${60} 65 0 80 0 80V0Z`}
          fill="#FFFFFF"
        />
      </Svg>

      {/* Navigation items */}
      <View style={styles.navContent}>
        {navItems.map((item, index) => {
          const isActive = pathname === item.route;
          const Icon = isActive ? item.ActiveIcon : item.InactiveIcon;

          if (item.isCreate) {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => router.push(item.route)}
                style={styles.createButton}
              >
                <LinearGradient
                  colors={['#888BF4', '#5151C6']}
                  style={styles.gradient}
                  start={{ x: 0.5, y: 0 }}
                  end={{ x: 0.5, y: 1 }}
                >
                  <Icon width={24} height={24} fill="#FFFFFF" />
                </LinearGradient>
              </TouchableOpacity>
            );
          }

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    position: 'relative',
  },
  backgroundCurve: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navContent: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 75,
    paddingHorizontal: 10,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    zIndex: 1,
  },
  createButton: {
    position: 'absolute',
    bottom: 50,
    zIndex: 2,

  },
  gradient: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
});