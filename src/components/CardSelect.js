import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useFonts, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';

export default function CardSelect({ label, iconComponent: Icon }) {
    const [fontsLoaded] = useFonts({
        Rajdhani_700Bold,
      });

  return (
    <LinearGradient
      colors={['#1D2766', '#171F52']}
      style={styles.button}
    >
      <TouchableOpacity
            accessibilityRole="button"
            style={styles.container}
      >
            <View style={styles.iconWrapper}>
              {Icon ? <Icon width={48} height={48} /> : null}
            </View>
            <Text style={styles.label}>{label}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
    button: {
    borderRadius: 8,
    height: 120,
    width: 104,
    borderWidth: 1,
    borderColor: '#243189',
  },
    container: {    
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center',
 },
    iconWrapper: {      
    marginBottom: 16,
  },
  label: {
    textAlign: 'center',
    color: '#DDE3F0',
    fontSize: 15,
    fontFamily: 'Rajdhani_700Bold',
  },
});