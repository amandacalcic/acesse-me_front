import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import logo from '../assets/logo.png';
import setaE from '../assets/icons/setaE.png';
import btnClose from '../assets/icons/closeBack.png';
import btnCloseRed from '../assets/icons/closeRed.png';
import btnHands from '../assets/icons/hands.png';

import styles from '../styles/global';

export default function CancelarAcao({ navigation }){
    function BackView(){
        navigation.goBack(null);
    }

    function BackHome(){
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <Image source={logo} style={styles.logo} />
                <Text style={styles.titulo}>Pesquisar Produto</Text>
            </View>

            <View style={styles.corpoTelaProdutos}> 
                <View style={styles.corpoBackHome}>
                    <TouchableOpacity onPress={BackView} style={styles.espacoBtnClose}>
                        <Image source={btnCloseRed} style={styles.btnCloseRed} />
                    </TouchableOpacity>

                    <Text style={styles.tituloBackHome}>Deseja voltar a tela inicial?</Text>

                    <View style={styles.caixaBotoesBackHome}>
                        <TouchableOpacity onPress={BackHome} style={styles.botaoBackHome}>
                            <Image source={setaE} style={styles.imagemBtnBackHome} />
                            <Text style={styles.txtBtnBackHome}>Sim, cancelar ação.</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={BackView} style={styles.botaoBackHome}>
                            <Image source={btnClose} style={styles.imagemBtnBackHome} />
                            <Text style={styles.txtBtnBackHome}>Não, continuar comprando.</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <TouchableOpacity style={styles.esBtnLibras}>
                <Image source={btnHands} style={styles.btnLibras} />
            </TouchableOpacity>
        </View>
    )
}