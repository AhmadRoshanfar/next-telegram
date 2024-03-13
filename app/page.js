import Card from "@/components/Card";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-center text-3xl font-bold mt-2 mb-2">Order Food</h1>
      <Card imageSrc="/watch.png" title="Watch"></Card>
      <Card imageSrc="/watch.png" title="Watch"></Card>
      <Card imageSrc="/watch.png" title="Watch"></Card>
      <Card imageSrc="/watch.png" title="Watch"></Card>
      <Card imageSrc="/watch.png" title="Watch"></Card>
      <Card imageSrc="/watch.png" title="Watch"></Card>
      <Card imageSrc="/watch.png" title="Watch"></Card>
      <Card imageSrc="/watch.png" title="Watch"></Card>
      <Card imageSrc="/watch.png" title="Watch"></Card>
      <Card imageSrc="/watch.png" title="Watch"></Card>
      <Card imageSrc="/watch.png" title="Watch"></Card>
      <div className="text-center text-3xl font-bold bg-cyan-800">
        <Link href="/checkout">Checkout</Link>
      </div>
    </>
  );
}
