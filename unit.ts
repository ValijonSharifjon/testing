// utils.ts

export function sum(a: number, b: number): number {
  return a + b;
}

export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

export function capitalize(text: string): string {
  if (!text) return '';
  return text[0].toUpperCase() + text.slice(1).toLowerCase();
}

export function filterAdults(users: { name: string, age: number }[]): string[] {
  return users.filter(u => u.age >= 18).map(u => u.name);
}

export class Calculator {
  private total: number = 0;

  add(n: number): this {
    this.total += n;
    return this;
  }

  subtract(n: number): this {
    this.total -= n;
    return this;
  }

  getTotal(): number {
    return this.total;
  }

  reset(): void {
    this.total = 0;
  }
}

export async function fetchUserName(api: { getUser: () => Promise<{ name: string }> }): Promise<string> {
  const response = await api.getUser();
  return response.name;
}
