import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useFonts, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import CalendarIcon from '../../assets/calendar.svg';
import MemberGreen from '../../assets/memberGreen.svg';
import MemberPink from '../../assets/memberPink.svg';

export default function Matches({ label, iconSource, date, type, member, onPress }) {
    const [fontsLoaded] = useFonts({
        Rajdhani_700Bold,
      });
    const MemberIcon = member === 'Anfitrião' ? MemberPink : MemberGreen;

  return (

    <View style={styles.card}>
        <View style={styles.iconWrapper}>
              {iconSource ? (
                <Image source={iconSource} style={styles.gameIcon} resizeMode="contain" />
              ) : null}
        </View>
        <TouchableOpacity
          style={styles.cardInfo}
          accessibilityRole="button"
          onPress={onPress}
        >
          <View>
            <Text style={styles.tittle}>{label}</Text>
            <View style={styles.dateRow}>
              <CalendarIcon width={16} height={16} />
              <Text style={styles.date}>{date}</Text>
            </View>
          </View>
          <View>
              <Text style={styles.type}>{type}</Text>
              <View style={styles.memberRow}>
                <MemberIcon width={16} height={16} />
                <Text
                  style={[
                    styles.member,
                    member === 'Anfitrião' ? styles.memberHost : styles.memberVisitor,
                  ]}
                >
                  {member}
                </Text>
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
  },
  cardInfo: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#1D2766',
    borderRadius: 8,
    flex: 1,
    flexDirection: 'row',
    height: 69,
    justifyContent: 'space-between',
    marginLeft: 16,
    paddingBottom: 5,
  },
  iconWrapper: {
    alignItems: 'center',
    borderColor: '#243189',
    borderRadius: 8,
    borderWidth: 1,
    height: 68,
    justifyContent: 'center',
    width: 64,
  },
  gameIcon: {
    height: 64,
    width: 68,
  },
  tittle: {
    color: '#DDE3F0',
    fontFamily: 'Rajdhani_700Bold',
    fontSize: 18,
    marginBottom: 16,
  },
  date: {
    color: '#DDE3F0',
    fontSize: 13,
    fontWeight: '500',
    marginLeft: 6,
  },
  type: {
    color: '#ABB1CC',
    fontSize: 13,
    marginBottom: 16,
    textAlign: 'right',
  },
  member: {
    fontSize: 13,
    textAlign: 'right',
    marginLeft: 3,
  },
  memberHost: {
    color: '#E51C44',
  },
  memberVisitor: {
    color: '#32BD50',
  },
  dateRow: {
    flexDirection: 'row',
  },
  memberRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});