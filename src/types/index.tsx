export interface Task {
  location: {
    type: string;
    name: string;
    coordinates: string;
  };
  status: string;
  photos: string[];
  _id: string;
  category: string;
  title: string;
  details: string;
  dueDate: Date;
  budget: 200;
  timeEstimate: string;
  timeOfArrival: string;
  customerId: string;
  createdAt: Date;
  updatedAt: Date;
  __v: 0;
  timeElapsed: string;
  id: string;
}

export enum QueryStatus {
  "Loading" = "LOADING",
  "Success" = "SUCCESS",
  "Error" = "ERROR",
}

export enum TaskCategory {
  "All" = "All",
  "Cleaning" = "Cleaning",
  "Gardening" = "Gardening",
  "Painting" = "Painting",
  "Other" = "Other",
}
