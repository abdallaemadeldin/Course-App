import { Dimensions, StyleSheet, Image, Platform, PixelRatio } from 'react-native';
import { Colors } from './../../../app.json';

const { width, height, scale } = Dimensions.get('window');
const vector = Image.resolveAssetSource(require('./../../assets/vector.png'));
const vectorWidth = width * 55 / 100;
const vectorHeight = (vector.height * vectorWidth) / vector.height;
const fontFamily = "Poppins-Bold";
const fontFamilyR = "Poppins-Regular";
const fontScale = scale === 3 ? 1.2 : scale === 4 ? 1 : scale === 2 ? 1.4 : 1.6;

export const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        backgroundColor: Colors.green,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    subContainer: {
        width: width,
        height: height * 60 / 100,
        backgroundColor: Colors.white,
        alignItems: 'flex-start',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: '5%'
    },
    rightCircle: {
        width: width * 60 / 100,
        height: width * 60 / 100,
        borderRadius: width * 30 / 100,
        backgroundColor: Colors.white,
        opacity: .1,
        position: 'absolute',
        top: width * 20 / 100,
        right: -width * 50 / 100
    },
    topCircle: {
        width: width * 50 / 100,
        height: width * 50 / 100,
        borderRadius: width * 25 / 100,
        backgroundColor: Colors.white,
        opacity: .1,
        position: 'absolute',
        top: -width * 30 / 100,
        left: -width * 30 / 100
    },
    vector: {
        width: vectorWidth,
        height: vectorHeight
    },
    formTitle: {
        fontFamily: fontFamily,
        fontSize: 20 * fontScale,
        marginTop: '3%',
        color: Colors.dark
    },
    formCaption: {
        fontFamily: fontFamilyR,
        fontSize: 14 * fontScale,
        marginTop: '1%',
        marginBottom: '8%',
        color: Colors.dark
    },
    forgetPassword: {
        color: Colors.dark,
        fontFamily: fontFamilyR,
        fontSize: 12 * fontScale,
        alignSelf: 'flex-end'
    },
    loginBtn: {
        width: '75%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 44,
        backgroundColor: Colors.green,
        borderRadius: 22 * fontScale,
        alignSelf: 'center',
        elevation: 5,
        marginVertical: height * 3 / 100
    },
    loginBtnTitle: {
        fontSize: 14 * fontScale,
        color: Colors.white,
        fontFamily: fontFamily
    },
    createAccount: {
        alignSelf: 'center',
        fontFamily: fontFamilyR,
        color: Colors.mintGray,
        fontSize: 13 * fontScale,
        position: 'absolute',
        ...Platform.select({
            android: {
                bottom: 15
            },
            ios: {
                bottom: 45
            }
        })
    },
    boldText: {
        fontFamily: fontFamily,
        fontSize: 14 * fontScale
    }
});