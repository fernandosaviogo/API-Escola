import Aluno from '../models/Aluno'

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      name: 'Maria',
      sobrenome: 'Joaquina',
      email: 'maria@gmail.com',
      idade: 25,
      peso: 65,
      altura: 1.7,
    });
    res.json({novoAluno});
  }
}

export default new HomeController();
