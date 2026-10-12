import { getProductDetail } from "@/Api/productDetail.api";
import SwiperSlider from "@/app/_components/swiperSlide/swiperSlide";
import { notFound } from "next/navigation";
export default async function ProductDetail({params,}: { params: Promise<{ id: string }>}) {
  const { id } = await params;
  const {data} = await getProductDetail(id);
  if (!data) {
    notFound();
  }
  return (
    <>
      <SwiperSlider data={data} />
    </>
  );
}
