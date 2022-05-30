const express = require('express');
const app = express();
const User = require('./models/user')
//const db =  require('./models/db');   (USAMOS APENAS PARA TESTES)

app.use(express.json());

app.get('/', async (req, res)  => {
  res.send("pagina inicial");
});
app.post('/cadastrar', async (req, res)  => {
  console.log(req.body);
await User.create(req.body)
.then(() => {
  return res.json({
    erro: false,
    mesagem: "Usuario cadastrado com sucesso!"
  })
}) .catch(() => {
  return res.status(400).json({
    erro: true,
    mensagem: " Erro: Usuario não cadastrado com sucesso"
  })
})

  res.send("pagina cadastrar");
});

app.listen(8080, () => {
  console.log("server running on port 8080: http://localhost:8080")
});