# dashboard-mind
Dashboard para controle de usuários cadastrados, onde há dois tipos de usuários com permissões diferentes.
<h1>Página de Login</h1>
<img src="https://files.fm/thumb_show.php?i=fm3j9pmsf" alt="My cool logo"/>

- Caso o usuário queira cadastrar um usuário para ter acesso a plataforma basta clicar em "Create Account" logo abaixo do botão

<img src="https://files.fm/thumb_show.php?i=z7mwt76wg" alt="My cool logo"/>

- Quando clicado irá nos apresentar um modal com o formulário para ser preenchido, logo após liberando para fazer o Login com Email ou CPF cadastrado

<img src="https://files.fm/thumb_show.php?i=2gsbak6fg" alt="My cool logo"/>

<h1>Usuário Comum</h1>
Usuário Comum - Um usuário comum pode apenas visualizar seus campos cadastrados e edita-los e alterar avatar.

<img src="https://files.fm/thumb_show.php?i=2326ctbe7" alt="My cool logo"/>

- Ao clicar em Edit, ele mostrará o botão de enviar os dados caso o usuário deseje que seja alterado

<img src="https://files.fm/thumb_show.php?i=ddtcvravx" alt="My cool logo"/>



<h1>Usuário Administrador</h1>
Usuário Administrador - Um usuário administrador pode visualizar uma lista onde contém todos os usuários cadastrados, nessa lista também é possível editar, deletar, adicionar um usuário novo e alterar foto de perfil de cada usuário.

<img src="https://files.fm/thumb_show.php?i=zmsd5fqjf" alt="My cool logo"/>

- Em cada linha de usuário há 3 campos onde podemos editar, deletar e alterar o avatar de um usuário

<img src="https://files.fm/thumb_show.php?i=zaj68p299" alt="My cool logo"/>

- Quando cliclamos em editar, ele abre um modal com todas as informações do usuário e caso o usuário deseje editar é só alterar os campos e clicar em enviar

<img src="https://files.fm/thumb_show.php?i=v7qkz7cjy" alt="My cool logo"/>

- Quando clicamos em Alterar um avatar, ele também abre um modal com o Identificador do usuário que selecionamos e com um campo para arrastar ou selecionar o novo avatar.

<img src="https://files.fm/thumb_show.php?i=wj5qxek2n" alt="My cool logo"/>


- Também há um botão onde o próprio Administrador pode criar um usuário novo caso deseje, quando clicamos nele ele abre novamente um modal para preenchermos o formulário

<img src="https://files.fm/thumb_show.php?i=37wpknbb3" alt="My cool logo"/>


<h2>CRUD Básico</h2>
- Back-End realizado com NodeJS, utilizando Typescript e o FrameWork Express, onde utilizei como banco Não-Relacional MySQL e também separando bem o que cada arquivo iria realizar no Back-End

- No Front-End utilizei ReactJS também com Typescript, utilizei Hooks como o useState, useContext, useEffect. Utilizei também styled-components para estilizar a Login Page, para o resto do projeto utilizei o pré processador css mais conhecido como SASS, utilizei Material Table que é uma biblioteca de listas dinâmicas e também ContextAPI para os componentes poderem passaram informações e estados entre si.
