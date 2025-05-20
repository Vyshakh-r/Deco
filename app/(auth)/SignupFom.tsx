import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useAuth } from '../../context/AuthContext';

import FacebookIcon from '../../assets/images/icons/facebook-fill.svg';
import GoogleIcon from '../../assets/images/icons/google.svg';
import ShowIcon from '../../assets/images/icons/Show.svg';

const LoginScreen = () => {
  const { login } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    Keyboard.dismiss();

    if (!email.trim()) {
      Alert.alert('Error', 'Please enter your email');
      return;
    }
    if (!password.trim()) {
      Alert.alert('Error', 'Please enter your password');
      return;
    }

    setIsLoading(true);
    const success = await login(email, password);
    setIsLoading(false);

    if (success) {
      router.replace('/(tabs)/homescreen');
    } else {
      Alert.alert('Login Failed', 'Wrong email or password');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.androidContainer}>
        <StatusBar backgroundColor="transparent" barStyle="light-content" />

        {/* Login Form */}
        <View style={styles.formContainer}>
          {/* Email Input */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.androidInput}
              placeholder="Email"
              placeholderTextColor="#757575"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
            />
          </View>

          {/* Password Input */}
          <View style={styles.inputContainer}>
            <View style={styles.passwordContainer}>
              <TextInput
                style={[styles.androidInput, { flex: 1 }]}
                placeholder="Password"
                placeholderTextColor="#757575"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
                underlineColorAndroid="transparent"
              />
              <TouchableOpacity
                style={styles.showButton}
                onPress={() => setShowPassword(!showPassword)}
              >
                <ShowIcon name={showPassword ? 'hide' : 'show'} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Login Button */}
          <TouchableOpacity
            style={styles.androidButtonWrapper}
            onPress={handleLogin}
            disabled={isLoading}
          >
            <LinearGradient
              colors={['#888BF4', '#5151C6']}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 0 }}
              style={styles.androidButton}
            >
              <Text style={styles.buttonText}>
                {isLoading ? 'PLEASE WAIT...' : 'LOGIN'}
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <Text style={styles.loginText}>OR LOG IN BY</Text>

          <View style={styles.account}>
            <TouchableOpacity style={styles.google}>
              <GoogleIcon width={24} height={24} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.google}>
              <FacebookIcon width={30} height={24} />
            </TouchableOpacity>
          </View>

          <Text style={styles.signupText}>
            Don't have account? <Text style={styles.signupBlue}>SIGN UP</Text>
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  androidContainer: {
    flex: 2,
    backgroundColor: '#FFFFFF',
    zIndex: 3,
    borderTopRightRadius: 28,
    borderTopLeftRadius: 28,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  inputContainer: {
    marginBottom: 24,
  },
  androidInput: {
    backgroundColor: 'white',
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#212121',
    elevation: 2,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  showButton: {
    position: 'absolute',
    right: 12,
  },
  androidButtonWrapper: {
    borderRadius: 30,
    overflow: 'hidden',
  },
  androidButton: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Poppins',
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
    textTransform: 'uppercase',
    lineHeight: 1.5 * 16,
  },
  account: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    marginTop: 10,
  },
  google: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  loginText: {
    alignSelf: 'center',
    marginTop: 20,
    color: '#606060',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 2,
  },
  signupText: {
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: -0.2,
    lineHeight: 24,
    color: '#606060',
    alignSelf: 'center',
    marginTop: 50,
  },
  signupBlue: {
    color: '#5252c7',
  },
});

export default LoginScreen;
