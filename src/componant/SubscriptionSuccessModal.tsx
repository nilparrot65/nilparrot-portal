import { useNavigate } from 'react-router-dom';

interface SubscriptionSuccessModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (type: boolean) => void;
  message: string;
}

export const SubscriptionSuccessModal = ({
  isModalOpen, setIsModalOpen, message
}: SubscriptionSuccessModalProps) => {

const navigate = useNavigate();

const homeNavigate = ()=>{
  setIsModalOpen(false);
  navigate('/', { state: { activeMenu: 'home' } });
}

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-sm overflow-hidden bg-white rounded-2xl shadow-xl transition-all">
            <div className="p-6 text-center">
              {/* Animated Success Checkmark Icon */}
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
                <svg
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              {/* Heading */}
              <h3 className="text-xl font-bold text-slate-900">Thank you!</h3>

              {/* Body Text */}
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {message}
              </p>

              {/* Action Button */}
              <div className="mt-6">
                <button
                  onClick={()=>homeNavigate(false)}
                  className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition"
                >
                  Continue to Nilparrot Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SubscriptionSuccessModal;
