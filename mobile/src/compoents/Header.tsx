import React from 'react';
import { View, Text} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/core';

import { Feather } from '@expo/vector-icons';

import styles from '../style/header';


interface HeaderProps {
    title: string;
    showCancel?: boolean;
}



export default function Header( { title, showCancel = true }: HeaderProps ) {
    
    const navigation = useNavigation();

    function handleGobackToHomePage() {
        navigation.navigate( 'OrphanagesMap' );
    }

    return (
        <View style={ styles.container }>

            <BorderlessButton onPress= { navigation.goBack } >
                <Feather name="arrow-left" size={24} color="#15b5d6" />
            </BorderlessButton>

            <Text style={ styles.title }> { title } </Text>

           { showCancel ? (
                <BorderlessButton onPress= { handleGobackToHomePage }>
                    <Feather name="x" size={24} color="#ff669d" />
                </BorderlessButton>
           ) : ( 
            <View/> 
           )}

            
        </View>
    );
}