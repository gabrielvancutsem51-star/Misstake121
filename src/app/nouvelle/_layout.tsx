
import { Stack } from 'expo-router';

export default function NouvelleLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: 'Nouvelle page' }}
      />

      <Stack.Screen
        name="modal"
        options={{
          title: 'Ma Modal',
          presentation: 'modal',
        }}
      />
    </Stack>
  );
}
