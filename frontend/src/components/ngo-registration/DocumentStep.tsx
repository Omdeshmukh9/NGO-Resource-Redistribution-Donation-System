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
  errors: Record<string, string>;
};

export default function DocumentStep({ data, onChange, errors }: Props) {
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
        <div>
          <UploadCard
            title="Registration Certificate"
            description="Government registration certificate"
            file={documents.registrationCertificate}
            onChange={(file) => updateFile("registrationCertificate", file)}
          />

          {errors.registrationCertificate && (
            <p className="text-red-500 text-sm mt-2">
              {errors.registrationCertificate}
            </p>
          )}
        </div>

        <div>
          <UploadCard
            title="PAN Card"
            description="NGO PAN Card"
            file={documents.panCard}
            onChange={(file) => updateFile("panCard", file)}
          />

          {errors.panCard && (
            <p className="text-red-500 text-sm mt-2">{errors.panCard}</p>
          )}
        </div>
        <div>
          <UploadCard
            title="80G / 12A Certificate"
            description="Tax exemption certificate (Optional)"
            file={documents.taxExemptionCertificate}
            onChange={(file) => updateFile("taxExemptionCertificate", file)}
          />
        </div>

        <div>
          <UploadCard
            title="Cancelled Cheque"
            description="For bank verification"
            file={documents.cancelledCheque}
            onChange={(file) => updateFile("cancelledCheque", file)}
          />

          {errors.cancelledCheque && (
            <p className="text-red-500 text-sm mt-2">
              {errors.cancelledCheque}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
