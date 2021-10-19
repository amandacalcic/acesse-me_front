import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';

import logo from '../../assets/logo.png';
import setaE from '../../assets/icons/setaE.png';
import btnClose from '../../assets/icons/close.png';
import btnHands from '../../assets/icons/hands.png';

import styles from '../../styles/global';

export default function Promocoes({ navigation }){
    const [products , setProducts] = useState([
        { id: "1", name: "Dipirona Sódica 500mg/ml", urlImage: require('../../assets/medicamentos/dipirona.png') },
        { id: "2", name: "Dipirona Sódica", urlImage: require('../../assets/medicamentos/dipirona.png') },
        { id: "3", name: "Dipirona Sódica", urlImage: require('../../assets/medicamentos/dipirona.png') },
        { id: "4", name: "Dipirona Sódica", urlImage: require('../../assets/medicamentos/dipirona.png') },
        { id: "5", name: "Dipirona Sódica", urlImage: require('../../assets/medicamentos/dipirona.png') },
        { id: "6", name: "Dipirona Sódica", urlImage: require('../../assets/medicamentos/dipirona.png') },
        { id: "7", name: "Dipirona Sódica", urlImage: require('../../assets/medicamentos/dipirona.png') },
        { id: "8", name: "Dipirona Sódica", urlImage: require('../../assets/medicamentos/dipirona.png') }
    ]);

    function back(){
        navigation.navigate('Home');
    }

    function ViewBackHome(){
        navigation.navigate('Home');
    }

    function ViewDescricaoProduto(){
        navigation.navigate('DetalheProduto');
    }

    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <Image source={logo} style={styles.logo} />
                <Text style={styles.titulo}>Promoções</Text>
            </View>

            <View style={styles.cabecalhoInferior}>
                <TouchableOpacity style={styles.btnVoltar} onPress={back}>
                    <Image source={setaE} style={styles.setaE} />
                    <Text style={styles.tituloBtnVoltar}>Voltar</Text>
                </TouchableOpacity>

                <View style={styles.breadcrumb}>
                    <Text style={styles.breadcrumbText}>Home > </Text>
                    <Text style={styles.breadcrumbSelected}>Promoções</Text>
                </View>

                <TouchableOpacity onPress={ViewBackHome} style={styles.backHome}>
                    <Image source={btnClose} style={styles.btnClose} />
                </TouchableOpacity>
            </View>

            <View style={styles.corpoTelaProdutos}> 
                <Text style={styles.subtitulo}>Clique no produto para maiores informações</Text>

                <View style={styles.menuResultadoProdutos}>
                    <FlatList 
                        style={styles.list} 
                        data={products}
                        keyExtractor={product => product.id}
                        horizontal 
                        showsHorizontalScrollIndicator={true}
                        renderItem={( { item } ) => (
                            <TouchableOpacity onPress={ViewDescricaoProduto} style={styles.btnPromocao}>
                                <Text style={styles.idProduto}>{item.id}</Text>
                                <Image source={item.urlImage}  style={styles.imgProd} />
                                <Text style={styles.tituloPromo}>{item.name}</Text>
                            </TouchableOpacity>
                        )} 
                    />
                </View>
            </View>

            <TouchableOpacity style={styles.esBtnLibras}>
                <Image source={btnHands} style={styles.btnLibras} />
            </TouchableOpacity>
        </View>
    )
}