
export interface Transaction {
    type: "debito" | "credito" | "deposito";
    value: number;
    data: Date;
}