import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      // Handle success, e.g., redirect to dashboard
      navigate("/dashboard", { replace: true });
    },
    onError: (error) => {
      // Handle error, e.g., show error message
      toast.error("Provided email or password are incorrect");
    },
  });
  return { login, isLoading };
}
