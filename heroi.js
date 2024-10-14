// Classe genérica representando um herói de aventura
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método atacar, que exibe a mensagem de ataque baseada no tipo do herói
    atacar() {
    
        const ataques = {
            'mago': 'magia',
            'guerreiro': 'espada',
            'monge': 'artes marciais',
            'ninja': 'shuriken'
        };

        // Obtém o ataque correspondente ao tipo do herói
        const ataque = ataques[this.tipo] || 'ataque desconhecido';

        // Exibe a mensagem de ataque
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso da classe
const heroi1 = new Heroi("Merlin", 150, "mago");
heroi1.atacar();  // Saída: O mago atacou usando magia

const heroi2 = new Heroi("Conan", 30, "guerreiro");
heroi2.atacar();  // Saída: O guerreiro atacou usando espada

const heroi3 = new Heroi("Bruce Lee", 32, "monge");
heroi3.atacar();  // Saída: O monge atacou usando artes marciais

const heroi4 = new Heroi("Naruto", 17, "ninja");
heroi4.atacar();  // Saída: O ninja atacou usando shuriken
