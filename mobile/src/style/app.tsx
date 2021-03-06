import { StyleSheet , Dimensions} from 'react-native';


export default StyleSheet.create({
    container: {
      flex: 1,    
    },

    map: {
      width: Dimensions.get( 'window' ).width,
      height: Dimensions.get( 'window' ). height,
    },

    calloutContanier: {
      width: 168,
      height: 46,
      paddingHorizontal: 16,
      backgroundColor: 'rgba( 255, 255, 255, 0.8 )',
      borderRadius: 16,
      justifyContent: 'center',     
      
    },

    calloutText: {
      color: '#0089a5',
      fontSize: 14,
      fontFamily: 'Nunito_700Bold',
      textAlign: 'center',      
    },
   
    footer: {
      position: "absolute",
      left: 24,
      right: 20,
      bottom: 32,

      backgroundColor: '#fff',
      borderRadius: 20,
      height: 56,
      paddingLeft: 24,
      
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',

      elevation: 3,
    },

    footerText: {
      fontFamily: 'Nunito_700Bold',
      color: '#8fa7b3',    
    },

    createOrphanageButton: {
      width: 56,
      height: 46,
      backgroundColor: '#15c3d6',
      borderRadius: 20,

      marginRight: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },

  });