import { View, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Text } from 'react-native';
import { ChevronRight, Settings, LogOut, User, Bell, CircleHelp as HelpCircle } from 'lucide-react-native';
import Colors from '@/constants/Colors';
import { router } from 'expo-router';

export default function ProfileScreen() {
  const handleLogout = () => {
    router.replace('/');
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>프로필</Text>
        </View>
        
        <View style={styles.profileCard}>
          <View style={styles.avatar} />
          <View style={styles.profileInfo}>
            <Text style={styles.username}>사용자</Text>
            <Text style={styles.email}>user@example.com</Text>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>계정</Text>
          
          <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.menuItem}>
              <User size={20} color="#555" />
              <Text style={styles.menuText}>계정 정보</Text>
              <ChevronRight size={18} color="#CCC" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.menuItem}>
              <Settings size={20} color="#555" />
              <Text style={styles.menuText}>설정</Text>
              <ChevronRight size={18} color="#CCC" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.menuItem}>
              <Bell size={20} color="#555" />
              <Text style={styles.menuText}>알림</Text>
              <ChevronRight size={18} color="#CCC" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.menuItem}>
              <HelpCircle size={20} color="#555" />
              <Text style={styles.menuText}>도움말</Text>
              <ChevronRight size={18} color="#CCC" />
            </TouchableOpacity>
          </View>
        </View>
        
        <TouchableOpacity 
          style={styles.logoutButton}
          onPress={handleLogout}
        >
          <LogOut size={20} color={Colors.light.tint} />
          <Text style={styles.logoutText}>로그아웃</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FC',
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontFamily: 'NotoSansKR-Bold',
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#E1EBFD',
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  username: {
    fontSize: 18,
    fontFamily: 'NotoSansKR-Bold',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'NotoSansKR-Regular',
  },
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: 'NotoSansKR-Medium',
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  menuContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginHorizontal: 16,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  menuText: {
    flex: 1,
    marginLeft: 16,
    fontSize: 16,
    fontFamily: 'NotoSansKR-Regular',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
    marginHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  logoutText: {
    color: Colors.light.tint,
    marginLeft: 8,
    fontSize: 16,
    fontFamily: 'NotoSansKR-Medium',
  },
});