.Net Core SPA Template application desenvolvido para demonstrar conhecimentos em aplicações web. 
- Basta clonar o projeto e rodar via Visual Studio 
- Caso hajam erros nos pacotes de dependência, acessar via terminal a pasta do projeto e usar comando dotnet restore.
- Para copiar o banco de dados para acessar o arquivo /fabiocostateste/appsettings.json alterar a string de conexão do banco de dados e via console do Nugget adcionar uma nova migration para o projeto /fabiocostateste.EF 
- Detalhamento da arquitetura
* Baseado nos príncipios SOLID 
<strong> fabiocostateste </strong>
.Net Core Web API
<strong> fabiocostateste.clienteApp </strong>
Angular Web application, responsável por interface do usuário
<strong> fabiocostateste.EF </strong>
Camada de controle de domínio, DDD, EntityFrameworkCore
<strong> fabiocostateste.Businness </strong>
Camada de controle de lógica de negócios.
