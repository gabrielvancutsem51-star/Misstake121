
import { View, Text, Button, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function NouvellePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ma nouvelle page</Text>

      <Button
        title="Ouvrir la modal"
        onPress={() => router.push('/nouvelle/modal')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
