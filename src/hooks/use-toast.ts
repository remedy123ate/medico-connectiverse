
// A simplified implementation to avoid React hooks issues
import { toast } from "sonner";

export const useToast = () => {
  return {
    toast,
    toasts: [] // Empty array as placeholder
  };
};

export { toast };
