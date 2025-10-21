import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';


export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: '#ffd33d',
      headerStyle: {
        backgroundColor: '#25292e',
      },
      headerShadowVisible: false,
      headerTintColor: '#fff',
      tabBarStyle: {
        backgroundColor: '#25292e',
      },
    }}>
      <Tabs.Screen name="index" options={{
        title: 'Home',
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
        ),
      }} />
      <Tabs.Screen name="News" options={{
        title: 'News',
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name={focused ? 'newspaper-sharp' : 'newspaper-outline'} color={color} size={24} />
        ),
      }} />
      <Tabs.Screen name="Chat" options={{
        title: 'Chat',
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name={focused ? 'chatbox' : 'chatbox-outline'} color={color} size={24} />
        ),
      }} />
      <Tabs.Screen name="Map" options={{
        title: 'Map',
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name={focused ? 'location' : 'location-outline'} color={color} size={24} />
        ),
      }} />
      <Tabs.Screen name="Donate" options={{
        title: 'Donate',
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name={focused ? 'heart' : 'heart-outline'} color={color} size={24} />
        ),
      }} />
    </Tabs>
  );
}
