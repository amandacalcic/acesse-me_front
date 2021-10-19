import React, { useState } from 'react';
import { View, AsyncStorage, Text, Image, TextInput, TouchableOpacity } from 'react-native';

import logo from '../../assets/logo.png'
import setaD from '../../assets/icons/setaD.png'
import setaE from '../../assets/icons/setaE.png'
import btnClose from '../../assets/icons/close.png'
import btnHands from '../../assets/icons/hands.png'
import barcode from '../../assets/icons/barcode.png'

import styles from '../../styles/global';

export default function Pesquisa({ navigation }){
    const [produto, setProduto] = useState('');

    async function ProcurarProduto(){
        await AsyncStorage.setItem('nomeProduto', produto);
        navigation.navigate('ResultadoBusca');
    }

    function ViewBack(){
        navigation.navigate('CancelarAcao');
    }

    function ViewBackHome(){
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}> 
            <View style={styles.cabecalho}>
                <Image source={logo} style={styles.logo} />
                <Text style={styles.titulo}>Pesquisar Produto</Text>
            </View>

            <View style={styles.cabecalhoInferior}>
                <TouchableOpacity style={styles.btnVoltar} onPress={ViewBackHome}>
                    <Image source={setaE} style={styles.setaE} />
                    <Text style={styles.tituloBtnVoltar}>Voltar</Text>
                </TouchableOpacity>

                <View style={styles.breadcrumb}>
                        <Text style={styles.breadcrumbText}>Home > </Text>
                        <Text style={styles.breadcrumbSelected}>Pesquisar Produto</Text>
                </View>

                <TouchableOpacity onPress={ViewBack} style={styles.backHome}>
                    <Image source={btnClose} style={styles.btnClose} />
                </TouchableOpacity>
            </View>

            <View style={styles.corpoTela}>
                <Text style={styles.subtitulo}>Digite o nome do remédio:</Text>

                <TextInput
                    autoCapitalize = 'none'
                    autoCorrect = {false}
                    placeholder='Consulte o produto'
                    placeholderTextColor='#999'
                    style={styles.textInput}
                    value = {produto}
                    onChangeText = {setProduto}
                />

                {/* <Text>OU</Text> */}

                {/* <TouchableOpacity style={styles.btnCodigoBarras} onPress={ProcurarProduto}>
                    <Text style={styles.tituloBtnAvancar}>Código de Barras</Text>
                    <Image source={barcode} style={styles.iconBarcode} />
                </TouchableOpacity> */}

                <TouchableOpacity style={produto == '' ? styles.btnAvancarDisabled : styles.btnAvancar} 
                    onPress={ProcurarProduto} disabled={produto == '' ? true : false}>
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