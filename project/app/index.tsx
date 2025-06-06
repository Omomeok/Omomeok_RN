import { View, StyleSheet, Image, KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link, router } from 'expo-router';
import { Text } from 'react-native';
import Colors from '@/constants/Colors';
import TextInput from '@/components/TextInput';
import Button from '@/components/Button';
import Logo from '@/assets/logo';

export default function LoginScreen() {
  const handleLogin = () => {
    router.replace('/(tabs)');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={styles.keyboardAvoid}
      >
        <View style={styles.main}>
          <View style={styles.logoContainer}>
            <Logo />
            <Text style={styles.logoText}>Omomeok</Text>
          </View>
          
          <View style={styles.form}>
            <TextInput
              label="아이디"
              placeholder="아이디를 입력하세요"
              autoCapitalize="none"
            />
            
            <TextInput
              label="비밀번호"
              placeholder="비밀번호를 입력하세요"
              isPassword
            />
            
            <Button 
              title="로그인" 
              onPress={handleLogin}
              style={styles.button}
            />
            
            <View style={styles.footer}>
              <Text style={styles.footerText}>계정이 없다면?</Text>
              <Link href="/register" asChild>
                <Text style={styles.registerLink}>회원가입</Text>
              </Link>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  keyboardAvoid: {
    flex: 1,
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 48,
  },
  logoText: {
    fontSize: 32,
    fontFamily: 'NotoSansKR-Bold',
    marginTop: 16,
    color: '#2D3748',
  },
  form: {
    width: '100%',
    maxWidth: 350,
  },
  button: {
    marginTop: 24,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  footerText: {
    color: '#666',
    fontFamily: 'NotoSansKR-Regular',
  },
  registerLink: {
    marginLeft: 8,
    color: Colors.light.tint,
    fontFamily: 'NotoSansKR-Medium',
  },
});