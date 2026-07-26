type Props = {
    title: string;
    value: string;
  };
  
  export default function DashboardCard({ title, value }: Props) {
    return (
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <p className="text-gray-500">{title}</p>
  
        <h2 className="mt-2 text-3xl font-black">
          {value}
        </h2>
      </div>
    );
  }