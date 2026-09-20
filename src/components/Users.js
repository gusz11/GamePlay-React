import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useFonts, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';

export default function Users({ label, iconSource, status }) {
    const [fontsLoaded] = useFonts({
        Rajdhani_700Bold,
      });

  return (

<View style={styles.card}>
    <View style={styles.iconWrapper}>
           {iconSource ? (
                      <Image source={iconSource} style={styles.userIcon} resizeMode="contain" />
                    ) : null}
    </View>
    <TouchableOpacity
      style={styles.cardInfo}
      accessibilityRole="button"
    >
      <View>
        <Text style={styles.tittle}>{label}</Text>
        <View style={styles.statusRow}>
        <View
          style={[
            styles.circle,
            status === 'Disponível' ? styles.availableCircle : styles.unavailableCircle,
          ]}
        />
        <Text style={styles.status}>{status}</Text>
        </View>
      </View>
    </TouchableOpacity>
</View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  cardInfo: {
    width: '100%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#1D2766',
    flex: 1,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    marginLeft: 16,
    overflow: 'hidden',
  },
  iconWrapper: {
    alignItems: 'center',
    height: 48,
    justifyContent: 'center',
    marginRight: 0,
    width: 48,
  },
  tittle: {
    color: '#DDE3F0',
    fontFamily: 'Rajdhani_700Bold',
    fontSize: 18,
    marginBottom: 8,
  },
  status: {
    color: '#ABB1CC',
    fontSize: 13,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: 20,
    marginRight: 8,
  },
  availableCircle: {
    backgroundColor: '#32BD50',
  },
  unavailableCircle: {
    backgroundColor: '#E51C44',
  },
  userIcon:{
    height: 48,
    width: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#243189',
  },
});