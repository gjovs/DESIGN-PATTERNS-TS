# Singleton

## Garantir que uma classe tenha somente uma instância no programa, fornecer um ponto de acesso global


## Porque Utilizar somente uma instância ?

## Evitar concorrencias no serviço ofericido entre eles as funcionalidades de logger, interfaces graficas, sistemas de arquivos, servidores de impressão

## Comumente utilizado para subsituir variaveis globais, um exemplo pratico no desenvolivmento são os objetos de configuração que utilizamos

## Singleton --> Unique Class | Private Constructor | Static method for the instance

## example of implementation (TS)

export class Singleton {
  private static _instance: Singleton | null = null;
  private constructor() {

  }
  static get instance(): Singleton {
    if (Singleton._instance === null) {
      Singleton._instance = new Singleton();
    }
    return Singleton._instance;
  }
 }


## PROS

Acesso controlado à instancia única
Facil de manter e gerenciar novas instancias
Singleton só é criado no momento de uso

## Cons

Dificuldade de teste
Viola o principio da responsabilidade unica
Requer tratamento especial em caso de concorrência
(autor) --> não o vê com bons olhos
