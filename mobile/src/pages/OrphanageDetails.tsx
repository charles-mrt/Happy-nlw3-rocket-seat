import React from 'react';
import {  Image, View, ScrollView,  Text  } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import MapView, { Marker } from 'react-native-maps';

import { Feather, FontAwesome } from '@expo/vector-icons';

import styles from '../style/orphanageDetails';
import mapMarkerImg from '../images/map-marker.png'

export default function OrphanageData() { 

    return (
        <ScrollView style={ styles.container }>
            
            <View style={ styles.imagesContainer } >
                <ScrollView horizontal pagingEnabled >
                    <Image style={ styles.image } source={{ uri: 'https://m.psecn.photoshelter.com/img-get2/I0000Zn2b3Gn49WQ/fit=1000x750/008761.jpg' }}/>
                    <Image style={ styles.image } source={{ uri: 'https://www12.senado.leg.br/noticias/materias/2019/07/29/creches-com-obras-inacabadas-poderao-ter-prioridade-no-financiamento-federal/creche_03.jpg/@@images/image/imagem_materia' }}/>
                </ScrollView>
            </View>
            
            <View style={ styles.detailsContainer }>
                    
                    <Text style={ styles.title }> Orf. Esperança</Text>
                    <Text style={ styles.description }> Presta assistência a crianças de 06 a 8 anos</Text>

                    <View style={ styles.mapContainer }>
                        
                        <MapView
                            initialRegion={ { 
                                latitude: -27.3991974,
                                longitude: -48.4241531,  
                                latitudeDelta: 0.008,
                                longitudeDelta: 0.008,
                            } }
                            zoomEnabled={ false }
                            pitchEnabled={ false }
                            scrollEnabled={ false }
                            rotateEnabled={ false }
                            style={ styles.mapStyle }
                        >
                        
                            <Marker
                                icon={ mapMarkerImg }
                                coordinate={{
                                    latitude: -27.3991974,
                                    longitude: -48.4241531,  
                                }}
                            />

                        </MapView>

                        <View style={ styles.routesContainer }>
                            <Text style={ styles.routesText }>Ver rotas no Google Maps</Text>
                        </View>
                                        
                    </View>
            

                <View style={ styles.separator } />

                <Text style={ styles.title }> Instruções para visita </Text>
                <Text style={ styles.description }> Venha e traga amor e paciencia </Text>

                <View style={ styles.scheduleContainer }>
            
                    <View style={ [ styles.scheduleItem, styles.scheduleItemBlue ] }>
                        <Feather name="clock" size={ 40 } color="#2AB5D1" />
                        <Text style={ [ styles.scheduleText, styles.scheduleTextBlue ] }>Segunda à Sexta </Text>
                    </View>
                    
                    <View style={ [ styles.scheduleItem, styles.scheduleItemGreen ] }>
                        <Feather name="info" size={ 40 } color="#39CC83" />
                        <Text style={ [ styles.scheduleText, styles.scheduleTextGreen ] }>Atendemos fim de semana</Text>
                    </View>

                </View>

                <RectButton style={styles.contactButton} onPress={() => {}}>
                    <FontAwesome name="whatsapp" size={24} color="#FFF" />
                    <Text style={styles.contactButtonText}>Entrar em contato</Text>
                </RectButton>

            </View>{/* .detailsContainer */}

        </ScrollView>

    );
 }

    