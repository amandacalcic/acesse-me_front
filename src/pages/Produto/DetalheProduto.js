import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import logo from '../../assets/logo.png';
import setaE from '../../assets/icons/setaE.png';
import btnClose from '../../assets/icons/close.png';
import btnHands from '../../assets/icons/hands.png';
import up from '../../assets/icons/up.png';
import down from '../../assets/icons/down.png';

import styles from '../../styles/global';

export default function DetalheProduto({ navigation }){
    const id = navigation.getParam('_id');

    const [expandedInd, setExpandInd] = useState(false);
    const [expandedCon, setExpandCon] = useState(false);
    const [description , setDescriptions] = useState({
        indicacao: "",
        contraIndicacao: ""
    });

    useEffect(() => {
        async function loadProducts(){
            const response = await api.get('/produto', {
                headers: { produto_id: id == undefined ? '5ddf2008d47b234314d7f01e' : id }
            })

            setDescriptions(response.data);
        }

        loadProducts();
    }, []);

    function toggleExpandIndications(){
        setExpandInd(expandedInd == false ? true : false);
    }

    function toggleExpandContraIndications(){
        setExpandCon(expandedCon == false ? true : false);
    }

    function BackView(){
        navigation.navigate('ResultadoBusca');
    }
    
    function ViewBackHome(){
        navigation.navigate('Home');
    }

    function ViewFinalizarProcesso(){
        navigation.navigate('Finalizacao', { id, nome: description.nome });
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
                    <Text style={styles.breadcrumbText}>Home > Pesquisar Produto > </Text>
                    <Text style={styles.breadcrumbSelected}>{description.nome}</Text>
                </View>

                <TouchableOpacity onPress={ViewBackHome} style={styles.backHome}>
                    <Image source={btnClose} style={styles.btnClose} />
                </TouchableOpacity>
            </View>

            <View style={styles.DescricaoProduto}>
                {/* <View style={styles.corpoTelaImagem}>
                    <Image source={description.urlImage}  style={styles.imagemProduto} />
                </View> */}

                <View style={styles.corpoTelaDescProd}>
                    <View style={styles.cabecalhoCorpoTela}>
                        <Text style={styles.nomeProduto}>{description.nome}</Text>
                        <Text style={styles.valorProduto}>R$ {description.valor}</Text>
                    </View>

                    <View style={styles.menuDetalheProduto}>
                        <ScrollView style={styles.containerDescricao}>
                            <View style={styles.caixaDescricao}>
                                <View>
                                    <View style={styles.caixaTituloDescricao}>
                                        <Text style={styles.tituloCaixa}>Indicado para:</Text>
                                        <TouchableOpacity style={styles.drop} onPress={toggleExpandIndications}>
                                            <Text style={styles.textoDrop}>{expandedInd == false ? "ver mais" : "ver menos"}</Text>
                                            <Image source={expandedInd == false ? down : up} style={styles.dropSeta} />
                                        </TouchableOpacity>
                                    </View>
                                    <View>
                                        { (!expandedInd && <Text style={styles.textoCaixa}>{description.indicacao.substring(0,65)+"..."}</Text>) 
                                         || (expandedInd && <Text style={styles.textoCaixa}>{description.indicacao}</Text>) } 
                                    </View>
                                </View>
                                
                            <View>
                                    <View style={styles.caixaTituloDescricao}>
                                        <Text style={styles.tituloCaixa}>Contra indicações:</Text>
                                        <TouchableOpacity style={styles.drop} onPress={toggleExpandContraIndications}>
                                            <Text style={styles.textoDrop}>{expandedCon == false ? "ver mais" : "ver menos"}</Text>
                                            <Image source={expandedCon == false ? down : up} style={styles.dropSeta} />
                                        </TouchableOpacity>
                                    </View>
                                    <View>
                                        { (!expandedCon && <Text style={styles.textoCaixa}>{description.contraIndicacao.substring(0,65)+"..."}</Text>) 
                                         || (expandedCon && <Text style={styles.textoCaixa}>{description.contraIndicacao}</Text>) } 
                                    </View>
                            </View>

                            </View>
                        </ScrollView>
                    </View>

                    <TouchableOpacity style={styles.btnComprar} onPress={ViewFinalizarProcesso}>
                        <Text style={styles.tituloBtnComprar}>Comprar</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity style={styles.esBtnLibras}>
                <Image source={btnHands} style={styles.btnLibras} />
            </TouchableOpacity>

        </View>
    )
}