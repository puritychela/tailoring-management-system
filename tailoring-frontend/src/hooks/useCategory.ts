import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import apiClient from "../services/apiClient";

export interface Category {
  id: number;
  name: string;
}

const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    apiClient
      .get<Category[]>("/categories", { signal: controller.signal })
      .then((res) => {
        setCategories(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);
  return { categories, isLoading, error, setError, setCategories };
};

export default useCategories;
