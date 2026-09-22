import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useFonts, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';

export default function CardTag({ label, iconComponent: Icon, selected = false, onPress }) {
    const [fontsLoaded] = useFonts({
        Rajdhani_700Bold,
      });

  return (
    <LinearGradient
          colors={['#1D2766', '#171F52']}
          style={[styles.button, selected && styles.selectedButton]}
    >
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={{ selected }}
            onPress={onPress}
            style={styles.container}
          >
            <View style={styles.selectionIndicator}>
              <View
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 2,
                  backgroundColor: selected ? '#E51C44' : '#0A1033',
                  borderColor: selected ? null : '#243189',
                  borderWidth: selected ? null : '1'
                }}
              />
            </View>
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
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#243189',
    opacity: 0.5,
  },
  selectedButton: {
    opacity: 1,
  },
    container: {    
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center',
 },
  selectionIndicator: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 8,
    top: 8,
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