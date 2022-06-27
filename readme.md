Introdução

![mão na massa!](https://media.giphy.com/media/uhoXlkw3svvgm94LQS/giphy.gif)

Olá, esta é uma API de um blog simples para treinar os conceitos de CRUD, orientação a objetos, arquitetura MVC, banco de dados e autentificação. Ela é resultado dos meus aprendizados até o momento no curso de Backend da {Reprograma}; Para mais informações, não hesite em entrar em contato:


Rotas


Esta aplicação tem como foco principal a manutenção de um blog de imagens e textos. Nela é possível:

- get > "/colaboradoras" > acessar todos os usuários do blog
- get > "/colaboradoras/login" > acessar usuários do blog por id
- get > "/posts" > acessar todos as postagens do blog
- get > "/post/:id" > acessar as postagens do blog por id
- get > "/posts/category" > acessar as postagens do blog por categoria

- post > "/colaboradoras" > criar um novo usuário do blog
- post > "/posts" > criar nova postagem no blog
- post > "/colaboradoras/login" > efetuar login no blog

- patch > "/post/:id" > editar postagem no blog por id
- patch > "/post/like/:id" > curtir/descurtir postagem no blog
- patch > "/post/archive/:id" > arquivar/desarquivar postagem no blog

- delete > "/colaboradoras/:id" > excluir usuário no blog por id
- delete > "/post/:id" > deletar postagem no blog por id


Neste projeto, as seguintes dependências são utilizadas:

- mongoose
- express
- cors
- bcrypt
- dotenv-safe
- jsonwebtoken
