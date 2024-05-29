"use client";

import { getProductCategory } from "@/action/user.action";
import { Category, Product } from "@prisma/client";
import { useEffect, useState } from "react";



export const UseCategory = (category: Category) => {
  const [data, setData] = useState<Product[] | []>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!category) return

    const fetchData = async () => {
      setLoading(true)
      setError(null)

      try {
        const data = await getProductCategory(category);
        if (data) {
          setData(data);
        } else {
          setError('No data returned');
        }
      } catch (error: any) {
        setError(error.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    }

    fetchData()

  }, [category])

  return { data, loading, error }
}
