import { useColorScheme } from '@/components/useColorScheme.web';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

export default function SearchScreen() {
  return (
    <View style={style.container}>
      <Text style={style.title}>Profile</Text>
    </View>
  );
}

const colorScheme = useColorScheme();
const theme = colorScheme === 'light' ? DarkTheme : DefaultTheme;

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: theme.colors.text,
  },
});
