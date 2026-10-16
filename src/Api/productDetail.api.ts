"use server"

export const getProductDetail = async (id: string) => {
  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/products/${id}`,
  );
  const data = await response.json();

  if (response.status === 400 || response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(`Failed to fetch product: ${response.status}`);
  }

  return data;
};
