import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { Button } from "../components/Button";
import { LayoutContainer } from "../components/LayoutContainer";
import { TextInput } from "../components/TextInput";

const SERVER_URL = "http://localhost:3000";

const schema = z
  .object({
    name: z.string().min(1, "Please enter a name."),
    email: z
      .string()
      .email("Please enter a valid email address.")
      .min(1, "Please enter an email address."),
    password: z.string().min(8, "Password must be 8 or more characters."),
    passwordConfirm: z.string().min(1, "Please enter your password again."),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords don't match",
    path: ["passwordConfirm"],
  });

type Schema = z.infer<typeof schema>;

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = async (formValues: Schema) => {
    await fetch(`${SERVER_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="signup-page">
      <LayoutContainer>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-md flex flex-col gap-6"
          method="POST"
        >
          <h1 className="text-4xl font-medium">Sign Up</h1>

          <TextInput
            id="name"
            label="Name"
            error={errors.name?.message}
            {...register("name")}
          />
          <TextInput
            id="email"
            label="Email"
            type="email"
            error={errors.email?.message}
            {...register("email")}
          />
          <TextInput
            id="password"
            label="Password"
            type="password"
            error={errors.password?.message}
            {...register("password")}
          />
          <TextInput
            id="passwordConfirm"
            label="Confirm Password"
            type="password"
            error={errors.passwordConfirm?.message}
            {...register("passwordConfirm")}
          />
          <div>
            <Button variant="SMALL_PRIMARY">Sign Up</Button>
          </div>
        </form>
      </LayoutContainer>
    </div>
  );
};

export default SignupPage;
