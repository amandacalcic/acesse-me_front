import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';

import logo from '../../assets/logo.png';
import setaD from '../../assets/icons/setaD.png';
import setaE from '../../assets/icons/setaE.png';
import up from '../../assets/icons/up.png';
import down from '../../assets/icons/down.png';
import btnClose from '../../assets/icons/close.png';
import btnHands from '../../assets/icons/hands.png';

import styles from '../../styles/global';

export default function MeusPedidos({ navigation }){
    const [expanded, setExpand] = useState(false);
    const [compras, useCompras] = useState({
        codigoCompra: '0112211',
        data: [
            { id: '1', nome: 'Dipirona Sódica', quantidade: '2', valor: '10,00'},
            { id: '2', nome: 'Dipirona Sódica', quantidade: '1', valor: '10,00'},
        ]
    })

    function toggleExpand(){
        setExpand(expanded == false ? true : false)
    }

    function BackView(){
        navigation.navigate('PesquisaCompra');
    }

    function ViewBackHome(){
        navigation.navigate('Home');
    }

    function Avancar(){
        navigation.navigate('ImpressaoSenha');
    }

    return (
        <View style={styles.container}> 
            <View style={styles.cabecalho}>
                <Image source={logo} style={styles.logo} />
                <Text style={styles.titulo}>Retirar meu produto</Text>
            </View>

            <View style={styles.cabecalhoInferior}>
                <TouchableOpacity style={styles.btnVoltar} onPress={BackView}>
                    <Image source={setaE} style={styles.setaE} />
                    <Text style={styles.tituloBtnVoltar}>Voltar</Text>
                </TouchableOpacity>

                <View style={styles.breadcrumb}>
                    <Text style={styles.breadcrumbText}>Home > Retirar Produto > Código > </Text>
                    <Text style={styles.breadcrumbSelected}>Compra</Text>
                </View>
                <TouchableOpacity onPress={ViewBackHome} style={styles.backHome}>
                    <Image source={btnClose} style={styles.btnClose} />
                </TouchableOpacity>
            </View>

            <View style={styles.corpoTela}>
                <Text style={styles.subtitulo}>Meu Pedido - Cod.{compras.codigoCompra}</Text>

                <View style={styles.menu}>
                <FlatList 
                    style={styles.listVertical} 
                    data={compras.data}
                    keyExtractor={compras => compras.id}
                    renderItem={({item}) => (
                        <View style={styles.caixaPedidos}>
                            <Text style={styles.dadosPedidos}>{item.id} - {item.nome}</Text>
                            <Text style={styles.dadosPedidos}>Qt. {item.quantidade}</Text>
                            <Text style={styles.dadosPedidos}>R$ {item.valor}</Text>
                            <TouchableOpacity style={styles.drop} onPress={toggleExpand}>
                                <Text style={styles.textoDrop}>{expanded == false ? "ver mais" : "ver menos"}</Text>
                                <Image source={expanded == false ? down : up} style={styles.dropSeta} />
                            </TouchableOpacity>
                        </View>
                    )}
                />
                </View>

                <TouchableOpacity style={styles.btnAvancar} onPress={Avancar}>
                    <Text style={styles.tituloBtnAvancar}>Retirar</Text>
                    <Image source={setaD} style={styles.setaD} />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.esBtnLibras}>
                <Image source={btnHands} style={styles.btnLibras} />
            </TouchableOpacity>
        </View>
    )
}