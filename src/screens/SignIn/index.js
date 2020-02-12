import React from 'react';
import { View, Image, Text, TouchableOpacity, Keyboard } from 'react-native';
import { styles } from './style';
import TextInput from './../../components/Textinput';

class SignIn extends React.Component {
    render() {
        const { container, subContainer, topCircle, rightCircle, vector, formTitle, formCaption, forgetPassword, loginBtn, loginBtnTitle, createAccount, boldText } = styles;

        return (
            <TouchableOpacity style={container} activeOpacity={1} onPress={() => Keyboard.dismiss()}>
                {
                    [...new Array(2)].map((e, i) => {
                        return <View key={i} style={i === 0 ? topCircle : rightCircle} />
                    })
                }
                <Image source={require('./../../assets/vector.png')} style={vector} />
                <View style={subContainer}>
                    <Text style={formTitle}>Login</Text>
                    <Text style={formCaption}>Welcome Back.</Text>

                    <TextInput placeholder="Email" returnKeyType="next" inputType="email" reference={ref => this.email = ref} onSubmitEditing={() => this.password.focus()} />
                    <TextInput placeholder="Password" returnKeyType="done" inputType="password" marginBottom="2%" reference={ref => this.password = ref} />
                    <Text style={forgetPassword} onPress={() => this.props.navigation.navigate('ForgotPassword')}>Forgot Password?</Text>

                    <TouchableOpacity style={loginBtn} activeOpacity={.9}>
                        <Text style={loginBtnTitle}>Login</Text>
                    </TouchableOpacity>
                    <Text style={createAccount}>Don't have an account? <Text style={boldText} onPress={() => this.props.navigation.navigate('SignUp')}>SIGN UP</Text></Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default SignIn;