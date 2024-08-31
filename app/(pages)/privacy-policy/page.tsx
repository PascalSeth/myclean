import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 text-gray-900">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-[#0A8791] mb-6">Privacy Policy</h1>
        <p className="text-sm text-gray-600 mb-6">Last updated: 06/23/2024</p>

        <h2 className="text-2xl font-semibold text-[#0A8791] mb-4">1. Introduction</h2>
        <p className="text-base mb-6">
          Welcome to myClean (“we,” “our,” or “us”). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and related services (collectively, the “Service”). Please read this privacy policy carefully. If you disagree with its terms, please discontinue use of our service immediately.
        </p>

        <h2 className="text-2xl font-semibold text-[#0A8791] mb-4">2. Information We Collect</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-[#0A8791] mb-2">2.1 Personal Information</h3>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Billing address</li>
            <li>Payment information</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-[#0A8791] mb-2">2.2 Location Data</h3>
          <p className="text-base">GPS location (with your permission)</p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-[#0A8791] mb-2">2.3 Usage Data</h3>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>App usage statistics</li>
            <li>Device information (e.g., device ID, model, operating system)</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-[#0A8791] mb-2">2.4 User Content</h3>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>Photos of trash/pickup locations</li>
            <li>Communication with service providers</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-[#0A8791] mb-4">3. App Permissions</h2>
        
        <div className="bg-[#e8f4f8] border-l-4 border-[#0A8791] p-4 rounded-lg mb-6">
          <h3 className="text-xl font-semibold text-[#0A8791] mb-2">3.1 Location Services</h3>
          <p className="text-base">
            <strong>Purpose:</strong> To locate nearby service providers and optimize routes for trash collection.<br />
            <strong>Usage:</strong> Precise location when the app is in use; approximate location in the background.
          </p>
        </div>

        <div className="bg-[#e8f4f8] border-l-4 border-[#0A8791] p-4 rounded-lg mb-6">
          <h3 className="text-xl font-semibold text-[#0A8791] mb-2">3.2 Camera</h3>
          <p className="text-base">
            <strong>Purpose:</strong> To allow users to take photos of trash or pickup locations.<br />
            <strong>Usage:</strong> Only when manually activated by the user within the app.
          </p>
        </div>

        <div className="bg-[#e8f4f8] border-l-4 border-[#0A8791] p-4 rounded-lg mb-6">
          <h3 className="text-xl font-semibold text-[#0A8791] mb-2">3.3 Storage</h3>
          <p className="text-base">
            <strong>Purpose:</strong> To save photos and app data locally on your device.<br />
            <strong>Usage:</strong> Read and write to your device’s storage.
          </p>
        </div>

        <div className="bg-[#e8f4f8] border-l-4 border-[#0A8791] p-4 rounded-lg mb-6">
          <h3 className="text-xl font-semibold text-[#0A8791] mb-2">3.4 Network/Internet Access</h3>
          <p className="text-base">
            <strong>Purpose:</strong> To communicate with our servers, process requests, and update the app.<br />
            <strong>Usage:</strong> Full network access when the app is in use.
          </p>
        </div>

        <div className="bg-[#e8f4f8] border-l-4 border-[#0A8791] p-4 rounded-lg mb-6">
          <h3 className="text-xl font-semibold text-[#0A8791] mb-2">3.5 Push Notifications</h3>
          <p className="text-base">
            <strong>Purpose:</strong> To send updates about your pickup requests, service provider arrivals, and promotional offers.<br />
            <strong>Usage:</strong> Send notifications to your device.
          </p>
        </div>

        <div className="bg-[#e8f4f8] border-l-4 border-[#0A8791] p-4 rounded-lg mb-6">
          <h3 className="text-xl font-semibold text-[#0A8791] mb-2">3.6 Microphone</h3>
          <p className="text-base">
            <strong>Purpose:</strong> To enable voice commands or audio notes for pickup instructions (if applicable).<br />
            <strong>Usage:</strong> Only when manually activated by the user within the app.
          </p>
        </div>

        <div className="bg-[#e8f4f8] border-l-4 border-[#0A8791] p-4 rounded-lg mb-6">
          <h3 className="text-xl font-semibold text-[#0A8791] mb-2">3.7 Phone State</h3>
          <p className="text-base">
            <strong>Purpose:</strong> To pause app activities during phone calls and ensure smooth operation.<br />
            <strong>Usage:</strong> Read phone status and identity.
          </p>
        </div>

        <div className="bg-[#e8f4f8] border-l-4 border-[#0A8791] p-4 rounded-lg mb-6">
          <h3 className="text-xl font-semibold text-[#0A8791] mb-2">3.8 Billing</h3>
          <p className="text-base">
            <strong>Purpose:</strong> To process in-app payments for services.<br />
            <strong>Usage:</strong> When making transactions within the app.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-[#0A8791] mb-4">4. How We Use Your Information</h2>
        <ul className="list-disc list-inside space-y-2 text-base mb-6">
          <li>Provide and maintain our Service</li>
          <li>Process and complete transactions</li>
          <li>Send you transaction confirmations and updates</li>
          <li>Improve and personalize user experience</li>
          <li>Develop new products, services, features, and functionality</li>
          <li>Communicate with you about our Service</li>
          <li>Provide customer support</li>
          <li>Ensure the security and integrity of our Service</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#0A8791] mb-4">5. Sharing of Your Information</h2>
        <p className="text-base mb-6">
          We may share your information with:
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Service providers (e.g., trash collectors, payment processors)</li>
            <li>Analytics partners</li>
            <li>Legal and regulatory authorities, as required by applicable law</li>
          </ul>
          We do not sell your personal information to third parties.
        </p>

        <h2 className="text-2xl font-semibold text-[#0A8791] mb-4">6. Data Storage and Security</h2>
        <p className="text-base mb-6">
          We implement appropriate technical and organizational measures to protect your information. However, no method of transmission over the Internet or electronic storage is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold text-[#0A8791] mb-4">7. Your Rights</h2>
        <ul className="list-disc list-inside space-y-2 text-base mb-6">
          <li>Access your personal information</li>
          <li>Correct inaccurate or incomplete information</li>
          <li>Request deletion of your personal information</li>
          <li>Object to or restrict processing of your data</li>
          <li>Data portability</li>
        </ul>
        <p className="text-base mb-6">
          To exercise these rights, please contact us using the information provided in the “Contact Us” section.
        </p>

        <h2 className="text-2xl font-semibold text-[#0A8791] mb-4">8. Location Data</h2>
        <p className="text-base mb-6">
          We collect and use location data to connect you with nearby service providers. You can disable location services through your device settings, but this may limit certain features of the app.
        </p>

        <h2 className="text-2xl font-semibold text-[#0A8791] mb-4">9. Children’s Privacy</h2>
        <p className="text-base mb-6">
          Our Service is not directed to children under 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to remove that information.
        </p>

        <h2 className="text-2xl font-semibold text-[#0A8791] mb-4">10. Changes to This Privacy Policy</h2>
        <p className="text-base mb-6">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the “Last updated” date.
        </p>

        <h2 className="text-2xl font-semibold text-[#0A8791] mb-4">11. Contact Us</h2>
        <p className="text-base mb-6">
          If you have any questions about this Privacy Policy, please contact us at:
          <br />
          <a href="mailto:contact@mycleanapp.org" className="text-blue-500 underline">contact@mycleanapp.org</a>
          <br />
          <a href="mailto:myclean.app@gmail.com" className="text-blue-500 underline">myclean.app@gmail.com</a>
        </p>

        <h2 className="text-2xl font-semibold text-[#0A8791] mb-4">12. Consent</h2>
        <p className="text-base">
          By using our Service, you consent to our Privacy Policy.
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
