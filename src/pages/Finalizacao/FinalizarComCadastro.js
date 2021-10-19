import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

import logo from '../../assets/logo.png';
import setaD from '../../assets/icons/setaD.png';
import setaE from '../../assets/icons/setaE.png';

import btnClose from '../../assets/icons/close.png';
import btnHands from '../../assets/icons/hands.png';

import checkbox from '../../assets/icons/checkbox.png';
import checked from '../../assets/icons/checked.png';

import styles from '../../styles/global';

export default function FinalizarComCadastro( { navigation }){
    const id = navigation.getParam('id');
    const nome = navigation.getParam('nome');

    const [textCPF, setTextCPF] = useState('');
    const [textConvenio, setTextConvenio] = useState('');
    const [content, setContent] = useState('cpf');
    const [check, setCheck] = useState(false);

    function BackView(){
        if(content == 'convenio')
        setContent('cpf');
        else
        navigation.navigate('Finalizacao');
    }

    function checkBoxChange(){
        setCheck(check == false ? true : false);
    }

    function ViewBackHome(){
        navigation.navigate('Home');
    }

    function Avancar(){
        if(content == 'cpf')
            setContent('convenio');
        else
            navigation.navigate('LocalizacaoProduto', { id });
    }

    return (
        <View style={styles.container}> 
            <View style={styles.cabecalho}>
                <Image source={logo} style={styles.logo} />
                <Text style={styles.titulo}>Finalizar Compra</Text>
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

            {
                content == 'cpf' && 
                (<View style={styles.corpoTela}>
                    <Text style={styles.subtituloCadastro}>Digite o seu CPF</Text>

                    <TextInput
                        autoCapitalize = 'none'
                        keyboardType='numeric'
                        autoCorrect = {false}
                        style={styles.textInput}
                        value = {textCPF}
                        onChangeText = {setTextCPF}
                        maxLength = {11}
                    />

                    <TouchableOpacity style={textCPF == '' ? styles.btnAvancarDisabled : styles.btnAvancar} 
                        onPress={Avancar} disabled={textCPF == '' ? true : false}>
                        <Text style={styles.tituloBtnAvancar}>Avançar</Text>
                        <Image source={setaD} style={styles.setaD} />
                    </TouchableOpacity>
                </View>) ||
                content == 'convenio' && 
                (<View style={styles.corpoTela}>
                    <Text style={styles.subtituloCadastro}>Número da carteirinha do convênio</Text>

                    <TextInput
                        autoCapitalize = 'none'
                        keyboardType='numeric'
                        autoCorrect = {false}
                        style={styles.textInput}
                        value = {textConvenio}
                        onChangeText = {setTextConvenio}
                    />

                    <TouchableOpacity style={styles.viewCheckBox} onPress={checkBoxChange}>
                        <View style={styles.CheckBoxButton}>
                            <Image source={check == false ? checkbox : checked } style={styles.btnCheckBox} />
                        </View>
                        <Text style={styles.descCheck}>Não possuo convênio médico</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={textConvenio != '' || check != false ? styles.btnAvancar : styles.btnAvancarDisabled} 
                        onPress={Avancar} disabled={textConvenio != '' || check != false ? false : true}>
                        <Text style={styles.tituloBtnComprar}>Finalizar</Text>
                        {/* <Image source={setaD} style={styles.setaD} /> */}
                    </TouchableOpacity>
                </View>)
            }

            <TouchableOpacity style={styles.esBtnLibras}>
                <Image source={btnHands} style={styles.btnLibras} />
            </TouchableOpacity>
        </View>
    )
}