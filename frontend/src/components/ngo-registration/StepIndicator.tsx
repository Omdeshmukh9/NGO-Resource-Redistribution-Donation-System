interface StepIndicatorProps {
  currentStep: number;
  steps: string[];
}

const StepIndicator = ({ currentStep, steps }: StepIndicatorProps) => {
  return (
    <div className="flex items-center justify-between mb-10 overflow-x-auto">
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isCurrent = index === currentStep;

        return (
          <div key={step} className="flex items-center flex-1 min-w-[140px]">
            <div className="flex flex-col items-center">
              <div
                className={`
                  w-10
                  h-10
                  rounded-full
                  flex
                  items-center
                  justify-center
                  text-sm
                  font-semibold
                  transition-all
                  duration-300

                  ${
                    isCompleted || isCurrent
                      ? "bg-[#2F6B3D] text-white"
                      : "bg-gray-200 text-gray-500"
                  }
                `}
              >
                {index + 1}
              </div>

              <span
                className={`
                  mt-2
                  text-sm
                  whitespace-nowrap

                  ${
                    isCompleted || isCurrent
                      ? "text-[#2F6B3D] font-medium"
                      : "text-gray-500"
                  }
                `}
              >
                {step}
              </span>
            </div>

            {index !== steps.length - 1 && (
              <div
                className={`
                  flex-1
                  h-1
                  mx-3
                  rounded-full
                  transition-all
                  duration-300

                  ${isCompleted ? "bg-[#2F6B3D]" : "bg-gray-200"}
                `}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StepIndicator;
