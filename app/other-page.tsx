import { View, Text, Button } from 'react-native';
import { Link } from 'expo-router';

export default function OtherPage() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is another page!</Text>
      <Link href="/" asChild>
        <Button title="Go Back to Home" />
      </Link>
    </View>
  );
}