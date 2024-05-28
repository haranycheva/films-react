import { useState } from "react";

export const useErrorAndLoading = () => {
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  return [error, setError, isLoading, setLoading];
};
