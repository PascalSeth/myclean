import React from 'react';
import { motion } from 'framer-motion';

const DeleteAccountPolicy: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 text-gray-900">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-[#0A8791] mb-6">Delete my myClean Account</h1>
        
        <p className="text-lg mb-6">
          You can delete your account from the myClean app.
        </p>

        <div className="bg-[#fef2f2] border-l-4 border-[#e74c3c] p-4 rounded-lg mb-6">
          <h2 className="text-xl font-semibold text-[#e74c3c] mb-2">Important Note</h2>
          <p className="text-sm">
            Deleting your myClean account will remove access to all services associated with it.
            Before you can delete your account, myClean will ask you to verify your identity using
            a temporary verification code. This may require you to have a phone number attached
            to your account. If you’re not able to add a phone number in your account settings,
            contact us through the link below:
            <a
              href="mailto:createaccount@mycleanapp.org"
              className="text-blue-500 underline ml-1"
            >
              createaccount@mycleanapp.org
            </a>
          </p>
        </div>

        <div className="bg-[#e8f4f8] border-l-4 border-[#0A8791] p-4 rounded-lg mb-6">
          <h2 className="text-xl font-semibold text-[#0A8791] mb-2">How to Delete Your Account</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              Open the myClean app and tap the menu icon at the top left.
            </li>
            <li>
              Select “Settings,” then “Profile settings.”
            </li>
            <li>
              Tap “Delete Account.”
            </li>
            <li>
              Follow the remaining steps in the app to complete the process.
            </li>
          </ol>
        </div>

        <div className="bg-[#fef2f2] border-l-4 border-[#e74c3c] p-4 rounded-lg mb-6">
          <h2 className="text-xl font-semibold text-[#e74c3c] mb-2">After Deletion</h2>
          <p className="text-sm">
            After completing either process above, your account will be immediately deactivated.
            After 30 days it will be permanently deleted, and any unused credits, promotions, or
            rewards will be removed.
          </p>
          <p className="text-sm mt-2">
            myClean may retain certain information after account deletion as required or permitted by law.
          </p>
          <p className="text-sm mt-2">
            If you change your mind and want to keep your account, you can restore it by signing in at
            myClean within 90 days of deactivation.
          </p>
        </div>

        <div className="bg-[#e8f4f8] border-l-4 border-[#0A8791] p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-[#0A8791] mb-2">Need Help?</h2>
          <p className="text-sm">
            If you’re having trouble deleting your account, contact us through the mail below:
            <a
              href="mailto:deleteaccount@mycleanapp.org"
              className="text-blue-500 underline ml-1"
            >
              deleteaccount@mycleanapp.org
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default DeleteAccountPolicy;
