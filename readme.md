# Introdução

![mão na massa!](https://media.giphy.com/media/uhoXlkw3svvgm94LQS/giphy.gif)

Olá, esta é uma API de um blog simples para treinar os conceitos de CRUD, orientação a objetos, arquitetura MVC, banco de dados e autentificação. Ela é resultado dos meus aprendizados até o momento no curso de Backend da {Reprograma};



# Rotas

![vamos ao mapa?](https://media.giphy.com/media/xUySTOigOUHucl3rfW/giphy.gif)

Esta aplicação tem como foco principal a manutenção de um blog de imagens e textos. Nela é possível:
<table>
<tr>
  <td>Verbo</td>
  <td>Rota</td>
  <td>Função</td>
</tr>
<tr>
  <td>get</td>
  <td>"/colaboradoras"</td>
  <td>acessar todos os usuários do blog</td>
</tr>
 <tr>
   <td>get</td>
   <td>"/colaboradoras/login"</td>
   <td>acessar usuários do blog por id</td>
  </tr>
  <tr>
    <td>get</td>
    <td>"/posts"</td>
   <td>acessar todos as postagens do blog</td>
  </tr>
  <tr>
    <td>get</td>
    <td>"/post/:id"</td>
   <td>acessar as postagens do blog por id</td>
  </tr>
  <tr>
    <td>get</td>
    <td>"/posts/category"</td>
   <td>acessar as postagens do blog por categoria</td>
  </tr>
  <tr>
    <td>post</td>
    <td>"/colaboradoras"</td>
   <td>criar um novo usuário do blog</td>
  </tr>
  <tr>
    <td>post</td>
    <td>"/posts"</td>
   <td>criar nova postagem no blog</td>
  </tr>
  <tr>
    <td>post</td>
    <td>"/colaboradoras/login"</td>
   <td>efetuar login no blog</td>
  </tr>
  <tr>
    <td>patch</td>
    <td>"/post/:id"</td>
   <td>editar postagem no blog por id</td>
  </tr>
  <tr>
    <td>patch</td>
    <td>"/post/like/:id"</td>
   <td>curtir/descurtir postagem no blog</td>
  </tr>
  <tr>
    <td>patch</td>
    <td>"/post/archive/:id"</td>
   <td>arquivar/desarquivar postagem no blog</td>
  </tr>
  <tr>
    <td>delete</td>
    <td>"/colaboradoras/:id"</td>
   <td>excluir usuário no blog por id</td>
  </tr>
  
  <tr>
    <td>delete</td>
    <td>"/post/:id"</td>
   <td>deletar postagem no blog por id</td>
  </tr>        
</table>



# Dependências

![depende, né?](https://media.giphy.com/media/4SLTGHrFJAvXGHHRLj/giphy-downsized-large.gif)

Neste projeto, as seguintes dependências são utilizadas:

- mongoose
- express
- cors
- bcrypt
- dotenv-safe
- jsonwebtoken



# Contato

![depende, né?](https://media.giphy.com/media/gHcPh3ehbRGik/giphy.gif)

Para qualquer dúvida, sugestão, elogio ou crítica, entre em contato pelo [LinkedIn]([http://example.com/](https://www.linkedin.com/in/agnes-ign%C3%A1cio-a07762125/) "LinkedIn") :3
