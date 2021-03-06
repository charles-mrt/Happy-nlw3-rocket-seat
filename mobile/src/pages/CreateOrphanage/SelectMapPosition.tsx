import React from 'react';
import { View, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import MapView, { Marker } from 'react-native-maps';

import mapMarkerImg from '../../images/map-marker.png';

import styles from '../../style/selectMapPosition';

export default function SelectMapPosition() {
    const navigation = useNavigation();
 
    function handleNextStep() {
        navigation.navigate( 'OrphanageData' );
    }

    return (

        <View style={styles.container}>
        
            <MapView
                initialRegion={{
                    latitude: -27.3991974,
                    longitude: -48.4241531, 
                    latitudeDelta: 0.008,
                    longitudeDelta: 0.008,
                }}
                style={styles.mapStyle}        
            >
            
                <Marker
                    icon={mapMarkerImg}
                    coordinate={{
                        latitude: -27.3991974,
                        longitude: -48.4241531, 
                    }}
                />

            </MapView>
        
            <RectButton style={ styles.nextButton } onPress={ handleNextStep }>
                <Text style={ styles.nextButtonText }>Próximo</Text>
            </RectButton>
        
        </View>

    )
}