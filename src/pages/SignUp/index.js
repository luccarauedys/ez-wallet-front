import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer } from "react-toastify";
import { Container, FormContainer } from "./styles.js";

const schema = yup
  .object({
    name: yup.string().required("O nome é obrigatório"),
    email: yup.string().email("Digite um email válido").required("O email é obrigatório"),
    password: yup
      .string()
      .min(4, "A senha deve possuir pelo menos 4 caracteres")
      .required("A senha é obrigatória"),
    confirmPassword: yup
      .string()
      .required("Confirmar a senha é obrigatório")
      .oneOf([yup.ref("password")], "As senhas não coincidem"),
  })
  .required();

export function SignUp() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    delete data.confirmPassword;
    console.log(data);

    // try {
    //   enviar dados pra api
    //   navigate("/");
    // } catch (error) {
    //   if (error.response.data) notifyError(error.response.data);
    // }
  };

  React.useEffect(() => {
    const uid = localStorage.getItem("@ezwallet@uid");
    if (uid) navigate("/home");
  }, [navigate]);

  return (
    <Container>
      <div>
        <img src="/1f4c8.svg" alt="Logo" />
        <h1>Crie uma conta e gerencie agora suas finanças!</h1>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <label>
            Nome:
            <input type="text" {...register("name", { required: true })} />
            <p className="error">{errors.name?.message}</p>
          </label>
          <label>
            Email:
            <input type="text" {...register("email", { required: true })} />
            <p className="error">{errors.email?.message}</p>
          </label>
          <label>
            Senha:
            <input type="password" {...register("password", { required: true })} />
            <p className="error">{errors.password?.message}</p>
          </label>
          <label>
            Confirme a senha:
            <input type="password" {...register("confirmPassword", { required: true })} />
            <p className="error">{errors.confirmPassword?.message}</p>
          </label>
          <button>Criar conta</button>
          <Link to="/">Já possui uma conta? Faça login!</Link>
        </FormContainer>
      </div>
      <ToastContainer />
    </Container>
  );
}
