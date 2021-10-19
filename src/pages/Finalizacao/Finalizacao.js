import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import logo from '../../assets/logo.png';
import setaE from '../../assets/icons/setaE.png';

import btnHands from '../../assets/icons/hands.png';
import btnClose from '../../assets/icons/close.png';

import styles from '../../styles/global';

export default function Finalizacao( { navigation }){
    const id = navigation.getParam('id');
    const nome = navigation.getParam('nome');
    
    function BackView(){
        navigation.navigate('DetalheProduto');
    }

    function ViewBackHome(){
        navigation.navigate('Home');
    }

    function ViewFinalizarComCadastro(){
        navigation.navigate('FinalizarComCadastro', { id, nome });
    }

    function ViewFinalizarSemCadastro(){
        navigation.navigate('LocalizacaoProduto', { id });
    }

    return (
        <View style={styles.container}> 
            <View style={styles.cabecalho}>
                <Image source={logo} style={styles.logo} />
                <Text style={styles.titulo}>Finalizar a compra</Text>
            </View>

            <View style={styles.cabecalhoInferior}>
                <TouchableOpacity style={styles.btnVoltar} onPress={BackView}>
                    <Image source={setaE} style={styles.setaE} />
                    <Text style={styles.tituloBtnVoltar}>Voltar</Text>
                </TouchableOpacity>

                <View style={styles.breadcrumb}>
                    <Text style={styles.breadcrumbText}>Home > Encontrar Produto > {nome} > </Text>
                    <Text style={styles.breadcrumbSelected}>Cadastro</Text>
                </View>

                <TouchableOpacity onPress={ViewBackHome} style={styles.backHome}>
                    <Image source={btnClose} style={styles.btnClose} />
                </TouchableOpacity>
            </View>

            <View style={styles.corpoTelaFinalizacao}>
                <View style={styles.menuFinalizacao}>
                    <TouchableOpacity onPress={ViewFinalizarComCadastro} style={styles.btnMenuFinalizacao}>
                        <Text style={styles.tituloBtnMenu}>1- Finalizar compra e {'\n'}realizar o cadastro</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ViewFinalizarSemCadastro} style={styles.btnMenuFinalizacao}>
                        <Text style={styles.tituloBtnMenu}>2 - Finalizar compra sem cadastro</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity style={styles.esBtnLibras}>
                <Image source={btnHands} style={styles.btnLibras} />
            </TouchableOpacity>
        </View>
    )
}