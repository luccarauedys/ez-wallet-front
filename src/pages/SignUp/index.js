import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ThreeDots } from "react-loader-spinner";
import { ToastContainer } from "react-toastify";
import { Container, FormContainer } from "./styles.js";
import { api } from "../../services/api.js";
import { notifyError } from "../../utils/toasts.js";

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

  const [isLoading, setIsLoading] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    delete data.confirmPassword;
    try {
      await api.post("/auth/sign-up", data);
      navigate("/");
    } catch (error) {
      if (error.response.data) notifyError(error.response.data);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    const token = localStorage.getItem("token@ezwallet");
    if (token) navigate("/home");
  }, [navigate]);

  return (
    <>
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
              <input
                type="password"
                {...register("confirmPassword", { required: true })}
              />
              <p className="error">{errors.confirmPassword?.message}</p>
            </label>

            {isLoading ? (
              <button disabled>
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
              </button>
            ) : (
              <button>Criar conta</button>
            )}

            <Link to="/">Já possui uma conta? Faça login!</Link>
          </FormContainer>
        </div>
      </Container>
      <ToastContainer />
    </>
  );
}
