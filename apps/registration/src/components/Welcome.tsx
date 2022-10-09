import PhoneInput from '@/components/PhoneInput';
import { useAuth } from '@/contexts/AuthContext';
import { useState } from 'preact/hooks';

export const Welcome = () => {
  const [obj, setObj] = useState('');
  const { user, status, login } = useAuth();
  
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="text-2xl">Welcome to Registration</div>

      <div className="mt-4">
        {status === 'unauthenticated' && (
          <button
            className="px-4 py-2 bg-black hover:bg-gray-700 text-white text-lg rounded-md"
            onClick={() => login()}
          >
            Login with Google
          </button>
        )}
        
        {status === 'authenticated' && (
          <div className="flex flex-row items-center space-x-2">
            <div><span className="font-semibold">{user!.name}</span> ({user!.email})</div>
            <img className="w-8 h-8 rounded-md" src={user!.picture} alt="" />
          </div>
        )}

        <PhoneInput
          name="phone"
          id="phone"
          placeholder="please enter phone"
          obj={obj}
          setObj={setObj}
          required={true}
        />
      </div>
    </div>
  );
};
