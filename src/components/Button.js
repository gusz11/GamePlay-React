import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Button({ label, onPress }) {
  return (
<TouchableOpacity
      accessibilityRole="button"
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#E51C44',
    borderRadius: 8,
    height: 56,
    flexDirection: 'row',
    width: '100%',
    overflow: 'hidden',
  },
  label: {
    flex: 1,
    textAlign: 'center',
    color: '#DDE3F0',
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 25,
  },
});