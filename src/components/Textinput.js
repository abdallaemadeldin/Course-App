import React from 'react';
import { View, Dimensions, Text, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from './../../app.json';

const { width, height, fontScale } = Dimensions.get('screen');

class TextField extends React.PureComponent {

    state = {
        secured: true
    }

    render() {
        const { inputContainer, inputPlaceholder, input, inputIcon } = styles;
        const { placeholder, returnKeyType, onSubmitEditing, inputType, reference, marginBottom } = this.props;

        return (
            <View style={[inputContainer, { flexDirection: inputType === 'password' ? "row" : "column", marginBottom: marginBottom ? marginBottom : null }]}>
                <Text style={inputPlaceholder}>{placeholder}</Text>
                <TextInput
                    style={input}
                    autoCapitalize="none"
                    selectionColor={Colors.mintGray}
                    returnKeyType={returnKeyType}
                    ref={ref => reference ? reference(ref) : null}
                    onSubmitEditing={onSubmitEditing ? () => onSubmitEditing() : null}
                    keyboardType={inputType === 'number' ? "number-pad" : inputType === 'url' ? "url" : "default"}
                    secureTextEntry={this.state.secured && inputType === 'password'}
                />
                {inputType === 'password' ? <Icon name={this.state.secured ? "eye-off" : "eye"} style={inputIcon} onPress={() => {
                    this.setState(prev => {
                        return {
                            secured: !prev.secured
                        };
                    })
                }} /> : null}
            </View>
        );
    }
}

const fontFamilyR = "Poppins-Regular";
const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        height: 44,
        borderWidth: .5,
        borderColor: Colors.mintGray,
        paddingHorizontal: '5%',
        alignItems: 'center',
        borderRadius: 3
    },
    inputPlaceholder: {
        fontFamily: fontFamilyR,
        fontSize: 13 * fontScale,
        backgroundColor: Colors.white,
        paddingHorizontal: '2%',
        position: 'absolute',
        top: -10,
        left: 20,
        color: Colors.mintGray
    },
    input: {
        flex: 1,
        width: '100%',
        fontFamily: fontFamilyR,
        color: Colors.dark,
        paddingBottom: 5
    },
    inputIcon: {
        fontSize: 18 * fontScale,
        color: Colors.mintGray
    }
});

export default TextField;