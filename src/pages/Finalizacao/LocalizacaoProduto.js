import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import logo from '../../assets/logo.png';
import setaE from '../../assets/icons/setaE.png';
import print from '../../assets/icons/print.png';
import btnHands from '../../assets/icons/hands.png';
import btnClose from '../../assets/icons/close.png';
import mapa from '../../assets/mapa/mapa.png';

import styles from '../../styles/global';

export default function LocalizacaoProduto({ navigation }){
    const _id = navigation.getParam('id');    
    const [produto , setProduto] = useState({});

    useEffect(() => {
        async function loadProducts(){
            const response = await api.get('/produto', {
                headers: { produto_id: _id }
            })
            setProduto(response.data);            
        }

        loadProducts();
    }, []);

    function BackView(){
        navigation.navigate('Finalizacao');
    }

    function printBackHome(){
        setTimeout(() => {
            navigation.navigate('Home');
        }, 5000)
    }

    function ViewBackHome(){
        navigation.navigate('Home');
    }

    function Imprimir(){
        navigation.navigate('ImpressaoSenha');
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
                    <Text style={styles.breadcrumbText}>Home > Encontrar Produto > {produto.nome} > Retirar > </Text>
                    <Text style={styles.breadcrumbSelected}>Localizar</Text>
                </View>

                <TouchableOpacity onPress={ViewBackHome} style={styles.backHome}>
                    <Image source={btnClose} style={styles.btnClose} />
                </TouchableOpacity>
            </View>

            {
                produto.setor == 'B' && (
                <View style={styles.corpoTelaLocalizacao} onPress={printBackHome()}>
                    <Text style={styles.descLocalizacao}>Esse produto deve ser retirado no balcão com um farmacêutico.</Text>
                    <Text style={styles.lembrete}>Retire sua senha e aguarde ser chamado no painel.</Text>
                    <Image source={print} style={styles.imgPrint} />
                </View>
                ) || produto.setor != 'B' && produto.setor != undefined && (
                <View style={styles.corpoTela}>                    
                    <Text style={styles.descLocalizacao}>Encontre {produto.nome} no setor {produto.setor} prateleira {produto.prateleira}. </Text>

                    <Image style={styles.mapaFarmacia} source={mapa} />

                    <TouchableOpacity style={styles.btnAvancar} onPress={ViewBackHome}>
                        <Text style={styles.tituloBtnComprar}>Finalizar</Text>
                    </TouchableOpacity>
                </View>
                )
            }

            <TouchableOpacity style={styles.esBtnLibras}>
                <Image source={btnHands} style={styles.btnLibras} />
            </TouchableOpacity>
        </View>
    )
}