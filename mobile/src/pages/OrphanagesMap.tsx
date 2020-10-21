import React from 'react';
import { Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import  MapView, { Marker, Callout, PROVIDER_GOOGLE }  from 'react-native-maps';
import { Feather } from '@expo/vector-icons';

import mapMarker from '../images/map-marker.png';
import styles from '../style/app';



export default function OrphanagesMap() {
    const navigation = useNavigation();
    
    
    function handleNavigateToOrphanageDetails() {
        navigation.navigate( 'OrphanageDetails' );
    }

    function handleNavigateToOrphanage(){
      navigation.navigate( 'SelectMapPosition' );
    }

    return (

    <View style={ styles.container }>    
      <MapView
        provider={ PROVIDER_GOOGLE } // force all devices to use googlemaps 
        style={ styles.map }
        initialRegion={{
          latitude: -27.3991974,
          longitude: -48.4241531,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        
        <Marker
          icon={ mapMarker }
          calloutAnchor={{
            x:2.5,
            y:0.8,
          }}
          coordinate={{
            latitude: -27.3991974,
            longitude: -48.4241531,            
          }}
        >
          {/* tooltip={true} remove default style */}
          <Callout tooltip={true} onPress={ handleNavigateToOrphanageDetails }> 
            <View style={styles.calloutContanier}>
                <Text style={styles.calloutText}>
                    Lar das Meninas 
                    <Feather 
                        
                        name="arrow-right" 
                        size={15}     
                        color='#000'         
                    />  
                </Text>
            </View>             
          </Callout>

        </Marker>
      </MapView>      

      <View style={styles.footer}>
          <Text style={styles.footerText}> 2 orfanatos encontrados</Text>
          <RectButton style={styles.createOrphanageButton} onPress={ handleNavigateToOrphanage }>
            <Feather name="plus" size={20} color='#fff'>

            </Feather>
          </RectButton>
      </View>    
    </View>

    );
}