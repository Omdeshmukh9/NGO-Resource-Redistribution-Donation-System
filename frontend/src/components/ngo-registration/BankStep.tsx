import type { ChangeEvent } from "react";

export type BankData = {
  accountHolderName: string;
  bankName: string;
  accountNumber: string;
  ifscCode: string;
  email: string;
};

type Props = {
  data: BankData;
  onChange: (data: BankData) => void;
};

export default function BankStep({ data, onChange }: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#1A2E1D]">Bank Details</h2>

        <p className="text-gray-500 mt-2">
          Donations will be transferred to this account.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="font-medium block mb-2">Account Holder Name</label>

          <input
            name="accountHolderName"
            value={data.accountHolderName}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3"
          />
        </div>

        <div>
          <label className="font-medium block mb-2">Bank Name</label>

          <input
            name="bankName"
            value={data.bankName}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3"
          />
        </div>

        <div>
          <label className="font-medium block mb-2">Account Number</label>

          <input
            name="accountNumber"
            value={data.accountNumber}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3"
          />
        </div>

        <div>
          <label className="font-medium block mb-2">IFSC Code</label>

          <input
            name="ifscCode"
            value={data.ifscCode}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3"
          />
        </div>
      </div>
    </div>
  );
}
