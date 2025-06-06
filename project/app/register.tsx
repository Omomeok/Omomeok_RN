import { View, StyleSheet, KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link, router } from 'expo-router';
import { Text } from 'react-native';
import Colors from '@/constants/Colors';
import TextInput from '@/components/TextInput';
import Button from '@/components/Button';

export default function RegisterScreen() {
  const handleRegister = () => {
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
          <Text style={styles.title}>회원가입</Text>
          
          <View style={styles.form}>
            <TextInput
              label="아이디"
              placeholder="아이디를 입력하세요"
              autoCapitalize="none"
            />
            
            <TextInput
              label="닉네임"
              placeholder="닉네임을 입력하세요"
            />
            
            <TextInput
              label="비밀번호"
              placeholder="비밀번호를 입력하세요"
              isPassword
            />
            
            <TextInput
              label="비밀번호 확인"
              placeholder="비밀번호를 입력하세요"
              isPassword
            />
            
            <Button 
              title="회원가입" 
              onPress={handleRegister}
              style={styles.button}
            />
            
            <View style={styles.footer}>
              <Text style={styles.footerText}>계정이 있다면?</Text>
              <Link href="/" asChild>
                <Text style={styles.loginLink}>로그인</Text>
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
  title: {
    fontSize: 24,
    fontFamily: 'NotoSansKR-Bold',
    marginBottom: 32,
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
  loginLink: {
    marginLeft: 8,
    color: Colors.light.tint,
    fontFamily: 'NotoSansKR-Medium',
  },
});