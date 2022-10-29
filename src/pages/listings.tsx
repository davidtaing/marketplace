import { useEffect, useState } from "react";
import fetch from "node-fetch";
import { LayoutContainer } from "../components/LayoutContainer";
import { ListingCard } from "../features/Listings/ListingCard";
import { Task } from "../types";

export enum TaskStatus {
  "Loading" = "LOADING",
  "Success" = "SUCCESS",
  "Error" = "ERROR",
}

const getListingsUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/tasks`;

const ListingsPage = () => {
  const [listings, setListings] = useState<Task[]>([]);
  const [status, setStatus] = useState(TaskStatus.Loading);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(getListingsUrl)
      .then((res) => res.json())
      .then((data: Task[]) => {
        setListings(data);
        setStatus(TaskStatus.Success);
      })
      .catch((err: any) => {
        setStatus(TaskStatus.Error);
        setError(err.message);
      });
  }, []);

  if (status === TaskStatus.Loading)
    return (
      <LayoutContainer>
        <div>Loading</div>
      </LayoutContainer>
    );

  return (
    <LayoutContainer>
      <div>
        <ul className="md:grid md:grid-cols-3 md:gap-6">
          {listings.map((item: Task) => (
            <ListingCard
              key={item.id}
              status={item.status}
              details={item.details}
              budget={item.budget}
              category={item.category}
              postcode={item.location.name}
            />
          ))}
        </ul>
      </div>
    </LayoutContainer>
  );
};

export default ListingsPage;
