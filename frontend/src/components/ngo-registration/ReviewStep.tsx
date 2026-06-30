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
      {/* Header */}

      <div>
        <h2 className="text-2xl font-bold text-[#1A2E1D]">
          Review Application
        </h2>

        <p className="text-gray-500 mt-2">
          Verify all the information before submitting your NGO registration.
        </p>
      </div>

      {/* BASIC INFORMATION */}

      <section>
        <h3 className="font-semibold text-lg mb-4">Basic Information</h3>

        <div className="grid md:grid-cols-2 gap-4">
          <Info label="NGO Name" value={basicInfo.ngoName} />

          <Info
            label="Registration Number"
            value={basicInfo.registrationNumber}
          />

          <Info label="Email" value={basicInfo.email} />

          <Info label="Contact Number" value={basicInfo.contactNumber} />
        </div>
      </section>

      {/* NGO PROFILE */}

      <section>
        <h3 className="font-semibold text-lg mb-4">NGO Profile</h3>

        <div className="grid md:grid-cols-2 gap-4">
          <Info label="NGO Type" value={profile.ngoType} />

          <Info label="Vision" value={profile.vision} />

          <div className="md:col-span-2">
            <Info label="Description" value={profile.description} />
          </div>

          <Info label="Logo" value={profile.logo?.name ?? "Not Uploaded"} />

          <Info
            label="Cover Image"
            value={profile.coverImage?.name ?? "Not Uploaded"}
          />

          <Info
            label="Profile Image"
            value={profile.profileImage?.name ?? "Not Uploaded"}
          />
        </div>
      </section>

      {/* ADDRESS */}

      <section>
        <h3 className="font-semibold text-lg mb-4">Address</h3>

        <div className="grid md:grid-cols-2 gap-4">
          <Info label="Address Line 1" value={profile.addressLine1} />

          <Info label="Address Line 2" value={profile.addressLine2} />

          <Info label="City" value={profile.city} />

          <Info label="State" value={profile.state} />

          <Info label="Country" value={profile.country} />

          <Info label="Pincode" value={profile.pincode} />

          <Info label="Latitude" value={profile.latitude} />

          <Info label="Longitude" value={profile.longitude} />
        </div>
      </section>
      {/* BANK DETAILS */}

      <section>
        <h3 className="font-semibold text-lg mb-4">Bank Details</h3>

        <div className="grid md:grid-cols-2 gap-4">
          <Info label="Account Holder" value={bank.accountHolderName} />

          <Info label="Bank Name" value={bank.bankName} />

          <Info label="Account Number" value={bank.accountNumber} />

          <Info label="IFSC Code" value={bank.ifscCode} />
        </div>
      </section>

      {/* DOCUMENTS */}

      <section>
        <h3 className="font-semibold text-lg mb-4">Uploaded Documents</h3>

        <div className="grid md:grid-cols-2 gap-4">
          <Info
            label="Registration Certificate"
            value={documents.registrationCertificate?.name ?? "Not Uploaded"}
          />

          <Info
            label="PAN Card"
            value={documents.panCard?.name ?? "Not Uploaded"}
          />

          <Info
            label="80G / 12A Certificate"
            value={documents.taxExemptionCertificate?.name ?? "Not Uploaded"}
          />

          <Info
            label="Cancelled Cheque"
            value={documents.cancelledCheque?.name ?? "Not Uploaded"}
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
    <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
      <p className="text-xs text-gray-500">{label}</p>

      <p className="mt-1 font-medium text-[#1A2E1D] break-words">
        {value || "-"}
      </p>
    </div>
  );
}
