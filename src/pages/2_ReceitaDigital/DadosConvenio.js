import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

import logo from '../../assets/logo.png';
import setaD from '../../assets/icons/setaD.png';
import setaE from '../../assets/icons/setaE.png';
import btnClose from '../../assets/icons/close.png';

import btnHands from '../../assets/icons/hands.png';

import styles from '../../styles/global';

export default function DadosConvenio( { navigation }){
    const [text, setText] = useState('');

    function BackView(){
        navigation.navigate('Convenio');
    }

    function ViewBackHome(){
        navigation.navigate('Home');
    }

    function Avancar(){
        navigation.navigate('Receitas');
    }

    return (
        <View style={styles.container}> 
            <View style={styles.cabecalho}>
                <Image source={logo} style={styles.logo} />
                <Text style={styles.titulo}>Receita Digital</Text>
            </View>

            <View style={styles.cabecalhoInferior}>
                <TouchableOpacity style={styles.btnVoltar} onPress={BackView}>
                    <Image source={setaE} style={styles.setaE} />
                    <Text style={styles.tituloBtnVoltar}>Voltar</Text>
                </TouchableOpacity>

                <View style={styles.breadcrumb}>
                <Text style={styles.breadcrumbText}>Home > Receita Digital > Convênio > </Text>
                    <Text style={styles.breadcrumbSelected}>Carteirinha</Text>
                </View>
                <TouchableOpacity onPress={ViewBackHome} style={styles.backHome}>
                    <Image source={btnClose} style={styles.btnClose} />
                </TouchableOpacity>
            </View>

            <View style={styles.corpoTela}>
                <Text style={styles.subtituloCadastro}>Digite o número da sua carteirinha do convênio</Text>

                <TextInput
                    autoCapitalize = 'none'
                    keyboardType='numeric'
                    autoCorrect = {false}
                    style={styles.textInput}
                    value = {text}
                    onChangeText = {setText}
                />

                <TouchableOpacity style={text == '' ? styles.btnAvancarDisabled : styles.btnAvancar} 
                    onPress={Avancar} disabled={text == '' ? true : false}>
                    <Text style={styles.tituloBtnAvancar}>Avançar</Text>
                    <Image source={setaD} style={styles.setaD} />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.esBtnLibras}>
                <Image source={btnHands} style={styles.btnLibras} />
            </TouchableOpacity>
        </View>
    )
}