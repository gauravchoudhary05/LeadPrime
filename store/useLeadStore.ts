import { create } from 'zustand';
import type { LeadFormData } from '@/types';
import { LeadFormSchema } from '@/types';

// ─── Lead Form State ─────────────────────────────────────────────────────────
interface LeadFormState {
  formData: Partial<LeadFormData>;
  errors: Partial<Record<keyof LeadFormData, string>>;
  isSubmitting: boolean;
  isSuccess: boolean;
  hasError: boolean;

  // Actions
  setField: (key: keyof LeadFormData, value: string | undefined) => void;
  setErrors: (errors: Partial<Record<keyof LeadFormData, string>>) => void;
  resetForm: () => void;
  submitForm: () => Promise<void>;
}

const initialFormData: Partial<LeadFormData> = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: undefined,
  message: '',
  budget: undefined,
};

export const useLeadStore = create<LeadFormState>((set, get) => ({
  formData: { ...initialFormData },
  errors: {},
  isSubmitting: false,
  isSuccess: false,
  hasError: false,

  setField: (key, value) => {
    set((state) => ({
      formData: { ...state.formData, [key]: value },
      // Clear the error for this field when user starts typing
      errors: { ...state.errors, [key]: undefined },
      hasError: false,
    }));
  },

  setErrors: (errors) => {
    set({ errors, hasError: true });
  },

  resetForm: () => {
    set({
      formData: { ...initialFormData },
      errors: {},
      isSubmitting: false,
      isSuccess: false,
      hasError: false,
    });
  },

  submitForm: async () => {
    const { formData } = get();

    // Validate with Zod
    const result = LeadFormSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof LeadFormData, string>> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof LeadFormData;
        if (!fieldErrors[field]) {
          fieldErrors[field] = issue.message;
        }
      });
      set({ errors: fieldErrors, hasError: true });
      return;
    }

    set({ isSubmitting: true, errors: {}, hasError: false });

    try {
      // Submit via FormSubmit to gaurav@leadprime.pro
      const requestBody = {
        name: result.data.name,
        email: result.data.email,
        phone: result.data.phone,
        company: result.data.company || 'Not provided',
        service: result.data.service || 'Not specified',
        budget: result.data.budget || 'Not specified',
        message: result.data.message || 'No message provided'
      };

      const res = await fetch('https://formsubmit.co/ajax/gaurav@leadprime.pro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      if (!res.ok) {
        throw new Error('Failed to submit form');
      }

      set({ isSubmitting: false, isSuccess: true });

      // Reset success state after 5 seconds
      setTimeout(() => {
        set({ isSuccess: false });
        get().resetForm();
      }, 5000);
    } catch {
      set({
        isSubmitting: false,
        hasError: true,
        errors: { name: 'Something went wrong. Please try again.' },
      });
    }
  },
}));
