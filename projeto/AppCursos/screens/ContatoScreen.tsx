import * as React from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { Container, Content, Form, Item, Input, Button, Icon } from 'native-base';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
const URL = 'http://localhost:3200/api/contatos';

export function ContatoScreen() {

  const navigation = useNavigation();
  const [nome, setNome] = React.useState('');
  const [nomeAlterado, setNomeAlterado] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [emailAlterado, setEmailAlterado] = React.useState(false);
  const [assunto, setAssunto] = React.useState('');
  const [assuntoAlterado, setAssuntoAlterado] = React.useState(false);

  const isInputValid = (campo: string): boolean => {
    return campo !== undefined && campo !== null && campo !== '' && campo.length > 2
  }

  const validateEmail = (email: string): boolean => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const formValid = (): boolean => {
    return isInputValid(nome) && isInputValid(email) && validateEmail(email) && isInputValid(assunto);
  }

  const limpar = () =>{
      setNome('');
      setNomeAlterado(false);
      setAssunto('');
      setAssuntoAlterado(false);
      setEmail('');
      setEmailAlterado(false);
  }

  const enviarContato = async () => {
    try {
      if (!formValid()) {
        Alert.alert(
          "Erro",
          'Favor preencher todos os campos.',
          [
            { text: "OK" }
          ],
          { cancelable: false });
        return;
      }

      const body = { data: new Date().toISOString(), nome, email, assunto };
      await axios.post(URL, body);
      Alert.alert(
        "Sucesso",
        "Contato enviado com sucesso, aguarde nosso retorno!",
        [
          { text: "OK", onPress: () => {
            limpar();
            navigation.navigate("Cursos")
          }}
        ],
        { cancelable: false }
      );
    } catch (e) {
      console.log(e);
      Alert.alert(
        "Erro",
        'Ocorreu erro ao enviar contato, tente novamente.',
        [
          { text: "OK" }
        ],
        { cancelable: false });
    }
  }

  return (
    <Container>
      <Content padder>
        <Form style={styles.form}>
          <Item success={nomeAlterado && isInputValid(nome)} error={nomeAlterado && !isInputValid(nome)} style={styles.margin}>
            <Input placeholder='Digite o nome da pessoa interessada' value={nome}
              onChangeText={texto => {
                setNome(texto);
                setNomeAlterado(true)
              }}
            />
            {nomeAlterado && isInputValid(nome) && <Icon name='checkmark-circle' />}
            {nomeAlterado && !isInputValid(nome) && <Icon name='close-circle' />}
          </Item>
          <Item success={emailAlterado && isInputValid(email) && validateEmail(email)} error={emailAlterado && (!isInputValid(email) || !validateEmail(email))} style={styles.margin}>
            <Input placeholder='Digite o email para que possamos responde-lo' value={email}
              onChangeText={texto => {
                setEmail(texto);
                setEmailAlterado(true)
              }}
            />
            {emailAlterado && isInputValid(email) && validateEmail(email) && <Icon name='checkmark-circle' />}
            {emailAlterado && (!isInputValid(email) || !validateEmail(email)) && <Icon name='close-circle' />}
          </Item>
          <Item success={assuntoAlterado && isInputValid(assunto)} error={assuntoAlterado && !isInputValid(assunto)} style={[styles.margin, styles.area]}>
            <Input placeholder='Digite o assunto do contato' value={assunto}
              onChangeText={texto => {
                setAssunto(texto);
                setAssuntoAlterado(true)
              }}
            />
            {assuntoAlterado && isInputValid(assunto) && <Icon name='checkmark-circle' />}
            {assuntoAlterado && !isInputValid(assunto) && <Icon name='close-circle' />}
          </Item>
          <Button iconLeft full rounded style={styles.marginButton} disabled={!formValid()}
            onPress={enviarContato}>
            <Icon name='home' />
            <Text style={[styles.buttonText, !formValid() && styles.buttonDisabled]}>Enviar</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: '10%'
  },
  margin: {
    marginTop: '8%'
  },
  marginButton: {
    marginTop: '12%'
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    marginHorizontal: '2%'
  },
  buttonDisabled: {
    color: '#aaa'
  },
  area: {
    height: '25%'
  }
});
