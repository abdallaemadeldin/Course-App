import { Dimensions, StyleSheet, Image } from 'react-native';
import { Colors } from './../../../app.json';

const { width, height, scale } = Dimensions.get('window');
const fontFamily = "Poppins-Bold";
const fontScale = scale === 3 ? 1.2 : scale === 4 ? 1 : scale === 2 ? 1.4 : 1.6;
const vector = Image.resolveAssetSource(require('./../../assets/vector.png'));
const vectorWidth = width * 40 / 100;
const vectorHeight = (vector.height * vectorWidth) / vector.height;

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
        padding: '5%',
        paddingTop: '7%'
    },
    rightCircle: {
        width: width * 60 / 100,
        height: width * 60 / 100,
        borderRadius: width * 30 / 100,
        backgroundColor: Colors.white,
        opacity: .1,
        position: 'absolute',
        top: width * -30 / 100,
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
    signUpBtn: {
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
    signUpBtnTitle: {
        fontSize: 14 * fontScale,
        color: Colors.white,
        fontFamily: fontFamily
    },
    title: {
        fontFamily: fontFamily,
        color: Colors.white,
        fontSize: 19 * fontScale,
        alignSelf: 'flex-start',
        margin: '5%'
    },
    backBtn: {
        alignSelf: 'flex-start',
        marginStart: '5%'
    },
    vector: {
        width: vectorWidth,
        height: vectorHeight
    },
    backBtnArrow: {
        fontSize: 22 * fontScale,
        color: Colors.white
    }
});