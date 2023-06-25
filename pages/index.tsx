import Container from "@/components/Utils/UI/Container";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <Link className="text-blue-700 underline" href="/wallet">
        Go to Wallet
      </Link>
    </Container>
  );
}
