import { Dimensions, StyleSheet, Image } from 'react-native';
import { Colors } from './../../../app.json';

const { width, height, fontScale } = Dimensions.get('screen');
const logo = Image.resolveAssetSource(require('./../../assets/logo.png'));
const logoWidth = width * 10 / 100;
const logoHeight = (logo.height * logoWidth) / logo.width;
const banner = Image.resolveAssetSource(require('./../../assets/vector.png'));
const bannerWidth = width * 60 / 100;
const bannerHeight = (banner.height * bannerWidth) / banner.width;
const fontFamily = "Poppins-Bold";
const fontFamilyR = "Poppins-Regular";

export const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        backgroundColor: Colors.white,
        alignItems: 'center'
    },
    rightCircle: {
        width: width * 60 / 100,
        height: width * 60 / 100,
        borderRadius: width * 30 / 100,
        backgroundColor: Colors.dark,
        opacity: .4,
        position: 'absolute',
        top: width * 20 / 100,
        right: -width * 50 / 100
    },
    topCircle: {
        width: width * 50 / 100,
        height: width * 50 / 100,
        borderRadius: width * 25 / 100,
        backgroundColor: Colors.dark,
        opacity: .4,
        position: 'absolute',
        top: -width * 30 / 100,
        left: -width * 30 / 100
    },
    banner: {
        width: bannerWidth,
        height: bannerHeight,
        marginTop: '12%'
    },
    logo: {
        width: logoWidth,
        height: logoHeight,
        marginTop: '8%'
    },
    introMsg: {
        fontFamily: fontFamily,
        fontSize: 23 * fontScale,
        textAlign: 'center',
        color: Colors.dark,
        marginTop: '8%'
    },
    greenTxt: {
        fontSize: 20 * fontScale,
        color: Colors.green
    },
    introDesc: {
        width: '80%',
        textAlign: 'center',
        fontFamily: fontFamilyR,
        fontSize: 15 * fontScale,
        color: Colors.mintGray,
        marginVertical: '5%'
    },
    basicBtn: {
        width: '75%',
        height: 44 * fontScale,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 22 * fontScale,
        backgroundColor: Colors.dark,
        marginBottom: height * 2.5 / 100
    },
    btnTitle: {
        fontFamily: fontFamily,
        fontSize: 14 * fontScale,
        color: Colors.white
    },
    greenBtn: {
        backgroundColor: Colors.green
    }
});