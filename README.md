# 🗺️ Zone Mapping App --- Frontend

Aplicação Full Stack para **criação, visualização e gerenciamento de
zonas geográficas** no mapa, com armazenamento em **GeoJSON** e controle
de exibição via interface.

------------------------------------------------------------------------

## ✨ Funcionalidades

-   Renderização de mapa interativo
-   Desenho de zonas (polígonos) diretamente no mapa
-   Salvamento das zonas no backend via API
-   Armazenamento da geometria em **GeoJSON**
-   Listagem de zonas na sidebar com busca
-   Controle de visibilidade com checkboxes
-   Seleção de zonas e destaque visual
-   Sincronização entre **mapa** e **lista (sidebar)**
-   Operações CRUD via backend (NestJS)

------------------------------------------------------------------------

## 🧩 Estrutura do Projeto

    project-root/
    ├── front-end/      → Interface construída em ReactJS
    ├── back-end/       → API desenvolvida em NestJS (REST)
    └── README.md      → Documentação do projeto

------------------------------------------------------------------------

## 🚀 Tecnologias Utilizadas

### Frontend

-   ReactJS (JavaScript)
-   React Leaflet
-   Leaflet Geoman (para desenho e edição de polígonos)
-   Axios (para comunicação com a API)

------------------------------------------------------------------------

## 📡 API --- Modelo da entidade `Zone`

A aplicação segue a estrutura:

``` json
{
  "id": 1,
  "name": "Zona Residencial Norte",
  "type": "Residencial",
  "geometry": { "type": "Polygon", "coordinates": [...] }
}
```

------------------------------------------------------------------------

## ▶️ Como Executar o Projeto

### Frontend

``` bash
cd front-end
npm install
npm run dev
```

------------------------------------------------------------------------

## 🛠️ Configurações Importantes

-   O mapa usa **OpenStreetMap** como camada base
-   O plugin **Leaflet Geoman** habilita:
    -   criação de polígonos
    -   edição e remoção de camadas
    -   retorno do resultado em GeoJSON

------------------------------------------------------------------------

## 📌 Gerenciamento de Estado (Context API)

O frontend utiliza um **context provider (`ZonesContext`)** como fonte
única de verdade para:

-   zonas carregadas do backend
-   adição de novas zonas
-   seleção de zonas
-   visibilidade no mapa


