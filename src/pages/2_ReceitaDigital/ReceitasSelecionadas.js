import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';

import logo from '../../assets/logo.png';
import setaD from '../../assets/icons/setaD.png';
import setaE from '../../assets/icons/setaE.png';

import btnClose from '../../assets/icons/close.png';
import btnHands from '../../assets/icons/hands.png';

import styles from '../../styles/global';

export default function ReceitasSelecionadas({ navigation }){
    const [receitas, useReceitas] = useState({
        paciente: 'Antonio Fernandes Ribeiro',
        data: [
            { id: '1', medico: 'Dr. José Silva Moraes', especialidade: 'Endocrinologista', dataConsulta: '01/10/2019', descReceita: 'Toma esse medicamento que você fica ótimo' },
            { id: '2', medico: 'Dr. José Silva Coisinha', especialidade: 'Neurologista', dataConsulta: '15/10/2019', descReceita: 'Toma esse medicamento que você fica ótimo' }
        ]
    })

    function BackView(){
        navigation.navigate('Receitas');
    }

    function ViewBackHome(){
        navigation.navigate('Home');
    }

    function Avancar(){
        navigation.navigate('LocalizacaoProduto');
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
                    <Text style={styles.breadcrumbText}>Home > Receita Digital > Convênio > Carteirinha > </Text>
                    <Text style={styles.breadcrumbSelected}>Receitas</Text>
                </View>
                <TouchableOpacity onPress={ViewBackHome} style={styles.backHome}>
                    <Image source={btnClose} style={styles.btnClose} />
                </TouchableOpacity>
            </View>

            <View style={styles.corpoTela}>
                <Text style={styles.subtitulo}>Receitas Selecionadas</Text>

                <View style={styles.menu}>
                <FlatList 
                    style={styles.listVertical} 
                    data={receitas.data}
                    keyExtractor={receita => receita.id}
                    renderItem={({item}) => (
                        <View style={styles.caixaDescricaoReceita}>
                            <View style={styles.cabecalhoDescricaoReceita}>
                                <Text style={styles.dadosReceita}>{item.especialidade}</Text>
                                <Text style={styles.dadosReceita}>{item.dataConsulta}</Text>
                            </View>
                            <Text style={styles.dadosReceita}>{item.medico}</Text>
                            <Text style={styles.descricaoReceita}>{item.descReceita}</Text>
                        </View>
                    )}
                />
                </View>

                <TouchableOpacity style={styles.btnAvancar} onPress={Avancar}>
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