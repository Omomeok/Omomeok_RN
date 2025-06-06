import { useState } from 'react';
import { 
  View, 
  TextInput as RNTextInput, 
  TextInputProps, 
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform
} from 'react-native';
import { Eye, EyeOff } from 'lucide-react-native';
import Colors from '@/constants/Colors';

interface CustomTextInputProps extends TextInputProps {
  label: string;
  isPassword?: boolean;
}

export default function TextInput({ 
  label, 
  isPassword = false,
  ...props 
}: CustomTextInputProps) {
  const [secureTextEntry, setSecureTextEntry] = useState(isPassword);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <RNTextInput
          style={styles.input}
          secureTextEntry={secureTextEntry}
          placeholderTextColor={Colors.light.placeholder}
          {...props}
        />
        {isPassword && (
          <TouchableOpacity 
            style={styles.eyeButton}
            onPress={toggleSecureEntry}
            accessibilityLabel={secureTextEntry ? "비밀번호 보기" : "비밀번호 숨기기"}
          >
            {secureTextEntry ? (
              <Eye size={20} color={Colors.light.placeholder} />
            ) : (
              <EyeOff size={20} color={Colors.light.placeholder} />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: '100%',
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
    fontFamily: 'NotoSansKR-Medium',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.light.inputBorder,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  input: {
    flex: 1,
    height: Platform.OS === 'ios' ? 48 : 50,
    paddingHorizontal: 16,
    fontFamily: 'NotoSansKR-Regular',
  },
  eyeButton: {
    padding: 10,
  },
});