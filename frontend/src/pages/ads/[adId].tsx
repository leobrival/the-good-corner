import Layout from "@/components/Layout";
import { useRouter } from "next/router";

export default function AdDetails() {
  const router = useRouter();
  const { adId } = router.query;

  return (
    <Layout title={`annonce ${adId}`}>
      <h1>Display details of ad with id {adId}</h1>
    </Layout>
  );
}