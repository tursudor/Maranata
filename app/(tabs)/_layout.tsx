import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';


export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: '#b94d22ff',
      headerStyle: {
        backgroundColor: '#25292e',
      },
      headerShadowVisible: false,
      headerTintColor: '#fff',
      tabBarStyle: {
        backgroundColor: '#ffffff',
      },
    }}>
      <Tabs.Screen name="index" options={{
        title: 'Home',
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
        ),
      }} />
      <Tabs.Screen name="Chat" options={{
        title: 'Daily Bread',
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name={focused ? 'battery-charging' : 'battery-charging-outline'} color={color} size={24} />
        ),
      }} />
      <Tabs.Screen name="Media" options={{
        title: 'Media',
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name={focused ? 'image' : 'image-outline'} color={color} size={24} />
        ),
      }} />
      <Tabs.Screen name="Donate" options={{
        title: 'Donate',
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name={focused ? 'heart' : 'heart-outline'} color={color} size={24} />
        ),
      }} />
      <Tabs.Screen name="About" options={{
        title: 'About',
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />
        ),
      }} />
    </Tabs>
  );
}
