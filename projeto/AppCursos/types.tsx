export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Cursos: undefined;
  Contato: undefined;
};

export type TabOneParamList = {
  CursosScreen: undefined;
};

export type TabTwoParamList = {
  ContatoScreen: undefined;
};

export type Curso = {
  _id : string,
  codigo: number,
  descricao: string,
  cargaHoraria: number,
  preco: number,
  categoria: number
}
