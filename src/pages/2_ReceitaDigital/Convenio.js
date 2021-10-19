import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';

import logo from '../../assets/logo.png';
import setaE from '../../assets/icons/setaE.png';
import btnClose from '../../assets/icons/close.png';
import btnHands from '../../assets/icons/hands.png';

import styles from '../../styles/global';

export default function Convenio({navigation}){
    const [products , setProducts] = useState([
        { id: "1", name: "Bradesco", urlImage: require('../../assets/convênios/_bradescoSaude.png') },
        { id: "2", name: "Unimed", urlImage: require('../../assets/convênios/_unimed.png') },
        { id: "3", name: "Amil", urlImage: require('../../assets/convênios/_amil.png') },
        { id: "4", name: "Porto Seguro", urlImage: require('../../assets/convênios/_portoSeguro.png') },
        { id: "5", name: "Sulamérica", urlImage: require('../../assets/convênios/_sulamerica.png'), }
    ]);

    function back(){
        navigation.navigate('Home');
    }

    function ViewBackHome(){
        navigation.navigate('Home');
    }

    function ViewConvenio(){
        navigation.navigate('DadosConvenio');
    }

    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <Image source={logo} style={styles.logo} />
                <Text style={styles.titulo}>Receita Digital</Text>
            </View>

            <View style={styles.cabecalhoInferior}>
                <TouchableOpacity style={styles.btnVoltar} onPress={back}>
                    <Image source={setaE} style={styles.setaE} />
                    <Text style={styles.tituloBtnVoltar}>Voltar</Text>
                </TouchableOpacity>

                <View style={styles.breadcrumb}>
                    <Text style={styles.breadcrumbText}>Home > Receita Digital > </Text>
                    <Text style={styles.breadcrumbSelected}>Convênio</Text>
                </View>

                <TouchableOpacity onPress={ViewBackHome} style={styles.backHome}>
                    <Image source={btnClose} style={styles.btnClose} />
                </TouchableOpacity>
            </View>

            <View style={styles.corpoTelaProdutos}> 
                <Text style={styles.subtitulo}>Selecione o seu convênio</Text>

                <View style={styles.menuResultadoProdutos}>
                    <FlatList 
                        style={styles.list} 
                        data={products}
                        keyExtractor={product => product.id}
                        horizontal 
                        showsHorizontalScrollIndicator={true}
                        renderItem={( { item } ) => (
                            <TouchableOpacity onPress={ViewConvenio} style={styles.btnPromocao}>
                                <Text style={styles.idProduto}>{item.id}</Text>
                                <Image source={item.urlImage}  style={styles.imgProd} />
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