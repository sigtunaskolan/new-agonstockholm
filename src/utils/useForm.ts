import { useState, ChangeEvent } from 'react';

// Commonly used validation patterns - available for direct export/import
export const ValidationPatterns = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  required: /(.+)/,
  min: (length: number) => new RegExp(`^.{${length},}$`),
};

export type ValidationRule = {
  pattern: RegExp;
  message: string;
};

type FormValidation<T> = {
  [K in keyof T]?: ValidationRule[];
};

export function useForm<T extends Record<string, unknown>>(
  initialValues: T,
  validations: FormValidation<T>
) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validate a single field
  const validateField = (name: keyof T, value: unknown): string => {
    const fieldValidations = validations[name];
    if (!fieldValidations) return '';
    
    for (const validation of fieldValidations) {
      if (!validation.pattern.test(String(value))) {
        return validation.message;
      }
    }
    
    return '';
  };

  // Validate all fields
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    let isValid = true;
    
    Object.keys(validations).forEach((key) => {
      const fieldName = key as keyof T;
      const error = validateField(fieldName, values[fieldName]);
      
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });
    
    setErrors(newErrors);
    return isValid;
  };

  // Handle input change
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    
    // Validate on change if field has been touched
    if (touched[name]) {
      const error = validateField(name as keyof T, value);
      setErrors({ ...errors, [name]: error });
    }
  };

  // Handle blur event to mark field as touched
  const handleBlur = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setTouched({ ...touched, [name]: true });
    const error = validateField(name as keyof T, value);
    setErrors({ ...errors, [name]: error });
  };

  // Handle form submission
  const handleSubmit = async (
    onSubmit: (values: T) => Promise<void>,
    onError?: (errors: Record<string, string>) => void
  ) => {
    setIsSubmitting(true);
    
    // Validate all fields before submission
    const isValid = validateForm();
    
    if (isValid) {
      try {
        await onSubmit(values);
        // Reset form after successful submission if needed
        // setValues(initialValues);
        // setErrors({});
        // setTouched({});
      } catch (error) {
        if (onError) onError({ form: 'Form submission failed' });
      }
    } else {
      if (onError) onError(errors);
    }
    
    setIsSubmitting(false);
  };

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    setValues,
  };
}