import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ThreeDots } from "react-loader-spinner";
import { ToastContainer } from "react-toastify";
import { Container, FormContainer } from "../SignUp/styles";
import { api } from "../../services/api";
import { notifyError } from "../../utils/toasts";

const schema = yup
  .object({
    email: yup.string().email("Digite um email válido").required("O email é obrigatório"),
    password: yup.string().required("A senha é obrigatória"),
  })
  .required();

export function SignIn() {
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
    try {
      const response = await api.post("/auth/sign-in", data);
      const { token } = response.data;
      localStorage.setItem("token@ezwallet", token);
      setIsLoading(false);
      navigate("/home");
    } catch (error) {
      setIsLoading(false);
      if (error.response.data) notifyError(error.response.data);
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
          <h1>Faça login e gerencie agora suas finanças!</h1>

          <FormContainer onSubmit={handleSubmit(onSubmit)}>
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
              <button>Entrar na conta</button>
            )}

            <Link to="/signup">Não possui uma conta? Faça o cadastro!</Link>
          </FormContainer>
        </div>
      </Container>
      <ToastContainer />
    </>
  );
}
