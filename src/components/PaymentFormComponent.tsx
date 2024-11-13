import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  SnackbarCloseReason,
  Stack,
  styled,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const CustomTextField = styled(TextField)({
  "& .MuiInputBase-root": {
    borderRadius: "30px",
    backgroundColor: "transparent",
    color: "#FFF",
  },
  "& .MuiOutlinedInput-root": {
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#FFF",
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#FFF",
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#FFF",
  },
});

const CustomSelect = styled(Select)({
  borderRadius: "30px",
  borderColor: "#FFF",
  color: "#FFF",
  "& .MuiOutlinedInput-root": {
    borderRadius: "30px",
    backgroundColor: "transparent",
    color: "#FFF",
  },
  ".MuiSelect-icon": {
    color: "#FFF",
  },
  ".MuiOutlinedInput-notchedOutline": {
    borderColor: "#FFF",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#FFF",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#FFF",
  },
});

interface FormType {
  name: string;
  cardNumber: string;
  month: string;
  year: string;
  cvv: string;
}

const PaymentFormComponent = () => {
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormType>({
    defaultValues: {
      name: "",
      cardNumber: "",
      month: "",
      year: "",
      cvv: "",
    },
  });

  const onSubmit = (data: FormType) => {
    setIsSnackbarOpen(true);
    console.log(data);
    reset();
  };

  const handleClose = (
    _event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setIsSnackbarOpen(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Stack spacing={1.5} sx={{ color: "#FFF" }}>
        <InputLabel htmlFor="name-input" sx={{ color: "inherit" }}>
          Name
        </InputLabel>
        <CustomTextField
          id="name-input"
          size="small"
          placeholder="Meet Patel"
          {...register("name", {
            required: "Name is required",
          })}
          error={!!errors.name}
          helperText={errors.name?.message}
        />

        <InputLabel htmlFor="card-number-input" sx={{ color: "inherit" }}>
          Card number
        </InputLabel>
        <CustomTextField
          id="card-number-input"
          size="small"
          placeholder="0000 0000 0000 0000"
          type="tel"
          inputMode="numeric"
          {...register("cardNumber", {
            required: "Card Number is required",
            pattern: {
              value: /[0-9\s]{13,19}/,
              message: "Enter correct number",
            },
          })}
          error={!!errors.cardNumber}
          helperText={errors.cardNumber?.message}
        />

        <InputLabel htmlFor="month-input" sx={{ color: "inherit" }}>
          Card expirstion
        </InputLabel>
        <Box display="flex" gap="8px" width="100%">
          <CustomSelect
            id="month-input"
            defaultValue=""
            displayEmpty
            size="small"
            sx={{ flex: 1 }}
            {...register("month", {
              required: "Month is required",
            })}
            error={!!errors.month}
          >
            <MenuItem value="" disabled>
              Month
            </MenuItem>
            <MenuItem value={1}>01</MenuItem>
            <MenuItem value={2}>02</MenuItem>
            <MenuItem value={3}>03</MenuItem>
            <MenuItem value={4}>04</MenuItem>
            <MenuItem value={5}>05</MenuItem>
            <MenuItem value={6}>06</MenuItem>
            <MenuItem value={7}>07</MenuItem>
            <MenuItem value={8}>08</MenuItem>
            <MenuItem value={9}>09</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={11}>11</MenuItem>
            <MenuItem value={12}>12</MenuItem>
          </CustomSelect>

          <CustomSelect
            defaultValue=""
            displayEmpty
            size="small"
            sx={{ flex: 1 }}
            {...register("year", {
              required: "Year is required",
            })}
            error={!!errors.year}
          >
            <MenuItem value="" disabled>
              Year
            </MenuItem>
            <MenuItem value={24}>2024</MenuItem>
            <MenuItem value={25}>2025</MenuItem>
            <MenuItem value={26}>2026</MenuItem>
            <MenuItem value={27}>2027</MenuItem>
            <MenuItem value={28}>2028</MenuItem>
            <MenuItem value={29}>2029</MenuItem>
            <MenuItem value={30}>2030</MenuItem>
            <MenuItem value={31}>2031</MenuItem>
            <MenuItem value={32}>2032</MenuItem>
            <MenuItem value={33}>2033</MenuItem>
            <MenuItem value={34}>2034</MenuItem>
          </CustomSelect>
        </Box>

        <InputLabel htmlFor="cvv-input" sx={{ color: "inherit" }}>
          Card Security Code
        </InputLabel>
        <CustomTextField
          id="cvv-input"
          size="small"
          placeholder="Code"
          type="password"
          {...register("cvv", {
            required: "cvv is required",
            maxLength: {
              value: 3,
              message: "Code must contains 3 digits",
            },
            minLength: {
              value: 3,
              message: "Code must contains 3 digits",
            },
            pattern: {
              value: /^\d+$/,
              message: "Code must contains 3 digits",
            },
          })}
          error={!!errors.cvv}
          helperText={errors.cvv?.message}
        />
      </Stack>

      <Button
        type="submit"
        onSubmit={() => handleSubmit}
        sx={{
          width: "100%",
          bgcolor: "#FFD012",
          borderRadius: "30px",
          py: "14px",
          color: "#002700",
          textTransform: "capitalize",
          mt: 3,
        }}
      >
        Continue
      </Button>

      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Your payment is succesfull!"
      />
    </form>
  );
};

export const PaymentForm = React.memo(PaymentFormComponent);
