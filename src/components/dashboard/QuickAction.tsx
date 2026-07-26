import Button from "@/components/ui/Button";

type Props = {
  title: string;
};

export default function QuickAction({ title }: Props) {
  return (
    <Button>
      {title}
    </Button>
  );
}