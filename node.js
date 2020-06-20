var http = require('http');
var server = http.createServer(function(req,res){
    var url = req.url;
    console.log(url);

    switch(url){

        case '/index':
        res.end(`
            <!DOCTYPE html>
            <html>
            <style>
            *{
                margin: 0;
                padding: 0;
            }

            body{
                font-size: 1em;
                font-family: "Trebuchet MS", Helvetica, sans-serif;
                background: #e6e6e6;
            }

            /* layout */

            #area-cabecalho{
                background: #2C76D0;
                padding: 15px;
                text-align: center;
            }
            #area-logo, #area-menu {
                padding: 10px;
            }

            #area-principal{
                width: 920px;
                margin:0 auto;
                padding: 10px;
            }

            #area-principal-curso{
                padding: 10px;
                float: left;
            }

            #area-postagens{
                width: 660px;
                float: left;
                /*padding: 5px;*/
            }

            #area-postagens-apresentacao{
                width: 860px;
                float: left;
                /*padding: 5px;*/
            }

            #area-postagens-curso{
                width: 850px;
                float: left;
                /*padding: 5px;*/
            }

            #area-lateral-curso{
                width: 550px;
                padding: 20px;
                float: left;
            }

            #area-lateral{
                width: 240px;
                float: right;
            }

            #img-apresentacao{
                justify-content: center;
                width:620px;
            }

            .postagem{
                padding: 20px;
                margin-bottom: 20px;
                background: white;
            }

            .conteudo-lateral{
                background: white;
                padding: 10px;
                margin-bottom: 20px;
            }

            .postagem-lateral{
                font-size: 0.8em;
                padding: 5px;
                /*border-bottom: 1px dotted #ccc;*/
            }

            #area-rodape{
                clear: both;
                text-align: center;
                padding: 15px;
                background: #ccc;
            }
            /* formatação menu */

            a{
                text-decoration: none;
            }

            a:link, a:visited{
                color: #2C76D0;
            }

            a:hover{
                text-decoration: underline;
            }


            #area-cabecalho a:link, #area-cabecalho a:visited{
                color: #fff;
                padding: 8px 12px;
            }

            #area-cabecalho a:hover{
                color: #2C76D0;
                background: #fff;
                text-decoration: none;
            }

            #account-data {
              margin: 30px 0;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              height: 200px;
          }

          /* formatações gerais */

          h1{
            color: #4e4e4e;
            font-size: 2,5em;
        }

        h2{
            color: #2C76D0;
        }

        h3{
            color: #565656;
            background: #ccc;
            padding: 5px;
        }

        .branco{
            color: white;
        }

        .data-postagem{
            font-size: 0.8em;
            border-bottom: 1px solid #2C76D0;
            padding-bottom: 10px;
            margin-bottom: 10px;
            display: block;
        }
        </style>
        <head>
        <title>AprendaMais</title>
        <meta charset="utf-8">
        </head>
        <body>


        <script>
        function mostrarMaisCursos(id){
            id.innerHTML = "<br>Lista de cursos:<ul><li>Curso C</li><li>Curso Python</li></ul>"
            href_cursos.innerHTML = "Aprenda +"
        }

        </script>
        <div id="area-cabecalho">
        <div id="area-logo">
        <h1>Aprenda<span class="branco">Mais+</span></h1>
        </div>
        <div id="area-menu">
        <a href="index">Home</a>
        <a href="cursos">Cursos</a>
        <a href="">Minha conta</a>
        <a href="">Formulario</a>
        </div>
        </div>
        <div id="area-principal">
        <div id="area-postagens-apresentacao">
        <!-- inicio das postagens-->
        <div class="postagem">
        <h2>Seja bem vindo ao portal AprendaMais+</h2>
        <br>
        <img class="img-apresentacao" src="https://github.com/ReniSteffenon/DevWeb_GA/blob/master/Imagens/img_portal_index.jpg?raw=true">
        <p>
        O AprendaMais+ é uma plataforma gratuita de cursos online, aqui você podera entrar os mais variados cursos relacionados a tecnologia da informação.
        </p>
        </div> <!-- fim das postagens-->
        <!-- inicio das postagens-->
        </div>

        <div id="area-postagens-apresentacao">
        <!-- inicio das postagens-->
        <div class="postagem">
        <h2 onmouseover="mostrarMaisCursos(cursos)">Diversos cursos gratuitos</h2>
        <br>
        <img class="img-apresentacao" src="https://github.com/ReniSteffenon/DevWeb_GA/blob/master/Imagens/img_portal_cursos.png?raw=true">
        <p>
        O AprendaMais+ é uma plataforma gratuita de cursos online, aqui você podera entrar os mais variados cursos relacionados a tecnologia da informação.
        </p>
        <p id='cursos'>

        </p>
        <a id="href_cursos" href="cursos.html"></a>
        </div> <!-- fim das postagens-->
        <!-- inicio das postagens-->
        </div>

        <div id="area-rodape">
        Todos os direitos reservados
        </div>
        </div>

        </body>
        </html>      
        `);
break;

case '/cursos': 
res.end(`
    <!DOCTYPE html>
    <html lang="pt-br">
    <style>
    *{
        margin: 0;
        padding: 0;
    }

    body{
        font-size: 1em;
        font-family: "Trebuchet MS", Helvetica, sans-serif;
        background: #e6e6e6;
    }

    /* layout */

    #area-cabecalho{
        background: #2C76D0;
        padding: 15px;
        text-align: center;
    }
    #area-logo, #area-menu {
        padding: 10px;
    }

    #area-principal{
        width: 920px;
        margin:0 auto;
        padding: 10px;
    }

    #area-principal-curso{
        padding: 10px;
        float: left;
    }

    #area-postagens{
        width: 660px;
        float: left;
        /*padding: 5px;*/
    }

    #area-postagens-apresentacao{
        width: 860px;
        float: left;
        /*padding: 5px;*/
    }

    #area-postagens-curso{
        width: 850px;
        float: left;
        /*padding: 5px;*/
    }

    #area-lateral-curso{
        width: 550px;
        padding: 20px;
        float: left;
    }

    #area-lateral{
        width: 240px;
        float: right;
    }

    #img-apresentacao{
        justify-content: center;
        width:620px;
    }

    .postagem{
        padding: 20px;
        margin-bottom: 20px;
        background: white;
    }

    .conteudo-lateral{
        background: white;
        padding: 10px;
        margin-bottom: 20px;
    }

    .postagem-lateral{
        font-size: 0.8em;
        padding: 5px;
        /*border-bottom: 1px dotted #ccc;*/
    }

    #area-rodape{
        clear: both;
        text-align: center;
        padding: 15px;
        background: #ccc;
    }
    /* formatação menu */

    a{
        text-decoration: none;
    }

    a:link, a:visited{
        color: #2C76D0;
    }

    a:hover{
        text-decoration: underline;
    }


    #area-cabecalho a:link, #area-cabecalho a:visited{
        color: #fff;
        padding: 8px 12px;
    }

    #area-cabecalho a:hover{
        color: #2C76D0;
        background: #fff;
        text-decoration: none;
    }

    #account-data {
      margin: 30px 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 200px;
  }

  /* formatações gerais */

  h1{
    color: #4e4e4e;
    font-size: 2,5em;
}

h2{
    color: #2C76D0;
}

h3{
    color: #565656;
    background: #ccc;
    padding: 5px;
}

.branco{
    color: white;
}

.data-postagem{
    font-size: 0.8em;
    border-bottom: 1px solid #2C76D0;
    padding-bottom: 10px;
    margin-bottom: 10px;
    display: block;
}
</style>
<head>
    <title>AprendaMais</title>
    <meta charset="utf-8">
</head>
<body>


    <script>
        function mostrarMaisC1(id){
            id.innerHTML = "Curso pratico de desenvolvimento de programas em C. Aprenda e domine a programação de computadores usando a linguagem C."
            href_curso_c1.innerHTML = "Aprenda +"
        }

        function mostrarMaisPython1(id){
            id.innerHTML = "Aprenda Python do basico ao avançado com expressões Lambdas, iteradores, geradores, orientação a objetos e muito mais!"
            href_curso_python1.innerHTML = "Aprenda +"
        }

    </script>
    <div id="area-cabecalho">
        <div id="area-logo">
            <h1>Aprenda<span class="branco">Mais+</span></h1>
        </div>
        <div id="area-menu">
            <a href="index">Home</a>
            <a href="cursos">Cursos</a>
            <a href="">Minha conta</a>
            <a href="">Formulario</a>
        </div>
    </div>
    <div id="area-principal">
        <div id="area-postagens">
            <!-- inicio das postagens-->
            <div class="postagem">
                <h2 onmouseover="mostrarMaisC1(curso_c1)">Programação em C</h2>
                <span class="data-postagem">postado 20 janeiro 2020</span>
                <img width="620px" src="https://github.com/ReniSteffenon/DevWeb_GA/blob/master/Imagens/img_curso_c1.jpg?raw=true">
                <p id='curso_c1'>
                    
                </p>
                <a id="href_curso_c1" href="curso_c1"></a>
            </div> <!-- fim das postagens-->
            <!-- inicio das postagens-->
        </div>
        <div id="area-lateral">
            <!-- inicio conteúdo lateral-->
            <div class="conteudo-lateral">
                <h3>Autores</h3>
                <div class="postagem-lateral">
                    <p>
                        Reni A Steffenon
                    </p>
                    <p>
                        Augusto Pasini
                    </p>
                    
                </div>
            </div><!-- inicio conteúdo lateral-->
        </div>
        <div id="area-postagens">
            <!-- inicio das postagens-->
            <div class="postagem">
                <h2 onmouseover="mostrarMaisPython1(curso_python1)">Programação em Python</h2>
                <span class="data-postagem">postado 20 janeiro 2020</span>
                <img width="620px" src="https://github.com/ReniSteffenon/DevWeb_GA/blob/master/Imagens/img_curso_python1.jpg?raw=true">
                <p id='curso_python1'>
                    
                </p>
                <a id="href_curso_python1" href="curso_python1"></a>
            </div> <!-- fim das postagens-->
            <!-- inicio das postagens-->
        </div>

        
        <div id="area-rodape">
            Todos os direitos reservados
        </div>
    </div>

</body>
</html>
`);
break;

case '/curso_python1':
    res.end(`
    <!DOCTYPE html>
    <html lang="pt-br">
    <style>
    *{
        margin: 0;
        padding: 0;
    }

    body{
        font-size: 1em;
        font-family: "Trebuchet MS", Helvetica, sans-serif;
        background: #e6e6e6;
    }

    /* layout */

    #area-cabecalho{
        background: #2C76D0;
        padding: 15px;
        text-align: center;
    }
    #area-logo, #area-menu {
        padding: 10px;
    }

    #area-principal{
        width: 920px;
        margin:0 auto;
        padding: 10px;
    }

    #area-principal-curso{
        padding: 10px;
        float: left;
    }

    #area-postagens{
        width: 660px;
        float: left;
        /*padding: 5px;*/
    }

    #area-postagens-apresentacao{
        width: 860px;
        float: left;
        /*padding: 5px;*/
    }

    #area-postagens-curso{
        width: 850px;
        float: left;
        /*padding: 5px;*/
    }

    #area-lateral-curso{
        width: 550px;
        padding: 20px;
        float: left;
    }

    #area-lateral{
        width: 240px;
        float: right;
    }

    #img-apresentacao{
        justify-content: center;
        width:620px;
    }

    .postagem{
        padding: 20px;
        margin-bottom: 20px;
        background: white;
    }

    .conteudo-lateral{
        background: white;
        padding: 10px;
        margin-bottom: 20px;
    }

    .postagem-lateral{
        font-size: 0.8em;
        padding: 5px;
        /*border-bottom: 1px dotted #ccc;*/
    }

    #area-rodape{
        clear: both;
        text-align: center;
        padding: 15px;
        background: #ccc;
    }
    /* formatação menu */

    a{
        text-decoration: none;
    }

    a:link, a:visited{
        color: #2C76D0;
    }

    a:hover{
        text-decoration: underline;
    }


    #area-cabecalho a:link, #area-cabecalho a:visited{
        color: #fff;
        padding: 8px 12px;
    }

    #area-cabecalho a:hover{
        color: #2C76D0;
        background: #fff;
        text-decoration: none;
    }

    #account-data {
      margin: 30px 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 200px;
  }

  /* formatações gerais */

  h1{
    color: #4e4e4e;
    font-size: 2,5em;
}

h2{
    color: #2C76D0;
}

h3{
    color: #565656;
    background: #ccc;
    padding: 5px;
}

.branco{
    color: white;
}

.data-postagem{
    font-size: 0.8em;
    border-bottom: 1px solid #2C76D0;
    padding-bottom: 10px;
    margin-bottom: 10px;
    display: block;
}
</style>
<head>
    <title>AprendaMais</title>
    <meta charset="utf-8">
</head>
<body>

    <div id="area-cabecalho">
        <div id="area-logo">
            <h1>Aprenda<span class="branco">Mais+</span></h1>
        </div>
        <div id="area-menu">
            <a href="index">Home</a>
            <a href="cursos">Cursos</a>
            <a href="">Minha conta</a>
            <a href="">Formulario</a>
        </div>
    </div>
    <div id="area-principal-curso">
        <div id="area-postagens-curso">
            <!-- inicio das postagens-->
            <div class="postagem">
                <h2>Programação em Python</h2>
                <span class="data-postagem">postado 20 janeiro 2020</span>
                <br>
                <br>
                <h3> Aula 1</h3>
                <span class="data-postagem"></span>
                <p>
                    
                Lorem ipsum class venenatis duis mi dui, tempus id lectus enim etiam ipsum nam, nisi laoreet tempor quis mauris. sollicitudin aliquam malesuada scelerisque in senectus, eros semper purus. dictumst convallis dapibus lectus ante metus volutpat euismod neque elit suscipit, duis sociosqu nulla etiam sagittis nisi turpis ultrices platea lorem, dictum per conubia mauris per luctus habitant volutpat quisque. curae curabitur etiam curabitur ultrices integer dui netus torquent ad, fermentum fringilla fermentum orci dapibus quam lorem mauris lectus hac, dui a nisi fermentum mauris vestibulum molestie tortor. sed euismod at aenean lobortis lorem primis rhoncus vehicula hendrerit, donec eros per diam feugiat nam malesuada porttitor aenean, cursus nulla vel ante sollicitudin vitae placerat urna.

                
                <br>
                <br>
                Links:
                <br>
                <a href="">conteudo 1</a>
                <br>
                <a href="">conteudo 2</a>
                <br>
                <a href="">conteudo 3</a>
                <br>
                </p>
                <br>

                <h3> Aula 2</h3>
                <span class="data-postagem"></span>
                <p>
                    
                Lorem ipsum class venenatis duis mi dui, tempus id lectus enim etiam ipsum nam, nisi laoreet tempor quis mauris. sollicitudin aliquam malesuada scelerisque in senectus, eros semper purus. dictumst convallis dapibus lectus ante metus volutpat euismod neque elit suscipit, duis sociosqu nulla etiam sagittis nisi turpis ultrices platea lorem, dictum per conubia mauris per luctus habitant volutpat quisque. curae curabitur etiam curabitur ultrices integer dui netus torquent ad, fermentum fringilla fermentum orci dapibus quam lorem mauris lectus hac, dui a nisi fermentum mauris vestibulum molestie tortor. sed euismod at aenean lobortis lorem primis rhoncus vehicula hendrerit, donec eros per diam feugiat nam malesuada porttitor aenean, cursus nulla vel ante sollicitudin vitae placerat urna.

                <br>
                <br>
                Lorem ipsum class venenatis duis mi dui, tempus id lectus enim etiam ipsum nam, nisi laoreet tempor quis mauris. sollicitudin aliquam malesuada scelerisque in senectus, eros semper purus. dictumst convallis dapibus lectus ante metus volutpat euismod neque elit suscipit, duis sociosqu nulla etiam sagittis nisi turpis ultrices platea lorem, dictum per conubia mauris per luctus habitant volutpat quisque. curae curabitur etiam curabitur ultrices integer dui netus torquent ad, fermentum fringilla fermentum orci dapibus quam lorem mauris lectus hac, dui a nisi fermentum mauris vestibulum molestie tortor. sed euismod at aenean lobortis lorem primis rhoncus vehicula hendrerit, donec eros per diam feugiat nam malesuada porttitor aenean, cursus nulla vel ante sollicitudin vitae placerat urna.

                
                <br>
                <br>
                Links:
                <br>
                <a href="">conteudo 1</a>
                <br>
                <a href="">conteudo 2</a>
                <br>
                <a href="">conteudo 3</a>
                <br>
                </p>
                <br>

                <h3> Aula 3</h3>
                <span class="data-postagem"></span>
                <p>
                    
                Lorem ipsum class venenatis duis mi dui, tempus id lectus enim etiam ipsum nam, nisi laoreet tempor quis mauris. sollicitudin aliquam malesuada scelerisque in senectus, eros semper purus. dictumst convallis dapibus lectus ante metus volutpat euismod neque elit suscipit, duis sociosqu nulla etiam sagittis nisi turpis ultrices platea lorem, dictum per conubia mauris per luctus habitant volutpat quisque. curae curabitur etiam curabitur ultrices integer dui netus torquent ad, fermentum fringilla fermentum orci dapibus quam lorem mauris lectus hac, dui a nisi fermentum mauris vestibulum molestie tortor. sed euismod at aenean lobortis lorem primis rhoncus vehicula hendrerit, donec eros per diam feugiat nam malesuada porttitor aenean, cursus nulla vel ante sollicitudin vitae placerat urna.

                
                <br>
                <br>
                Links:
                <br>
                <a href="">conteudo 1</a>
                <br>
                <a href="">conteudo 2</a>
                <br>
                <a href="">conteudo 3</a>
                <br>
                </p>
                <br>

            </div> <!-- fim das postagens-->
            <!-- inicio das postagens-->
        </div>
    </div>
        <div id="area-lateral-curso">
            <!-- inicio conteúdo lateral-->
            <div class="conteudo-lateral">
                <h3>Outros links</h3>
                <div class="postagem-lateral">
                    <p>
                        <br>
                <a href="">conteudo extra 1</a>
                <br>
                <a href="">conteudo extra 2</a>
                <br>
                <a href="">conteudo extra 3</a>
                <br>
                    </p>
                    
                    
                </div>
            </div><!-- inicio conteúdo lateral-->
            
        
        </div>
        <div id="area-rodape">
            Todos os direitos reservados
        </div>
    </div>

</body>
</html>
`);
    break;

case '/curso_c1':
    res.end(`
    <!DOCTYPE html>
    <html lang="pt-br">
    <style>
    *{
        margin: 0;
        padding: 0;
    }

    body{
        font-size: 1em;
        font-family: "Trebuchet MS", Helvetica, sans-serif;
        background: #e6e6e6;
    }

    /* layout */

    #area-cabecalho{
        background: #2C76D0;
        padding: 15px;
        text-align: center;
    }
    #area-logo, #area-menu {
        padding: 10px;
    }

    #area-principal{
        width: 920px;
        margin:0 auto;
        padding: 10px;
    }

    #area-principal-curso{
        padding: 10px;
        float: left;
    }

    #area-postagens{
        width: 660px;
        float: left;
        /*padding: 5px;*/
    }

    #area-postagens-apresentacao{
        width: 860px;
        float: left;
        /*padding: 5px;*/
    }

    #area-postagens-curso{
        width: 850px;
        float: left;
        /*padding: 5px;*/
    }

    #area-lateral-curso{
        width: 550px;
        padding: 20px;
        float: left;
    }

    #area-lateral{
        width: 240px;
        float: right;
    }

    #img-apresentacao{
        justify-content: center;
        width:620px;
    }

    .postagem{
        padding: 20px;
        margin-bottom: 20px;
        background: white;
    }

    .conteudo-lateral{
        background: white;
        padding: 10px;
        margin-bottom: 20px;
    }

    .postagem-lateral{
        font-size: 0.8em;
        padding: 5px;
        /*border-bottom: 1px dotted #ccc;*/
    }

    #area-rodape{
        clear: both;
        text-align: center;
        padding: 15px;
        background: #ccc;
    }
    /* formatação menu */

    a{
        text-decoration: none;
    }

    a:link, a:visited{
        color: #2C76D0;
    }

    a:hover{
        text-decoration: underline;
    }


    #area-cabecalho a:link, #area-cabecalho a:visited{
        color: #fff;
        padding: 8px 12px;
    }

    #area-cabecalho a:hover{
        color: #2C76D0;
        background: #fff;
        text-decoration: none;
    }

    #account-data {
      margin: 30px 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 200px;
  }

  /* formatações gerais */

  h1{
    color: #4e4e4e;
    font-size: 2,5em;
}

h2{
    color: #2C76D0;
}

h3{
    color: #565656;
    background: #ccc;
    padding: 5px;
}

.branco{
    color: white;
}

.data-postagem{
    font-size: 0.8em;
    border-bottom: 1px solid #2C76D0;
    padding-bottom: 10px;
    margin-bottom: 10px;
    display: block;
}
</style>
<head>
    <title>AprendaMais</title>
    <meta charset="utf-8">
</head>
<body>

    <div id="area-cabecalho">
        <div id="area-logo">
            <h1>Aprenda<span class="branco">Mais+</span></h1>
        </div>
        <div id="area-menu">
            <a href="index">Home</a>
            <a href="cursos">Cursos</a>
            <a href="">Minha conta</a>
            <a href="">Formulario</a>
        </div>
    </div>
    <div id="area-principal-curso">
        <div id="area-postagens-curso">
            <!-- inicio das postagens-->
            <div class="postagem">
                <h2>Programação em C</h2>
                <span class="data-postagem">postado 20 janeiro 2020</span>
                <br>
                <br>
                <h3> Aula 1</h3>
                <span class="data-postagem"></span>
                <p>
                    
                Lorem ipsum class venenatis duis mi dui, tempus id lectus enim etiam ipsum nam, nisi laoreet tempor quis mauris. sollicitudin aliquam malesuada scelerisque in senectus, eros semper purus. dictumst convallis dapibus lectus ante metus volutpat euismod neque elit suscipit, duis sociosqu nulla etiam sagittis nisi turpis ultrices platea lorem, dictum per conubia mauris per luctus habitant volutpat quisque. curae curabitur etiam curabitur ultrices integer dui netus torquent ad, fermentum fringilla fermentum orci dapibus quam lorem mauris lectus hac, dui a nisi fermentum mauris vestibulum molestie tortor. sed euismod at aenean lobortis lorem primis rhoncus vehicula hendrerit, donec eros per diam feugiat nam malesuada porttitor aenean, cursus nulla vel ante sollicitudin vitae placerat urna.

                
                <br>
                <br>
                Links:
                <br>
                <a href="">conteudo 1</a>
                <br>
                <a href="">conteudo 2</a>
                <br>
                <a href="">conteudo 3</a>
                <br>
                </p>
                <br>

                <h3> Aula 2</h3>
                <span class="data-postagem"></span>
                <p>
                    
                Lorem ipsum class venenatis duis mi dui, tempus id lectus enim etiam ipsum nam, nisi laoreet tempor quis mauris. sollicitudin aliquam malesuada scelerisque in senectus, eros semper purus. dictumst convallis dapibus lectus ante metus volutpat euismod neque elit suscipit, duis sociosqu nulla etiam sagittis nisi turpis ultrices platea lorem, dictum per conubia mauris per luctus habitant volutpat quisque. curae curabitur etiam curabitur ultrices integer dui netus torquent ad, fermentum fringilla fermentum orci dapibus quam lorem mauris lectus hac, dui a nisi fermentum mauris vestibulum molestie tortor. sed euismod at aenean lobortis lorem primis rhoncus vehicula hendrerit, donec eros per diam feugiat nam malesuada porttitor aenean, cursus nulla vel ante sollicitudin vitae placerat urna.

                <br>
                <br>
                Lorem ipsum class venenatis duis mi dui, tempus id lectus enim etiam ipsum nam, nisi laoreet tempor quis mauris. sollicitudin aliquam malesuada scelerisque in senectus, eros semper purus. dictumst convallis dapibus lectus ante metus volutpat euismod neque elit suscipit, duis sociosqu nulla etiam sagittis nisi turpis ultrices platea lorem, dictum per conubia mauris per luctus habitant volutpat quisque. curae curabitur etiam curabitur ultrices integer dui netus torquent ad, fermentum fringilla fermentum orci dapibus quam lorem mauris lectus hac, dui a nisi fermentum mauris vestibulum molestie tortor. sed euismod at aenean lobortis lorem primis rhoncus vehicula hendrerit, donec eros per diam feugiat nam malesuada porttitor aenean, cursus nulla vel ante sollicitudin vitae placerat urna.

                
                <br>
                <br>
                Links:
                <br>
                <a href="">conteudo 1</a>
                <br>
                <a href="">conteudo 2</a>
                <br>
                <a href="">conteudo 3</a>
                <br>
                </p>
                <br>

                <h3> Aula 3</h3>
                <span class="data-postagem"></span>
                <p>
                    
                Lorem ipsum class venenatis duis mi dui, tempus id lectus enim etiam ipsum nam, nisi laoreet tempor quis mauris. sollicitudin aliquam malesuada scelerisque in senectus, eros semper purus. dictumst convallis dapibus lectus ante metus volutpat euismod neque elit suscipit, duis sociosqu nulla etiam sagittis nisi turpis ultrices platea lorem, dictum per conubia mauris per luctus habitant volutpat quisque. curae curabitur etiam curabitur ultrices integer dui netus torquent ad, fermentum fringilla fermentum orci dapibus quam lorem mauris lectus hac, dui a nisi fermentum mauris vestibulum molestie tortor. sed euismod at aenean lobortis lorem primis rhoncus vehicula hendrerit, donec eros per diam feugiat nam malesuada porttitor aenean, cursus nulla vel ante sollicitudin vitae placerat urna.

                
                <br>
                <br>
                Links:
                <br>
                <a href="">conteudo 1</a>
                <br>
                <a href="">conteudo 2</a>
                <br>
                <a href="">conteudo 3</a>
                <br>
                </p>
                <br>

            </div> <!-- fim das postagens-->
            <!-- inicio das postagens-->
        </div>
    </div>
        <div id="area-lateral-curso">
            <!-- inicio conteúdo lateral-->
            <div class="conteudo-lateral">
                <h3>Outros links</h3>
                <div class="postagem-lateral">
                    <p>
                        <br>
                <a href="">conteudo extra 1</a>
                <br>
                <a href="">conteudo extra 2</a>
                <br>
                <a href="">conteudo extra 3</a>
                <br>
                    </p>
                    
                    
                </div>
            </div><!-- inicio conteúdo lateral-->
            
        
        </div>
        <div id="area-rodape">
            Todos os direitos reservados
        </div>
    </div>

</body>
</html>
`);
    break;

}

});



console.log('localhost: 8000');
server.listen(8000);