import { Dimensions, StyleSheet, Image } from 'react-native';
import { Colors } from './../../../app.json';

const { width, height } = Dimensions.get('screen');
const logo = Image.resolveAssetSource(require('./../../assets/logo.png'));
const logoWidth = width * 35 / 100;
const logoHeight = (logo.height * logoWidth) / logo.width;

export const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    topCircle: {
        width: width * 80 / 100,
        height: width * 80 / 100,
        borderRadius: width * 40 / 100,
        backgroundColor: Colors.dark,
        opacity: .4,
        position: 'absolute',
        top: -width * 40 / 100,
        left: -width * 40 / 100
    },
    rightCircle: {
        width: width * 60 / 100,
        height: width * 60 / 100,
        borderRadius: width * 30 / 100,
        backgroundColor: Colors.dark,
        opacity: .4,
        position: 'absolute',
        top: width * 55 / 100,
        right: -width * 50 / 100
    },
    leftCircle: {
        width: width * 65 / 100,
        height: width * 65 / 100,
        borderRadius: width * 32.5 / 100,
        backgroundColor: Colors.dark,
        opacity: .4,
        position: 'absolute',
        bottom: width * 10 / 100,
        left: -width * 55 / 100
    },
    bottomCircle: {
        width: width * 40 / 100,
        height: width * 40 / 100,
        borderRadius: width * 20 / 100,
        backgroundColor: Colors.dark,
        opacity: .4,
        position: 'absolute',
        bottom: -width * 20 / 100,
        right: -width * 20 / 100
    },
    logo: {
        width: logoWidth,
        height: logoHeight
    }
});