import { Dimensions, StyleSheet, Image } from 'react-native';
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
        backgroundColor: Colors.white,
        alignItems: 'center'
    },
    headerLeftBtn: {
        width: 30 * fontScale,
        height: 30 * fontScale,
        borderRadius: 8 * fontScale,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        marginStart: 10
    },
    headerRightBtn: {
        width: 30 * fontScale,
        height: 30 * fontScale,
        borderRadius: 8 * fontScale,
        backgroundColor: Colors.mintGray,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        marginEnd: 10
    },
    headerBtnIcon: {
        color: Colors.white,
        fontSize: 20 * fontScale
    },
    headerTitle: {
        fontFamily: fontFamily
    }
});