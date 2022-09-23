import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { ToastContainer } from "react-toastify";
import { Button, Container, Field1, Field2, Field3, Field4 } from "./styles";
import { api, getConfig } from "../../services/api";
import { notifyError } from "../../utils/toasts";
import { formatDate } from "../../utils/formatters";

export function TransactionForm() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [transaction, setTransaction] = React.useState({
    description: "",
    value: "",
    type: "",
    date: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !transaction.description ||
      !transaction.value ||
      !transaction.type ||
      !transaction.date
    ) {
      return notifyError("Preencha todos os campos!");
    }

    setIsLoading(true);

    const date = formatDate(transaction.date);
    const transactionData = { ...transaction, date };

    try {
      await api.post("/transactions", transactionData, getConfig());
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      if (error.response.data) notifyError(error.response.data);
    }

    setTransaction({ description: "", value: "", type: "", date: "" });
  };

  return (
    <>
      <Container onSubmit={handleSubmit}>
        <Field1>
          <label htmlFor="description">Descrição</label>
          <input
            id="description"
            type="text"
            placeholder="Ex: Compra no mercado"
            value={transaction.description}
            onChange={(e) =>
              setTransaction({ ...transaction, description: e.target.value })
            }
          />
        </Field1>

        <Field2>
          <label htmlFor="value">Valor</label>
          <input
            id="value"
            type="number"
            value={transaction.value}
            onChange={(e) => setTransaction({ ...transaction, value: e.target.value })}
          />
        </Field2>

        <Field3>
          <label htmlFor="type">Tipo</label>
          <select
            id="type"
            onChange={(e) => setTransaction({ ...transaction, type: e.target.value })}
          >
            <option value="deposit">Entrada</option>
            <option value="withdraw">Saída</option>
          </select>
        </Field3>

        <Field4>
          <label htmlFor="date">Data</label>
          <input
            id="date"
            type="date"
            value={transaction.date}
            onChange={(e) => setTransaction({ ...transaction, date: e.target.value })}
          />
        </Field4>

        {isLoading ? (
          <Button disabled>
            <ThreeDots
              height={20}
              width={50}
              radius="9"
              color="#ffffff"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </Button>
        ) : (
          <Button>Inserir</Button>
        )}
      </Container>
      <ToastContainer />
    </>
  );
}
