import React from 'react';
import { View, Text, TouchableOpacity, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './style';
import TextInput from '../../components/Textinput';

class SignUp extends React.Component {
    render() {
        const { container, subContainer, topCircle, rightCircle, title, signUpBtn, signUpBtnTitle, backBtn, backBtnArrow } = styles;

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
                <Text style={title}>Sign Up</Text>
                <View style={subContainer}>

                    <TextInput placeholder="Name" reference={ref => this.name = ref} onSubmitEditing={() => this.email.focus()} returnKeyType="next" />
                    <TextInput placeholder="Email" inputType="email" reference={ref => this.email = ref} onSubmitEditing={() => this.password.focus()} returnKeyType="next" />
                    <TextInput placeholder="Password" inputType="password" reference={ref => this.password = ref} onSubmitEditing={() => this.confirm.focus()} returnKeyType="next" />
                    <TextInput placeholder="Confirm Password" inputType="password" reference={ref => this.confirm = ref} onSubmitEditing={() => this.date.focus()} returnKeyType="next" />
                    <TextInput placeholder="Date of Birth" reference={ref => this.date = ref} onSubmitEditing={() => this.city.focus()} returnKeyType="next" />
                    <TextInput placeholder="City" reference={ref => this.city = ref} />

                    <TouchableOpacity style={signUpBtn} activeOpacity={.9}>
                        <Text style={signUpBtnTitle}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        );
    }
}

export default SignUp;