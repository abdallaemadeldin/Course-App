import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { CommonActions } from '@react-navigation/native';

export const singIn = (email, password, navigation) => {
    const trimmedEmail = String(email).trim();
    const trimmedPassword = String(password).trim();
    if (trimmedEmail == "undefined" && trimmedPassword == "undefined") {
        alert('Please enter your data');
    } else if (trimmedEmail == "undefined") {
        alert('Please enter your email');
    } else if (trimmedPassword == "undefined") {
        alert('Please enter your password');
    } else {
        auth().signInWithEmailAndPassword(trimmedEmail, trimmedPassword)
            .then(() => {
                navigation.dispatch(CommonActions.reset({ index: 1, routes: [{ name: 'Home' }] }));
            })
            .catch(error => {
                alert(String(error).split(']')[1])
            });
    }
}

export const forgotPassword = (email) => {
    const trimmed = String(email).trim();
    if (trimmed == "undefined") {
        alert('Please enter your email');
    } else {
        auth().sendPasswordResetEmail(trimmed, {
            url: "app/reset-password"
        })
            .then(res => {
                alert('An email has been sent to ' + trimmed);
            })
            .catch(error => {
                alert(String(error).split(']')[1])
            });
    }
}

export const signUp = (name, email, password, confirm, navigation) => {
    const trimmedName = String(name);
    const trimmedEmail = String(email);
    const trimmedPassword = String(password);
    const trimmedConfirm = String(confirm);

    if (trimmedName == "undefined" && trimmedPassword == "undefined" && trimmedConfirm == "undefined" && trimmedEmail == "undefined") {
        alert('Please enter your data');
    } else if (trimmedName == "undefined") {
        alert('Please enter your name');
    } else if (trimmedEmail == "undefined") {
        alert('Please enter your email');
    } else if (trimmedPassword == "undefined") {
        alert('Please enter your password');
    } else if (trimmedPassword != trimmedConfirm) {
        alert('Confirm password not match password');
    } else {
        auth().createUserWithEmailAndPassword(trimmedEmail, trimmedPassword)
            .then(res => {
                auth().currentUser.updateProfile({
                    displayName: trimmedName
                }).then(() => {
                    firestore().collection('Users').doc(res.user.uid).set({
                        name: trimmedName,
                        email: trimmedEmail
                    })
                        .then(() => {
                            navigation.dispatch(CommonActions.reset({ index: 1, routes: [{ name: 'Home' }] }));
                        })
                        .catch(error => {
                            alert(String(error).split(']')[1])
                        });
                }).catch(error => {
                    alert(String(error).split(']')[1])
                });
            })
            .catch(error => {
                alert(String(error).split(']')[1])
            });
    }
}