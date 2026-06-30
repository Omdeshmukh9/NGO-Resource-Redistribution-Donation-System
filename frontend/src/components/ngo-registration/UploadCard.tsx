import { Upload, FileText, CheckCircle2 } from "lucide-react";

type UploadCardProps = {
  title: string;
  description?: string;
  acceptedTypes?: string;
  file?: File | null;
  onChange: (file: File | null) => void;
};

export default function UploadCard({
  title,
  description,
  acceptedTypes = ".pdf,.png,.jpg,.jpeg",
  file,
  onChange,
}: UploadCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:border-[#2F6B3D]">
      <label className="cursor-pointer block">
        <div className="flex flex-col items-center justify-center text-center">
          {file ? (
            <>
              <CheckCircle2 size={42} className="text-green-600" />

              <p className="mt-3 font-semibold text-green-700">{file.name}</p>

              <p className="text-sm text-gray-500 mt-1">
                Click to replace file
              </p>
            </>
          ) : (
            <>
              <Upload size={42} className="text-[#2F6B3D]" />

              <h3 className="mt-4 text-lg font-semibold">{title}</h3>

              {description && (
                <p className="mt-2 text-sm text-gray-500">{description}</p>
              )}

              <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#2F6B3D] px-4 py-2 text-white">
                <FileText size={18} />
                Choose File
              </div>

              <p className="mt-3 text-xs text-gray-400">
                Accepted: {acceptedTypes}
              </p>
            </>
          )}
        </div>

        <input
          type="file"
          accept={acceptedTypes}
          className="hidden"
          onChange={(e) => onChange(e.target.files?.[0] ?? null)}
        />
      </label>
    </div>
  );
}
