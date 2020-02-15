import React from 'react';
import { View, Image, Text, TouchableOpacity, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './style';
import TextInput from '../../components/Textinput';
import { forgotPassword } from './../../Firebase/authActions';

class ForgotPassword extends React.Component {
    render() {
        const { container, subContainer, topCircle, rightCircle, vector, formTitle, title, formCaption, submitBtn, submitBtnTitle, backBtn, backBtnArrow } = styles;

        return (
            <TouchableOpacity style={container} activeOpacity={1} onPress={() => Keyboard.dismiss()}>
                {
                    [...new Array(2)].map((e, i) => {
                        return <View key={i} style={i === 0 ? topCircle : rightCircle} />
                    })
                }
                <TouchableOpacity style={backBtn} activeOpacity={1} onPress={() => this.props.navigation.goBack()}>
                    <Icon name="arrow-left" style={backBtnArrow} />
                </TouchableOpacity>
                <Text style={title}>Forgot Password</Text>
                <Image source={require('./../../assets/vector.png')} style={vector} />
                <View style={subContainer}>
                    <Text style={formTitle}>Forgot Password?</Text>
                    <Text style={formCaption}>Enter your email address here to receive further instructions.</Text>

                    <TextInput placeholder="Email" inputType="email" reference={ref => this.email = ref} />

                    <TouchableOpacity style={submitBtn} activeOpacity={.9} onPress={() => forgotPassword(this.email._lastNativeText)}>
                        <Text style={submitBtnTitle}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        );
    }
}

export default ForgotPassword;