import { StyleSheet, Text, View } from 'react-native';
import Projects from './src/pages/Projects';
import Profile from './src/pages/Profile';

export default function App() {
  return (
    <view>
      <Profile/>
      <Projects/>
    </view>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
