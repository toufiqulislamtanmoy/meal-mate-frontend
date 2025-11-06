export interface LastUpdate {
  user_name: string;
  date_time: string;
}

export interface Family {
  family_name: string;
  image: string;
  lastupdate: LastUpdate;
}

export interface Expense {
  id: number;
  item: string;
  by: string;
  remainingBalance: number;
  amount: number;
}

export interface Deposit {
  id: number;
  item: string;
  by: string;
  newBalance: number;
  amount: number;
}