import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

import StepIndicator from "../../components/ngo-registration/StepIndicator";

import BasicInfoStep, {
  type BasicInfoData,
} from "../../components/ngo-registration/BasicInfoStep";

import ProfileStep, {
  type ProfileData,
} from "../../components/ngo-registration/ProfileStep";

import BankStep, {
  type BankData,
} from "../../components/ngo-registration/BankStep";

import DocumentStep, {
  type DocumentData,
} from "../../components/ngo-registration/DocumentStep";

import ReviewStep from "../../components/ngo-registration/ReviewStep";

const steps = ["Basic Info", "Profile", "Bank", "Documents", "Review"];

export default function NgoRegistration() {
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(0);

  const [basicInfo, setBasicInfo] = useState<BasicInfoData>({
    ngoName: "",
    registrationNumber: "",
    email: "",
    contactNumber: "",
    ngoType: "",
    address: "",
  });

  const [profile, setProfile] = useState<ProfileData>({
    description: "",
    vision: "",
    logoUrl: "",
    coverImageUrl: "",
    profileImageUrl: "",
  } as ProfileData);

  const [bank, setBank] = useState<BankData>({
    accountHolderName: "",
    bankName: "",
    accountNumber: "",
    ifscCode: "",
    email: "",
  });

  const [documents, setDocuments] = useState<DocumentData>({
    registrationCertificate: null,
    panCard: null,
    taxExemptionCertificate: null,
    cancelledCheque: null,
  });

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    const payload = {
      basicInfo,
      profile,
      bank,
      documents,
    };

    console.log(payload);

    alert("NGO Registration Submitted Successfully!");

    navigate("/login");
  };

  useEffect(() => {
    const allowed = sessionStorage.getItem("pendingNgoRegistration");

    if (!allowed) {
      navigate("/register");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#F6F8F5] py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}

        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-[#1A2E1D]">
            NGO Registration
          </h1>

          <p className="text-gray-500 mt-3">
            Register your NGO to start creating campaigns and receiving
            donations.
          </p>
        </div>

        {/* Progress */}

        <div className="mb-10">
          <StepIndicator currentStep={currentStep} steps={steps} />
        </div>

        {/* Form */}

        {currentStep === 0 && (
          <BasicInfoStep data={basicInfo} onChange={setBasicInfo} />
        )}

        {currentStep === 1 && (
          <ProfileStep data={profile} onChange={setProfile} />
        )}

        {currentStep === 2 && <BankStep data={bank} onChange={setBank} />}

        {currentStep === 3 && (
          <DocumentStep data={documents} onChange={setDocuments} />
        )}

        {currentStep === 4 && (
          <ReviewStep
            basicInfo={basicInfo}
            profile={profile}
            bank={bank}
            documents={documents}
          />
        )}

        {/* Footer */}

        <div className="flex justify-between mt-10">
          <button
            onClick={previousStep}
            disabled={currentStep === 0}
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 bg-white disabled:opacity-40"
          >
            <ArrowLeft size={18} />
            Previous
          </button>

          {currentStep === steps.length - 1 ? (
            <button
              onClick={handleSubmit}
              className="flex items-center gap-2 px-8 py-3 rounded-xl bg-[#2F6B3D] text-white hover:bg-[#245731]"
            >
              <Check size={18} />
              Submit Registration
            </button>
          ) : (
            <button
              onClick={nextStep}
              className="flex items-center gap-2 px-8 py-3 rounded-xl bg-[#2F6B3D] text-white hover:bg-[#245731]"
            >
              Next
              <ArrowRight size={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
