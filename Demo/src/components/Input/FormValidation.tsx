import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

/* =========================
   Zod Schema
========================= */

const schema = z
  .object({
    firstName: z
      .string()
      .min(2, "First name must be at least 2 characters")
      .regex(/^[A-Z]/, "First name must start with a capital letter"),

    lastName: z.string().min(2, "Last name must be at least 2 characters"),

    email: z.string().email("Invalid email address"),

    age: z.coerce
      .number()
      .min(18, "Must be at least 18")
      .max(70, "Max age is 70"),

    password: z.string().min(8, "Password must be at least 8 characters"),

    confirmPassword: z.string().min(8, "Confirm your password"),

    /* File Validation (FileList) */
    attachment: z
      .any()
      .refine((files) => files?.length === 1, "File is required")
      .refine(
        (files) => files?.[0]?.size <= 5 * 1024 * 1024,
        "File size must be less than 5MB",
      )
      .refine(
        (files) =>
          ["application/pdf", "image/png", "image/jpeg"].includes(
            files?.[0]?.type,
          ),
        "Only PDF, PNG, or JPG files are allowed",
      ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormType = z.infer<typeof schema>;

/* =========================
   Component
========================= */

const FormValidation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormType) => {
    const file = data.attachment[0];

    console.log("Form Data:", data);
    console.log("Uploaded File:", file);

    // Example: Creating FormData for backend upload
    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("age", data.age.toString());
    formData.append("password", data.password);
    formData.append("attachment", file);

    console.log("FormData ready to send:", formData);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Register</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* First Name */}
        <div>
          <label>First Name</label>
          <input type="text" {...register("firstName")} />
          <p style={{ color: "red" }}>{errors.firstName?.message}</p>
        </div>

        {/* Last Name */}
        <div>
          <label>Last Name</label>
          <input type="text" {...register("lastName")} />
          <p style={{ color: "red" }}>{errors.lastName?.message}</p>
        </div>

        {/* Email */}
        <div>
          <label>Email</label>
          <input type="email" {...register("email")} />
          <p style={{ color: "red" }}>{errors.email?.message}</p>
        </div>

        {/* Age */}
        <div>
          <label>Age</label>
          <input type="number" {...register("age", { valueAsNumber: true })} />
          <p style={{ color: "red" }}>{errors.age?.message}</p>
        </div>

        {/* Password */}
        <div>
          <label>Password</label>
          <input type="password" {...register("password")} />
          <p style={{ color: "red" }}>{errors.password?.message}</p>
        </div>

        {/* Confirm Password */}
        <div>
          <label>Confirm Password</label>
          <input type="password" {...register("confirmPassword")} />
          <p style={{ color: "red" }}>{errors.confirmPassword?.message}</p>
        </div>

        {/* File Upload */}
        <div>
          <label>Attachment (PDF, PNG, JPG - Max 5MB)</label>
          <input type="file" {...register("attachment")} />
          <p style={{ color: "red" }}>{errors.attachment?.message as string}</p>
        </div>

        <button type="submit" style={{ marginTop: "10px" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormValidation;
