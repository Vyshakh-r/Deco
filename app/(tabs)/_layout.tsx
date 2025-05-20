import { Stack, usePathname } from 'expo-router';
import { View } from 'react-native';
import BottomNav from '../(app)/Components/BottomNav';

export default function Layout() {
  const pathname = usePathname();

  // Hide bottom nav on login/onboarding screens if needed
  const hideBottomNav = pathname === '/' || pathname === '/onboarding' || pathname === '/Signin';

  return (
    <View style={{ flex: 1 }}>
      <Stack />
      {!hideBottomNav && <BottomNav />}
    </View>
  );
}
