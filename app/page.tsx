import { Button } from "@/components/Button";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-5 justify-start items-start">
      <Button variant="default">Default</Button>
      <Button variant="light">light</Button>
      <Button variant="destructive">destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="whatsapp">whatsapp</Button>
      <Button variant="white">white</Button>
    </div>
  );
}
