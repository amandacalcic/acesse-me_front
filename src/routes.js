import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Home from './pages/Home'
import CancelarAcao from './pages/CancelarAcao'

//1 - Retirada Produto
import PesquisaCompra from './pages/1_RetiradaProduto/PesquisaCompra'
import MeusPedidos from './pages/1_RetiradaProduto/MeusPedidos'

//2 - Receita Digital
import Convenio from './pages/2_ReceitaDigital/Convenio'
import DadosConvenio from './pages/2_ReceitaDigital/DadosConvenio'
import Receitas from './pages/2_ReceitaDigital/Receitas'
import ReceitasSelecionadas from './pages/2_ReceitaDigital/ReceitasSelecionadas'

//3 - Pesquisar Produto
import PesquisaProduto from './pages/3_PesquisaProduto/Pesquisa'
import ResultadoBusca from './pages/3_PesquisaProduto/ResultadoBusca'

//4 - Promoções
import Promocoes from './pages/4_Promocoes/Promocoes'

//Finalizacao
import Finalizacao from './pages/Finalizacao/Finalizacao'
import FinalizarComCadastro from './pages/Finalizacao/FinalizarComCadastro'
import LocalizacaoProduto from './pages/Finalizacao/LocalizacaoProduto'
import ImpressaoSenha from './pages/Finalizacao/ImpressaoSenha'

//Produto
import DetalheProduto from './pages/Produto/DetalheProduto'

const Routes = createAppContainer(
    createSwitchNavigator({
        Home,
        CancelarAcao,
        PesquisaCompra,
        MeusPedidos,
        Convenio,
        DadosConvenio,
        Receitas,
        ReceitasSelecionadas,
        PesquisaProduto,
        ResultadoBusca,
        Promocoes,
        DetalheProduto,
        Finalizacao,
        FinalizarComCadastro,
        LocalizacaoProduto,
        ImpressaoSenha,
    })
)

export default Routes