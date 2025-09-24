import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - MyClean App",
  description: "Terms of Service for MyClean waste management platform",
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-lg text-gray-600">MyClean App</p>
            <div className="mt-4 text-sm text-gray-500">
              <p>Effective Date: January 1, 2025</p>
              <p>Last Updated: January 1, 2025</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="mb-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <p className="text-gray-700 leading-relaxed">
                Welcome to MyClean App ("MyClean," "we," "our," or "us"). These Terms of Service ("Terms") govern your
                access to and use of the MyClean mobile application, website, and related services (collectively, the
                "Services").
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                By downloading, registering for, or using MyClean, you agree to these Terms. If you do not agree, please
                do not use our Services.
              </p>
            </div>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Overview of MyClean</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                MyClean is a waste management platform that provides direct waste collection services and connects
                households, businesses, and institutions with our verified partner waste collectors, recyclers, and
                disposal facilities.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We aim to make waste management efficient, transparent, and environmentally sustainable through:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>On-demand and scheduled waste pickups</li>
                <li>Waste segregation and recycling support</li>
                <li>Composting of organic waste</li>
                <li>Partnerships with recycling and disposal facilities</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Eligibility</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>MyClean is open to all individuals and organizations.</li>
                <li>
                  There is no age restriction for requesting waste services. However, if the account is created on
                  behalf of a minor, the parent/guardian will be responsible for all activity.
                </li>
                <li>Users must provide accurate, current, and complete details during registration.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>You are responsible for keeping your login details secure.</li>
                <li>All activities carried out under your account are your responsibility.</li>
                <li>
                  Notify us immediately via{" "}
                  <a href="mailto:support@mycleanapp.com" className="text-blue-600 hover:text-blue-800">
                    support@mycleanapp.com
                  </a>{" "}
                  if you suspect unauthorized access.
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Services Provided</h2>
              <p className="text-gray-700 leading-relaxed mb-4">MyClean offers:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Direct waste collection services by our trained MyClean staff.</li>
                <li>Waste collection via our verified third-party partners.</li>
                <li>Recycling and composting services for organic waste.</li>
                <li>Educational content on proper waste segregation and disposal.</li>
                <li>Secure payment and receipt tracking through the app.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. User Responsibilities</h2>
              <p className="text-gray-700 leading-relaxed mb-4">When using MyClean, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Schedule pickups only for waste you have the right to dispose of.</li>
                <li>Prepare waste in line with segregation and packaging guidelines provided in the app.</li>
                <li>Avoid placing hazardous or prohibited waste for collection unless approved in advance.</li>
                <li>Pay service fees through our authorized payment channels.</li>
                <li>Interact respectfully with MyClean staff and partner service providers.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Prohibited Activities</h2>
              <p className="text-gray-700 leading-relaxed mb-4">You may not:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Use the platform for unlawful purposes.</li>
                <li>Submit false or misleading information.</li>
                <li>Interfere with, hack, or reverse-engineer the MyClean system.</li>
                <li>Harass, threaten, or abuse MyClean staff, partner collectors, or other users.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Service Fulfillment</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  MyClean may assign your pickup request to our in-house team or to a verified partner, depending on
                  location, waste type, and availability.
                </li>
                <li>
                  While we aim for timely collection, delays may occur due to weather, traffic, or operational
                  constraints.
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Payments and Fees</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>All payments must be made through the app or other approved methods.</li>
                <li>Prices depend on waste type, quantity, frequency, and location.</li>
                <li>Payment is required before or immediately after service completion, unless otherwise agreed.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Cancellations & Refunds</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Cancellations made at least 24 hours before the scheduled pickup incur no charge.</li>
                <li>Late cancellations or failure to present waste for collection may attract a fee.</li>
                <li>Refunds, where applicable, will be processed according to our Refund Policy.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Data Protection & Privacy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We value your privacy. All data is handled in line with our Privacy Policy. We may collect:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Contact and address details for service delivery</li>
                <li>Payment transaction details (securely processed by third-party providers)</li>
                <li>Waste collection records for operational purposes</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed">
                All MyClean content, branding, and platform technology are our property. You may not copy or use them
                without permission.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Liability Disclaimer</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  While we take all reasonable measures to ensure reliable and professional service, MyClean shall not
                  be liable for indirect, incidental, or consequential losses.
                </li>
                <li>
                  Users are responsible for ensuring waste provided for collection complies with applicable laws and
                  safety guidelines.
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Termination</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to suspend or terminate accounts that breach these Terms or misuse our Services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You may request account closure at any time via{" "}
                <a href="mailto:support@mycleanapp.com" className="text-blue-600 hover:text-blue-800">
                  support@mycleanapp.com
                </a>
                .
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Changes to These Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update these Terms occasionally. Continued use after changes means you accept the updated Terms.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Governing Law & Disputes</h2>
              <p className="text-gray-700 leading-relaxed mb-4">These Terms are governed by the laws of Ghana.</p>
              <p className="text-gray-700 leading-relaxed">
                Disputes will be resolved through amicable negotiation or, if necessary, in the appropriate courts in
                Ghana.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">16. Contact Us</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  📧 Email:{" "}
                  <a href="mailto:support@mycleanapp.com" className="text-blue-600 hover:text-blue-800">
                    support@mycleanapp.com
                  </a>
                </p>
                {/* <p className="text-gray-700">📍 Address: [Insert Office Address]</p> */}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
