import * as React from 'react';
import axios from 'axios';
import { StyleSheet, Text, TouchableOpacity, FlatList, RefreshControl } from 'react-native';
import { Curso } from '../types';
import { Card, CardItem, Body, Row, Col } from 'native-base';

const URL = 'http://localhost:3200/api/cursos';

export function CursosScreen() {

  const [lista, setLista] = React.useState([]);
  const [refresing, setRefreshing] = React.useState(false);

  const getCursos = async () => {
    setRefreshing(true);
    try {
      const response = await axios.get(URL);
      if (response.data) {
        setLista(response.data);
        setRefreshing(false);
      }
    } catch (e) {
      console.log(e);
      setRefreshing(false);
    }
  }

  React.useEffect(() => {
    getCursos();
  }, [setLista])

  return (
    <FlatList
      style={styles.lista}
      onRefresh={() => getCursos()}
      refreshing={refresing}
      data={lista}
      keyExtractor={(e: Curso, i) => 'item-' + e._id + '-' + i}
      renderItem={({ item }) => (
        <TouchableOpacity key={item._id} onPress={e => console.log(item)}>
          <Card >
            <CardItem header bordered style={styles.header}>
              <Text style={[styles.headerText, styles.title]}>{item.descricao}</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Row>
                  <Col>
                    <Text style={[styles.font, styles.label]}>Código:</Text>
                  </Col>
                  <Col>
                    <Text style={[styles.font]}>{item.codigo}</Text>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Text style={[styles.font, styles.label]}>Carga Horária:</Text>
                  </Col>
                  <Col>
                    <Text style={[styles.font]}>{item.cargaHoraria}h</Text>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Text style={[styles.font, styles.label]}>Preço:</Text>
                  </Col>
                  <Col>
                    <Text style={[styles.font]}>R$ {item.preco}</Text>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Text style={[styles.font, styles.label]}>Categoria:</Text>
                  </Col>
                  <Col>
                    <Text style={[styles.font]}>{item.categoria}</Text>
                  </Col>
                </Row>
              </Body>
            </CardItem>
          </Card>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  font: {
    fontSize: 16
  },
  label: {
    fontWeight: 'bold'
  },
  header: {
    backgroundColor: '#2f95dc'
  },
  headerText: {
    color: '#fff'
  },
  lista: {
    paddingHorizontal: '2%'
  }
});
