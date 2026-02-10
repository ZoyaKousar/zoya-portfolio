import ContactSection from '@/app/components/contactForm'
import React from 'react'

const webMobile = () => {
    return (
        <div >
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-6xl md:p-16 p-6 mt-32 md:mt-12 2xl:mt-32 mx-auto">
                {/* Left Side - Text Content */}
                <div className="flex-1 text-left">
                    <h1 className="text-4xl md:text-8xl font-bold text-white">Case Study</h1>
                    <h2 className=" text-3xl text-[#C961DE] font-bold md:text-4xl mb-1">
                        WEB & MOBILE APP        </h2>
                    <h3 className="text-3xl text-white font-bold md:text-5xl mb-1">DEVELOPMENT</h3>
                    <p className=" text-3xl text-white font-bold md:text-4xl mb-1">
                        EXPERTISE BY <span className='text-[#C961DE]'>KOU</span>                     </p>
                    <p className="text-gray-300 text-lg">
                        Boost engagement and automation with custom
                        web and mobile apps seamlessly integrated with
                        HubSpot’s CRM for real-time sync and smarter
                        workflows.        </p>
                </div>

                {/* Right Side - Image */}
                <div className="flex-1">
                    <img
                        src="/case1.png"
                        alt="Case Study Image"
                        className="rounded-lg h-[470px] md:mt-12 object-contain"
                    />
                </div>
            </div>
            {/* Development */}
            <div className="flex flex-col items-center justify-center gap-6 py-10 2xl:mt-20 px-6 md:px-16 md:py-16 max-w-[1220px] mx-auto">
                <h2 className="text-3xl text-white font-bold md:text-5xl mb-14">DEVELOPMENT & SETUP</h2>
                {/* Row with Two Boxes */}
                <div className="flex flex-col md:flex-row gap-6 w-full">
                    {/* Box 1 */}
                    <div className="flex-1 p-3 bg-[#2F2F8A] bg-opacity-60 border border-solid border-white border-opacity-10 backdrop-blur-md rounded-xl  shadow-lg">
                        <h2 className="text-2xl text-[#C961DE] text-center mt-2 font-bold mb-7">WordPress
                            Installation &
                            Hosting</h2>
                        <p className="text-white text-lg text-center mb-2">Installed
                            WordPress
                            on a
                            scalable hostingn
                            platform (AWS, Bluehost, or
                            SiteGround).</p>
                        <p className="text-white text-lg text-center">Selected a lightweight
                            theme
                            (e.g., Astra,
                            GeneratePress) for better
                            speed.</p>
                    </div>

                    {/* Box 2 */}
                    <div className="flex-1 p-3 bg-[#2F2F8A] bg-opacity-60 border border-solid border-white border-opacity-10 backdrop-blur-md rounded-2xl ">
                        <h2 className="text-2xl text-[#C961DE] text-center mt-2 font-bold mb-10">UI/UX
                            Page Design</h2>
                        <p className="text-white text-center text-lg mb-2">Used Elementor for a drag-and-drop page-buildingexperience.
                            Designed:</p>
                        <ul className="text-white text-lg list-disc text-center gap-2 list-inside">
                            <li>Homepage (product highlights & CTAs)</li>
                            <li>Product pages
                                (WooCommerce setup)</li>
                            <li>Checkout & Payment Integration
                                (Stripe/PayPal)</li>
                            <li>Contact & Lead Forms
                                (HubSpot integration)</li>
                        </ul>
                    </div>
                    <div className="flex-1.5 flex justify-center items-center">
                        <img
                            src="/case2.png"
                            alt="Case Study Image"
                            className="rounded-lg h-[322px] shadow-lg object-contain"
                        />
                    </div>

                </div>

                {/* Row with Image */}

            </div>
            {/* Hupspot */}
            <div className="flex flex-col items-center justify-center gap-6 px-6 md:px-16 py-10 md:py-16 max-w-4xl mx-auto">
                {/* Section Heading */}
                <h2 className="text-3xl md:text-5xl text-white font-bold text-center mb-10">HUBSPOT INTEGRATION</h2>

                {/* Three Horizontal Cards */}
                <div className="w-full flex flex-col gap-10">
                    {/* Card 1 */}
                    <div className="text-center p-6 bg-[#2F2F8A] bg-opacity-60 border border-solid border-white border-opacity-10 backdrop-blur-md rounded-xl">
                        <h3 className="text-2xl text-[#C961DE] font-bold mb-4">Installing HubSpot on WordPress</h3>
                        <p className="text-white mb-10 max-w-xl text-lg mx-auto">Installed HubSpot Plugin from the WordPress repository.
                            Connected the HubSpot API for CRM & form tracking.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="text-center p-6 bg-[#2F2F8A] bg-opacity-60 border border-solid border-white border-opacity-10 backdrop-blur-md rounded-xl">
                        <h3 className="text-2xl text-[#C961DE] font-bold mb-4">Automating Lead Capture</h3>
                        <p className="text-white max-w-xl text-lg mx-auto mb-10">Created lead forms for visitor data collection.
                            Enabled live chat using HubSpot’s chat widget.</p>
                    </div>

                    {/* Card 3 */}
                    <div className=" text-center p-6 bg-[#2F2F8A] bg-opacity-60 border border-solid border-white border-opacity-10 backdrop-blur-md rounded-xl">
                        <h3 className="text-2xl text-[#C961DE] font-bold mb-4">Syncing Leads to HubSpot CRM</h3>
                        <p className="text-white max-w-xl text-lg mx-auto mb-6">Qualified leads automatically Stored & Segmented.
                            Created Custom Deal Stages in HubSpot:</p>
                        <div className="flex justify-between items-center bg-[#3838B2] text-white text-sm font-bold py-2 px-3 mb-4 rounded-md max-w-lg mx-auto">
                            <span>NEW LEAD</span>
                            <span>ENGAGED LEAD</span>
                            <span>CONVERTED CUSTOMER</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Automation */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-10 py-10 px-6 md:p-16 max-w-6xl mx-auto text-white">
                {/* Left Side - Text Content */}
                <div className="flex-1 text-left max-w-sm">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Automation & Marketing</h2>

                    {/* Meeting Scheduling */}
                    <div className="mb-6">
                        <h3 className="text-xl md:text-2xl text-[#C961DE] font-bold mb-2">Meeting Scheduling</h3>
                        <p className="text-lg">Integrated HubSpot Meetings to let users book calls.</p>
                        <p className="text-lg">Set automatic follow-ups (email & SMS reminders).</p>
                    </div>

                    {/* Email & Newsletter Automation */}
                    <div>
                        <h3 className="text-xl md:text-2xl text-[#C961DE] font-bold mb-2">Email & Newsletter Automation</h3>
                        <p className="text-lg">Setup HubSpot Email Workflows for:</p>
                        <ul className="list-disc list-inside text-lg">
                            <li>Nurturing cold leads with content.</li>
                            <li>Quarterly newsletters to keep users engaged.</li>
                        </ul>
                    </div>
                </div>

                {/* Right Side - Image */}
                <div className="flex-1 flex justify-center">
                    <img
                        src="/case3.png"
                        alt="Automation & Marketing Illustration"
                        className="max-w-full h-auto md:h-[500px]"
                    />
                </div>
            </div>
            {/* Deployment */}
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-10 px-6 md:p-16 max-w-6xl mx-auto text-white">
                {/* Left Side - Image */}
                <div className="flex-1 flex justify-center">
                    <img
                        src="/case4.png"
                        alt="Deployment & Optimization Illustration"
                        className="max-w-full h-auto object-contain md:h-[550px]"
                    />
                </div>

                {/* Right Side - Text Content */}
                <div className="flex-1 text-left md:ml-14">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Deployment & Optimization</h2>

                    {/* SEO Optimization */}
                    <div className="mb-6">
                        <h3 className="text-xl md:text-2xl text-[#C961DE] font-bold mb-2">• SEO Optimization</h3>
                        <p className="text-lg">(Yoast SEO, Schema Markup).</p>
                    </div>

                    {/* Speed Optimization */}
                    <div className="mb-6">
                        <h3 className="text-xl md:text-2xl text-[#C961DE] font-bold mb-2">• Speed Optimization</h3>
                        <p className="text-lg">(CDN, Lazy Loading).</p>
                    </div>

                    {/* Performance Testing */}
                    <div>
                        <h3 className="text-xl md:text-2xl text-[#C961DE] font-bold mb-2">• Performance Testing</h3>
                        <p className="text-lg">(GTMetrix & PageSpeed Insights).</p>
                    </div>
                </div>
            </div>
            {/* JustVanilla */}
            <div className="flex flex-col items-center justify-center py-10 md:py-16 px-6 md:px-16 max-w-6xl mx-auto text-white">
                {/* Heading */}
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">JustVanilla Web App</h2>
                <h3 className="text-2xl md:text-3xl text-[#C961DE] font-semibold text-center mb-10">HubSpot Integration Flow</h3>
                <img
                    src="/case5.png"
                    alt="Deployment & Optimization Illustration"
                    className="max-w-full h-auto md:h-[386px]"
                />
            </div>
            {/* Amove Case Study Section */}
            <div>
                <img src="/vector-1.png" alt="Vector" className="absolute left-0 w-32 md:w-[450px]" />
                <div className="flex flex-row items-center justify-center md:mt-20 py-10 md:py-16  px-6 md:px-16 max-w-6xl mx-auto text-white">
                    <div className="flex-1 flex justify-center  z-10">
                        <img src="/case6.png" alt="Amove Mobile App" className="w-full h-[250px] md:h-[500px] 2xl:h-[681px] object-contain" />
                    </div>
                    <div className="flex-1 md:text-left mt-6 md:mt-0 z-10">
                        <h3 className="text-2xl md:text-3xl font-semibold text-white">Case Study 2:</h3>
                        <h2 className="text-2xl md:text-5xl font-bold text-[#C961DE]">Amove</h2>
                        <h3 className="text-2xl md:text-3xl font-semibold mb-4">(Mobile App)</h3>
                        <p className="text-lg text-gray-300"><span className="text-[#C961DE] font-semibold">Platform:</span> FlutterFlow - Firebase - HubSpot API</p>
                        <p className="text-lg text-gray-300"><span className="text-[#C961DE] font-semibold">Purpose:</span> Lead management & appointment scheduling.</p>
                    </div>
                </div>
            </div>
            {/* Development & Setup Section */}
            <div className="relative flex flex-col items-center justify-center 2xl:mt-20 px-6 md:px-16 md:py-10 py-10 max-w-4xl mx-auto text-white">
                <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-6">Development & Setup</h2>
                {/* Background Image */}
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/vector-2.png')" }}></div>
                <div className="relative gap-6 flex flex-col md:flex-row items-stretch justify-center md:space-x-10 w-full">
                    {/* Creating App in FlutterFlow */}
                    <div className="bg-[#2F2F8A] p-6 bg-opacity-60 border border-white border-opacity-10 backdrop-blur-md rounded-xl w-full md:w-1/3 flex flex-col">
                        <h3 className="text-xl md:text-2xl font-bold text-[#C961DE] text-center mb-4">Creating the App in FlutterFlow</h3>
                        <ul className="list-disc text-white pl-6 space-y-2 flex-1">
                            <li>Created a new project in FlutterFlow.</li>
                            <li>Designed key pages:</li>
                            <li>Signup/Login Page (Google authentication).</li>
                            <li>Dashboard (displays available meetings).</li>
                            <li>Appointment Booking (form integrated with HubSpot).</li>
                            <li>Profile Page (user preferences).</li>
                        </ul>
                    </div>

                    {/* Backend & Database */}
                    <div className="bg-[#2F2F8A] p-6 bg-opacity-60 border border-white border-opacity-10 backdrop-blur-md rounded-xl w-full md:w-1/3 flex flex-col">
                        <h3 className="text-xl md:text-2xl font-bold text-[#C961DE] text-center mb-4">Backend & Database</h3>
                        <ul className="list-disc text-white pl-6 space-y-2 flex-1">
                            <li>Connected Firebase for storing user data.</li>
                            <li>Enabled Firestore database to sync booking information.</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Hupspot */}
            <div className="flex flex-col items-center justify-center gap-6 px-6 md:px-16 py-10 md:py-16 max-w-4xl mx-auto">
                {/* Section Heading */}
                <h2 className="text-3xl md:text-5xl text-white font-bold text-center mb-10">HUBSPOT INTEGRATION</h2>

                {/* Three Horizontal Cards */}
                <div className="w-full flex flex-col gap-10">
                    {/* Card 1 */}
                    <div className="text-center p-6 bg-[#2F2F8A] bg-opacity-60 border border-solid border-white border-opacity-10 backdrop-blur-md rounded-xl">
                        <h3 className="text-2xl text-[#C961DE] font-bold mb-4">Syncing User Data</h3>
                        <p className="text-white mb-10 max-w-xl text-lg mx-auto">Enabled API Calls to sync signups with HubSpot CRM.
                            Created HubSpot Lead Segmentation to qualify users.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="text-center p-6 bg-[#2F2F8A] bg-opacity-60 border border-solid border-white border-opacity-10 backdrop-blur-md rounded-xl">
                        <h3 className="text-2xl text-[#C961DE] font-bold mb-4">Automating Appointments</h3>
                        <ul className="text-white text-lg list-disc text-center gap-2 list-inside">
                            <li>Integrated HubSpot Meetings API to auto-schedule appointments.</li>
                            <li>Created HubSpot workflows for:
                                <li>Push notifications (new meeting booked).</li>
                                <li>Email & SMS reminders (24h, 1h, 15min before the meeting).</li>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Automation */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-10 p-6 md:p-16 max-w-6xl mx-auto text-white">
                {/* Left Side - Text Content */}
                <div className="flex-1 text-left max-w-sm">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Automation & Deployment</h2>

                    {/* Meeting Scheduling */}
                    <div className="mb-6">
                        <h3 className="text-xl md:text-2xl text-[#C961DE] font-bold mb-2">Follow-Up System</h3>
                        <p className="text-lg">Post-meeting automation: HubSpot triggers follow-up emails.</p>
                        <p className="text-lg">Re-engagement campaigns: Reminds users to book again.</p>
                    </div>

                    {/* Email & Newsletter Automation */}
                    <div>
                        <h3 className="text-xl md:text-2xl text-[#C961DE] font-bold mb-2">Publishing the App</h3>
                        <p className="text-lg">Tested in FlutterFlow with real API calls.</p>
                        <p className="text-lg">Deployed on Google Play Store & Apple App Store.</p>

                    </div>
                </div>

                {/* Right Side - Image */}
                <div className="flex-1 flex justify-center">
                    <img
                        src="/case3.png"
                        alt="Automation & Marketing Illustration"
                        className="max-w-full h-auto"
                    />
                </div>
            </div>
            {/* JustVanilla */}
            <section className='p-6 md:p-16'>
                <div className="p-3 md:p-12 bg-[#2F2F8A] bg-opacity-60 border border-solid border-white border-opacity-10 backdrop-blur-md rounded-xl max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-6xl font-bold text-white text-center mb-4">
                        Final Summary:
                    </h2>
                    <h3 className="text-2xl md:text-4xl font-bold text-center mb-6 text-[#C961DE]"> JustVanilla & Amove Case Studies</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* JustVanilla Card */}
                        <div className="bg-[#3D3D7E] text-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl md:text-2xl font-bold text-[#C961DE] mb-2">JustVanilla (Web App)</h3>
                            <p className="text-lg">Platform: WordPress + WooCommerce + HubSpot</p>
                            <h4 className="text-lg font-bold mt-3">Steps:</h4>
                            <ul className="list-disc list-inside text-lg space-y-1">
                                <li>Built using WordPress + Elementor for e-commerce.</li>
                                <li>HubSpot Plugin used for lead forms, live chat, and CRM sync.</li>
                                <li>Leads qualified & stored in HubSpot → Meetings auto-scheduled.</li>
                                <li>Email/SMS reminders sent + quarterly newsletters for engagement.</li>
                            </ul>
                            <h4 className="text-lg font-bold mt-5">Optimized HubSpot Flow:</h4>
                            <p className="text-lg">
                                Visitors fill forms → Leads qualified → CRM storage → Meetings auto-scheduled → Reminders sent → Conversions tracked.
                            </p>
                        </div>

                        {/* Amove Card */}
                        <div className="bg-[#3D3D7E] text-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl md:text-2xl font-bold text-[#C961DE] mb-2">Amove (Mobile App)</h3>
                            <p className="text-lg">Platform: FlutterFlow + Firebase + HubSpot API</p>
                            <h4 className="text-lg font-bold mt-3">Steps:</h4>
                            <ul className="list-disc list-inside text-lg space-y-1">
                                <li>Designed in FlutterFlow with Firebase as backend.</li>
                                <li>User data synced to HubSpot → Leads segmented & meetings auto-scheduled.</li>
                                <li>Push notifications & email/SMS reminders triggered.</li>
                                <li>Follow-up emails & re-engagement workflows automated.</li>
                            </ul>
                            <h4 className="text-lg font-bold mt-5">Optimized HubSpot Flow:</h4>
                            <p className="text-lg">
                                User signs up → Data syncs to HubSpot → Lead qualification → Auto-meeting scheduling →
                                Push/email reminders → Follow-up emails.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Amove Mobile App */}
            <section className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto px-6 md:px-16 py-10 md:py-12">
                {/* Left Side: Headings */}
                <div className="md:w-4/12 w-full text-left">
                    <h2 className="text-3xl md:text-6xl font-bold text-white">
                        Amove
                        Mobile
                        App                    </h2>
                    <h3 className="text-xl md:text-6xl font-semibold text-[#C961DE] mt-2">
                        HubSpot Integration Flow
                    </h3>
                </div>

                {/* Right Side: Image (Takes More Space) */}
                <div className="md:w-7/12 w-full mt-6 md:mt-0">
                    <img
                        src="/case-6.png"
                        alt="Case Study Preview"
                        className="w-full h-auto md:h-[500px] object-contain"
                    />
                </div>
            </section>
            <div className='flex justify-center px-6'>
                <ContactSection />
            </div>

        </div>
    )
}

export default webMobile