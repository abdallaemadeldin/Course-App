import React from 'react';
import { View, Image, Text, TouchableOpacity, Keyboard } from 'react-native';
import { styles } from './style';
import TextInput from './../../components/Textinput';

class ForgetPassword extends React.Component {
    render() {
        const { container, subContainer, topCircle, rightCircle, vector, formTitle, formCaption, submitBtn, submitBtnTitle } = styles;

        return (
            <TouchableOpacity style={container} activeOpacity={1} onPress={() => Keyboard.dismiss()}>
                {
                    [...new Array(2)].map((e, i) => {
                        return <View key={i} style={i === 0 ? topCircle : rightCircle} />
                    })
                }
                <Image source={require('./../../assets/vector.png')} style={vector} />
                <View style={subContainer}>
                    <Text style={formTitle}>Forgot  Password?</Text>
                    <Text style={formCaption}>Enter your email address here to receive further instructions.</Text>

                    <TextInput placeholder="Email" inputType="email" marginBottom="6%" reference={ref => this.email = ref} />

                    <TouchableOpacity style={submitBtn} activeOpacity={.9}>
                        <Text style={submitBtnTitle}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        );
    }
}

export default ForgetPassword;