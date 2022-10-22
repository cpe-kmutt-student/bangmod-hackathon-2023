import { StateUpdater, useState } from "preact/hooks";

const REQUIRED_POLICY = 1;

export const ConsentForm = ({
  setAcceptConsent,
}: {
  setAcceptConsent: StateUpdater<boolean>,
}) => {
  const [acceptedPolicy, setAcceptedPolicy] = useState<boolean[]>(Array(REQUIRED_POLICY).fill(false));

  const handleAcceptPolicy = (event: Event, policy: number) => {
    if (!(event.target instanceof HTMLInputElement)) return;
    acceptedPolicy[policy] = !acceptedPolicy[policy];
    setAcceptedPolicy(acceptedPolicy.slice());
  };

  const handleAcceptConsent = () => {
    const consentAccepted = (acceptedPolicy.every((policy) => policy === true));
    setAcceptConsent(consentAccepted);
  };

  return (
    <div className="relative h-full flex justify-center items-center mt-12 md:px-12">
      <div className="flex flex-col p-5 md:p-10 bg-white bg-opacity-20 drop-shadow-lg rounded-lg z-20">
        <div className="text-lg md:text-3xl font-semibold text-white text-center mb-5">นโยบายข้อมูลส่วนบุคคล</div>

        <p className="text-sm md:text-base bg-white h-64 overflow-y-auto rounded-lg p-4 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi et quo nulla doloremque iure? Quasi corporis dolore explicabo, fugiat expedita autem blanditiis nihil iusto molestiae tenetur laboriosam, facilis, earum quod?
        </p>

        <div className="flex flex-col px-4">
          <div className="flex flex-row items-center space-x-2">
            <input
              id="policy-1"
              name="policy-1"
              type="radio"
              className="w-5 h-5"
              onClick={(event) => handleAcceptPolicy(event, 0)}
              checked={acceptedPolicy[0]}
            />
            <label for="policy-1" className="text-white">Lorem ipsum</label>
          </div>
        </div>

        <button
          onClick={handleAcceptConsent}
          className="px-12 py-3 text-white disabled:text-white/50 bg-violet-500 hover:bg-violet-600 disabled:bg-violet-500/50 disabled:hover:bg-violet-500/50 rounded-lg mt-4 shadow-lg"
          disabled={(acceptedPolicy.every((policy) => policy === false))}
        >
          ยอมรับ
        </button>
      </div>
    </div>
  );
};
