export default function handler(req, res) {
    res.status(200).json({
        "estrelas": "2502",
        "categorias": [
            {
                "Nome": "Móveis",
                "ativo": true,
                "subcategorias": [
                    {
                        "subcategoriaId": "2"
                    },
                    {
                        "subcategoriaId": "19"
                    },
                    {
                        "subcategoriaId": "35"
                    },
                    {
                        "subcategoriaId": "46"
                    }
                ],
                "url": "/moveis",
                "categoriaPai": {
                    "paiId": null
                },
                "id": "1"
            },
            {
                "Nome": "Escritório",
                "ativo": true,
                "subcategorias": [
                    {
                        "subcategoriaId": "3"
                    },
                    {
                        "subcategoriaId": "11"
                    }
                ],
                "url": "/escritorio",
                "categoriaPai": {
                    "paiId": "1"
                },
                "id": "2"
            },
            {
                "Nome": "Cadeira Gamer",
                "ativo": true,
                "subcategorias": [
                    {
                        "subcategoriaId": "4"
                    },
                    {
                        "subcategoriaId": "5"
                    },
                    {
                        "subcategoriaId": "6"
                    },
                    {
                        "subcategoriaId": "7"
                    },
                    {
                        "subcategoriaId": "8"
                    },
                    {
                        "subcategoriaId": "9"
                    },
                    {
                        "subcategoriaId": "10"
                    }
                ],
                "url": "/cadeira-gamer",
                "categoriaPai": {
                    "paiId": "2"
                },
                "id": "3"
            },
            {
                "Nome": "Cadeira Gamer Verde",
                "ativo": true,
                "subcategorias": null,
                "url": "/cadeira-gamer-verde",
                "categoriaPai": {
                    "paiId": "3"
                },
                "id": "4"
            },
            {
                "Nome": "Cadeira Gamer Preta",
                "ativo": true,
                "subcategorias": null,
                "url": "/cadeira-gamer-preta",
                "categoriaPai": {
                    "paiId": "3"
                },
                "id": "5"
            },
            {
                "Nome": "Cadeira Gamer Vermelha",
                "ativo": true,
                "subcategorias": null,
                "url": "/cadeira-gamer-vermelha",
                "categoriaPai": {
                    "paiId": "3"
                },
                "id": "6"
            },
            {
                "Nome": "Cadeira Gamer Azul",
                "ativo": true,
                "subcategorias": null,
                "url": "/cadeira-gamer-azul",
                "categoriaPai": {
                    "paiId": "3"
                },
                "id": "7"
            },
            {
                "Nome": "Cadeira Gamer Branca",
                "ativo": true,
                "subcategorias": null,
                "url": "/cadeira-gamer-branca",
                "categoriaPai": {
                    "paiId": "3"
                },
                "id": "8"
            },
            {
                "Nome": "Cadeira Gamer Warlock",
                "ativo": true,
                "subcategorias": null,
                "url": "/cadeira-gamer-warlock",
                "categoriaPai": {
                    "paiId": "3"
                },
                "id": "9"
            },
            {
                "Nome": "Cadeira Gamer Healer",
                "ativo": true,
                "subcategorias": null,
                "url": "/cadeira-gamer-healer",
                "categoriaPai": {
                    "paiId": "3"
                },
                "id": "10"
            },
            {
                "Nome": "Cadeiras De Escritório",
                "ativo": true,
                "subcategorias": [
                    {
                        "subcategoriaId": "12"
                    },
                    {
                        "subcategoriaId": "13"
                    },
                    {
                        "subcategoriaId": "14"
                    },
                    {
                        "subcategoriaId": "15"
                    },
                    {
                        "subcategoriaId": "16"
                    },
                    {
                        "subcategoriaId": "17"
                    },
                    {
                        "subcategoriaId": "18"
                    }
                ],
                "url": "/cadeiras-de-escritorio",
                "categoriaPai": {
                    "paiId": "2"
                },
                "id": "11"
            },
            {
                "Nome": "Cadeira Presidente",
                "ativo": true,
                "subcategorias": null,
                "url": "/cadeira-presidente",
                "categoriaPai": {
                    "paiId": "11"
                },
                "id": "12"
            },
            {
                "Nome": "Cadeira Diretor",
                "ativo": true,
                "subcategorias": null,
                "url": "/cadeira-diretor",
                "categoriaPai": {
                    "paiId": "11"
                },
                "id": "13"
            },
            {
                "Nome": "Conjunto De Cadeiras",
                "ativo": true,
                "subcategorias": null,
                "url": "/conjunto-de-cadeiras",
                "categoriaPai": {
                    "paiId": "11"
                },
                "id": "14"
            },
            {
                "Nome": "Cadeira Giratória",
                "ativo": true,
                "subcategorias": null,
                "url": "/cadeira-giratoria",
                "categoriaPai": {
                    "paiId": "11"
                },
                "id": "15"
            },
            {
                "Nome": "Cadeira Com Rodinhas",
                "ativo": true,
                "subcategorias": null,
                "url": "/cadeira-com-rodinhas",
                "categoriaPai": {
                    "paiId": "11"
                },
                "id": "16"
            },
            {
                "Nome": "Cadeira Reclinável",
                "ativo": true,
                "subcategorias": null,
                "url": "/cadeira-reclinavel",
                "categoriaPai": {
                    "paiId": "11"
                },
                "id": "17"
            },
            {
                "Nome": "Cadeira Secretária",
                "ativo": true,
                "subcategorias": null,
                "url": "/cadeira-secretaria",
                "categoriaPai": {
                    "paiId": "11"
                },
                "id": "18"
            },
            {
                "Nome": "Sala de jantar",
                "ativo": true,
                "subcategorias": [
                    {
                        "subcategoriaId": "20"
                    },
                    {
                        "subcategoriaId": "24"
                    },
                    {
                        "subcategoriaId": "32"
                    }
                ],
                "url": "/sala-de-jantar",
                "categoriaPai": {
                    "paiId": "1"
                },
                "id": "19"
            },
            {
                "Nome": "Mesa De Jantar",
                "ativo": true,
                "subcategorias": [
                    {
                        "subcategoriaId": "21"
                    },
                    {
                        "subcategoriaId": "22"
                    },
                    {
                        "subcategoriaId": "23"
                    }
                ],
                "url": "/mesa-de-jantar",
                "categoriaPai": {
                    "paiId": "19"
                },
                "id": "20"
            },
            {
                "Nome": "Mesa De Jantar Redonda",
                "ativo": true,
                "subcategorias": null,
                "url": "/mesa-de-jantar-redonda",
                "categoriaPai": {
                    "paiId": "20"
                },
                "id": "21"
            },
            {
                "Nome": "Mesa De Jantar Quadrada",
                "ativo": true,
                "subcategorias": null,
                "url": "/mesa-de-jantar-quadrada",
                "categoriaPai": {
                    "paiId": "20"
                },
                "id": "22"
            },
            {
                "Nome": "Mesa De Jantar Retangular",
                "ativo": true,
                "subcategorias": null,
                "url": "/mesa-de-jantar-retangular",
                "categoriaPai": {
                    "paiId": "20"
                },
                "id": "23"
            },
            {
                "Nome": "Cadeiras Para Mesa De Jantar",
                "ativo": true,
                "subcategorias": [
                    {
                        "subcategoriaId": "25"
                    },
                    {
                        "subcategoriaId": "26"
                    },
                    {
                        "subcategoriaId": "27"
                    },
                    {
                        "subcategoriaId": "28"
                    },
                    {
                        "subcategoriaId": "29"
                    },
                    {
                        "subcategoriaId": "30"
                    },
                    {
                        "subcategoriaId": "31"
                    }
                ],
                "url": "/cadeiras-para-mesa-de-jantar",
                "categoriaPai": {
                    "paiId": "19"
                },
                "id": "24"
            },
            {
                "Nome": "Cadeira Eames",
                "ativo": true,
                "subcategorias": null,
                "url": "/cadeira-eames",
                "categoriaPai": {
                    "paiId": "24"
                },
                "id": "25"
            },
            {
                "Nome": "Cadeira De Jantar",
                "ativo": true,
                "subcategorias": null,
                "url": "/cadeira-de-jantar",
                "categoriaPai": {
                    "paiId": "24"
                },
                "id": "26"
            },
            {
                "Nome": "Cadeira De Jantar Preta",
                "ativo": true,
                "subcategorias": null,
                "url": "/cadeira-de-jantar-preta",
                "categoriaPai": {
                    "paiId": "24"
                },
                "id": "27"
            },
            {
                "Nome": "Cadeira De Jantar Branca",
                "ativo": true,
                "subcategorias": null,
                "url": "/cadeira-de-jantar-branca",
                "categoriaPai": {
                    "paiId": "24"
                },
                "id": "28"
            },
            {
                "Nome": "Cadeira De Jantar Vermelha",
                "ativo": true,
                "subcategorias": null,
                "url": "/cadeira-de-jantar-vermelha",
                "categoriaPai": {
                    "paiId": "24"
                },
                "id": "29"
            },
            {
                "Nome": "Cadeira De Jantar Amarela",
                "ativo": true,
                "subcategorias": null,
                "url": "/cadeira-de-jantar-amarela",
                "categoriaPai": {
                    "paiId": "24"
                },
                "id": "30"
            },
            {
                "Nome": "Cadeira De Jantar Nude",
                "ativo": true,
                "subcategorias": null,
                "url": "/cadeira-de-jantar-nude",
                "categoriaPai": {
                    "paiId": "24"
                },
                "id": "31"
            },
            {
                "Nome": "Conjunto De Mesa De Jantar",
                "ativo": true,
                "subcategorias": [
                    {
                        "subcategoriaId": "33"
                    },
                    {
                        "subcategoriaId": "34"
                    }
                ],
                "url": "/conjunto-de-mesa-de-jantar",
                "categoriaPai": {
                    "paiId": "19"
                },
                "id": "32"
            },
            {
                "Nome": "Mesa De Jantar 4 Cadeiras",
                "ativo": true,
                "subcategorias": null,
                "url": "/mesa-de-jantar-4-cadeiras",
                "categoriaPai": {
                    "paiId": "32"
                },
                "id": "33"
            },
            {
                "Nome": "Cadeira Eames Com Mesa",
                "ativo": true,
                "subcategorias": null,
                "url": "/cadeira-eames-com-mesa",
                "categoriaPai": {
                    "paiId": "32"
                },
                "id": "34"
            },
            {
                "Nome": "Cozinha",
                "ativo": true,
                "subcategorias": [
                    {
                        "subcategoriaId": "36"
                    },
                    {
                        "subcategoriaId": "40"
                    },
                    {
                        "subcategoriaId": "43"
                    }
                ],
                "url": "/cozinha",
                "categoriaPai": {
                    "paiId": "1"
                },
                "id": "35"
            },
            {
                "Nome": "Banquetas",
                "ativo": true,
                "subcategorias": [
                    {
                        "subcategoriaId": "37"
                    },
                    {
                        "subcategoriaId": "38"
                    },
                    {
                        "subcategoriaId": "39"
                    }
                ],
                "url": "/banquetas",
                "categoriaPai": {
                    "paiId": "35"
                },
                "id": "36"
            },
            {
                "Nome": "Banqueta Alta",
                "ativo": true,
                "subcategorias": null,
                "url": "/banqueta-alta",
                "categoriaPai": {
                    "paiId": "36"
                },
                "id": "37"
            },
            {
                "Nome": "Banquetas Para Cozinha",
                "ativo": true,
                "subcategorias": null,
                "url": "/banquetas-para-cozinha",
                "categoriaPai": {
                    "paiId": "36"
                },
                "id": "38"
            },
            {
                "Nome": "Banquetas Para Balcão",
                "ativo": true,
                "subcategorias": null,
                "url": "/banquetas-para-balcao",
                "categoriaPai": {
                    "paiId": "36"
                },
                "id": "39"
            },
            {
                "Nome": "Lixeira",
                "ativo": true,
                "subcategorias": [
                    {
                        "subcategoriaId": "41"
                    },
                    {
                        "subcategoriaId": "42"
                    }
                ],
                "url": "/lixeira-de-cozinha",
                "categoriaPai": {
                    "paiId": "35"
                },
                "id": "40"
            },
            {
                "Nome": "Lixeira Para Cozinha",
                "ativo": true,
                "subcategorias": null,
                "url": "/lixeira-para-cozinha",
                "categoriaPai": {
                    "paiId": "40"
                },
                "id": "41"
            },
            {
                "Nome": "Lixeira Inox",
                "ativo": true,
                "subcategorias": null,
                "url": "/lixeira-inox",
                "categoriaPai": {
                    "paiId": "40"
                },
                "id": "42"
            },
            {
                "Nome": "Mesa De Cozinha",
                "ativo": true,
                "subcategorias": [
                    {
                        "subcategoriaId": "44"
                    },
                    {
                        "subcategoriaId": "45"
                    }
                ],
                "url": "/mesa-de-cozinha",
                "categoriaPai": {
                    "paiId": "35"
                },
                "id": "43"
            },
            {
                "Nome": "Mesa De Cozinha 4 Cadeiras",
                "ativo": true,
                "subcategorias": null,
                "url": "/mesa-de-cozinha-4-cadeiras",
                "categoriaPai": {
                    "paiId": "43"
                },
                "id": "44"
            },
            {
                "Nome": "Mesa Cozinha",
                "ativo": true,
                "subcategorias": null,
                "url": "/mesa-cozinha",
                "categoriaPai": {
                    "paiId": "43"
                },
                "id": "45"
            },
            {
                "Nome": "Banheiro",
                "ativo": true,
                "subcategorias": [
                    {
                        "subcategoriaId": "47"
                    },
                    {
                        "subcategoriaId": "51"
                    }
                ],
                "url": "/banheiro",
                "categoriaPai": {
                    "paiId": "1"
                },
                "id": "46"
            },
            {
                "Nome": "Lixeira",
                "ativo": true,
                "subcategorias": [
                    {
                        "subcategoriaId": "48"
                    },
                    {
                        "subcategoriaId": "49"
                    },
                    {
                        "subcategoriaId": "50"
                    }
                ],
                "url": "/lixeira-de-banheiro",
                "categoriaPai": {
                    "paiId": "46"
                },
                "id": "47"
            },
            {
                "Nome": "Lixeira Para Banheiro",
                "ativo": true,
                "subcategorias": null,
                "url": "/lixeira-para-banheiro",
                "categoriaPai": {
                    "paiId": "47"
                },
                "id": "48"
            },
            {
                "Nome": "Kit Banheiro Inox",
                "ativo": true,
                "subcategorias": null,
                "url": "/kit-banheiro-inox",
                "categoriaPai": {
                    "paiId": "47"
                },
                "id": "49"
            },
            {
                "Nome": "Kit Banheiro",
                "ativo": true,
                "subcategorias": null,
                "url": "/kit-banheiro",
                "categoriaPai": {
                    "paiId": "47"
                },
                "id": "50"
            },
            {
                "Nome": "Escova Sanitária",
                "ativo": true,
                "subcategorias": [
                    {
                        "subcategoriaId": "52"
                    },
                    {
                        "subcategoriaId": "53"
                    },
                    {
                        "subcategoriaId": "54"
                    }
                ],
                "url": "/escovas-sanitarias",
                "categoriaPai": {
                    "paiId": "46"
                },
                "id": "51"
            },
            {
                "Nome": "Escova Sanitária",
                "ativo": true,
                "subcategorias": null,
                "url": "/escova-sanitaria",
                "categoriaPai": {
                    "paiId": "51"
                },
                "id": "52"
            },
            {
                "Nome": "Escova De Limpar Vaso",
                "ativo": true,
                "subcategorias": null,
                "url": "/escova-de-limpar-vaso",
                "categoriaPai": {
                    "paiId": "51"
                },
                "id": "53"
            },
            {
                "Nome": "Vassoura De Vaso",
                "ativo": true,
                "subcategorias": null,
                "url": "/vassoura-de-vaso",
                "categoriaPai": {
                    "paiId": "51"
                },
                "id": "54"
            },
            {
                "Nome": "Malas, Mochilas e Bolsas",
                "ativo": true,
                "subcategorias": [
                    {
                        "subcategoriaId": "56"
                    }
                ],
                "url": "/malas-mochilas-e-bolsas",
                "categoriaPai": {
                    "paiId": null
                },
                "id": "55"
            },
            {
                "Nome": "Mala de Viagem",
                "ativo": true,
                "subcategorias": [
                    {
                        "subcategoriaId": "57"
                    },
                    {
                        "subcategoriaId": "64"
                    },
                    {
                        "subcategoriaId": "68"
                    },
                    {
                        "subcategoriaId": "71"
                    }
                ],
                "url": "/mala-de-viagem",
                "categoriaPai": {
                    "paiId": "55"
                },
                "id": "56"
            },
            {
                "Nome": "Malas",
                "ativo": true,
                "subcategorias": [
                    {
                        "subcategoriaId": "58"
                    },
                    {
                        "subcategoriaId": "59"
                    },
                    {
                        "subcategoriaId": "60"
                    },
                    {
                        "subcategoriaId": "61"
                    },
                    {
                        "subcategoriaId": "62"
                    },
                    {
                        "subcategoriaId": "63"
                    }
                ],
                "url": "/malas",
                "categoriaPai": {
                    "paiId": "56"
                },
                "id": "57"
            },
            {
                "Nome": "Mala De Viagem Pequena",
                "ativo": true,
                "subcategorias": null,
                "url": "/mala-de-viagem-pequena",
                "categoriaPai": {
                    "paiId": "57"
                },
                "id": "58"
            },
            {
                "Nome": "Mala De Viagem Grande",
                "ativo": true,
                "subcategorias": null,
                "url": "/mala-de-viagem-grande",
                "categoriaPai": {
                    "paiId": "57"
                },
                "id": "59"
            },
            {
                "Nome": "Mala De Viagem Media",
                "ativo": true,
                "subcategorias": null,
                "url": "/mala-de-viagem-media",
                "categoriaPai": {
                    "paiId": "57"
                },
                "id": "60"
            },
            {
                "Nome": "Mala De Viagem Preta",
                "ativo": true,
                "subcategorias": null,
                "url": "/mala-de-viagem-preta",
                "categoriaPai": {
                    "paiId": "57"
                },
                "id": "61"
            },
            {
                "Nome": "Mala De Viagem Cinza",
                "ativo": true,
                "subcategorias": null,
                "url": "/mala-de-viagem-cinza",
                "categoriaPai": {
                    "paiId": "57"
                },
                "id": "62"
            },
            {
                "Nome": "Mala De Viagem Champagne",
                "ativo": true,
                "subcategorias": null,
                "url": "/mala-de-viagem-champagne",
                "categoriaPai": {
                    "paiId": "57"
                },
                "id": "63"
            },
            {
                "Nome": "Mala De Bordo",
                "ativo": true,
                "subcategorias": [
                    {
                        "subcategoriaId": "65"
                    },
                    {
                        "subcategoriaId": "66"
                    },
                    {
                        "subcategoriaId": "67"
                    }
                ],
                "url": "/mala-de-bordo",
                "categoriaPai": {
                    "paiId": "56"
                },
                "id": "64"
            },
            {
                "Nome": "Mala Pequena",
                "ativo": true,
                "subcategorias": null,
                "url": "/mala-pequena",
                "categoriaPai": {
                    "paiId": "64"
                },
                "id": "65"
            },
            {
                "Nome": "Mala 23 Kg",
                "ativo": true,
                "subcategorias": null,
                "url": "/mala-23kg",
                "categoriaPai": {
                    "paiId": "64"
                },
                "id": "66"
            },
            {
                "Nome": "Mala De Mão",
                "ativo": true,
                "subcategorias": null,
                "url": "/mala-de-mao",
                "categoriaPai": {
                    "paiId": "64"
                },
                "id": "67"
            },
            {
                "Nome": "Kit Malas De Viagem",
                "ativo": true,
                "subcategorias": [
                    {
                        "subcategoriaId": "69"
                    },
                    {
                        "subcategoriaId": "70"
                    }
                ],
                "url": "/kit-malas-de-viagem",
                "categoriaPai": {
                    "paiId": "56"
                },
                "id": "68"
            },
            {
                "Nome": "Conjunto De Malas",
                "ativo": true,
                "subcategorias": null,
                "url": "/conjunto-de-malas",
                "categoriaPai": {
                    "paiId": "68"
                },
                "id": "69"
            },
            {
                "Nome": "Kit Mala De Viagem",
                "ativo": true,
                "subcategorias": null,
                "url": "/kit-mala-de-viagem",
                "categoriaPai": {
                    "paiId": "68"
                },
                "id": "70"
            },
            {
                "Nome": "Mala Swiss Move",
                "ativo": true,
                "subcategorias": [
                    {
                        "subcategoriaId": "72"
                    },
                    {
                        "subcategoriaId": "73"
                    },
                    {
                        "subcategoriaId": "74"
                    },
                    {
                        "subcategoriaId": "75"
                    },
                    {
                        "subcategoriaId": "76"
                    },
                    {
                        "subcategoriaId": "77"
                    },
                    {
                        "subcategoriaId": "78"
                    },
                    {
                        "subcategoriaId": "79"
                    },
                    {
                        "subcategoriaId": "80"
                    },
                    {
                        "subcategoriaId": "81"
                    }
                ],
                "url": "/mala-swiss-move",
                "categoriaPai": {
                    "paiId": "56"
                },
                "id": "71"
            },
            {
                "Nome": "Mala De Viagem Londres",
                "ativo": true,
                "subcategorias": null,
                "url": "/mala-de-viagem-londres",
                "categoriaPai": {
                    "paiId": "71"
                },
                "id": "72"
            },
            {
                "Nome": "Mala De Viagem Havana",
                "ativo": true,
                "subcategorias": null,
                "url": "/mala-de-viagem-havana",
                "categoriaPai": {
                    "paiId": "71"
                },
                "id": "73"
            },
            {
                "Nome": "Mala De Viagem Lucerna",
                "ativo": true,
                "subcategorias": null,
                "url": "/mala-de-viagem-lucerna",
                "categoriaPai": {
                    "paiId": "71"
                },
                "id": "74"
            },
            {
                "Nome": "Mala De Viagem Chicago",
                "ativo": true,
                "subcategorias": null,
                "url": "/mala-de-viagem-chicago",
                "categoriaPai": {
                    "paiId": "71"
                },
                "id": "75"
            },
            {
                "Nome": "Mala De Viagem Dizy",
                "ativo": true,
                "subcategorias": null,
                "url": "/mala-de-viagem-dizy",
                "categoriaPai": {
                    "paiId": "71"
                },
                "id": "76"
            },
            {
                "Nome": "Mala De Viagem Zug",
                "ativo": true,
                "subcategorias": null,
                "url": "/mala-de-viagem-zug",
                "categoriaPai": {
                    "paiId": "71"
                },
                "id": "77"
            },
            {
                "Nome": "Mala De Viagem Montreal",
                "ativo": true,
                "subcategorias": null,
                "url": "/mala-de-viagem-montreal",
                "categoriaPai": {
                    "paiId": "71"
                },
                "id": "78"
            },
            {
                "Nome": "Mala De Viagem Tokio",
                "ativo": true,
                "subcategorias": null,
                "url": "/mala-de-viagem-tokio",
                "categoriaPai": {
                    "paiId": "71"
                },
                "id": "79"
            },
            {
                "Nome": "Mala De Viagem Zurique",
                "ativo": true,
                "subcategorias": null,
                "url": "/mala-de-viagem-zurique",
                "categoriaPai": {
                    "paiId": "71"
                },
                "id": "80"
            },
            {
                "Nome": "Mala De Viagem Monaco",
                "ativo": true,
                "subcategorias": null,
                "url": "/mala-de-viagem-monaco",
                "categoriaPai": {
                    "paiId": "71"
                },
                "id": "81"
            }
        ]
    })
}