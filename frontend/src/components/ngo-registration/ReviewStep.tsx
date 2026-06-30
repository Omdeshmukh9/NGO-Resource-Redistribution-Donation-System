import type { BasicInfoData } from "./BasicInfoStep";
import type { ProfileData } from "./ProfileStep";
import type { BankData } from "./BankStep";
import type { DocumentData } from "./DocumentStep";

type Props = {
  basicInfo: BasicInfoData;
  profile: ProfileData;
  bank: BankData;
  documents: DocumentData;
};

export default function ReviewStep({
  basicInfo,
  profile,
  bank,
  documents,
}: Props) {
  return (
    <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8 space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-[#1A2E1D]">
          Review Application
        </h2>

        <p className="text-gray-500 mt-2">
          Verify everything before submitting.
        </p>
      </div>

      {/* Basic Information */}

      <section>
        <h3 className="font-semibold text-lg mb-4">Basic Information</h3>

        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <Info label="NGO Name" value={basicInfo.ngoName} />

          <Info
            label="Registration Number"
            value={basicInfo.registrationNumber}
          />

          <Info label="Email" value={basicInfo.email} />

          <Info label="Contact Number" value={basicInfo.contactNumber} />

          <Info label="NGO Type" value={basicInfo.ngoType} />

          <Info label="Address" value={basicInfo.address} />
        </div>
      </section>

      {/* Profile */}

      <section>
        <h3 className="font-semibold text-lg mb-4">NGO Profile</h3>

        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <Info label="Description" value={profile.description} />

          <Info label="Vision" value={profile.vision} />
        </div>
      </section>

      {/* Bank */}

      <section>
        <h3 className="font-semibold text-lg mb-4">Bank Details</h3>

        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <Info label="Account Holder" value={bank.accountHolderName} />

          <Info label="Bank" value={bank.bankName} />

          <Info label="Account Number" value={bank.accountNumber} />

          <Info label="IFSC" value={bank.ifscCode} />

          <Info label="Email" value={bank.email} />
        </div>
      </section>

      {/* Documents */}

      <section>
        <h3 className="font-semibold text-lg mb-4">Uploaded Documents</h3>

        <div className="space-y-2 text-sm">
          <Info
            label="Registration Certificate"
            value={documents.registrationCertificate?.name ?? "Not uploaded"}
          />

          <Info
            label="PAN Card"
            value={documents.panCard?.name ?? "Not uploaded"}
          />

          <Info
            label="80G / 12A"
            value={documents.taxExemptionCertificate?.name ?? "Not uploaded"}
          />

          <Info
            label="Cancelled Cheque"
            value={documents.cancelledCheque?.name ?? "Not uploaded"}
          />
        </div>
      </section>
    </div>
  );
}

type InfoProps = {
  label: string;
  value: string;
};

function Info({ label, value }: InfoProps) {
  return (
    <div className="border rounded-xl p-4">
      <p className="text-gray-500 text-xs">{label}</p>

      <p className="font-medium mt-1 break-words">{value || "-"}</p>
    </div>
  );
}
