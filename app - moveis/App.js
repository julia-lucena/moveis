//Importação
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { useState } from 'react'
import Botao from './src/components/Botao'

//Definição
const App = () => {

  const [txtPeso, setPeso] = useState('')
  const [txtAltura, setAltura] = useState('')
  const [txtImc, setIMC] = useState('')

  const calcularIMC = () => {

    console.log("Entrou na função calcularIMC")

    let peso = parseFloat(txtPeso)
    let altura = parseFloat(txtAltura)

    //IMC = peso / (altura * altura)
    let resultado = peso / (altura * altura)

    setIMC("O seu IMC é: " + resultado.toFixed(1))
  }

  const limpar = () => {
    setAltura('')
    setPeso('')
    setIMC('')
  }

  return (
    <View style={estilos.view}>

      <View style={estilos.cImage}>
        <Image style={estilos.imagem} source={{ uri: 'https://hips.hearstapps.com/hmg-prod/images/1076/bmi-myths-main-1515702962.jpg' }} />
      </View>

      <View style={estilos.cInput}>

        <Text style={estilos.texto}>Peso:</Text>
        <TextInput style={estilos.textInput} value={txtPeso} onChangeText={setPeso} />

        <Text style={estilos.texto}>Altura:</Text>
        <TextInput style={estilos.textInput} value={txtAltura} onChangeText={setAltura} />
      </View>

      <View style={estilos.cBotoes}>
        <Botao texto="Calcular" funcao={calcularIMC} />

        <Botao texto="Limpar" funcao={limpar} />

        <Text style={estilos.resultado}>{txtImc}</Text>
      </View>
    </View>
  )
}

const estilos = StyleSheet.create({
  imagem: {
    height: '100%',
    width: '65%'
  },
  view: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
  },
  texto: {
    fontSize: 36,
    color: '#F15025'

  },
  textInput: {
    fontSize: 36,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#FFFFFF',
    color: '#F15025'
  },
  cImage: {
    flex: 0.25,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cInput: {
    flex: 0.5,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10
  },
  cBotoes: {
    flex: 0.25,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10

  },
  cIcones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  resultado: {
    fontSize: 24,
    color: '#F15025'
  }
})

//Exportação
export default App