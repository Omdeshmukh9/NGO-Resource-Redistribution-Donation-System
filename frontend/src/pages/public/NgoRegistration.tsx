import { useEffect, useState } from "react";
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

import {
  validateBasicInfo,
  validateProfile,
  validateBank,
  validateDocuments,
} from "../../utils/ngoRegistrationValidation";

const steps = ["Basic Info", "Profile", "Bank", "Documents", "Review"];

export default function NgoRegistration() {
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(0);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const [basicInfo, setBasicInfo] = useState<BasicInfoData>({
    ngoName: "",
    registrationNumber: "",
    email: "",
    contactNumber: "",
  });

  const [profile, setProfile] = useState<ProfileData>({
    description: "",
    vision: "",
    ngoType: "",

    logo: null,
    coverImage: null,
    profileImage: null,

    addressLine1: "",
    addressLine2: "",

    city: "",
    state: "",
    country: "",
    pincode: "",

    latitude: "",
    longitude: "",
  });

  const [bank, setBank] = useState<BankData>({
    accountHolderName: "",
    bankName: "",
    accountNumber: "",
    ifscCode: "",
  });

  const [documents, setDocuments] = useState<DocumentData>({
    registrationCertificate: null,
    panCard: null,
    taxExemptionCertificate: null,
    cancelledCheque: null,
  });

  useEffect(() => {
    const allowed = sessionStorage.getItem("pendingNgoRegistration");

    if (!allowed) {
      navigate("/register");
    }
  }, [navigate]);
  const nextStep = () => {
    let validationErrors: Record<string, string> = {};

    switch (currentStep) {
      case 0: {
        const result = validateBasicInfo(basicInfo);
        validationErrors = result.errors;
        break;
      }

      case 1: {
        const result = validateProfile(profile);
        validationErrors = result.errors;
        break;
      }

      case 2: {
        const result = validateBank(bank);
        validationErrors = result.errors;
        break;
      }

      case 3: {
        const result = validateDocuments(documents);
        validationErrors = result.errors;
        break;
      }

      default:
        break;
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return; // block next step
    }

    setCurrentStep((prev) => prev + 1);
  };

  const previousStep = () => {
    setErrors({});

    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    const result = validateDocuments(documents);

    setErrors(result.errors);

    if (!result.valid) {
      return;
    }

    const payload = {
      basicInfo,
      profile,
      bank,
      documents,
    };

    console.log("FINAL PAYLOAD:", payload);

    alert("NGO Registration Submitted Successfully!");

    sessionStorage.removeItem("pendingNgoRegistration");

    navigate("/login");
  };
  return (
    <div className="min-h-screen bg-[#F6F8F5] py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-[#1A2E1D]">
            NGO Registration
          </h1>
          <p className="text-gray-500 mt-3">
            Register your NGO to start creating campaigns and receiving
            donations.
          </p>
        </div>

        {/* STEP INDICATOR */}
        <div className="mb-10">
          <StepIndicator currentStep={currentStep} steps={steps} />
        </div>

        {/* STEPS */}

        {currentStep === 0 && (
          <BasicInfoStep
            data={basicInfo}
            onChange={setBasicInfo}
            errors={errors}
          />
        )}

        {currentStep === 1 && (
          <ProfileStep data={profile} onChange={setProfile} errors={errors} />
        )}

        {currentStep === 2 && (
          <BankStep data={bank} onChange={setBank} errors={errors} />
        )}

        {currentStep === 3 && (
          <DocumentStep
            data={documents}
            onChange={setDocuments}
            errors={errors}
          />
        )}

        {currentStep === 4 && (
          <ReviewStep
            basicInfo={basicInfo}
            profile={profile}
            bank={bank}
            documents={documents}
          />
        )}

        {/* FOOTER BUTTONS */}
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
