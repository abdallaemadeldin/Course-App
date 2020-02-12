import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

class Intro extends React.Component {
    render() {
        const { container, topCircle, rightCircle, logo, banner, introMsg, greenTxt, introDesc, basicBtn, btnTitle, greenBtn } = styles;

        return (
            <View style={container}>
                {
                    [...new Array(2)].map((e, i) => {
                        return <View key={i} style={i === 0 ? topCircle : rightCircle} />
                    })
                }
                <Image source={require('./../../assets/logo.png')} style={logo} />

                <Image source={require('./../../assets/vector.png')} style={banner} />
                <Text style={introMsg}>Welcome To<Text style={greenTxt}>{'\nReact Native Course'}</Text></Text>

                <Text style={introDesc}>Today we will create chat application using react native</Text>

                <TouchableOpacity style={[basicBtn, greenBtn]} activeOpacity={.8} onPress={() => this.props.navigation.navigate('SignIn')}>
                    <Text style={btnTitle}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={basicBtn} activeOpacity={.8} onPress={() => this.props.navigation.navigate('SignUp')}>
                    <Text style={btnTitle}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Intro;