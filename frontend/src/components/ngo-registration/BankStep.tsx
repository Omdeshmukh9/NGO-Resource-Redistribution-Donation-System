import type { ChangeEvent } from "react";

export type BankData = {
  accountHolderName: string;
  bankName: string;
  accountNumber: string;
  ifscCode: string;
};

type Props = {
  data: BankData;
  onChange: (data: BankData) => void;
  errors: Record<string, string>;
};

export default function BankStep({ data, onChange, errors }: Props) {
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
        {/* ACCOUNT HOLDER */}

        <div>
          <label className="block mb-2 font-medium">Account Holder Name</label>

          <input
            name="accountHolderName"
            value={data.accountHolderName}
            onChange={handleChange}
            placeholder="Helping Hands Foundation"
            className={`w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-[#2F6B3D]
              ${
                errors.accountHolderName ? "border-red-500" : "border-gray-300"
              }`}
          />

          {errors.accountHolderName && (
            <p className="mt-1 text-sm text-red-500">
              {errors.accountHolderName}
            </p>
          )}
        </div>

        {/* BANK NAME */}

        <div>
          <label className="block mb-2 font-medium">Bank Name</label>

          <input
            name="bankName"
            value={data.bankName}
            onChange={handleChange}
            placeholder="State Bank of India"
            className={`w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-[#2F6B3D]
              ${errors.bankName ? "border-red-500" : "border-gray-300"}`}
          />

          {errors.bankName && (
            <p className="mt-1 text-sm text-red-500">{errors.bankName}</p>
          )}
        </div>

        {/* ACCOUNT NUMBER */}

        <div>
          <label className="block mb-2 font-medium">Account Number</label>

          <input
            name="accountNumber"
            value={data.accountNumber}
            onChange={handleChange}
            inputMode="numeric"
            placeholder="123456789012"
            className={`w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-[#2F6B3D]
              ${errors.accountNumber ? "border-red-500" : "border-gray-300"}`}
          />

          {errors.accountNumber && (
            <p className="mt-1 text-sm text-red-500">{errors.accountNumber}</p>
          )}
        </div>

        {/* IFSC */}

        <div>
          <label className="block mb-2 font-medium">IFSC Code</label>

          <input
            name="ifscCode"
            value={data.ifscCode}
            onChange={(e) => {
              e.target.value = e.target.value.toUpperCase();
              handleChange(e);
            }}
            placeholder="SBIN0001234"
            className={`w-full rounded-xl border px-4 py-3 uppercase outline-none focus:ring-2 focus:ring-[#2F6B3D]
              ${errors.ifscCode ? "border-red-500" : "border-gray-300"}`}
          />

          {errors.ifscCode && (
            <p className="mt-1 text-sm text-red-500">{errors.ifscCode}</p>
          )}
        </div>
      </div>
    </div>
  );
}
