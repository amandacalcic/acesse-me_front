import React, { useState, useEffect } from 'react';
import { View, AsyncStorage, Text, Image, FlatList, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import logo from '../../assets/logo.png';
import setaE from '../../assets/icons/setaE.png';
import btnClose from '../../assets/icons/close.png';
import btnHands from '../../assets/icons/hands.png';

import styles from '../../styles/global';

export default function ResultadoBusca({ navigation }){
    const [products , setProducts] = useState([
        { prod: "" }
    ]);

    useEffect(() => {
        async function loadProducts(){
            const produto = await AsyncStorage.getItem('nomeProduto');

            const response = await api.get('/medicamentos', {
                params: { produto: produto }
            })
            
            setProducts(response.data);
        }

        loadProducts();
    }, []);

    function BackView(){
        navigation.navigate('PesquisaProduto');
    }

    function ViewBack(){
        navigation.navigate('CancelarAcao');
    }

    function ViewDescricaoProduto(_id){
        navigation.navigate('DetalheProduto', { _id });
    }

    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <Image source={logo} style={styles.logo} />
                <Text style={styles.titulo}>Pesquisar Produto</Text>
            </View>

            <View style={styles.cabecalhoInferior}>
                <TouchableOpacity style={styles.btnVoltar} onPress={BackView}>
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

            {
                produto = [] && (
                    <View style={styles.corpoTelaLocalizacao}>
                        <Text style={styles.descProdNE}>Produto Não encontrado</Text>
                        <TouchableOpacity style={styles.btnAvancar} onPress={BackView}>
                            <Image source={setaE} style={styles.setaE} />
                            <Text style={styles.tituloBtnVoltar}>Voltar</Text>
                        </TouchableOpacity>
                    </View>

                ) 
                || (
                    <View style={styles.corpoTelaProdutos}> 
                        <Text style={styles.subtitulo}>Clique no produto para maiores informações</Text>

                        <View style={styles.menuResultadoProdutos}>
                            <FlatList 
                                style={styles.list} 
                                data={products}
                                keyExtractor={product => product._id}
                                horizontal 
                                showsHorizontalScrollIndicator={true}
                                renderItem={({ item, index }) => (
                                    <TouchableOpacity onPress={() => ViewDescricaoProduto(item._id)} style={styles.btnPromocao}>
                                        <Text style={styles.idProduto}>{index}</Text>
                                        {/* <Image style={styles.imgProd} source={{ uri: item.imagem_url }} /> */}
                                        <Image style={styles.imgProd} source={require("../../assets/medicamentos/aerolin.jpeg")} />
                                        <Text style={styles.tituloPromo}>{item.nome}</Text>
                                    </TouchableOpacity>
                                )} 
                            />
                        </View>
                    </View>
                )
            }

            <TouchableOpacity style={styles.esBtnLibras}>
                <Image source={btnHands} style={styles.btnLibras} />
            </TouchableOpacity>
        </View>
    )
}