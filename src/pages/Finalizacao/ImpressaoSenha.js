import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import logo from '../../assets/logo.png';
import print from '../../assets/icons/print.png';

import styles from '../../styles/global';

export default function ImpressaoSenha({ navigation }){
    useEffect(() => { 
        setTimeout(() => {
            navigation.navigate('Home');
        }, 5000)
    });

    function backHome(){
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}> 
            <View style={styles.cabecalho}>
                <TouchableOpacity onPress={backHome}>
                    <Image source={logo} style={styles.logo} />
                </TouchableOpacity>
                <Text style={styles.titulo}>Finalizar Compra</Text>
            </View>            

            <View style={styles.corpoTelaLocalizacao}>
                <Text style={styles.lembrete}>Retire sua senha e aguarde ser chamado no painel.</Text>
                <Image source={print} style={styles.imgPrint} />
            </View>

        </View>
    )
}