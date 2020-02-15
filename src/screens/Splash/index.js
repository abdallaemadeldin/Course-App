import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './style';
import auth from '@react-native-firebase/auth';

class Splash extends React.Component {

    componentDidMount() {
        let route = "Intro";
        auth().onAuthStateChanged(user => {
            if (user) {
                route = "Home"
            }
        })
        setTimeout(() => {
            this.props.navigation.replace(route);
        }, 2000);
    }

    render() {
        const { container, topCircle, rightCircle, leftCircle, bottomCircle, logo } = styles;

        return (
            <View style={container}>
                {
                    [...new Array(4)].map((e, i) => {
                        return <View key={i} style={i === 0 ? topCircle : i === 1 ? rightCircle : i === 2 ? leftCircle : bottomCircle} />
                    })
                }

                <Image source={require('./../../assets/logo.png')} style={logo} />
            </View>
        );
    }
}

export default Splash;