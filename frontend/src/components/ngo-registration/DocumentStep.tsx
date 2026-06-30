import { useState } from "react";

import UploadCard from "./UploadCard";

export type DocumentData = {
  registrationCertificate: File | null;
  panCard: File | null;
  taxExemptionCertificate: File | null;
  cancelledCheque: File | null;
};

type Props = {
  data: DocumentData;
  onChange: (data: DocumentData) => void;
};

export default function DocumentStep({ data, onChange }: Props) {
  const [documents, setDocuments] = useState(data);

  const updateFile = (key: keyof DocumentData, file: File | null) => {
    const updated = {
      ...documents,
      [key]: file,
    };

    setDocuments(updated);
    onChange(updated);
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#1A2E1D]">
          Verification Documents
        </h2>

        <p className="text-gray-500 mt-2">
          Upload all mandatory documents for NGO verification.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <UploadCard
          title="Registration Certificate"
          description="Government registration certificate"
          file={documents.registrationCertificate}
          onChange={(file) => updateFile("registrationCertificate", file)}
        />

        <UploadCard
          title="PAN Card"
          description="NGO PAN Card"
          file={documents.panCard}
          onChange={(file) => updateFile("panCard", file)}
        />

        <UploadCard
          title="80G / 12A Certificate"
          description="Tax exemption certificate (Optional)"
          file={documents.taxExemptionCertificate}
          onChange={(file) => updateFile("taxExemptionCertificate", file)}
        />

        <UploadCard
          title="Cancelled Cheque"
          description="For bank verification"
          file={documents.cancelledCheque}
          onChange={(file) => updateFile("cancelledCheque", file)}
        />
      </div>
    </div>
  );
}
