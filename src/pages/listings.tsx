import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import fetch from "node-fetch";

import { LayoutContainer } from "../components/LayoutContainer";
import { ListingCard } from "../features/Listings/ListingCard";
import { QueryStatus, Task, TaskCategory } from "../types";
import { FeatureFlag } from "../features/FeatureFlag";
import { CategoryFilterGroup } from "../features/Listings/CategoryFilterGroup";

const categories = Object.keys(TaskCategory) as TaskCategory[];

const getListingsUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/tasks`;

const ListingsPage = () => {
  const router = useRouter();
  const [listings, setListings] = useState<Task[]>([]);
  const [filter, setFilter] = useState(TaskCategory.All);
  const [status, setStatus] = useState(QueryStatus.Loading);
  const [error, setError] = useState("");
  const filteredListings =
    filter !== "All"
      ? listings.filter((listing) => listing.category === filter)
      : listings;

  useEffect(() => {
    fetch(getListingsUrl)
      .then((res) => res.json())
      .then((data: Task[]) => {
        setListings(data);
        setStatus(QueryStatus.Success);
      })
      .catch((err: any) => {
        setStatus(QueryStatus.Error);
        setError(err.message);
      });
  }, []);

  if (status === QueryStatus.Loading)
    return (
      <LayoutContainer>
        <div>Loading</div>
      </LayoutContainer>
    );

  return (
    <LayoutContainer>
      <div className="flex gap-6 my-6">
        <CategoryFilterGroup
          categories={categories}
          filter={filter}
          setFilter={setFilter}
        />
      </div>
      <div>
        <ul className="md:grid md:grid-cols-3 md:gap-6">
          {filteredListings.map((item: Task) => (
            <ListingCard
              key={item.id}
              status={item.status}
              details={item.details}
              budget={item.budget}
              category={item.category}
              postcode={item.location.name}
              onClick={() => {
                router.push(`/tasks/${item.id}`);
              }}
            />
          ))}
        </ul>
      </div>
    </LayoutContainer>
  );
};

export default FeatureFlag(ListingsPage, { isPage: true });
