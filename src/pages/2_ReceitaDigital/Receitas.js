import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';

import logo from '../../assets/logo.png';
import setaD from '../../assets/icons/setaD.png';
import setaE from '../../assets/icons/setaE.png';
import plus from '../../assets/icons/plus.png';
import remove from '../../assets/icons/remove.png';
import btnClose from '../../assets/icons/close.png';
import btnHands from '../../assets/icons/hands.png';

import styles from '../../styles/global';

export default function Receitas({ navigation }){
    const [receita, useReceita] = useState(
        [
            { id: '1', medico: 'Dr. José Silva Moraes', especialidade: 'Endocrinologista', dataConsulta: '01/10/2019', flSelecionado: true },
            { id: '2', medico: 'Dr. José Silva Coisinha', especialidade: 'Neurologista', dataConsulta: '15/10/2019', flSelecionado: false },
            { id: '3', medico: 'Dr. José Silva Coisinha', especialidade: 'Neurologista', dataConsulta: '15/10/2019', flSelecionado: false },
            { id: '4', medico: 'Dr. José Silva Coisinha', especialidade: 'Neurologista', dataConsulta: '15/10/2019', flSelecionado: false },
            { id: '5', medico: 'Dr. José Silva Coisinha', especialidade: 'Neurologista', dataConsulta: '15/10/2019', flSelecionado: false }
        ]
    )

    function BackView(){
        navigation.navigate('Convenio');
    }

    function ViewBackHome(){
        navigation.navigate('Home');
    }

    function Avancar(){
        navigation.navigate('ReceitasSelecionadas');
    }

    function SelecionarReceita(e){
        useReceita(e.flSelecionado = receita.flSelecionado == true ? false : true)
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
                <Text style={styles.subtitulo}>Selecione a sua receita</Text>

                <View style={styles.menu}>
                <FlatList 
                    style={styles.listVertical} 
                    data={receita}
                    keyExtractor={receita => receita.id}
                    renderItem={( { item } ) => (
                        <View style={item.flSelecionado == false ? styles.caixaReceita : styles.caixaReceitaSelected}>
                            <Text style={item.flSelecionado == false ? styles.dados : styles.dadosSelected}>{item.id} - {item.medico}</Text>
                            <Text style={item.flSelecionado == false ? styles.dados : styles.dadosSelected}>{item.especialidade}</Text>
                            <Text style={item.flSelecionado == false ? styles.dados : styles.dadosSelected}>{item.dataConsulta}</Text>
                            <TouchableOpacity style={styles.plus} onPress={() => {}}>
                                <View style={styles.btnPlus}>
                                    <Text style={item.flSelecionado == false ? styles.textBtnAdicionar : styles.textBtnAdicionarSelected}>{item.flSelecionado == false ? 'adicionar' : 'remover'}</Text>
                                    <Image style={styles.btnAdicionar} source={item.flSelecionado == false ? plus : remove} />
                                </View>
                            </TouchableOpacity>
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