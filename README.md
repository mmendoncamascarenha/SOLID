# SOLID – Princípios de Boas Práticas em TypeScript

Projeto de exemplo para aplicar os princípios de design SOLID usando **TypeScript**.

---

## 🚀 Tabela de Conteúdos

1. [Sobre](#sobre)
2. [Instalação](#instalação)
3. [Uso](#uso)
4. [Estrutura de Pastas](#estrutura-de-pastas)
5. [Exemplos de Código](#exemplos-de-código)
6. [Testes](#testes)
7. [Padrões SOLID](#padrões-solid)
8. [Contribuição](#contribuição)
9. [Licença](#licença)

---

## 🔍 Sobre

Este projeto tem o objetivo de demonstrar como implementar os **princípios SOLID** em TypeScript para alcançar um código mais **modular** e **legível**.

---

## 📦 Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/mmendoncamascarenha/SOLID.git
   cd SOLID
   ```
2. Instale as dependências:

   ```bash
   npm install
   ```

   ou

   ```bash
   yarn install
   ```
3. Compile o TypeScript (se aplicável):

   ```bash
   npm run build
   ```

   ou

   ```bash
   yarn build
   ```

---

## ▶️ Uso

Para rodar os exemplos:

```bash
npm start
```

ou

```bash
ts-node src/index.ts
```

(adapte conforme seu `package.json`)

---

## 🗂️ Estrutura de Pastas

```
SOLID/
├─ src/
│  ├─ s/  (Single Responsibility Principle)
│  ├─ o/  (Open/Closed Principle)
│  ├─ l/  (Liskov Substitution Principle)
│  ├─ i/  (Interface Segregation Principle)
│  └─ d/  (Dependency Inversion Principle)
├─ tests/ (se houver)
├─ dist/  (build output)
├─ package.json
└─ tsconfig.json
```

---

## 💻 Exemplos de Código

### 1. Single Responsibility Principle (SRP)

```ts
// Og: Uma classe com múltiplas responsabilidades
class Invoice {
  calculateTotal() { /* ... */ }
  saveToDB() { /* ... */ }
  print() { /* ... */ }
}

// Refatorado:
class Invoice {
  calculateTotal() { /* ... */ }
}

class InvoiceRepository {
  save(invoice: Invoice) { /* ... */ }
}

class InvoicePrinter {
  print(invoice: Invoice) { /* ... */ }
}
```

### 2. Open/Closed Principle (OCP)

```ts
interface DiscountStrategy {
  calculate(amount: number): number;
}

class NoDiscount implements DiscountStrategy {
  calculate(amount: number) {
    return amount;
  }
}

class TenPercentDiscount implements DiscountStrategy {
  calculate(amount: number) {
    return amount * 0.9;
  }
}

class Order {
  constructor(private discountStrategy: DiscountStrategy) {}

  total(amount: number) {
    return this.discountStrategy.calculate(amount);
  }
}
```

---

## 🧪 Testes

(Se você tiver testes automatizados, explique como executá-los; caso não tenha, é uma boa ideia adicionar!)

```bash
npm test
```

ou

```bash
jest
```

---

## 📐 Princípios SOLID

* **S**ingle Responsibility Principle
* **O**pen/Closed Principle
* **L**iskov Substitution Principle
* **I**nterface Segregation Principle
* **D**ependency Inversion Principle

Cada pasta dentro de `src/` contém exemplos mostrando a aplicação prática desses princípios.

---

## 🤝 Contribuição

Contribuições são bem-vindas! Siga estes passos:

1. Fork este projeto
2. Crie uma branch: `git checkout -b feature/nome-da-sua-feature`
3. Faça suas alterações
4. Envie um pull request

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
