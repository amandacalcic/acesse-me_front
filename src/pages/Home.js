import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

import logo from '../assets/logo.png';
import btnHands from '../assets/icons/hands.png';
import soundOn from '../assets/icons/soundOn.png';
import soundOff from '../assets/icons/soundOff.png';

import styles from '../styles/global';

export default function Home({ navigation }){
    const [sound, setSound] = useState(false);

    function Sound(){
        setSound(sound == false ? true : false);
    }

    return (
        <View style={styles.container}> 
                <View style={styles.cabecalho}>
                    <Image source={logo} style={styles.logo} />
                    <Text style={styles.titulo}>HOME</Text>
                </View>

                <View>
                    <TouchableOpacity onPress={Sound} style={styles.btnSound}>
                        <Image source={sound == false ? soundOff : soundOn } style={styles.btnComand} />
                    </TouchableOpacity>
                </View>

                <View style={styles.corpoTelaInicial}>
                    <Text style={styles.subtituloInicial}>O que você precisa?</Text>
                   
                    <View style={styles.menu}>
                        <TouchableOpacity onPress={() => { navigation.navigate('PesquisaCompra')}} style={styles.btnMenu}>
                            <Text style={styles.tituloBtnMenu}>1 - Retirar o meu produto</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {navigation.navigate('Convenio')}} style={styles.btnMenu}>
                            <Text style={styles.tituloBtnMenu}>2 - Receita digital</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {navigation.navigate('PesquisaProduto')}} style={styles.btnMenu}>
                            <Text style={styles.tituloBtnMenu}>3 - Pesquisar produto</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {navigation.navigate('Promocoes')}} style={styles.btnMenu}>
                            <Text style={styles.tituloBtnMenu}>4 - Ver as promoções</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity style={styles.esBtnLibras}>
                    <Image source={btnHands} style={styles.btnLibras} />
                </TouchableOpacity>
        </View>
    );
}