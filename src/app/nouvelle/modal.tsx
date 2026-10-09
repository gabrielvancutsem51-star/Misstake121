
import { View, Text, Button } from 'react-native';
import { router } from 'expo-router';

export default function ModalPage() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>Bienvenue dans ma Modal !</Text>

      <Button
        title="Fermer"
        onPress={() => router.back()}
      />
    </View>
  );
}
