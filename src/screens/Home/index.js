import React from 'react';
import { View, Image, Text, TouchableOpacity, Keyboard, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './style';
import TextInput from '../../components/Textinput';
import auth from '@react-native-firebase/auth';

class Home extends React.Component {

    constructor(props) {
        super(props);

        props.navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity style={styles.headerLeftBtn}>
                    <Icon name="menu" style={styles.headerBtnIcon} />
                </TouchableOpacity>
            ),
            headerRight: () => (
                <TouchableOpacity style={styles.headerRightBtn}>
                    <Icon name="magnify" style={styles.headerBtnIcon} />
                </TouchableOpacity>
            ),
            headerTitle: "Chats",
            headerTitleStyle: styles.headerTitle
        })
    }

    render() {
        const { container } = styles;

        return (
            <View style={container}>

            </View>
        );
    }
}

export default Home;