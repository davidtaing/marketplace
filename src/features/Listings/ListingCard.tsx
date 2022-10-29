interface ListingCardProps {
  details: string;
  budget: number;
  category: string;
  postcode: string;
  status: string;
}

export const ListingCard = ({
  details,
  budget,
  category,
  postcode,
  status,
}: ListingCardProps) => {
  return (
    <li className="border border-slate-600 p-4 font-semibold">
      <h4 className="text-slate-900 text-l font-bold">{details}</h4>
      <h2 className="mt-4 text-slate-900 text-3xl">${budget}</h2>
      <div className="mt-3 flex justify-between">
        <span>{category}</span>
        <span>{postcode}</span>
      </div>
      <p className="mt-3 uppercase">{status}</p>
    </li>
  );
};
