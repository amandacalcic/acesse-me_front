import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

import logo from '../../assets/logo.png'
import setaD from '../../assets/icons/setaD.png'
import setaE from '../../assets/icons/setaE.png'
import btnClose from '../../assets/icons/close.png'
import btnHands from '../../assets/icons/hands.png'
import barcode from '../../assets/icons/barcode.png'

import styles from '../../styles/global';

export default function PesquisaCompra({navigation}){
    const [product, setProduct] = useState('');

    function ViewBackHome(){
        navigation.navigate('Home');
    }

    function ViewMeusPedidos(){
        navigation.navigate('MeusPedidos');
    }

    return (
        <View style={styles.container}> 
            <View style={styles.cabecalho}>
                <Image source={logo} style={styles.logo} />
                <Text style={styles.titulo}>Retirar meu produto</Text>
            </View>

            <View style={styles.cabecalhoInferior}>
                <TouchableOpacity style={styles.btnVoltar} onPress={ViewBackHome}>
                    <Image source={setaE} style={styles.setaE} />
                    <Text style={styles.tituloBtnVoltar}>Voltar</Text>
                </TouchableOpacity>

                <View style={styles.breadcrumb}>
                        <Text style={styles.breadcrumbText}>Home > Retirar o produto > </Text>
                        <Text style={styles.breadcrumbSelected}>Código</Text>
                </View>

                <TouchableOpacity onPress={ViewBackHome} style={styles.backHome}>
                    <Image source={btnClose} style={styles.btnClose} />
                </TouchableOpacity>
            </View>

            <View style={styles.corpoTela}>
                <Text style={styles.subtitulo}>Digite o código da compra realizada no site</Text>

                <TextInput
                    autoCapitalize = 'none'
                    autoCorrect = {false}
                    placeholder='Consulte a compra'
                    placeholderTextColor='#999'
                    style={styles.textInput}
                    value = {product}
                    onChangeText = {setProduct}
                />

                <TouchableOpacity style={product == '' ? styles.btnAvancarDisabled : styles.btnAvancar} 
                    onPress={ViewMeusPedidos} disabled={product == '' ? true : false}>
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