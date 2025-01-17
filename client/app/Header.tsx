import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { useNavigation, DrawerActions } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  const handleProfilePress = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View style={styles.header}>
      <View style={styles.header2}>
        <View style={styles.headerLeftView}>
          <View>
            <TouchableOpacity onPress={handleProfilePress}>
              <Image
                source={require('../assets/images/man.png')}
                style={styles.user}
              />
            </TouchableOpacity>
            <Image
              source={require('../assets/images/flag.png')}
              style={styles.flag}
            />
          </View>
          <View style={{ marginLeft: moderateScale(10) }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.home}>Home</Text>
              <Image
                source={require('../assets/images/down.png')}
                style={styles.dropdown}
              />
            </View>
            <Text style={styles.address}>125, StreetNo 2,pune, Maharashra</Text>
          </View>
        </View>
        <View style={styles.headerRightView}>
        
          <Image
            source={require('../assets/images/bell.png')}
            style={[
              styles.icons,
              { marginLeft: moderateScale(15), marginRight: moderateScale(15) },
            ]}
          />
          <Image
            source={require('../assets/images/help.png')}
            style={styles.icons}
          />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: verticalScale(70),
    padding:10,
    backgroundColor: '#007bff',
    justifyContent: 'flex-end',
  },
  header2: {
    width: '100%',
    height: verticalScale(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(10),
  },
  headerLeftView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  user: {
    width: scale(40),
    height: scale(40),
  },
  flag: {
    width: scale(20),
    height: scale(20),
    position: 'absolute',
    right: -moderateScale(3),
    bottom: moderateScale(0),
    borderRadius: scale(10),
    borderWidth: 1,
    borderColor: 'white',
  },
  home: {
    fontSize: moderateScale(18),
    color: 'white',
    fontWeight: '600',
  },
  dropdown: {
    width: scale(16),
    height: scale(16),
    tintColor: 'white',
    marginLeft: moderateScale(5),
  },
  address: {
    color: 'white',
    fontSize: moderateScale(12),
    marginTop: moderateScale(2),
  },
  headerRightView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icons: {
    width: scale(22),
    height: scale(22),
    tintColor: 'white',
  },
});
