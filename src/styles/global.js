import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ece9e9',
        color: '#2c2c3a'
        // fontFamily: 'Lato-Light',
    },

    // ----------------------------------- Cabeçalho -----------------------------------

    cabecalho: {
        flex: 1,
        zIndex: 100,
        flexDirection: 'row',
        alignItems: 'center',
        maxHeight: 100,
        justifyContent: 'space-between',
        backgroundColor: '#2c2c3a',
        paddingTop: 20,
        // paddingLeft: 10
    },

    logo:{
        width: 150,
        height: 60,
        resizeMode: 'contain'
    },

    titulo: {
        fontSize: 25,
        marginRight: 40,
        color: '#FFF',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },

    // ----------------------------------- Cabeçalho inferior -----------------------------------

    cabecalhoInferior:{
        flex: 1,
        zIndex: 100,
        position: 'absolute',
        flexDirection: 'row',
        marginTop: 110,
        marginLeft: 25
    },

    breadcrumb: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 11,
        marginLeft: 10
    },

    breadcrumbText:{
        fontSize: 15,
        color: '#2C2C3A'
    },

    breadcrumbSelected: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#2C2C3A',
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
        textDecorationColor: '#2C2C3A'
    },

    // ----------------------------------- Corpo da tela -----------------------------------

    corpoTelaInicial: {
        flex: 1,
        alignItems: 'center',
        marginTop: 140,
        marginBottom: 100
    },

    corpoTela: {
        flex: 1,
        alignItems: 'center',
        marginTop: 200,
        marginBottom: 150
    },

    corpoTelaLocalizacao:{
        flex: 1,
        alignItems: 'center',
        marginTop: 200,
        marginLeft: 110,
        marginRight: 110,
        marginBottom: 150
    },

    corpoTelaProdutos: {
        flex: 1,
        alignItems: 'center',
        marginTop: 200,
        marginBottom: 200
    },

    corpoTelaDescProd: {
        flex: 1,
        alignItems: 'center',
        marginTop: 120,
        marginBottom: 150
    },

    corpoTelaFinalizacao:{
        flex: 1,
        alignItems: 'center',
        marginTop: 130,
        marginBottom: 150
    },

    subtituloInicial: {
        fontWeight: 'bold',
        color: '#2c2c3a',
        fontSize: 60,
        marginBottom: 40,
        textAlign: 'left'
    },

    subtitulo: {
        fontWeight: 'bold',
        color: '#2c2c3a',
        fontSize: 38,
        marginTop: -5,
        marginBottom: 10,
        textAlign: 'left'
    },

    subtituloCadastro:{
        fontWeight: 'bold',
        color: '#2c2c3a',
        fontSize: 38,
        marginTop: 15,
        marginBottom: 15,
        textAlign: 'left'
    },

    lembrete: {
        fontWeight: 'bold',
        color: '#2c2c3a',
        marginTop: 20,
        fontSize: 30,
        marginLeft: 20,
        textAlign: 'center'
    },

    descLocalizacao: {
        fontWeight: 'bold',
        fontSize: 35,
        marginTop: -35,
        marginLeft: 20,
        color: '#2c2c3a',
        textAlign: 'center'
    },

    descProdNE:{
        fontWeight: 'bold',
        fontSize: 35,
        marginTop: -35,
        marginLeft: 20,
        color: '#2c2c3a',
        textAlign: 'center'
    },

    // ----------------------------------- Caixa Receitas -----------------------------------

    caixaReceitaSelected:{
        backgroundColor: '#2c2c3a',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#2c2c3a',
        borderRadius: 15,
        marginTop: 10,
        paddingHorizontal: 20,
        paddingVertical: 8
    },

    caixaReceita:{
        backgroundColor: '#FFF',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#2c2c3a',
        borderRadius: 15,
        marginTop: 10,
        paddingHorizontal: 20,
        paddingVertical: 8
    },
    
    dados:{
        width: 200,
        fontWeight: "700",
        color: '#2c2c3a',
        fontSize: 15,
        marginTop: 10,
        marginRight: 15,
    },

    dadosSelected:{
        width: 200,
        fontWeight: "700",
        color: '#ECE9E9',
        fontSize: 15,
        marginTop: 10,
        marginRight: 15,
    },

    plus:{
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },

    btnPlus:{
        alignItems: 'center',
    },

    textBtnAdicionar:{
        fontSize: 12,
        color: '#2c2c3a',
        textDecorationLine: 'underline',
        marginBottom: 1
    },

    textBtnAdicionarSelected:{
        fontSize: 12,
        color: '#ECE9E9',
        textDecorationLine: 'underline',
        marginBottom: 1
    },

    btnAdicionar:{
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },

    // ----------------------------------- Detalhe Receita -----------------------------------

    caixaDescricaoReceita:{
        backgroundColor: '#F6F5F5',
        paddingVertical: 20,
        paddingHorizontal: 40,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#707070',
        marginBottom: 10
    },

    cabecalhoDescricaoReceita:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

    dadosReceita:{
        fontWeight: "700",
        color: '#2c2c3a',
        fontSize: 17,
        marginBottom: 3,
        // marginRight: 15,
    },

    descricaoReceita:{
        color: '#2c2c3a',
        fontSize: 14,
        marginTop: 20,
    },

    caixaPedidos:{
        backgroundColor: '#FFF',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#2c2c3a',
        borderRadius: 15,
        marginTop: 10,
        paddingHorizontal: 20,
        paddingVertical: 13
    },

    dadosPedidos:{
        width: 200,
        fontWeight: "700",
        color: '#2c2c3a',
        fontSize: 15,
        marginTop: 2,
        marginRight: 15,
    },

    // ----------------------------------- Menu botoes -----------------------------------

    menu: {
        flex: 1,
        width: '85%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginRight: 20,
        marginBottom: 40
    },

    menuResultadoProdutos: {
        flex: 1,
        width: '85%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 75,
        marginRight: 20,
        marginBottom: 40
    },

    menuProdutos: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop: 20,
    },

    menuFinalizacao:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    btnMenu: {
        width: '45%',
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2c2c3a',
        borderRadius: 20,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 20,
        marginBottom: 25
    },

    btnMenuFinalizacao: {
        width: 400,
        height: 85,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2c2c3a',
        borderRadius: 18,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 1,
        paddingHorizontal: 20,
        marginBottom: 25
    },

    tituloBtnMenu: {
        fontSize: 23,
        color: '#FFF',
        textAlign: 'center'
    },

    // ----------------------------------- Campo input -----------------------------------

    textInput: {
        height: 50,
        width: '65%',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#2C2C3A',
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 15,
        paddingHorizontal: 15

    },

    viewCheckBox: {
        width: '65%',
        flexDirection: 'row',
        textAlign: 'left',
        marginLeft: 15,
        marginBottom: -15
    },

    CheckBoxButton:{
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 1,
    },

    btnCheckBox:{
        width: 17,
        height: 17,
        resizeMode: 'contain',
    },

    descCheck:{
        marginLeft: 5,
        fontSize: 15
    },

    // ----------------------------------- Listagem Receitas -----------------------------------

    listVertical:{
        height: 200,
        marginTop: 50,
        marginLeft: 80,
        marginRight: 80,
        marginBottom: 20
    },

    // ----------------------------------- Listagem Produtos -----------------------------------

    list:{
        width:'20%',
        height: 200,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 20
    },

    btnPromocao:{
        flex: 1,
        width: 170,
        height: 170,
        maxHeight: 170,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        elevation: 5,
        marginRight: 15,
        padding: 10,
        marginBottom: 10
    },

    idProduto:{
        zIndex: 100,
        fontSize: 18,
        marginLeft: -120
    },

    imgProd: {
        width: 110,
        height: 110,
        marginTop: -15,
        marginBottom: 5,
        resizeMode: 'contain'
    },

    tituloPromo:{
        flex:1,
        textAlign: 'center',
        color: '#2c2c3a',
        fontSize: 15,
    },

    // ----------------------------------- Dados Produto -----------------------------------

    DescricaoProduto:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // marginHorizontal: 20,
    },

    menuDetalheProduto:{
        flex: 1,
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 70,
        marginBottom: 100
    },

    cabecalhoCorpoTela:{
        flex: 1,
        flexDirection: 'row',
    },

    nomeProduto: {
        width: '40%',
        fontWeight: 'bold',
        color: '#2c2c3a',
        fontSize: 38,
        textAlign: 'left'
    },

    valorProduto:{
        fontWeight: 'bold',
        color: '#2c2c3a',
        fontSize: 30,
        marginTop: 8,
        marginLeft: 80,
        textAlign: 'right'
    },

    // corpoTelaImagem:{

    // },

    // imagemProduto:{
    //     width: 150,
    //     height: 200,
    //     resizeMode: 'contain'
    // },

    containerDescricao:{
        height: 280,
        marginLeft: 200,
        marginRight: 200,
        borderWidth: 1,
        borderColor: '#707070',
        borderRadius: 15,
    },

    caixaDescricao:{
        paddingHorizontal: 30,
        paddingVertical: 30
    },

    caixaTituloDescricao:{
        flex: 1,
        flexDirection: 'row',
    },

    tituloCaixa:{
        fontWeight: 'bold',
        color: '#2c2c3a',
        fontSize: 20,
    },

    textoCaixa:{
        color: '#2c2c3a',
        fontSize: 14,
        marginTop: 20,
        marginBottom: 30,
        textAlign: 'justify',
        lineHeight: 17
    },

    // ----------------------------------- Botões -----------------------------------

    btnVoltar: {
        width: '11%',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2c2c3a',
        borderRadius: 5
    },

    tituloBtnVoltar: {
        position: 'absolute',
        fontSize: 18,
        color: '#FFF',
        right: 15,
        paddingBottom: 1,
    },

    setaE:{
        position: 'absolute',
        width: 20,
        height: 20,
        resizeMode: 'contain',
        left: 15
    },

    backHome:{
        marginTop: 3,
        marginRight: 20
    },

    btnClose:{
        width: 40,
        height: 40,
        resizeMode: 'contain'
    },

    btnSound:{
        position: 'absolute',
        marginTop: 20,
        right: 25
    },
    
    btnComand:{
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },

    btnCodigoBarras:{
        width: '20%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2c2c3a',
        borderRadius: 5,
        elevation: 5,
        marginTop: 15,
    },

    iconBarcode:{
        backgroundColor: '#FFF',
        position: 'absolute',
        width: 22,
        height: 18,
        right: 20,
        resizeMode: 'contain',
    },

    btnAvancar: {
        width: '15%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2c2c3a',
        borderRadius: 5,
        elevation: 5,
        marginTop: 40,
    },

    btnAvancarDisabled:{
        width: '15%',
        height: 50,
        color: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#bcbcc2',
        borderWidth: 1,
        borderColor: '#bcbcc2',
        borderRadius: 5,
        marginTop: 40
    },

    tituloBtnAvancar: {
        position: 'absolute',
        fontSize: 17,
        color: '#FFF',
        left: 20
    },

    setaD:{
        position: 'absolute',
        width: 20,
        height: 20,
        resizeMode: 'contain',
        right: 20
    },

    drop:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        // marginTop: 5,
    },

    textoDrop:{
        textDecorationLine: 'underline',
        marginRight: 5,
    },

    dropSeta:{
        width: 17,
        height: 10,
        // marginTop: -10,
    },

    btnComprar: {
        width: '15%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2c2c3a',
        borderRadius: 5,
        elevation: 5,
        marginTop: 15,
    },

    tituloBtnComprar: {
        fontSize: 17,
        color: '#FFF',
    },

    imgPrint:{
        height: 200,
        width: 200,
        marginTop: 40,
        resizeMode: 'contain'
    },

    mapaFarmacia: {
        width: 380,
        height: 230,
        borderColor: '#000',
        borderWidth: 1,
        backgroundColor: '#FFF',
        marginTop: 30,
    },

    esBtnLibras: {
        position: 'absolute',
        right: 30,
        marginTop: 650,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 1,
    },

    btnLibras: {
        height: 120,
        width: 120,
        resizeMode: 'contain'
    },

    btnVoz:{
        flex: 1,
        position: 'absolute',
        backgroundColor: '#b59953',
        width: 50,
        height: 50,
        borderRadius: 50,
        marginTop: 150,
        right: 20
    },

    // ----------------------------------- Back Home -----------------------------------

    corpoBackHome:{
        width: '60%',
        height: '90%',
        alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#ece9e9',
        borderRadius: 20,
        borderColor: '#707070',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 1,
    },

    espacoBtnClose:{
        position: 'absolute',
        marginTop: 10,
        right: 30
    },

    btnCloseRed:{
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },

    tituloBackHome:{
        fontWeight: 'bold',
        color: '#2c2c3a',
        fontSize: 25,
        marginTop: 50,
        // marginBottom: 10,
        textAlign: 'left'
    },

    caixaBotoesBackHome:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    botaoBackHome:{
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2c2c3a',
        borderRadius: 5,
        elevation: 5,
        marginBottom: 10,
    },

    txtBtnBackHome:{
        position: 'absolute',
        fontSize: 17,
        color: '#FFF',
        left: 45
    },

    imagemBtnBackHome: {
        position: 'absolute',
        width: 20,
        height: 20,
        resizeMode: 'contain',
        left: 15
    }

});

export default styles;