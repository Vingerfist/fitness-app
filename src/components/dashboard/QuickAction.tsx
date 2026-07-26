type Props = {
    title: string;
  };
  
  export default function QuickAction({ title }: Props) {
    return (
      <button className="rounded-xl bg-black px-6 py-4 font-semibold text-white hover:opacity-90">
        {title}
      </button>
    );
  }